import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { TikiButton } from "@/components/ui/tiki-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, MapPinned, MessageSquareText, Phone, Send, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { business, cateringPackages } from "@/lib/business";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  packageInterest: "",
  eventDate: "",
  guestCount: "",
  location: "",
  notes: "",
};

const guestCounts = ["Less than 40", "40-80", "80-150", "150-250", "250-500", "500+"];

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const packageParam = searchParams.get("package");

    if (packageParam) {
      setFormData((prev) => ({
        ...prev,
        packageInterest: packageParam,
        notes:
          !prev.notes || prev.notes.startsWith("I'm interested in the ")
            ? `I'm interested in the ${packageParam}.`
            : prev.notes,
      }));
    }
  }, [location.search]);

  useEffect(() => {
    if (location.hash !== "#contact") {
      return;
    }

    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [location.hash]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof typeof initialFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildLeadSummary = () => {
    return [
      "Snoasis catering request",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Package: ${formData.packageInterest || "Not sure yet"}`,
      `Date: ${formData.eventDate}`,
      `Guests: ${formData.guestCount}`,
      `Location: ${formData.location}`,
      "",
      "Notes:",
      formData.notes || "Not provided",
    ].join("\n");
  };

  const buildSmsHref = () => {
    const encodedSummary = encodeURIComponent(buildLeadSummary());
    const separator = /iPad|iPhone|iPod/i.test(window.navigator.userAgent) ? "&" : "?";

    return `${business.smsHref}${separator}body=${encodedSummary}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.eventDate || !formData.guestCount || !formData.location) {
      toast({
        title: "Missing event details",
        description: "Please include your name, phone, event date, guest count, and event location.",
        variant: "destructive",
      });
      return;
    }

    window.location.href = buildSmsHref();
    toast({
      title: "Opening your text app",
      description: "The catering request is prefilled. Tap send to deliver it.",
      variant: "default",
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-t from-tiki-light to-white py-12 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="bg-tiki-dark p-5 text-white md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-tiki-yellow">Catering Request</p>
              <h2 className="mt-2 text-3xl font-black">Send the basics</h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                The form opens a prefilled text message. Review it, tap send, and the request lands in the right place.
              </p>

              <div className="mt-6 grid gap-3 text-sm">
                <a
                  href={business.smsHref}
                  className="inline-flex items-center gap-3 rounded-md bg-white/10 px-3 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  <MessageSquareText className="h-4 w-4 text-tiki-yellow" />
                  Text {business.phone}
                </a>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-3 rounded-md bg-white/10 px-3 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  <Phone className="h-4 w-4 text-tiki-blue" />
                  Call {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="inline-flex items-center gap-3 rounded-md bg-white/10 px-3 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  <Mail className="h-4 w-4 text-tiki-green" />
                  {business.email}
                </a>
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-md bg-white/10 px-3 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  <MapPinned className="h-4 w-4 text-tiki-pink" />
                  Directions
                </a>
              </div>
            </aside>

            <div className="p-5 md:p-6">
              <h3 className="text-2xl font-black text-tiki-dark">Event Details</h3>
              <p className="mt-1 text-sm text-gray-600">Required fields are marked with an asterisk.</p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                      Your Name*
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                      Phone Number*
                    </label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="packageInterest" className="mb-1 block text-sm font-medium text-gray-700">
                      Package Interest
                    </label>
                    <Select value={formData.packageInterest} onValueChange={(value) => handleSelectChange("packageInterest", value)}>
                      <SelectTrigger id="packageInterest">
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        {cateringPackages.map((pkg) => (
                          <SelectItem key={pkg.name} value={pkg.name}>
                            {pkg.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="mb-1 block text-sm font-medium text-gray-700">
                      Event Date*
                    </label>
                    <div className="relative">
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        onInput={handleInput}
                        required
                      />
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="guestCount" className="mb-1 block text-sm font-medium text-gray-700">
                      Guest Count*
                    </label>
                    <div className="relative">
                      <Select value={formData.guestCount} onValueChange={(value) => handleSelectChange("guestCount", value)} required>
                        <SelectTrigger id="guestCount">
                          <SelectValue placeholder="Expected guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {guestCounts.map((count) => (
                            <SelectItem key={count} value={count}>
                              {count}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="pointer-events-none absolute right-9 top-1/2 -translate-y-1/2">
                        <Users className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="mb-1 block text-sm font-medium text-gray-700">
                      Event Location*
                    </label>
                    <div className="relative">
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Venue or city"
                        className="pl-9"
                        required
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <MapPinned className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="mb-1 block text-sm font-medium text-gray-700">
                    Notes
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Start time, power access, indoor/outdoor, school or team name, or questions."
                  />
                </div>

                <TikiButton type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-5 w-5" />
                  Text Catering Request
                </TikiButton>

                <p className="text-center text-sm text-gray-500">
                  On mobile, this opens a prefilled text. Review it and tap send.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
