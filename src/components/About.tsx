import { business } from "@/lib/business";
import { ExternalLink, Facebook } from "lucide-react";

const About = () => {
  const facebookPostEmbedUrl = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
    business.facebookPostUrl,
  )}&show_text=true&width=500`;

  return (
    <section id="about" className="bg-white py-12 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="mx-auto max-w-xl overflow-hidden rounded-lg shadow-xl ring-1 ring-tiki-blue/10 lg:max-w-none">
              <img
                src="/brand/snoasis-bright-logo-wide.png"
                alt="Snoasis world's greatest shaved ice logo"
                className="aspect-[765/264] w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-tiki-dark">A community treat</h3>
            <p className="mb-6 text-gray-700">
              {business.shortName} has been part of Eagle Mountain summers for years. The stand keeps the
              nostalgic stop alive while making it easier for families, schools, teams, and local businesses
              to bring the same treat to their own events.
            </p>

            <div className="overflow-hidden rounded-lg border border-[#1877F2]/20 bg-[#1877F2]/5 shadow-md">
              <div className="flex items-center justify-between gap-3 border-b border-[#1877F2]/10 bg-white px-4 py-3">
                <div className="flex items-center gap-2 font-bold text-tiki-dark">
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                  Latest Facebook Update
                </div>
                <a
                  href={business.facebookPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#1877F2] hover:underline"
                >
                  Open
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="flex justify-center bg-white p-3">
                <iframe
                  src={facebookPostEmbedUrl}
                  title="Latest Snoasis Facebook post"
                  width="500"
                  height="560"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media; clipboard-write; web-share"
                  className="w-full max-w-[500px] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
