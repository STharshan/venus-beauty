import React, { useState } from 'react';
import { 
  Sparkles, Maximize2, Grid, Sun, Layers, Zap, Droplets, HeartHandshake, CheckCircle2, ArrowRight
} from 'lucide-react';
import { SKIN_CONCERNS, TREATMENTS } from '../data/clinicData';
import { SkinConcern, Treatment } from '../types';

interface SkinConcernsProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookConsultation: (concernTitle?: string) => void;
}

export const SkinConcerns: React.FC<SkinConcernsProps> = ({
  onSelectTreatment,
  onBookConsultation,
}) => {
  const [selectedConcern, setSelectedConcern] = useState<SkinConcern | null>(SKIN_CONCERNS[0]);

  // Icon mapping helper
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5" />;
      case 'Grid': return <Grid className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const recommendedTreatments = selectedConcern
    ? TREATMENTS.filter(t => selectedConcern.recommendedTreatmentIds.includes(t.id))
    : [];

  return (
    <section id="skin-concerns" className="py-20 bg-[#f7ece7] relative overflow-hidden">
      {/* Background Watermark Logo */}
      <div className="absolute right-[-2%] bottom-[-5%] text-[#e6e3da] font-serif-luxury text-[260px] lg:text-[340px] font-light leading-none select-none pointer-events-none opacity-50 z-0">
        VA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-6" data-aos="fade-up">
            <span className="text-[10px] font-sans-clean font-semibold tracking-[0.25em] text-[#a18f8b] uppercase block mb-3">
              SKIN CONCERNS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#3c2b2a] leading-tight">
              What would you like <br />
              <span className="italic">to improve?</span>
            </h2>
          </div>

          <div className="lg:col-span-6" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs sm:text-sm font-sans-clean text-[#7b6966] max-w-md font-light leading-relaxed">
              Find the right treatments to help you feel confident in your skin again. Select a concern below to see tailored recommendations.
            </p>
          </div>
        </div>

        {/* 2x4 Grid of Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {SKIN_CONCERNS.map((concern, index) => {
            const isSelected = selectedConcern?.id === concern.id;
            return (
              <div
                key={concern.id}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                onClick={() => setSelectedConcern(concern)}
                className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[140px] sm:min-h-[160px] group border ${
                  isSelected
                    ? 'bg-[#9b5d58] text-white border-[#9b5d58] shadow-lg scale-[1.02]'
                    : 'bg-white/90 hover:bg-white text-[#3c2b2a] border-[#ead8d1] hover:border-[#9b5d58]/50 shadow-sm'
                }`}
              >
                <div className={`p-2.5 rounded-full transition-colors mb-3 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-[#f8efec] text-[#9b5d58] group-hover:bg-[#9b5d58] group-hover:text-white'
                }`}>
                  {renderIcon(concern.iconName)}
                </div>
                <h3 className={`font-serif-luxury text-base sm:text-lg font-medium leading-tight ${
                  isSelected ? 'text-white' : 'text-[#3c2b2a]'
                }`}>
                  {concern.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Recommended Solutions Panel for Selected Concern */}
        {selectedConcern && (
          <div 
            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#ead8d1] shadow-md animate-fadeIn"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#eadad5]">
              <div>
                <span className="text-[10px] font-sans-clean font-semibold tracking-widest text-[#a18f8b] uppercase">
                  RECOMMENDED SOLUTION FOR
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#3c2b2a] mt-1">
                  {selectedConcern.title}
                </h3>
                <p className="text-xs font-sans-clean text-[#7b6966] mt-1 max-w-xl">
                  {selectedConcern.description}
                </p>
              </div>

              <button
                onClick={() => onBookConsultation(selectedConcern.title)}
                className="group inline-flex items-center gap-2 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-5 py-3 rounded-full text-xs font-sans-clean font-medium tracking-wider uppercase transition-all duration-300 shadow-sm whitespace-nowrap self-start md:self-auto"
              >
                <span>BOOK FOR THIS CONCERN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Recommended Treatments List */}
            <div className="pt-6">
              <span className="text-[11px] font-sans-clean font-medium tracking-wider text-[#9b5d58] uppercase block mb-4">
                BEST MATCHING TREATMENTS ({recommendedTreatments.length}):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendedTreatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    onClick={() => onSelectTreatment(treatment)}
                    className="p-4 rounded-xl border border-[#f1e5e0] hover:border-[#9b5d58] bg-[#faf9f5] hover:bg-white transition-all duration-300 cursor-pointer flex items-center gap-4 group"
                  >
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-14 h-14 rounded-lg object-cover bg-[#eee]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif-luxury text-base font-medium text-[#3c2b2a] truncate group-hover:text-[#9b5d58]">
                        {treatment.title}
                      </h4>
                      <p className="text-[11px] font-sans-clean text-[#a18f8b] truncate">
                        {treatment.price} • {treatment.duration}
                      </p>
                      <div className="text-[10px] font-sans-clean font-semibold tracking-wider text-[#9b5d58] uppercase mt-1 flex items-center gap-1">
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

