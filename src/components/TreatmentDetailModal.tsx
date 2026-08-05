import React from 'react';
import { X, Clock, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatment: Treatment) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBook,
}) => {
  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-detail-title"
    >
      <div className="relative w-full max-w-3xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2rem)] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#ead8d1] flex flex-col my-2 sm:my-4">
        
        {/* Header Image */}
        <div className="relative h-48 sm:h-64 md:h-72 bg-[#f2e2dc] shrink-0">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/55 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg backdrop-blur-sm"
            aria-label="Close treatment details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] font-sans-clean font-semibold tracking-widest text-[#e3cfc9] uppercase block mb-1">
              {treatment.subtitle || 'MEDICAL AESTHETIC TREATMENT'}
            </span>
            <h2 id="treatment-detail-title" className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
              {treatment.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8 space-y-6 overflow-y-auto">
          
          {/* Quick Specs Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#fbf6f4] border border-[#f1e5e0]">
            <div>
              <span className="text-[9px] font-sans-clean font-semibold text-[#a18f8b] uppercase block">
                PRICE
              </span>
              <span className="font-serif-luxury text-lg font-medium text-[#3c2b2a]">
                {treatment.price}
              </span>
            </div>
            <div>
              <span className="text-[9px] font-sans-clean font-semibold text-[#a18f8b] uppercase block">
                DURATION
              </span>
              <span className="text-xs font-sans-clean font-medium text-[#3c2b2a]">
                {treatment.duration}
              </span>
            </div>
            <div>
              <span className="text-[9px] font-sans-clean font-semibold text-[#a18f8b] uppercase block">
                DOWNTIME
              </span>
              <span className="text-xs font-sans-clean font-medium text-[#3c2b2a]">
                {treatment.downtime}
              </span>
            </div>
            <div>
              <span className="text-[9px] font-sans-clean font-semibold text-[#a18f8b] uppercase block">
                RESULTS LAST
              </span>
              <span className="text-xs font-sans-clean font-medium text-[#3c2b2a]">
                {treatment.resultsLast}
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a] mb-2">
              Treatment Overview
            </h3>
            <p className="text-xs sm:text-sm font-sans-clean text-[#7b6966] font-light leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Benefits Grid */}
          <div>
            <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a] mb-3">
              Key Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-sans-clean text-[#6f5956]">
                  <CheckCircle2 className="w-4 h-4 text-[#9b5d58] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#eadad5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-sans-clean text-[#a18f8b]">
              <ShieldCheck className="w-4 h-4 text-[#9b5d58]" />
              <span>Administered by qualified medical practitioners</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBook(treatment);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-8 py-3.5 rounded-full text-xs font-sans-clean font-medium tracking-[0.15em] uppercase transition-all shadow-md"
            >
              <span>BOOK THIS TREATMENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

