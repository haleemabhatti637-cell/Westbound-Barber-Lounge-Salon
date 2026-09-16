import React, { useState } from 'react';
import { Scissors, Sparkles, ZoomIn, Instagram } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fades' | 'beards' | 'specialty'>('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'High Skin Fade & Textured Crop',
      category: 'fades',
      tag: 'Skin Fade',
      barber: 'Master Marcus',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 2,
      title: 'The Royal Straight Razor Shave',
      category: 'beards',
      tag: 'Hot Lather',
      barber: 'Master Derrick',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 3,
      title: 'Crisp Beard Sculpt & Temple Taper',
      category: 'beards',
      tag: 'Razor Edge',
      barber: 'Master Khalil',
      image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 4,
      title: 'Low Drop Fade with Razor Hard Part',
      category: 'fades',
      tag: 'Drop Fade',
      barber: 'Master Marcus',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 5,
      title: 'Executive Pompadour & Beard Blend',
      category: 'specialty',
      tag: 'Gentleman Cut',
      barber: 'Master Derrick',
      image: 'https://images.unsplash.com/photo-1517832606589-7629c3ae83b4?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 6,
      title: "Young Gentleman's Sharp Taper",
      category: 'specialty',
      tag: "Kid's Precision",
      barber: 'Master Khalil',
      image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 bg-[#141414] border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D97706] mb-2 block">
              Look Good. Feel Powerful.
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Portfolio of Precision
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Cuts' },
              { id: 'fades', label: 'Skin Fades' },
              { id: 'beards', label: 'Beard Detailing' },
              { id: 'specialty', label: 'VIP Styles' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-[#DC2626] text-white shadow-md shadow-red-950/40'
                    : 'bg-[#222222] text-neutral-300 hover:text-white hover:bg-[#2A2A2A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#DC2626]/60 transition-all duration-300 shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>
              </div>

              {/* Overlay Details */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-[#DC2626]/80 text-white">
                    {item.tag}
                  </span>
                  <span className="text-xs text-neutral-300 font-medium">
                    By {item.barber}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#D97706] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Tag Pill Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/westboundbarberloungellc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#242424] border border-[#333333] hover:border-[#DC2626] text-white px-6 py-3 rounded-full transition-all shadow-md group"
          >
            <Instagram className="w-5 h-5 text-[#DC2626] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold">
              Explore 200+ Client Transformations on Instagram:
            </span>
            <span className="text-sm font-bold text-[#D97706]">
              @westboundbarberloungellc
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
