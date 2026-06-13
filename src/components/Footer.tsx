import { business } from "@/lib/business";
import { Facebook, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tiki-dark pb-8 pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img
              src="/brand/snoasis-logo-wide-transparent.png"
              alt="Snoasis world's greatest shaved ice"
              className="mb-4 h-auto w-48 drop-shadow-lg"
            />
            <h3 className="mb-4 text-xl font-bold text-tiki-blue">{business.name}</h3>
            <p className="mb-6 text-gray-300">
              Shaved ice at {business.address}
              <br />
              Catering for events across {business.serviceArea}.
            </p>
            <div className="flex space-x-4">
              <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 transition-colors hover:text-tiki-blue" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 transition-colors hover:text-tiki-blue" aria-label="Directions">
                <MapPinned className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-300 transition-colors hover:text-tiki-blue">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 transition-colors hover:text-tiki-blue">Flavor Menu</Link>
              </li>
              <li>
                <Link to="/catering" className="text-gray-300 transition-colors hover:text-tiki-blue">Catering Services</Link>
              </li>
              <li>
                <Link to="/catering#contact" className="text-gray-300 transition-colors hover:text-tiki-blue">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Catering Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Mobile Shave Ice Catering</li>
              <li>
                <a href={`mailto:${business.email}`} className="text-gray-300 transition-colors hover:text-tiki-blue">
                  {business.email}
                </a>
              </li>
              <li>
                <a href={business.phoneHref} className="text-gray-300 transition-colors hover:text-tiki-blue">
                  {business.phone}
                </a>
              </li>
              <li className="text-gray-300">{business.hoursNote}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-sm text-gray-400 md:mb-0">
              <p>&copy; 2026 {business.name}. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-tiki-blue">
                Directions
              </a>
              <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-tiki-blue">
                Latest Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
