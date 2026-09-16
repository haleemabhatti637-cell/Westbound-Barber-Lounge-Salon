import React from 'react';
import { BarberLogo } from './BarberLogo';
import { Instagram, Phone, MapPin, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenExport?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenExport }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E0E0E] text-neutral-400 border-t border-[#222222] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#222222]">
          {/* Brand Info (Span 4) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <BarberLogo size="lg" showText={true} />
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-light max-w-sm">
              Stockbridge’s upscale grooming sanctuary. Precision skin fades, royal hot towel lather shaves, master beard sculpting, and executive after-hours cuts in a luxury vintage lounge.
            </p>

            {/* Social Follow */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/westboundbarberloungellc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#DC2626] text-white px-3.5 py-2 rounded-lg text-xs font-semibold border border-[#333333] transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
                <span>@westboundbarberloungellc</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Barber Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Pricing Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Lounge Amenities
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Precision Portfolio
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Popular Grooming
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex justify-between">
                <span className="text-neutral-300">Westbound Signature Fade</span>
                <span className="text-[#D97706] font-bold">$35.00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-300">The Royal Hot Towel Shave</span>
                <span className="text-[#D97706] font-bold">$35.00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-300">Cut & Full Beard Sculpt Combo</span>
                <span className="text-[#D97706] font-bold">$55.00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-300">Young Gentleman's Cut</span>
                <span className="text-[#D97706] font-bold">$22.00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-300">After-Hours VIP Session</span>
                <span className="text-[#D97706] font-bold">$65.00</span>
              </li>
            </ul>
          </div>

          {/* Location & Appointment (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Stockbridge Lounge
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  4340 N Henry Blvd, Suite 240<br />
                  Stockbridge, GA 30281
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="text-neutral-300">Mon - Sat: 9:00 AM – 6:00 PM</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:6785652887" className="text-white hover:text-[#D97706] font-bold">
                  (678) 565-2887
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full gold-gradient gold-gradient-hover text-[#121212] font-heading font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg shadow-md transition-transform active:scale-95"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Westbound Barber Lounge LLC. All Rights Reserved.</span>
            <span className="hidden md:inline">• Stockbridge, Georgia</span>
          </div>

          <div className="flex items-center gap-4">
            {onOpenExport && (
              <button
                onClick={onOpenExport}
                className="text-neutral-400 hover:text-white transition-colors underline"
              >
                Single HTML File Code
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1C1C1C] hover:bg-[#262626] text-neutral-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
