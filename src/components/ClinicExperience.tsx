import React, { useState } from 'react';
import { ArrowRight, Eye, X } from 'lucide-react';
import { CLINIC_INTERIOR_IMAGE, CLINIC_GALLERY } from '../data/clinicData';

interface ClinicExperienceProps {
  onBookClick: () => void;
}

export const ClinicExperience: React.FC<ClinicExperienceProps> = ({ onBookClick }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 bg-[#fbf6f4] border-t border-[#edded8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <span className="text-[10px] font-sans-clean font-semibold tracking-[0.25em] text-[#a18f8b] uppercase block">
              THE CLINIC EXPERIENCE
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#3c2b2a] leading-tight">
              A private space, <br />
              <span className="italic">designed for you.</span>
            </h2>

            <p className="text-xs sm:text-sm font-sans-clean text-[#7b6966] font-light leading-relaxed max-w-md">
              Our clinic is a calm, discreet and welcoming environment where your comfort and care come first. Situated in a private setting, we ensure total confidentiality and peace of mind for every client.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setSelectedPhoto(CLINIC_INTERIOR_IMAGE)}
                className="group inline-flex items-center gap-3 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-6 py-3.5 rounded-full text-xs font-sans-clean font-medium tracking-[0.15em] uppercase transition-all duration-300 shadow-sm"
              >
                <span>TAKE A LOOK INSIDE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center border border-[#bfa8a2] hover:border-[#9b5d58] text-[#6f5956] px-6 py-3.5 rounded-full text-xs font-sans-clean font-medium tracking-[0.15em] uppercase transition-all duration-300"
              >
                SCHEDULE VISIT
              </button>
            </div>
          </div>

          {/* Right Gallery Grid Column */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Main Feature Room Photo */}
              <div 
                className="md:col-span-8 relative rounded-2xl overflow-hidden shadow-md border border-[#e2e0d8] aspect-[4/3] group cursor-pointer bg-[#edded8]"
                onClick={() => setSelectedPhoto(CLINIC_INTERIOR_IMAGE)}
              >
                <img
                  src={CLINIC_INTERIOR_IMAGE}
                  alt="Venus Beauty Aesthetics Treatment Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#9b5d58] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans-clean font-medium text-[#3c2b2a]">
                  Main Treatment Suite
                </div>
              </div>

              {/* 2 Stacked Smaller Photos */}
              <div className="md:col-span-4 flex flex-col gap-4">
                {CLINIC_GALLERY.slice(1, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl overflow-hidden shadow-sm border border-[#e2e0d8] aspect-[4/3] group cursor-pointer bg-[#edded8]"
                    onClick={() => setSelectedPhoto(item.url)}
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#9b5d58] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 shadow-md">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 border border-white/20">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto}
              alt="Clinic Interior View"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};

