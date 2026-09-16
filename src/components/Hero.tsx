import React from 'react';
import { Scissors, Flame, Star, Sparkles, ChevronRight, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative bg-[#121212] overflow-hidden pt-6 pb-16 lg:py-20 border-b border-[#262626]">
      {/* Ambient background styling with red neon light tube effect and radial warmth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Decorative vertical red neon light bars (as seen in screenshot) */}
      <div className="hidden lg:block absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-transparent via-[#DC2626] to-transparent opacity-50 shadow-[0_0_12px_#DC2626]"></div>
      <div className="hidden lg:block absolute right-8 top-16 bottom-16 w-1 bg-gradient-to-b from-transparent via-[#DC2626] to-transparent opacity-50 shadow-[0_0_12px_#DC2626]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Status badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DC2626]/15 border border-[#DC2626]/40 text-red-300">
            <Scissors className="w-3.5 h-3.5 text-[#DC2626]" />
            Walk-Ins Welcomed Daily
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/40 text-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            New Ownership & Renovations
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#1E1E1E] border border-neutral-700 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Stockbridge, GA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-300 uppercase mb-2">
              PRECISION CUTS. VIP LOUNGE VIBES.
            </h2>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-3 leading-[1.08]">
              WESTBOUND BARBER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] via-red-500 to-[#D97706] text-glow-red">
                LOUNGE & SALON
              </span>
            </h1>

            <p className="font-heading text-lg sm:text-xl font-bold tracking-widest text-[#D97706] uppercase mb-4">
              MASTER CUTS. BEARD SCULPTS. LUXURY GROOMING.
            </p>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-5 font-light">
              Stockbridge’s premier barbershop & salon. Under new ownership—accepting new clients, walk-ins, and late appointments. Experience surgical line-ups, relaxing hot lather steam shaves, and upscale lounge comfort.
            </p>

            {/* Feature Highlights Bar (from screenshot) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-neutral-400 border-y border-[#262626] py-3 mb-8">
              <span className="text-white font-medium">After-Hours Cuts Available</span>
              <span className="text-neutral-600">•</span>
              <span className="text-white font-medium">Experienced Master Barbers</span>
              <span className="text-neutral-600">•</span>
              <span className="text-white font-medium">Kids' Cuts</span>
              <span className="text-neutral-600">•</span>
              <span className="text-white font-medium">VIP Service</span>
              <span className="text-neutral-600">•</span>
              <span className="text-white font-medium">Mobile House Calls</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenBooking}
                className="gold-gradient gold-gradient-hover text-[#121212] font-heading font-bold text-base uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-xl shadow-amber-900/30 flex items-center gap-2 transform active:scale-95 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Cut</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="crimson-gradient crimson-gradient-hover text-white font-heading font-bold text-base uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-xl shadow-red-950/40 flex items-center gap-2 transition-all border border-red-500/30"
              >
                <span>View Services</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Instant Trust Micro-Bar */}
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-[#222222]/80">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">5.0 Star Rated</span>
                <span className="text-xs text-neutral-400">(Google & Walk-Ins)</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Clean & Sanitized Equipment Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Image Barber Masterpieces Collage (matching screenshot) */}
          <div className="lg:col-span-5 relative">
            {/* Red neon border backdrop glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#DC2626]/40 via-transparent to-[#D97706]/30 blur-lg"></div>

            <div className="relative bg-[#1A1A1A] border border-[#2F2F2F] rounded-2xl p-3 sm:p-4 shadow-2xl">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Image 1: Precision Skin Fade with Razor Part */}
                <div className="relative group overflow-hidden rounded-xl border border-red-600/40 shadow-md aspect-[4/5] col-span-1">
                  <img
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80"
                    alt="Precision Skin Fade & Razor Lineup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]">Master Fade</span>
                    <span className="text-xs font-semibold text-white">Razor Sharp Temples</span>
                  </div>
                </div>

                {/* Image 2: Hot Lather Shave Experience */}
                <div className="relative group overflow-hidden rounded-xl border border-red-600/40 shadow-md aspect-[4/5] col-span-1">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
                    alt="Straight Razor Royal Shave with Hot Lather"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Royal Shave</span>
                    <span className="text-xs font-semibold text-white">Hot Steam Lather</span>
                  </div>
                </div>

                {/* Image 3: Beard Lineup and Taper (spans 2 columns on bottom) */}
                <div className="relative group overflow-hidden rounded-xl border border-amber-600/40 shadow-md aspect-[16/9] col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80"
                    alt="Beard Sculpt and Luxury Lounge Finish"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end justify-between p-3.5">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">Beard Detailing</span>
                      <p className="text-xs sm:text-sm font-semibold text-white">Flawless Razor Edge & Moisture Treatment</p>
                    </div>
                    <span className="text-[10px] bg-[#121212]/80 border border-[#D97706] text-[#D97706] font-bold px-2 py-1 rounded">
                      VIP Finished
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Instagram Tag (matching screenshot @westboundbarberloungellc) */}
              <div className="mt-3 flex items-center justify-between text-xs text-neutral-400 bg-[#141414] px-3 py-2 rounded-lg border border-[#242424]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-white font-medium">Follow our daily transformations</span>
                </div>
                <a
                  href="https://www.instagram.com/westboundbarberloungellc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  @westboundbarberloungellc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
