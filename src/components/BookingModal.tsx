import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Phone, ArrowRight, Shield } from 'lucide-react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: Treatment | null;
  initialConcern?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment,
  initialConcern,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    preselectedTreatment?.id || 'consultation-general'
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-10');
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: initialConcern ? `Primary skin concern: ${initialConcern}` : '',
  });
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:30 AM', '11:45 AM',
    '01:30 PM', '03:00 PM', '04:30 PM', '05:45 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'VBA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setStep(4);
  };

  const currentTreatment = TREATMENTS.find(t => t.id === selectedTreatmentId);

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#ead8d1] my-6">
        
        {/* Header */}
        <div className="bg-[#9b5d58] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="text-[9px] font-sans-clean font-semibold tracking-[0.25em] text-[#ead4d0] uppercase block mb-1">
            VENUS BEAUTY AESTHETICS
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-normal">
            {step === 4 ? 'Booking Confirmed' : 'Book Your Consultation'}
          </h2>
          <p className="text-xs font-sans-clean text-[#e2e8db] font-light mt-1">
            Private, medical-grade consultation with our expert practitioners.
          </p>

          {/* Step Indicator */}
          {step < 4 && (
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10 text-[10px] font-sans-clean">
              <span className={`px-2.5 py-0.5 rounded-full ${step === 1 ? 'bg-white text-[#9b5d58] font-bold' : 'text-white/70'}`}>
                1. Treatment
              </span>
              <span>›</span>
              <span className={`px-2.5 py-0.5 rounded-full ${step === 2 ? 'bg-white text-[#9b5d58] font-bold' : 'text-white/70'}`}>
                2. Schedule
              </span>
              <span>›</span>
              <span className={`px-2.5 py-0.5 rounded-full ${step === 3 ? 'bg-white text-[#9b5d58] font-bold' : 'text-white/70'}`}>
                3. Your Details
              </span>
            </div>
          )}
        </div>

        {/* Form Steps */}
        <div className="p-6 sm:p-8">

          {/* STEP 1: Select Treatment */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a]">
                Select Treatment or General Consultation
              </h3>

              <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                {/* General Consultation Option */}
                <div
                  onClick={() => setSelectedTreatmentId('consultation-general')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedTreatmentId === 'consultation-general'
                      ? 'bg-[#f8efec] border-[#9b5d58] ring-1 ring-[#9b5d58]/20'
                      : 'bg-white border-[#f1e5e0] hover:border-[#a3a79a]'
                  }`}
                >
                  <div>
                    <h4 className="font-serif-luxury text-base font-medium text-[#3c2b2a]">
                      General Aesthetic Skin Consultation
                    </h4>
                    <p className="text-xs font-sans-clean text-[#7f6d6a]">
                      Full facial assessment & personalized prescription treatment plan.
                    </p>
                  </div>
                  <span className="text-xs font-sans-clean font-bold text-[#9b5d58] uppercase">
                    Complimentary
                  </span>
                </div>

                {/* Specific Treatments List */}
                {TREATMENTS.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTreatmentId(t.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedTreatmentId === t.id
                        ? 'bg-[#f8efec] border-[#9b5d58] ring-1 ring-[#9b5d58]/20'
                        : 'bg-white border-[#f1e5e0] hover:border-[#a3a79a]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-10 h-10 rounded-lg object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-serif-luxury text-base font-medium text-[#3c2b2a]">
                          {t.title}
                        </h4>
                        <p className="text-[11px] font-sans-clean text-[#a18f8b]">
                          {t.duration} • {t.downtime}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-sans-clean font-bold text-[#9b5d58]">
                      {t.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#eadad5] flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-6 py-3 rounded-full text-xs font-sans-clean font-medium tracking-wider uppercase transition-all shadow-sm"
                >
                  <span>NEXT: CHOOSE TIME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Date & Time */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a]">
                Choose Preferred Date & Time
              </h3>

              <div className="space-y-3">
                <label className="block text-xs font-sans-clean font-medium text-[#9b5d58] uppercase">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-08-05"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-sans-clean font-medium text-[#9b5d58] uppercase">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-sans-clean font-medium transition-all ${
                        selectedTime === slot
                          ? 'bg-[#9b5d58] text-white shadow-sm'
                          : 'bg-[#fbf6f4] hover:bg-[#f1e5e0] text-[#6f5956] border border-[#ead8d1]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#eadad5] flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-sans-clean font-medium text-[#a18f8b] hover:text-[#3c2b2a] uppercase"
                >
                  BACK
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-6 py-3 rounded-full text-xs font-sans-clean font-medium tracking-wider uppercase transition-all shadow-sm"
                >
                  <span>NEXT: YOUR DETAILS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information Form */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
              <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a]">
                Your Patient Details
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-sans-clean font-medium text-[#9b5d58] uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-sans-clean font-medium text-[#9b5d58] uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@example.com"
                      className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans-clean font-medium text-[#9b5d58] uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07123 456789"
                      className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans-clean font-medium text-[#9b5d58] uppercase mb-1">
                    Medical Notes / Primary Goals
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe any skin concerns or questions..."
                    className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#eadad5] flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-sans-clean font-medium text-[#a18f8b] hover:text-[#3c2b2a] uppercase"
                >
                  BACK
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-7 py-3.5 rounded-full text-xs font-sans-clean font-medium tracking-wider uppercase transition-all shadow-md"
                >
                  <span>CONFIRM APPOINTMENT</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success Confirmation */}
          {step === 4 && (
            <div className="text-center space-y-6 py-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#f8efec] text-[#9b5d58] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] font-sans-clean font-semibold tracking-widest text-[#a18f8b] uppercase block mb-1">
                  BOOKING REFERENCE: {bookingRef}
                </span>
                <h3 className="font-serif-luxury text-3xl font-medium text-[#3c2b2a]">
                  We look forward to welcoming you!
                </h3>
                <p className="text-xs font-sans-clean text-[#7b6966] mt-2 max-w-sm mx-auto leading-relaxed">
                  A confirmation email has been sent to <strong>{formData.email}</strong> with appointment instructions and directions to our London clinic.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fbf6f4] border border-[#ead8d1] text-left text-xs font-sans-clean space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#a18f8b]">Treatment:</span>
                  <span className="font-semibold text-[#3c2b2a]">
                    {currentTreatment ? currentTreatment.title : 'General Consultation'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a18f8b]">Date & Time:</span>
                  <span className="font-semibold text-[#3c2b2a]">{selectedDate} at {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a18f8b]">Patient:</span>
                  <span className="font-semibold text-[#3c2b2a]">{formData.fullName}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="bg-[#9b5d58] text-white px-8 py-3 rounded-full text-xs font-sans-clean font-medium tracking-wider uppercase transition-all shadow-sm"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

