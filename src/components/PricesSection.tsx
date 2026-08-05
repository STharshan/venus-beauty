import React, { useState } from 'react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface PricesSectionProps {
  onBookTreatment: (treatment: Treatment) => void;
}

export const PricesSection: React.FC<PricesSectionProps> = ({ onBookTreatment }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filtered = activeTab === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeTab);

  return (
    <section id="prices" className="py-20 bg-[#f7ece7] border-t border-[#edded8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-6" data-aos="fade-up">
            <span className="text-[10px] font-sans-clean font-semibold tracking-[0.25em] text-[#a18f8b] uppercase block mb-3">
              TRANSPARENT PRICING
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#3c2b2a] leading-tight">
              Treatment <span className="italic">Price Guide</span>
            </h2>
          </div>

          <div className="lg:col-span-6" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs sm:text-sm font-sans-clean text-[#7b6966] font-light leading-relaxed">
              Clear, honest pricing with no hidden fees. All treatments include a comprehensive medical consultation, patch test where required, and dedicated aftercare follow-up.
            </p>
          </div>
        </div>

        {/* Pricing Table Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ead8d1] shadow-md" data-aos="fade-up">
          
          {/* Table Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-[#eadad5]">
            {[
              { id: 'all', label: 'ALL PROCEDURES' },
              { id: 'injectables', label: 'INJECTABLES & FILLERS' },
              { id: 'rejuvenation', label: 'SKIN REJUVENATION' },
              { id: 'skincare', label: 'PEELS & SKINCARE' },
              { id: 'body', label: 'BODY CONTOURING' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-[10px] font-sans-clean font-semibold tracking-wider uppercase transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#9b5d58] text-white shadow-sm'
                    : 'bg-[#fbf6f4] hover:bg-[#f1e5e0] text-[#7b6966]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* List Rows */}
          <div className="divide-y divide-[#f2f0ea]">
            {filtered.map((t) => (
              <div
                key={t.id}
                className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#faf9f5] px-3 rounded-xl transition-colors group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a]">
                      {t.title}
                    </h3>
                    <span className="text-[10px] font-sans-clean text-[#a18f8b] bg-[#eadad5] px-2 py-0.5 rounded-md">
                      {t.duration}
                    </span>
                  </div>
                  <p className="text-xs font-sans-clean text-[#7f6d6a] font-light max-w-xl">
                    {t.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0">
                  <span className="font-serif-luxury text-2xl font-medium text-[#3c2b2a]">
                    {t.price}
                  </span>
                  <button
                    onClick={() => onBookTreatment(t)}
                    className="inline-flex items-center gap-1.5 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-4 py-2 rounded-full text-[10px] font-sans-clean font-semibold tracking-wider uppercase transition-all shadow-sm"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Note */}
          <div className="mt-8 pt-6 border-t border-[#eadad5] flex flex-wrap items-center justify-between text-xs font-sans-clean text-[#a18f8b] gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#9b5d58]" />
              <span>Includes pre-procedure consultation and post-procedure checkup</span>
            </div>
            <span className="font-medium text-[#9b5d58]">Interest-Free Finance Options Available</span>
          </div>

        </div>

      </div>
    </section>
  );
};

