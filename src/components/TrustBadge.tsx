import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

interface TrustBadgeProps {
  variant?: 'full' | 'compact';
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 bg-[#1A1A1A]/90 border border-emerald-500/30 px-3 py-1.5 rounded-lg shadow-sm">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <div className="flex items-center gap-1">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400" />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-neutral-300">5.0 Star Certified</span>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center gap-2.5 bg-[#141414]/90 hover:bg-[#1A1A1A] transition-colors border border-emerald-500/30 px-3.5 py-1.5 rounded-lg shadow-sm">
      <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
        <ShieldCheck className="w-4 h-4" />
      </div>
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
          Recommended
        </div>
        <div className="text-xs font-bold text-white tracking-wide">
          Trust Badged
        </div>
        <div className="flex text-amber-400 mt-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </div>
  );
};
