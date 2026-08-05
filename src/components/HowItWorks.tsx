import React from 'react';
import { STEP_PROCESS } from '../data/clinicData';
import { Search, FileText, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartJourneyClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartJourneyClick }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5" />;
      case 1: return <FileText className="w-5 h-5" />;
      case 2: return <ShieldCheck className="w-5 h-5" />;
      case 3: return <Heart className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-[#f7ece7] border-t border-[#edded8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-[10px] font-sans-clean font-semibold tracking-[0.25em] text-[#a18f8b] uppercase block mb-3">
            HOW IT WORKS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#3c2b2a]">
            Your journey <span className="italic">with us</span>
          </h2>
        </div>

        {/* 4 Steps Horizontal Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEP_PROCESS.map((step, idx) => (
            <div
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-[#ead8d1] flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Step Number & Connector */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-luxury text-2xl font-light text-[#a18f8b] group-hover:text-[#9b5d58] transition-colors">
                    {step.number}.
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#f8efec] text-[#9b5d58] flex items-center justify-center group-hover:bg-[#9b5d58] group-hover:text-white transition-colors">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs font-sans-clean text-[#7f6d6a] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow for desktop (except last item) */}
              {idx < STEP_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-12 z-10 text-[#a3a79a]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

