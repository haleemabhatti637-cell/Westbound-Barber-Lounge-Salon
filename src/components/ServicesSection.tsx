import React, { useState } from 'react';
import { BARBER_SERVICES } from '../data/barberData';
import { ServiceCategory, BarberService } from '../types';
import { Scissors, Clock, Sparkles, Check, Flame, ChevronRight, Zap, ShieldAlert, Star } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Grooming' },
    { id: 'mens-haircuts', label: "Men's Haircuts" },
    { id: 'beards-shaves', label: 'Beard Care & Shaves' },
    { id: 'kids-cuts', label: "Kid's Cuts" },
    { id: 'vip-afterhours', label: 'VIP & After-Hours' },
  ];

  // Top featured 3 services directly seen in screenshot strip
  const featuredServices = BARBER_SERVICES.filter(
    (s) => s.id === 'westbound-fade' || s.id === 'royal-shave' || s.id === 'young-gent-cut'
  );

  const filteredServices = BARBER_SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 bg-[#161616] relative border-b border-[#262626]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#DC2626]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Featured Services Strip (Matching screenshot featured banner) */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D97706] mb-1 block">
              Direct From The Master Chairs
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Featured Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white text-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-200 hover:shadow-2xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#DC2626] border border-red-200 flex items-center justify-center shrink-0">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-extrabold font-heading text-[#DC2626]">
                      ${service.price.toFixed(2)}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-neutral-900 mb-1 group-hover:text-[#DC2626] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 mb-4 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    {service.duration}
                  </span>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="text-xs font-bold uppercase tracking-wider text-white bg-[#121212] hover:bg-[#DC2626] px-3.5 py-1.5 rounded transition-colors flex items-center gap-1"
                  >
                    <span>Book Cut</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Heading for Full Menu */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F1F1F] border border-[#2F2F2F] text-xs font-semibold text-neutral-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete Barber Lounge Menu & Transparent Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Master Barber Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every appointment begins with an in-depth consultation, followed by surgical blade work, hot steam towels, and premium grooming elixirs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 mb-8 pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ServiceCategory)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'crimson-gradient text-white shadow-lg shadow-red-900/40 border border-red-500/50 scale-[1.02]'
                    : 'bg-[#202020] text-neutral-300 hover:text-white hover:bg-[#282828] border border-[#2F2F2F]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#DC2626]/60 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden"
            >
              {/* Optional popular badge */}
              {service.badge && (
                <div className="absolute top-0 right-0">
                  <span className="inline-block bg-[#DC2626] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header: Title and Price */}
                <div className="flex justify-between items-start gap-4 mb-2 pr-12">
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#D97706] transition-colors">
                    {service.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl sm:text-3xl font-heading font-black text-[#D97706]">
                    ${service.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    {service.duration}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-5">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Razor Finish Indicator & Book Cut Button */}
              <div className="pt-4 border-t border-[#282828] flex items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-1.5">
                  {service.razorFinish ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                      <Check className="w-3 h-3 text-emerald-400" />
                      Razor Finish Included
                    </span>
                  ) : (
                    <span className="text-[11px] text-neutral-400">Gentle Trimmer Finish</span>
                  )}
                </div>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="gold-gradient gold-gradient-hover text-[#121212] font-heading font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-md transition-transform active:scale-95 flex items-center gap-1 shrink-0"
                >
                  <span>Book Cut</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Custom or Special Requests */}
        <div className="mt-12 bg-gradient-to-r from-[#202020] via-[#1A1A1A] to-[#202020] border border-[#333333] rounded-xl p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading text-lg font-bold uppercase text-white mb-1">
              Need A Custom Grooming Package or Wedding Groomsmen Booking?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              We cater private wedding mornings, VIP group cut-outs, and film production grooming in Henry County.
            </p>
          </div>
          <a
            href="tel:6785652887"
            className="whitespace-nowrap px-5 py-2.5 bg-[#DC2626] hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0"
          >
            Call For Custom Booking
          </a>
        </div>
      </div>
    </section>
  );
};
