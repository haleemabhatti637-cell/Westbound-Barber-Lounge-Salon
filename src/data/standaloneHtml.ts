export const STANDALONE_HTML_STRING = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Westbound Barber Lounge & Salon | Stockbridge, GA</title>
  <meta name="description" content="Stockbridge’s premier barbershop & salon. Under new ownership—accepting new clients, walk-ins, and late appointments." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #121212; color: #FFFFFF; font-family: 'Inter', sans-serif; }
    .font-heading { font-family: 'Oswald', sans-serif; }
    .font-vintage { font-family: 'Cinzel', serif; }
    .gold-gradient { background: linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%); }
    .gold-gradient:hover { background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%); }
    .crimson-gradient { background: linear-gradient(135deg, #EF4444 0%, #DC2626 60%, #991B1B 100%); }
    .text-glow-red { text-shadow: 0 0 20px rgba(220, 38, 38, 0.7); }
    .no-scrollbar::-webkit-scrollbar { display: none; }
  </style>
</head>
<body class="bg-[#121212] text-white selection:bg-[#DC2626] selection:text-white">

  <!-- Top Announcement Bar -->
  <div class="bg-[#0D0D0D] border-b border-[#242424] text-xs py-1.5 px-4">
    <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
      <div class="flex items-center gap-3 text-neutral-300">
        <span class="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Open Today: 9:00 AM – 6:00 PM
        </span>
        <span class="text-neutral-600 hidden sm:inline">•</span>
        <span class="hidden sm:inline">4340 N Henry Blvd, Suite 240, Stockbridge, GA</span>
        <span class="text-neutral-600 hidden md:inline">•</span>
        <span class="text-[#D97706] font-medium hidden md:inline">✂️ Walk-Ins Welcomed Daily</span>
      </div>
      <div class="flex items-center gap-4 ml-auto">
        <a href="tel:6785652887" class="text-white hover:text-[#D97706] font-semibold flex items-center gap-1">
          <span>Call: (678) 565-2887</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Header / Navigation Bar -->
  <header class="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-[#262626] py-3.5 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="hidden lg:flex items-center gap-2.5 bg-[#171717] border border-emerald-500/30 px-3 py-1.5 rounded-lg shadow-sm">
        <div class="text-left leading-none">
          <span class="text-[9px] uppercase font-bold text-emerald-400 tracking-wider block">Recommended</span>
          <span class="text-xs font-bold text-white tracking-wide block">Trust Badged</span>
          <span class="text-[10px] text-amber-400 font-bold block mt-0.5">★★★★★</span>
        </div>
      </div>

      <a href="#hero" class="flex items-center gap-3">
        <div class="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#DC2626] via-[#D97706] to-[#EF4444] shadow-[0_0_15px_rgba(220,38,38,0.5)]">
          <div class="w-full h-full rounded-full bg-[#141414] flex items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-full h-full text-[#D97706] p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="44" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8" />
              <circle cx="50" cy="50" r="39" stroke="#D97706" stroke-width="1" opacity="0.9" />
              <path d="M32 75 L68 25 M68 25 L73 30 L37 80" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
              <circle cx="33" cy="77" r="5" stroke="#FFFFFF" stroke-width="2" />
              <path d="M68 75 L32 25 M32 25 L27 30 L63 80" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
              <circle cx="67" cy="77" r="5" stroke="#FFFFFF" stroke-width="2" />
              <circle cx="50" cy="50" r="3.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.5" />
              <path d="M36 34 L43 54 L50 38 L57 54 L64 34" stroke="#D97706" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="flex flex-col text-left">
          <div class="flex items-center gap-1">
            <span class="font-heading text-lg sm:text-xl font-bold tracking-wider text-white uppercase leading-none">
              WESTBOUND
            </span>
            <span class="text-[9px] uppercase font-bold tracking-widest px-1 py-0.5 rounded bg-[#DC2626]/20 text-[#EF4444] border border-[#DC2626]/40">
              GA
            </span>
          </div>
          <span class="text-[10px] font-semibold tracking-[0.2em] text-[#D97706] uppercase mt-0.5">
            BARBER LOUNGE & SALON
          </span>
        </div>
      </a>

      <nav class="hidden xl:flex items-center gap-6">
        <a href="#about" class="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white pb-1 border-b-2 border-transparent hover:border-[#DC2626] transition-all">About</a>
        <a href="#services" class="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white pb-1 border-b-2 border-transparent hover:border-[#DC2626] transition-all">Barber Services</a>
        <a href="#services" class="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white pb-1 border-b-2 border-transparent hover:border-[#DC2626] transition-all">Pricing</a>
        <a href="#experience" class="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white pb-1 border-b-2 border-transparent hover:border-[#DC2626] transition-all">Amenities</a>
        <a href="#location" class="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white pb-1 border-b-2 border-transparent hover:border-[#DC2626] transition-all">Location</a>
      </nav>

      <div class="flex items-center gap-3">
        <button onclick="openBookingModal()" class="gold-gradient text-[#121212] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded shadow-lg shadow-[#D97706]/20 transition-transform active:scale-95">
          Book Appointment
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="relative bg-[#121212] py-12 lg:py-20 border-b border-[#262626] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <div class="flex flex-wrap items-center gap-2 mb-6">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DC2626]/20 border border-[#DC2626]/40 text-red-300">
          ✂️ Walk-Ins Welcomed Daily
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 border border-amber-500/40 text-amber-300">
          🔥 New Ownership & Renovations
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7">
          <h2 class="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-neutral-300 uppercase mb-1">
            PRECISION CUTS. VIP LOUNGE VIBES.
          </h2>

          <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-2 leading-none">
            WESTBOUND BARBER <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#D97706] text-glow-red">
              LOUNGE & SALON
            </span>
          </h1>

          <p class="font-heading text-base sm:text-lg font-bold tracking-widest text-[#D97706] uppercase mb-4">
            MASTER CUTS. BEARD SCULPTS. LUXURY GROOMING.
          </p>

          <p class="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-5 font-light">
            Stockbridge’s premier barbershop & salon. Under new ownership—accepting new clients, walk-ins, and late appointments. Experience surgical line-ups, relaxing hot lather steam shaves, and upscale lounge comfort.
          </p>

          <div class="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-neutral-400 border-y border-[#262626] py-3 mb-8">
            <span class="text-white font-medium">After-Hours Cuts Available</span>
            <span class="text-neutral-600">•</span>
            <span class="text-white font-medium">Experienced Master Barbers</span>
            <span class="text-neutral-600">•</span>
            <span class="text-white font-medium">Kids' Cuts</span>
            <span class="text-neutral-600">•</span>
            <span class="text-white font-medium">VIP Service</span>
          </div>

          <div class="flex flex-wrap gap-4 items-center">
            <button onclick="openBookingModal()" class="gold-gradient text-[#121212] font-heading font-bold text-sm sm:text-base uppercase tracking-wider px-6 py-3 rounded-lg shadow-xl shadow-amber-900/30">
              Book Your Cut
            </button>
            <a href="#services" class="crimson-gradient text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider px-6 py-3 rounded-lg shadow-xl shadow-red-950/40 border border-red-500/40">
              View Services
            </a>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="bg-[#1A1A1A] border border-[#2F2F2F] rounded-2xl p-3 sm:p-4 shadow-2xl relative">
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-xl overflow-hidden aspect-[4/5] border border-red-600/40">
                <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80" alt="Precision Fade" class="w-full h-full object-cover" />
              </div>
              <div class="rounded-xl overflow-hidden aspect-[4/5] border border-red-600/40">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80" alt="Hot Towel Shave" class="w-full h-full object-cover" />
              </div>
              <div class="col-span-2 rounded-xl overflow-hidden aspect-[16/9] border border-amber-600/40">
                <img src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80" alt="Beard Sculpt" class="w-full h-full object-cover" />
              </div>
            </div>
            <div class="mt-3 flex items-center justify-between text-xs text-neutral-400 bg-[#141414] px-3 py-2 rounded-lg border border-[#242424]">
              <span class="text-white font-medium">Follow our craft:</span>
              <a href="https://www.instagram.com/westboundbarberloungellc" target="_blank" class="text-amber-400 hover:underline font-bold">
                @westboundbarberloungellc
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Services Strip -->
  <section class="py-12 bg-[#161616] border-b border-[#262626]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-8">
        <h3 class="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white">
          Featured Services
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div class="bg-white text-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-2">
              <span class="text-red-600 font-black font-heading text-xl">✂️ FADE</span>
              <span class="text-2xl font-black font-heading text-[#DC2626]">$35.00</span>
            </div>
            <h4 class="font-heading text-lg font-bold uppercase text-neutral-900 mb-1">THE WESTBOUND SIGNATURE FADE</h4>
            <p class="text-xs text-neutral-600 mb-4 leading-relaxed">Precision low, mid, or high skin fade tailored to your head shape. Includes shear work on top and razor edge cleanup.</p>
          </div>
          <button onclick="openBookingModal('The Westbound Signature Fade')" class="w-full bg-[#121212] hover:bg-[#DC2626] text-white font-heading text-xs font-bold uppercase py-2 rounded transition-colors">
            Book Cut
          </button>
        </div>

        <div class="bg-white text-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-2">
              <span class="text-red-600 font-black font-heading text-xl">🪒 SHAVE</span>
              <span class="text-2xl font-black font-heading text-[#DC2626]">$35.00</span>
            </div>
            <h4 class="font-heading text-lg font-bold uppercase text-neutral-900 mb-1">THE ROYAL SHAVE</h4>
            <p class="text-xs text-neutral-600 mb-4 leading-relaxed">Multi-step eucalyptus hot steam towels, rich warm badger-brush lather, straight razor shave, and cooling aloe balm.</p>
          </div>
          <button onclick="openBookingModal('The Royal Hot Towel Shave')" class="w-full bg-[#121212] hover:bg-[#DC2626] text-white font-heading text-xs font-bold uppercase py-2 rounded transition-colors">
            Book Cut
          </button>
        </div>

        <div class="bg-white text-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-2">
              <span class="text-red-600 font-black font-heading text-xl">🧒 YOUNG GENT</span>
              <span class="text-2xl font-black font-heading text-[#DC2626]">$22.00</span>
            </div>
            <h4 class="font-heading text-lg font-bold uppercase text-neutral-900 mb-1">KIDS' CUT (12 & UNDER)</h4>
            <p class="text-xs text-neutral-600 mb-4 leading-relaxed">Patient, gentle, stylish cuts for young boys and teens in an engaging, respectful family-first environment.</p>
          </div>
          <button onclick="openBookingModal('Young Gentleman\'s Cut (12 & Under)')" class="w-full bg-[#121212] hover:bg-[#DC2626] text-white font-heading text-xs font-bold uppercase py-2 rounded transition-colors">
            Book Cut
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Location & Contact -->
  <section id="location" class="py-16 bg-[#121212] border-b border-[#262626]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <h2 class="font-heading text-3xl sm:text-5xl font-extrabold uppercase text-white mb-2">
          Location & Hours
        </h2>
        <p class="text-neutral-400 text-sm">4340 N Henry Blvd, Suite 240, Stockbridge, GA 30281</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-5 bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl p-7">
          <p class="text-lg font-semibold text-white mb-4">4340 N Henry Blvd, Suite 240<br>Stockbridge, GA 30281</p>
          <div class="text-sm space-y-2 mb-6">
            <div class="flex justify-between text-neutral-200">
              <span>Mon – Sat:</span>
              <span class="text-amber-400 font-bold">9:00 AM – 6:00 PM</span>
            </div>
            <div class="flex justify-between text-neutral-400">
              <span>Sunday:</span>
              <span>Closed (VIP Slots by Request)</span>
            </div>
          </div>
          <p class="text-white font-bold text-sm mb-6">Phone: <a href="tel:6785652887" class="text-[#D97706]">(678) 565-2887</a></p>
          <button onclick="openBookingModal()" class="w-full gold-gradient text-[#121212] font-heading font-bold text-sm uppercase py-3 rounded-lg">
            Book Your Cut Now
          </button>
        </div>

        <div class="lg:col-span-7 bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl overflow-hidden min-h-[350px]">
          <iframe 
            src="https://maps.google.com/maps?q=4340%20N%20Henry%20Blvd%20Suite%20240,%20Stockbridge,%20GA%2030281&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            class="w-full h-full min-h-[350px] border-0 grayscale contrast-125"
            allowfullscreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#0D0D0D] text-neutral-400 border-t border-[#222222] py-8 px-4 sm:px-6 text-center text-xs">
    <p class="text-white font-heading text-base font-bold uppercase mb-2">WESTBOUND BARBER LOUNGE & SALON</p>
    <p class="mb-2">4340 N Henry Blvd, Suite 240, Stockbridge, GA 30281 • (678) 565-2887</p>
    <p>© 2026 Westbound Barber Lounge LLC. All rights reserved.</p>
  </footer>

  <!-- Booking Modal -->
  <div id="bookingModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-[#181818] border border-[#333333] rounded-2xl w-full max-w-lg text-white shadow-2xl p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-heading text-lg font-bold uppercase text-white">Book Your Cut</h3>
        <button onclick="closeBookingModal()" class="text-neutral-400 hover:text-white text-xl">✕</button>
      </div>
      <div class="space-y-3">
        <input type="text" id="clientName" placeholder="Your Full Name" class="w-full bg-[#121212] border border-[#333333] text-white text-xs rounded-lg p-2.5" />
        <input type="tel" id="clientPhone" placeholder="Mobile Phone (678) 000-0000" class="w-full bg-[#121212] border border-[#333333] text-white text-xs rounded-lg p-2.5" />
        <button onclick="submitBooking()" class="w-full gold-gradient text-[#121212] font-heading font-bold text-sm uppercase py-3 rounded-lg">
          Confirm Chair Reservation
        </button>
      </div>
    </div>
  </div>

  <script>
    function openBookingModal() {
      document.getElementById('bookingModal').classList.remove('hidden');
      document.getElementById('bookingModal').classList.add('flex');
    }
    function closeBookingModal() {
      document.getElementById('bookingModal').classList.add('hidden');
      document.getElementById('bookingModal').classList.remove('flex');
    }
    function submitBooking() {
      alert('Thank you! Your chair at Westbound Barber Lounge has been reserved. See you soon!');
      closeBookingModal();
    }
  </script>
</body>
</html>`;
