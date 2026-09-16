import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/barberData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#121212] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
            Praised By Stockbridge
          </h2>
          <p className="text-neutral-400 text-sm">
            Read authentic experiences from new and returning clients under our new management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#191919] border border-[#2B2B2B] rounded-xl p-6 flex flex-col justify-between hover:border-[#DC2626]/40 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-4 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#262626]">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-heading text-sm font-bold uppercase text-white">
                    {review.author}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-[11px] text-[#D97706] font-medium block">
                  Service: {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
