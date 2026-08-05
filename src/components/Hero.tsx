import React from 'react';
import { ArrowRight, Star, Sparkles, Droplet } from 'lucide-react';
import { HERO_MODEL_IMAGE } from '../data/clinicData';

interface HeroProps {
  onViewTreatmentsClick: () => void;
  onAboutClick: () => void;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewTreatmentsClick,
  onAboutClick,
  onSelectCategory,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#fbf6f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8" data-aos="fade-right" data-aos-duration="1000">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] font-sans-clean font-semibold tracking-[0.25em] text-[#a18f8b] uppercase">
                NATURAL RESULTS. EXPERT CARE.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.08] text-[#3c2b2a] font-normal tracking-tight">
              Enhance your <br className="hidden sm:inline" />
              <span className="italic font-normal">confidence,</span> <br />
              embrace your <span className="italic font-normal">best.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-sans-clean text-[#7b6966] max-w-md font-light leading-relaxed">
              Advanced aesthetic treatments tailored to you. <br className="hidden sm:inline" />
              Subtle, natural results that bring out your best.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onViewTreatmentsClick}
                className="group inline-flex items-center gap-3 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-6 py-3.5 rounded-full text-xs font-sans-clean font-medium tracking-[0.15em] uppercase transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>VIEW TREATMENTS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onAboutClick}
                className="inline-flex items-center justify-center border border-[#bfa8a2] hover:border-[#9b5d58] text-[#6f5956] hover:text-[#3c2b2a] px-6 py-3.5 rounded-full text-xs font-sans-clean font-medium tracking-[0.15em] uppercase transition-all duration-300 bg-transparent hover:bg-white/50"
              >
                ABOUT THE CLINIC
              </button>
            </div>

            {/* Social Proof / Google Reviews */}
            <div className="pt-4 flex items-center gap-3 border-t border-[#ead8d1] max-w-sm">
              <div className="flex items-center gap-1 text-[#b47f6b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-sans-clean font-medium text-[#9b5d58]">
                <strong className="text-[#3c2b2a]">5.0</strong> Based on 200+ Google reviews
              </span>
            </div>
          </div>

          {/* Right Column Image & Floating Cards */}
          <div className="lg:col-span-6 relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Hero Main Image frame with curved top */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-[#ead8d1] bg-[#f2e2dc] aspect-[4/3] sm:aspect-[1.1/1]">
                <img
                  src={HERO_MODEL_IMAGE}
                  alt="Venus Beauty Aesthetics Treatment"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Overlay Card 1: Injectables */}
              <div 
                data-aos="zoom-in" 
                data-aos-delay="400"
                className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#f1e4df] max-w-[210px] sm:max-w-[230px] hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => onSelectCategory('injectables')}
              >
                <div className="w-8 h-8 rounded-lg bg-[#f8efec] text-[#9b5d58] flex items-center justify-center mb-2.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-lg font-medium text-[#3c2b2a] leading-tight">
                  Injectables
                </h3>
                <p className="text-[11px] font-sans-clean text-[#7f6d6a] mt-1 leading-snug">
                  Anti-wrinkle, dermal fillers & lip enhancement.
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-sans-clean font-semibold tracking-wider text-[#9b5d58] group-hover:text-[#3c2b2a] uppercase">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Floating Overlay Card 2: Skin Rejuvenation */}
              <div 
                data-aos="zoom-in" 
                data-aos-delay="600"
                className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#f1e4df] max-w-[210px] sm:max-w-[230px] hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => onSelectCategory('rejuvenation')}
              >
                <div className="w-8 h-8 rounded-lg bg-[#f8efec] text-[#9b5d58] flex items-center justify-center mb-2.5">
                  <Droplet className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-lg font-medium text-[#3c2b2a] leading-tight">
                  Skin Rejuvenation
                </h3>
                <p className="text-[11px] font-sans-clean text-[#7f6d6a] mt-1 leading-snug">
                  Advanced skin treatments for a healthy glow.
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-sans-clean font-semibold tracking-wider text-[#9b5d58] group-hover:text-[#3c2b2a] uppercase">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

