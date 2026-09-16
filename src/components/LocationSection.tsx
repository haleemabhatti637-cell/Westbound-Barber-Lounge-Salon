import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, Instagram, CheckCircle, Send, AlertCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/barberData';

export const LocationSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', phone: '', message: '' });
    }, 4000);
  };

  const address = "4340 N Henry Blvd, Suite 240, Stockbridge, GA 30281";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-20 bg-[#161616] border-b border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#DC2626] mb-2 block">
            Visit Our Lounge
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Location & Hours
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Conveniently situated in Stockbridge, GA with ample free front-door parking. Walk right in or book in advance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Info Card & Hours */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] rounded-2xl p-7 shadow-xl">
              <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white mb-6 flex items-center gap-2.5">
                <MapPin className="w-6 h-6 text-[#DC2626]" />
                <span>Shop Coordinates</span>
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Physical Address
                  </span>
                  <p className="text-white text-base font-medium leading-snug">
                    4340 N Henry Blvd, Suite 240 <br />
                    Stockbridge, GA 30281
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] hover:text-amber-400 mt-2 uppercase tracking-wide group"
                  >
                    <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>Open in Google Maps / Apple Maps</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#262626]">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#D97706]" />
                    Operating Hours
                  </span>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div className="flex justify-between text-neutral-300">
                      <span className="font-semibold text-white">Monday – Saturday</span>
                      <span className="text-amber-400 font-bold">9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Sunday</span>
                      <span className="text-neutral-500 font-medium">Closed (VIP Requests Only)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#242424] border border-[#333333] text-[11px] text-[#D97706] font-medium mt-2">
                      ⚡ After-Hours & Early Morning Cuts: Available by appointment request.
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#262626] flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#242424] flex items-center justify-center text-[#D97706]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase font-bold block">Front Desk / Barbershop</span>
                      <a href="tel:6785652887" className="text-white hover:text-[#D97706] font-bold text-sm">
                        (678) 565-2887
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-[#242424] flex items-center justify-center text-[#DC2626]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase font-bold block">Official Instagram</span>
                      <a
                        href="https://www.instagram.com/westboundbarberloungellc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#DC2626] font-bold text-sm"
                      >
                        @westboundbarberloungellc
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] rounded-2xl p-6 shadow-xl">
              <h4 className="font-heading text-lg font-bold uppercase text-white mb-2">
                Have a Question or Special Request?
              </h4>
              <p className="text-xs text-neutral-400 mb-4">
                Drop your name and phone number for a rapid callback or SMS response.
              </p>

              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Message sent! Our master barber front desk will text you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Question / Wedding Party / Preferred Time"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#292929] hover:bg-[#DC2626] text-white font-heading font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Google Map Embed (Right Column) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#1C1C1C] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl h-full min-h-[420px] flex flex-col">
              {/* Map Header Bar */}
              <div className="bg-[#242424] px-5 py-3 border-b border-[#303030] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <span className="text-xs font-bold uppercase text-white tracking-wider">
                    Interactive Map: Stockbridge, GA
                  </span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#D97706] hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>

              {/* Map iframe */}
              <div className="w-full flex-1 relative min-h-[360px]">
                <iframe
                  title="Westbound Barber Lounge & Salon Map Location"
                  src="https://maps.google.com/maps?q=4340%20N%20Henry%20Blvd%20Suite%20240,%20Stockbridge,%20GA%2030281&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Map footer note */}
              <div className="bg-[#161616] p-4 text-center border-t border-[#262626] flex items-center justify-between text-xs text-neutral-400">
                <span>Plaza Suite 240 • Henry County, GA</span>
                <span className="text-emerald-400 font-semibold">Free Customer Parking Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="border-t border-[#262626] pt-14 max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1C] border border-[#2B2B2B] rounded-xl p-5"
              >
                <h4 className="font-heading text-base font-bold uppercase text-[#D97706] mb-2">
                  {item.question}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
