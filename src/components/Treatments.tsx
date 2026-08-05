import React, { useState } from 'react';
import { ArrowRight, Info, Clock, Sparkles } from 'lucide-react';
import { Treatment } from '../types';
import { TREATMENTS } from '../data/clinicData';

interface TreatmentsProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatment: Treatment) => void;
  selectedCategoryFilter?: string;
}

export const Treatments: React.FC<TreatmentsProps> = ({
  onSelectTreatment,
  onBookTreatment,
  selectedCategoryFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter || 'all');

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <section id="treatments" className="py-20 bg-[#fbf6f4] border-t border-[#edded8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-6" data-aos="fade-up">
            <span className="text-[10px] font-sans-clean font-semibold tracking-[0.25em] text-[#a18f8b] uppercase block mb-3">
              OUR TREATMENTS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#3c2b2a] leading-tight">
              Expert treatments, <br />
              <span className="italic">natural results.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs sm:text-sm font-sans-clean text-[#7b6966] max-w-md font-light leading-relaxed mb-4 lg:text-right">
              We offer a wide range of advanced aesthetic treatments using medical-grade products and the latest techniques.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="group inline-flex items-center gap-2 text-xs font-sans-clean font-semibold tracking-[0.15em] text-[#9b5d58] hover:text-[#3c2b2a] uppercase"
            >
              <span>VIEW ALL TREATMENTS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#ead8d1]" data-aos="fade-up" data-aos-delay="150">
          {[
            { id: 'all', label: 'ALL TREATMENTS' },
            { id: 'injectables', label: 'INJECTABLES' },
            { id: 'rejuvenation', label: 'SKIN REJUVENATION' },
            { id: 'skincare', label: 'SKINCARE & PEELS' },
            { id: 'body', label: 'BODY & CONTOURING' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-[10px] font-sans-clean font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#9b5d58] text-white shadow-sm'
                  : 'bg-white/80 hover:bg-white text-[#7b6966] border border-[#e2e0d8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of 6 Cards (Portrait Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {filteredTreatments.map((treatment, index) => (
            <div
              key={treatment.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl overflow-hidden border border-[#f1e5e0] hover:border-[#9b5d58]/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col group cursor-pointer"
              onClick={() => onSelectTreatment(treatment)}
            >
              {/* Card Image Thumbnail */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f2e2dc]">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-sans-clean font-semibold text-[#9b5d58] uppercase">
                  {treatment.price}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif-luxury text-lg font-medium text-[#3c2b2a] leading-snug group-hover:text-[#9b5d58] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-[13px] font-sans-clean text-[#7f6d6a] mt-1.5 leading-snug line-clamp-3">
                    {treatment.shortDescription}
                  </p>
                </div>

                {/* Footer Link */}
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelectTreatment(treatment);
                  }}
                  className="pt-2 border-t border-[#f2f0ea] flex items-center justify-between text-[10px] font-sans-clean font-semibold tracking-wider text-[#9b5d58] uppercase w-full text-left"
                  aria-label={`Learn more about ${treatment.title}`}
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">LEARN MORE</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

