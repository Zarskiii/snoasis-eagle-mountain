import { useEffect, useState } from "react";
import { TikiButton } from "@/components/ui/tiki-button";
import { business, publicReviewHighlights, reviewStats } from "@/lib/business";
import { ExternalLink, Facebook, MapPinned, MessageSquare, Star } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % publicReviewHighlights.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="reviews" className="bg-gradient-to-r from-tiki-blue/10 to-tiki-green/10 py-12 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-black text-tiki-dark md:text-5xl">
            Snoasis <span className="text-tiki-blue">Reviews</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-700 md:text-base">
            Public review themes point to glacier add-ons, friendly service, and a nostalgic local stop.
          </p>
        </div>

        <div className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-5 md:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-tiki-blue">Review snapshot</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-5xl font-black leading-none text-tiki-dark">{reviewStats.rating}</p>
                <div>
                  <div className="flex">
                    {[...Array(4)].map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                    <Star className="h-5 w-5 fill-yellow-500/50 text-yellow-500/50" />
                  </div>
                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    from {reviewStats.count} {reviewStats.source}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                Frequent mentions of cream add-ons and friendly service.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <TikiButton asChild variant="outline" size="sm" className="gap-2">
                  <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">
                    <MapPinned className="h-4 w-4" />
                    Google Profile
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </TikiButton>
                <TikiButton asChild variant="outline" size="sm" className="gap-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white">
                  <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    Facebook
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </TikiButton>
                <TikiButton asChild variant="outline" size="sm" className="gap-2 border-[#D32323] text-[#D32323] hover:bg-[#D32323] hover:text-white">
                  <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4" />
                    Yelp
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </TikiButton>
              </div>
            </div>

            <div className="border-t border-gray-100 bg-white/70 p-5 md:p-6 lg:border-l lg:border-t-0">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {publicReviewHighlights.map((review) => (
                    <article key={review.name} className="min-w-full">
                      <div className="mb-3 flex">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-tiki-blue">{review.source}</p>
                      <p className="mt-2 text-2xl font-black text-tiki-dark">"{review.quote}"</p>
                      <p className="mt-4 text-sm font-bold text-gray-500">{review.name}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">
                  {activeIndex + 1} of {publicReviewHighlights.length}
                </p>
                <div className="flex gap-2">
                  {publicReviewHighlights.map((review, index) => (
                    <button
                      key={review.name}
                      type="button"
                      className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-tiki-blue" : "w-2.5 bg-tiki-blue/25"}`}
                      aria-label={`Show review from ${review.name}`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-6xl overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.991921903713!2d-111.9773749239917!3d40.361770371448614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d7d04b2c53a3d%3A0xd66a5d292443c9b0!2sSnoasis!5e1!3m2!1sen!2sus!4v1747009480175!5m2!1sen!2sus"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={business.name}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
