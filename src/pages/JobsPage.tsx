import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { business } from "@/lib/business";
import { BriefcaseBusiness, Mail, Paperclip, Send } from "lucide-react";

const JobsPage = () => {
  const [resumeName, setResumeName] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    availability: "",
    experience: "",
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!resumeName) {
      setResumeError("Please choose your resume before opening the email.");
      return;
    }

    setResumeError("");

    const subject = `Snoasis job application - ${form.name}`;
    const body = [
      "Snoasis Eagle Mountain job application",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Availability: ${form.availability}`,
      "",
      "Experience / why they would be a good fit:",
      form.experience,
      "",
      `Resume selected: ${resumeName}`,
      "",
      "Please attach the selected resume before sending this email.",
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-white pb-12 pt-28 md:pt-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-tiki-blue">Join the Snoasis team</p>
              <h1 className="mb-4 text-4xl font-black text-tiki-dark md:text-5xl">Apply to work at the shave ice shack</h1>
              <p className="mx-auto max-w-2xl text-gray-700">
                Send Chase the basics, then attach your resume in the email before sending.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-lg bg-tiki-dark p-6 text-white shadow-lg">
                <BriefcaseBusiness className="mb-4 h-9 w-9 text-tiki-yellow" />
                <h2 className="mb-3 text-2xl font-black">Seasonal, local, customer-facing work</h2>
                <p className="text-white/85">
                  Snoasis is a busy summer stop, so friendly energy, reliability, and comfort helping customers matter.
                </p>
                <div className="mt-6 rounded-lg border border-white/15 bg-white/10 p-4">
                  <div className="flex items-center gap-2 font-bold">
                    <Mail className="h-4 w-4 text-tiki-yellow" />
                    Sends to Chase
                  </div>
                  <p className="mt-2 text-sm text-white/80">{business.email}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="rounded-lg bg-white p-5 shadow-lg ring-1 ring-tiki-blue/10 md:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-tiki-dark">Name</span>
                    <Input value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-tiki-dark">Phone</span>
                    <Input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} required />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-tiki-dark">Email</span>
                    <Input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} required />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-tiki-dark">Availability</span>
                    <Input
                      value={form.availability}
                      onChange={(event) => updateField("availability", event.target.value)}
                      placeholder="Weekdays, weekends, evenings..."
                      required
                    />
                  </label>
                </div>

                <label className="mt-4 block space-y-2">
                  <span className="text-sm font-bold text-tiki-dark">Experience or why you would be a good fit</span>
                  <Textarea
                    value={form.experience}
                    onChange={(event) => updateField("experience", event.target.value)}
                    className="min-h-28"
                    required
                  />
                </label>

                <label className="mt-4 block rounded-lg border border-dashed border-tiki-blue/40 bg-tiki-blue/5 p-4">
                  <span className="flex items-center gap-2 text-sm font-bold text-tiki-dark">
                    <Paperclip className="h-4 w-4 text-tiki-blue" />
                    Resume
                  </span>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="mt-3 bg-white"
                    onChange={(event) => {
                      setResumeName(event.target.files?.[0]?.name || "");
                      setResumeError("");
                    }}
                    required
                  />
                  <p className="mt-2 text-xs text-gray-600">
                    After your email opens, attach this resume file before sending.
                  </p>
                  {resumeError && <p className="mt-2 text-sm font-semibold text-tiki-pink">{resumeError}</p>}
                </label>

                <Button type="submit" className="mt-5 w-full gap-2 rounded-md bg-tiki-pink text-white hover:bg-tiki-pink/90">
                  <Send className="h-4 w-4" />
                  Open Email to Apply
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JobsPage;
