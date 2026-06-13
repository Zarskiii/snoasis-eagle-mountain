import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, CalendarDays, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "@/lib/business";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 border-b border-white/70 bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${business.name} home`}>
            <img
              src="/brand/snoasis-mark.png"
              alt=""
              className="h-12 w-12 shrink-0 rounded-full bg-white shadow-sm"
              aria-hidden="true"
            />
            <div className="min-w-[10rem] leading-tight">
              <p className="whitespace-nowrap text-lg font-black text-tiki-dark">{business.shortName}</p>
              <p className="whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-tiki-blue sm:text-xs sm:tracking-[0.08em]">
                Eagle Mountain
              </p>
            </div>
          </Link>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle navigation">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          <div className="hidden items-center space-x-7 md:flex">
            <Link to="/#about" className="font-medium text-tiki-dark hover:text-tiki-blue">About</Link>
            <Link to="/menu" className="font-medium text-tiki-dark hover:text-tiki-blue">Menu</Link>
            <Link to="/reviews" className="font-medium text-tiki-dark hover:text-tiki-blue">Reviews</Link>
            <Link to="/jobs">
              <Button variant="outline" className="gap-2 rounded-md border-tiki-blue text-tiki-dark hover:bg-tiki-blue hover:text-white">
                <BriefcaseBusiness className="h-4 w-4" />
                Work Here
              </Button>
            </Link>
            <Link to="/catering?package=Custom%20Bid#contact">
              <Button className="request-catering-button gap-2 rounded-md bg-tiki-pink text-white hover:bg-tiki-pink/90">
                <CalendarDays className="h-4 w-4" />
                Request Catering
              </Button>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="bg-white py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/#about" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/menu" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/reviews" 
                className="font-medium text-tiki-dark hover:text-tiki-blue py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link to="/jobs" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="mx-4 gap-2 rounded-md border-tiki-blue text-tiki-dark hover:bg-tiki-blue hover:text-white">
                  <BriefcaseBusiness className="h-4 w-4" />
                  Work Here
                </Button>
              </Link>
              <Link to="/catering?package=Custom%20Bid#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="request-catering-button mx-4 gap-2 rounded-md bg-tiki-pink text-white hover:bg-tiki-pink/90">
                  <CalendarDays className="h-4 w-4" />
                  Request Catering
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
