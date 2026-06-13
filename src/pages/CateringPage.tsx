import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { TikiButton } from "@/components/ui/tiki-button";
import { cateringPackages } from "@/lib/business";
import { MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

const CateringPage = () => {
  const createPackageLink = (packageName: string) => `/catering?package=${encodeURIComponent(packageName)}#contact`;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-white pb-10 pt-28 md:pt-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-tiki-blue">Snoasis Catering</p>
              <h1 className="mb-3 text-4xl font-black text-tiki-dark md:text-5xl">
                Simple shaved ice for local events
              </h1>
              <p className="mx-auto max-w-2xl text-gray-700">
                Pick a starting point, send the basics, and Chase can follow up with a practical bid by text.
              </p>
              <Link to="/catering?package=Custom%20Bid#contact" className="mt-5 inline-flex">
                <TikiButton size="lg" className="gap-2">
                  <MessageSquareText className="h-5 w-5" />
                  Start a Bid
                </TikiButton>
              </Link>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {cateringPackages.map((pkg, index) => (
                <Link
                  key={pkg.name}
                  to={createPackageLink(pkg.name)}
                  className={`rounded-lg border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                    pkg.featured ? "border-tiki-blue ring-1 ring-tiki-blue/30" : "border-gray-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-black text-tiki-dark">{pkg.name}</h2>
                    {pkg.featured && (
                      <span className="rounded-full bg-tiki-blue px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-white">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-tiki-blue">{pkg.servings}</p>
                  <p className="mt-2 text-sm leading-5 text-gray-700">{pkg.lead}</p>
                  <p className="mt-4 text-sm font-bold text-tiki-pink">
                    {index === cateringPackages.length - 1 ? "Request custom bid" : "Choose package"}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default CateringPage;
