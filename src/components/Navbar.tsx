import React, { useState, useEffect } from 'react';
import { BarberLogo } from './BarberLogo';
import { TrustBadge } from './TrustBadge';
import { Calendar, Phone, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Lounge Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <>
      {/* Top Banner with operating status & notice */}
      <div className="bg-[#121212] border-b border-[#262626] text-[12px] text-neutral-300 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open Today: 9:00 AM – 6:00 PM
            </span>
            <span className="hidden sm:inline text-neutral-500">•</span>
            <span className="hidden sm:flex items-center gap-1 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
              Stockbridge, GA
            </span>
            <span className="hidden md:inline text-neutral-500">•</span>
            <span className="hidden md:inline text-[#D97706] font-medium">
              ✂️ Walk-Ins Welcomed • Late Appointments by Request
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto">
            <a
              href="tel:6785652887"
              className="flex items-center gap-1.5 text-white hover:text-[#D97706] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>(678) 565-2887</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#262626] shadow-xl py-2.5'
            : 'bg-[#121212] border-b border-[#262626]/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Trust Badge (as seen on left in screenshot) */}
          <TrustBadge variant="full" />

          {/* Center Brand Logo (Desktop) / Left on Mobile */}
          <a href="#hero" className="flex items-center group">
            <BarberLogo size="md" showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wider uppercase text-neutral-300 hover:text-white hover:border-b-2 hover:border-[#DC2626] transition-all pb-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="gold-gradient gold-gradient-hover text-[#121212] font-heading font-bold text-sm tracking-wider uppercase px-5 py-2.5 rounded-md shadow-lg shadow-[#D97706]/25 hover:shadow-[#D97706]/40 transition-all duration-200 flex items-center gap-2 transform active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#121212]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="gold-gradient text-[#121212] font-bold text-xs px-3 py-2 rounded font-heading uppercase"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-[#222222] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#181818] border-b border-[#2A2A2A] px-5 py-5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold tracking-wide uppercase text-neutral-200 hover:text-[#DC2626] transition-colors py-1.5 border-b border-[#222222]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full gold-gradient text-[#121212] font-heading font-bold text-sm tracking-wider uppercase py-3 rounded-md flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:6785652887"
                className="w-full bg-[#262626] hover:bg-[#333333] text-white font-semibold text-xs py-2.5 rounded-md flex items-center justify-center gap-2 border border-[#3A3A3A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D97706]" />
                <span>Call Shop: (678) 565-2887</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
