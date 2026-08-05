import React from 'react';
import { ArrowRight, Shield, HeartHandshake } from 'lucide-react';
import { LEAF_BANNER_IMAGE } from '../data/clinicData';

interface CtaBannerProps {
  onBookClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 bg-[#fbf6f4] border-t border-[#edded8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-[#f2e2dc] rounded-3xl overflow-hidden border border-[#e7d3cd] shadow-md grid grid-cols-1 lg:grid-cols-12"
          data-aos="zoom-in"
        >
          
          {/* Left Image Column */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px]">
            <img
              src={LEAF_BANNER_IMAGE}
              alt="Natural serenity"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f2e2dc]/60 hidden lg:block" />
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#3c2b2a] leading-tight">
                Ready to feel confident <br />
                <span className="italic">in your skin?</span>
              </h2>

              <p className="text-xs sm:text-sm font-sans-clean text-[#7b6966] font-light max-w-md leading-relaxed">
                Book your consultation today and let's create a plan just for you. Take the first step towards radiant, natural-looking confidence.
              </p>

              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="group inline-flex items-center gap-3 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-7 py-3.5 rounded-full text-xs font-sans-clean font-medium tracking-[0.15em] uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>BOOK CONSULTATION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 2 Feature Badges at Bottom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#e7d3cd]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/80 text-[#9b5d58] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-medium text-[#3c2b2a]">
                    Discreet & Private
                  </h4>
                  <p className="text-[11px] font-sans-clean text-[#7f6d6a] mt-0.5">
                    A confidential and professional environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/80 text-[#9b5d58] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-medium text-[#3c2b2a]">
                    Free Consultation
                  </h4>
                  <p className="text-[11px] font-sans-clean text-[#7f6d6a] mt-0.5">
                    No obligation, just expert advice for you.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

