import { TikiButton } from "@/components/ui/tiki-button";
import { business } from "@/lib/business";
import { MapPin, MessageSquareText, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 text-white md:min-h-[620px]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/o (1).jpg"
          alt="Snoasis shaved ice with cream"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tiki-dark/90 via-tiki-dark/68 to-tiki-dark/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-10 pt-10 sm:pb-12 sm:pt-12 md:pb-16 md:pt-16">
        <div className="max-w-3xl">
          <h1 className="mb-5 max-w-3xl text-5xl font-black leading-[0.98] sm:text-6xl md:text-7xl">
            <span className="block">Snoasis</span>
            <span className="block">Eagle Mountain</span>
            <span className="mt-4 block text-4xl text-tiki-yellow sm:text-5xl md:text-6xl">
              Premium Shaved Ice <span className="whitespace-nowrap">&amp; Catering</span>
            </span>
          </h1>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/catering">
              <TikiButton size="lg" className="w-full gap-2 bg-tiki-pink text-base hover:bg-tiki-pink/90 sm:w-auto">
                <MessageSquareText className="h-5 w-5" />
                Catering
              </TikiButton>
            </Link>
            <Link to="/menu">
              <TikiButton size="lg" variant="outline" className="w-full border-white bg-white/10 text-base text-white hover:bg-white hover:text-tiki-dark sm:w-auto">
                View Menu
              </TikiButton>
            </Link>
            <TikiButton asChild size="lg" variant="secondary" className="w-full gap-2 text-base sm:w-auto">
              <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-5 w-5" />
                Directions
              </a>
            </TikiButton>
          </div>

          <div className="mt-5 inline-flex items-start gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-2 text-sm font-semibold leading-6 backdrop-blur sm:text-base">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tiki-yellow" />
            {business.address}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
