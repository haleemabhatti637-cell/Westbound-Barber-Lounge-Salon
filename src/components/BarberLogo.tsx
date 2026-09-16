import React from 'react';

interface BarberLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const BarberLogo: React.FC<BarberLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem SVG with Neon Red/Amber Glow */}
      <div className={`relative ${dimensions} shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-[#DC2626] via-[#D97706] to-[#EF4444] shadow-[0_0_15px_rgba(220,38,38,0.5)]`}>
        <div className="w-full h-full rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center relative overflow-hidden group">
          {/* Inner ambient ring */}
          <div className="absolute inset-0 bg-radial from-[#DC2626]/20 to-transparent opacity-60"></div>
          
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-[#D97706] p-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer dotted circle */}
            <circle cx="50" cy="50" r="44" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
            <circle cx="50" cy="50" r="39" stroke="#D97706" strokeWidth="1" opacity="0.9" />

            {/* Vintage straight razor & shears crossed */}
            {/* Shears Blade 1 */}
            <path
              d="M32 75 L68 25 M68 25 L73 30 L37 80"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="33" cy="77" r="5" stroke="#FFFFFF" strokeWidth="2" />

            {/* Shears Blade 2 */}
            <path
              d="M68 75 L32 25 M32 25 L27 30 L63 80"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="67" cy="77" r="5" stroke="#FFFFFF" strokeWidth="2" />

            {/* Center Pivot Screw */}
            <circle cx="50" cy="50" r="3.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Westbound W monogram */}
            <path
              d="M36 34 L43 54 L50 38 L57 54 L64 34"
              stroke="#D97706"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Little star accents */}
            <polygon points="50,15 52,20 57,20 53,23 55,28 50,25 45,28 47,23 43,20 48,20" fill="#D97706" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white uppercase leading-none">
              Westbound
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#DC2626]/20 text-[#EF4444] border border-[#DC2626]/40">
              GA
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#D97706] uppercase mt-0.5">
            Barber Lounge & Salon
          </span>
        </div>
      )}
    </div>
  );
};
