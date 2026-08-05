import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { BEFORE_AFTER_RESULTS } from '../data/clinicData';

interface TransformationsProps {
  onBookClick: () => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onBookClick }) => {
  const [activeResultIndex, setActiveResultIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100

  const currentResult = BEFORE_AFTER_RESULTS[activeResultIndex];

  const handleNext = () => {
    setActiveResultIndex((prev) => (prev + 1) % BEFORE_AFTER_RESULTS.length);
  };

  const handlePrev = () => {
    setActiveResultIndex((prev) => (prev - 1 + BEFORE_AFTER_RESULTS.length) % BEFORE_AFTER_RESULTS.length);
  };

  return (
    <section id="results" className="py-20 bg-[#fbf6f4] border-t border-[#edded8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-6" data-aos="fade-up">
            <span className="text-[10px] font-sans-clean font-semibold tracking-[0.25em] text-[#a18f8b] uppercase block mb-3">
              REAL RESULTS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#3c2b2a] leading-tight">
              Transformations <br />
              <span className="italic">you can see.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between" data-aos="fade-up" data-aos-delay="100">
            <p className="text-xs sm:text-sm font-sans-clean text-[#7b6966] max-w-md font-light leading-relaxed mb-4 lg:text-right">
              Natural, subtle enhancements that help you look and feel like the best version of you.
            </p>

            {/* Slider Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#e3cfc9] hover:border-[#9b5d58] bg-white text-[#9b5d58] flex items-center justify-center transition-all hover:bg-[#9b5d58] hover:text-white"
                aria-label="Previous result"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-sans-clean font-medium text-[#a18f8b]">
                {activeResultIndex + 1} / {BEFORE_AFTER_RESULTS.length}
              </span>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#e3cfc9] hover:border-[#9b5d58] bg-white text-[#9b5d58] flex items-center justify-center transition-all hover:bg-[#9b5d58] hover:text-white"
                aria-label="Next result"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Result Carousel */}
        <div className="relative mb-12 lg:hidden" data-aos="fade-up">
          <div className="absolute inset-y-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-between pointer-events-none z-20 px-0 sm:px-2">
            <button
              onClick={handlePrev}
              className="pointer-events-auto -ml-2 sm:ml-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#e3cfc9] bg-white/95 backdrop-blur-sm text-[#9b5d58] shadow-lg flex items-center justify-center transition-all hover:bg-[#9b5d58] hover:text-white hover:scale-105"
              aria-label="Previous result"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={handleNext}
              className="pointer-events-auto -mr-2 sm:mr-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#e3cfc9] bg-white/95 backdrop-blur-sm text-[#9b5d58] shadow-lg flex items-center justify-center transition-all hover:bg-[#9b5d58] hover:text-white hover:scale-105"
              aria-label="Next result"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="px-0 sm:px-10">
            <button
              type="button"
              onClick={() => setActiveResultIndex(activeResultIndex)}
              className="w-full text-left focus:outline-none"
              aria-label={`Show ${currentResult.treatmentName} result`}
            >
              <div className="bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between h-full border-[#9b5d58] shadow-xl ring-1 ring-[#9b5d58]/20">
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#f2e2dc] grid grid-cols-2 gap-1 p-1 bg-[#f1e5e0]">
                    <div className="relative rounded-lg overflow-hidden h-full">
                      <img
                        src={currentResult.beforeImage}
                        alt={`${currentResult.treatmentName} Before`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] font-sans-clean uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xs">
                        BEFORE
                      </span>
                    </div>

                    <div className="relative rounded-lg overflow-hidden h-full">
                      <img
                        src={currentResult.afterImage}
                        alt={`${currentResult.treatmentName} After`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-2 right-2 bg-[#9b5d58] text-white text-[9px] font-sans-clean uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xs">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-sans-clean font-semibold tracking-wider text-[#a18f8b] uppercase">
                      {currentResult.category}
                    </span>
                    <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a]">
                      {currentResult.treatmentName}
                    </h3>
                    <p className="text-xs font-sans-clean text-[#7b6966] mt-1 font-light leading-relaxed">
                      {currentResult.details}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#eadad5] flex items-center justify-between text-[11px] font-sans-clean text-[#a18f8b]">
                  <span>{currentResult.sessionCount}</span>
                  <span className="font-medium text-[#9b5d58]">{currentResult.timeframe}</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Results Cards */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
          {BEFORE_AFTER_RESULTS.map((item, index) => {
            const isActive = index === activeResultIndex;
            return (
              <button
                key={item.id}
                type="button"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => setActiveResultIndex(index)}
                className="text-left focus:outline-none"
                aria-label={`Show ${item.treatmentName} result`}
              >
                <div
                  className={`bg-white rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between h-full ${
                    isActive
                      ? 'border-[#9b5d58] shadow-xl ring-1 ring-[#9b5d58]/20'
                      : 'border-[#f1e5e0] hover:border-[#c7b3ad] shadow-sm'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#f2e2dc] grid grid-cols-2 gap-1 p-1 bg-[#f1e5e0]">
                      <div className="relative rounded-lg overflow-hidden h-full">
                        <img
                          src={item.beforeImage}
                          alt={`${item.treatmentName} Before`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] font-sans-clean uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xs">
                          BEFORE
                        </span>
                      </div>

                      <div className="relative rounded-lg overflow-hidden h-full">
                        <img
                          src={item.afterImage}
                          alt={`${item.treatmentName} After`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-2 right-2 bg-[#9b5d58] text-white text-[9px] font-sans-clean uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xs">
                          AFTER
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-sans-clean font-semibold tracking-wider text-[#a18f8b] uppercase">
                        {item.category}
                      </span>
                      <h3 className="font-serif-luxury text-xl font-medium text-[#3c2b2a]">
                        {item.treatmentName}
                      </h3>
                      <p className="text-xs font-sans-clean text-[#7b6966] mt-1 font-light leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#eadad5] flex items-center justify-between text-[11px] font-sans-clean text-[#a18f8b]">
                    <span>{item.sessionCount}</span>
                    <span className="font-medium text-[#9b5d58]">{item.timeframe}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Focus Box for Active Selection */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#ead8d1] shadow-md" data-aos="fade-up">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#eadad5]">
            <div>
              <span className="text-[10px] font-sans-clean font-semibold tracking-wider text-[#a18f8b] uppercase">
                INTERACTIVE COMPARISON
              </span>
              <h3 className="font-serif-luxury text-2xl font-medium text-[#3c2b2a]">
                {currentResult.treatmentName} — Direct View
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-sans-clean text-[#a18f8b]">Drag slider:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-36 accent-[#9b5d58] cursor-pointer"
              />
              <span className="text-xs font-sans-clean font-semibold text-[#9b5d58] min-w-[36px]">
                {sliderPosition}%
              </span>
            </div>
          </div>

          {/* Interactive Split Image Frame */}
          <div className="relative aspect-[21/9] min-h-[220px] max-h-[380px] rounded-xl overflow-hidden bg-[#f2e2dc] border border-[#ead8d1]">
            {/* Background After Image */}
            <img
              src={currentResult.afterImage}
              alt="After Treatment"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-4 right-4 z-10 bg-[#9b5d58] text-white text-[10px] font-sans-clean uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              AFTER
            </span>

            {/* Foreground Before Image (Clipped) */}
            <div
              className="absolute top-0 left-0 bottom-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentResult.beforeImage}
                alt="Before Treatment"
                className="absolute top-0 left-0 h-full max-w-none object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 z-10 bg-black/70 text-white text-[10px] font-sans-clean uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                BEFORE
              </span>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize flex items-center justify-center z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#9b5d58] shadow-xl flex items-center justify-center -ml-3.5 border border-[#ead8d1]">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-sans-clean text-[#7f6d6a] max-w-xl">
              All results depicted are achieved directly at Venus Beauty Aesthetics. Individual results may vary based on skin condition and treatment plan.
            </p>
            <button
              onClick={onBookClick}
              className="group inline-flex items-center gap-2 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-5 py-2.5 rounded-full text-xs font-sans-clean font-medium tracking-wider uppercase transition-all shadow-sm"
            >
              <span>BOOK THIS RESULT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
