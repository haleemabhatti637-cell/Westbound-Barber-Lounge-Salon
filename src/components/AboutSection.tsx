import React from 'react';
import { Scissors, CheckCircle, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-[#141414] border-b border-[#262626] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Craft */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DC2626] mb-2 block">
              The Westbound Heritage
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
              Elevating Barber Culture In Stockbridge
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              <p>
                Under new ownership and newly renovated, <strong className="text-white font-semibold">Westbound Barber Lounge & Salon</strong> was re-imagined to bridge the timeless tradition of master straight-razor craftsmanship with a modern, upscale lounge sanctuary.
              </p>
              <p>
                We believe a haircut isn’t merely a chore—it’s an empowering ritual. Whether you’re stopping in for a quick lunchtime taper, bringing your son in for his first fade, or indulging in an after-hours hot eucalyptus steam shave with a cold beverage, you receive 100% undivided artisan focus.
              </p>
              <p>
                We proudly welcome walk-in clients every single day, as well as offering private reserved bookings for those who value punctuality and dedicated master barbers.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs text-neutral-200 bg-[#1A1A1A] p-3 rounded-lg border border-[#2B2B2B]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hospital-Grade Barbicide Sanitation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200 bg-[#1A1A1A] p-3 rounded-lg border border-[#2B2B2B]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Rushed Cuts • Millimeter Accuracy</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200 bg-[#1A1A1A] p-3 rounded-lg border border-[#2B2B2B]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Respectful, Family-Friendly Lounge</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-200 bg-[#1A1A1A] p-3 rounded-lg border border-[#2B2B2B]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complimentary Refreshments & HDTVs</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="gold-gradient gold-gradient-hover text-[#121212] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-transform active:scale-95"
              >
                Experience Westbound
              </button>
              <a
                href="tel:6785652887"
                className="text-xs sm:text-sm text-neutral-300 hover:text-[#DC2626] font-semibold transition-colors"
              >
                Have a question? Call (678) 565-2887
              </a>
            </div>
          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#333333] shadow-2xl bg-[#1C1C1C]">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80"
                alt="Westbound Barber Lounge & Salon interior"
                className="w-full h-80 sm:h-96 object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent"></div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 inset-x-6 bg-[#181818]/95 backdrop-blur-md border border-[#2F2F2F] rounded-xl p-5 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626] block">
                      Stockbridge, GA
                    </span>
                    <h4 className="font-heading text-lg font-bold uppercase text-white">
                      Westbound Barber Lounge & Salon
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Under New Ownership • Walk-Ins & Appointments
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-black font-heading text-[#D97706]">5.0 ★</span>
                    <span className="text-[10px] text-neutral-400 block">Verified Cuts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
