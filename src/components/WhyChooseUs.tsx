import React from 'react';
import { WHY_CHOOSE_US } from '../data/clinicData';
import { Award, Sparkles, CheckCircle2, Heart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-[#f7ece7] border-t border-[#edded8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-left" data-aos="fade-up">
          <span className="text-[10px] font-sans-clean font-semibold tracking-[0.25em] text-[#a18f8b] uppercase block mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#3c2b2a]">
            Exceptional care, <span className="italic">every time.</span>
          </h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white p-6 rounded-2xl border border-[#ead8d1] hover:border-[#9b5d58]/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f8efec] text-[#9b5d58] flex items-center justify-center mb-4 group-hover:bg-[#9b5d58] group-hover:text-white transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-sans-clean text-[#7f6d6a] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

