import React, { useState, useEffect } from 'react';
import { BARBER_SERVICES, BARBERS } from '../data/barberData';
import { X, Calendar, Clock, User, Phone, CheckCircle, Scissors, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState(
    initialServiceId || BARBER_SERVICES[0].id
  );
  const [selectedBarberId, setSelectedBarberId] = useState(BARBERS[0].id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [addRazorFinish, setAddRazorFinish] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  useEffect(() => {
    // Set default date to tomorrow or today in YYYY-MM-DD format
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];
    setSelectedDate(formatted);
  }, []);

  if (!isOpen) return null;

  const currentService =
    BARBER_SERVICES.find((s) => s.id === selectedServiceId) || BARBER_SERVICES[0];
  const currentBarber =
    BARBERS.find((b) => b.id === selectedBarberId) || BARBERS[0];

  const timeSlots = [
    '9:00 AM',
    '9:45 AM',
    '10:30 AM',
    '11:15 AM',
    '12:00 PM',
    '1:00 PM',
    '1:45 PM',
    '2:30 PM',
    '3:15 PM',
    '4:00 PM',
    '4:45 PM',
    '5:30 PM',
    '6:15 PM (After-Hours)',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative bg-[#181818] border border-[#333333] rounded-2xl w-full max-w-2xl text-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1F1F1F] px-6 py-4 border-b border-[#2C2C2C] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#DC2626]/20 border border-[#DC2626]/50 flex items-center justify-center text-[#DC2626]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white">
                Book Your VIP Cut
              </h3>
              <p className="text-[11px] text-[#D97706] font-semibold">
                Westbound Barber Lounge • Stockbridge, GA
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-[#2B2B2B] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmation Screen */}
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] mb-1 block">
              Appointment Confirmed
            </span>
            <h4 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white mb-3">
              We Have Your Chair Reserved!
            </h4>

            <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-white">{name}</strong>. An instant confirmation text has been prepped for <strong className="text-white">{phone}</strong>.
            </p>

            {/* Appointment Summary Box */}
            <div className="bg-[#121212] border border-[#2B2B2B] rounded-xl p-5 text-left max-w-md mx-auto mb-6 space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-[#222222] pb-2">
                <span className="text-neutral-400">Selected Service:</span>
                <span className="font-bold text-white text-right">{currentService.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#222222] pb-2">
                <span className="text-neutral-400">Master Barber:</span>
                <span className="font-bold text-[#D97706]">{currentBarber.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#222222] pb-2">
                <span className="text-neutral-400">Date & Time:</span>
                <span className="font-bold text-white">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-[#222222] pb-2">
                <span className="text-neutral-400">Total Estimate:</span>
                <span className="font-bold text-emerald-400 text-base">${currentService.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-1 text-[11px] text-neutral-400">
                <span>Location:</span>
                <span>4340 N Henry Blvd, Suite 240, Stockbridge</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <a
                href={`tel:6785652887`}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#262626] hover:bg-[#333333] text-white text-xs font-semibold rounded-lg border border-[#3A3A3A] transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Call Shop (Questions)</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto gold-gradient text-[#121212] font-heading font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form */
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2 flex items-center justify-between">
                <span>1. Select Service</span>
                <span className="text-amber-400 font-bold">${currentService.price.toFixed(2)} • {currentService.duration}</span>
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] text-white text-sm rounded-lg p-3 outline-none transition-colors"
              >
                {BARBER_SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — ${s.price.toFixed(2)} ({s.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Choose Barber */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                2. Choose Barber
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {BARBERS.map((barber) => (
                  <button
                    type="button"
                    key={barber.id}
                    onClick={() => setSelectedBarberId(barber.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedBarberId === barber.id
                        ? 'border-[#DC2626] bg-[#DC2626]/10 shadow-md'
                        : 'border-[#2D2D2D] bg-[#141414] hover:border-[#3D3D3D]'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden mb-1.5 border border-neutral-600">
                      <img src={barber.avatar} alt={barber.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="font-heading text-xs font-bold text-white truncate">
                      {barber.name.split(' ')[0]}
                    </div>
                    <div className="text-[10px] text-neutral-400 truncate">
                      {barber.role.includes('Owner') ? 'Master' : barber.role}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Date and Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  3. Select Date
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] text-white text-sm rounded-lg p-2.5 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  4. Time Window
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] text-white text-sm rounded-lg p-2.5 outline-none"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Razor Finish Checkbox */}
            <div className="p-3 rounded-lg bg-[#141414] border border-[#2B2B2B] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="razorFinish"
                  checked={addRazorFinish}
                  onChange={(e) => setAddRazorFinish(e.target.checked)}
                  className="w-4 h-4 accent-[#DC2626] rounded"
                />
                <label htmlFor="razorFinish" className="text-xs text-neutral-200 cursor-pointer">
                  Request Sharp Straight-Razor Neck & Temple Line Finish
                </label>
              </div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase">Included</span>
            </div>

            {/* Step 4: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Terrance Hayes"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] text-white text-xs rounded-lg p-2.5 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Mobile Phone (for SMS confirmation) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(678) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] text-white text-xs rounded-lg p-2.5 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                Special Requests / Haircut Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., low skin drop fade, keep length on beard"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#121212] border border-[#333333] focus:border-[#DC2626] text-white text-xs rounded-lg p-2.5 outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full gold-gradient gold-gradient-hover text-[#121212] font-heading font-bold text-sm uppercase tracking-wider py-3.5 rounded-lg shadow-xl shadow-amber-900/30 flex items-center justify-center gap-2 transform active:scale-[0.99] transition-all"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Confirm Reservation (${currentService.price.toFixed(2)})</span>
              </button>
              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 mt-2 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No advance payment needed • Pay at shop chair after cut</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
