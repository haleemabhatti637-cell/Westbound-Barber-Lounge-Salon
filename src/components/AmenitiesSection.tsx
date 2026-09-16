import React from 'react';
import { AMENITIES, BARBERS } from '../data/barberData';
import { Armchair, Award, Users, Clock, Zap, ShieldCheck, CheckCircle2, Scissors } from 'lucide-react';

interface AmenitiesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-[#D97706]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#DC2626]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#D97706]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#DC2626]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#D97706]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Scissors className="w-6 h-6 text-[#DC2626]" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#121212] relative overflow-hidden border-b border-[#262626]">
      {/* Decorative red neon ambient tube strip */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DC2626] mb-2 block">
            The Westbound Standard
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Lounge Experience & Amenities
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Step into an upscale environment crafted for relaxation. High ceilings, plush black leather seating, vintage industrial barber aesthetics, and unhurried hospitality.
          </p>
        </div>

        {/* 6 Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-[#181818] border border-[#282828] hover:border-[#D97706]/50 rounded-xl p-7 transition-all duration-300 group hover:shadow-xl hover:shadow-black/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(amenity.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#252525] text-amber-300 border border-[#3A3A3A]">
                    {amenity.highlight}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#D97706] transition-colors">
                  {amenity.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#242424] flex items-center gap-2 text-xs text-neutral-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard at Westbound Lounge</span>
              </div>
            </div>
          ))}
        </div>

        {/* Master Barbers Lineup */}
        <div className="bg-[#181818] border border-[#2A2A2A] rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D97706] mb-1 block">
                Meet The Craftsmen
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold uppercase text-white mb-4">
                Master Barbers At Your Service
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                Our barbers are career artisans dedicated to the culture, technique, and discipline of classic and modern men’s grooming.
              </p>
              <button
                onClick={() => onOpenBooking()}
                className="gold-gradient gold-gradient-hover text-[#121212] font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-transform active:scale-95"
              >
                Select Your Barber & Book
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {BARBERS.filter((b) => b.id !== 'any').map((barber) => (
                <div
                  key={barber.id}
                  className="bg-[#121212] border border-[#2B2B2B] rounded-xl p-4 text-center group hover:border-[#DC2626]/60 transition-colors"
                >
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 border-2 border-[#3A3A3A] group-hover:border-[#DC2626] transition-colors shadow-md">
                    <img
                      src={barber.avatar}
                      alt={barber.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-heading text-sm font-bold uppercase text-white mb-0.5">
                    {barber.name}
                  </h4>
                  <p className="text-xs text-[#D97706] font-semibold mb-1">
                    {barber.role}
                  </p>
                  <p className="text-[11px] text-neutral-400 font-light line-clamp-2">
                    {barber.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
