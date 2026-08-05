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
  const whatsappNumber = '447792584920';
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    preselectedTreatment?.id || 'consultation-general'
  );
  const today = new Date();
  const minDate = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(minDate);
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: initialConcern ? `Primary skin concern: ${initialConcern}` : '',
  });
  const [errors, setErrors] = useState<Partial<Record<'fullName' | 'email' | 'phone' | 'date' | 'time', string>>>({});
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:30 AM', '11:45 AM',
    '01:30 PM', '03:00 PM', '04:30 PM', '05:45 PM'
  ];

  const validateStep3 = () => {
    const nextErrors: Partial<Record<'fullName' | 'email' | 'phone' | 'date' | 'time', string>> = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+()\-\s]{7,}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!selectedDate) {
      nextErrors.date = 'Please choose a date.';
    } else if (selectedDate < minDate) {
      nextErrors.date = 'Please choose today or a future date.';
    }

    if (!selectedTime) {
      nextErrors.time = 'Please choose a time slot.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildWhatsappMessage = () => {
    const treatmentText = currentTreatment ? `${currentTreatment.title} (${currentTreatment.price})` : 'General Aesthetic Skin Consultation';
    const lines = [
      'Hello Venus Beauty Aesthetics, I would like to book a consultation.',
      '',
      `Treatment: ${treatmentText}`,
      `Date: ${selectedDate}`,
      `Time: ${selectedTime}`,
      `Name: ${formData.fullName.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      formData.notes.trim() ? `Notes: ${formData.notes.trim()}` : '',
      '',
    ].filter(Boolean);

    return lines.join('\n');
  };

  const openWhatsapp = () => {
    const message = buildWhatsappMessage();
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) {
      return;
    }

    const randomRef = 'VBA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    openWhatsapp();
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
                  onClick={() => {
                    if (selectedTreatmentId) {
                      setStep(2);
                    }
                  }}
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
                  min={minDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  onBlur={() => {
                    if (selectedDate && selectedDate < minDate) {
                      setErrors((prev) => ({ ...prev, date: 'Please choose today or a future date.' }));
                    } else {
                      setErrors((prev) => {
                        const next = { ...prev };
                        delete next.date;
                        return next;
                      });
                    }
                  }}
                  className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                />
                {errors.date && <p className="text-xs text-[#b4534f]">{errors.date}</p>}
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
                {errors.time && <p className="text-xs text-[#b4534f]">{errors.time}</p>}
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
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors((prev) => {
                        const next = { ...prev };
                        delete next.fullName;
                        return next;
                      });
                    }}
                    placeholder="e.g. Eleanor Vance"
                    aria-invalid={Boolean(errors.fullName)}
                    className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-[#b4534f]">{errors.fullName}</p>}
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
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors((prev) => {
                        const next = { ...prev };
                        delete next.email;
                        return next;
                      });
                    }}
                    placeholder="eleanor@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                  />
                    {errors.email && <p className="mt-1 text-xs text-[#b4534f]">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans-clean font-medium text-[#9b5d58] uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors((prev) => {
                          const next = { ...prev };
                          delete next.phone;
                          return next;
                        });
                      }}
                      placeholder="07123 456789"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full p-3 rounded-xl border border-[#e7d3cd] focus:outline-none focus:border-[#9b5d58] text-sm font-sans-clean"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-[#b4534f]">{errors.phone}</p>}
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
                  <span>CONFIRM ON WHATSAPP</span>
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
                  We sent your details to WhatsApp
                </h3>
                <p className="text-xs font-sans-clean text-[#7b6966] mt-2 max-w-sm mx-auto leading-relaxed">
                  WhatsApp will open with a prefilled booking message for <strong>+44 7792 584920</strong>. Please send it to complete your request.
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
                onClick={() => {
                  onClose();
                  setStep(1);
                  setErrors({});
                }}
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

