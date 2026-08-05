import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/images/logo.png';

interface FooterProps {
  onBookClick: () => void;
  onSelectCategory: (cat: string) => void;
  onOpenPrivacyPolicy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onBookClick,
  onSelectCategory,
  onOpenPrivacyPolicy,
  onOpenTerms,
}) => {
  return (
    <footer id="contact" className="bg-[#f7ece7] pt-16 pb-12 border-t border-[#ead8d1] text-[#3c2b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#ead8d1]">
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Venus Beauty Aesthetics logo"
                className="w-20 h-20 rounded-full object-cover shadow-sm ring-1 ring-black/5"
              />
            </a>

            <p className="text-xs font-sans-clean text-[#7b6966] font-light max-w-sm leading-relaxed">
              Medical-grade aesthetic clinic dedicated to subtle, natural enhancements tailored to your unique features.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/venusbeautyandaesthetics/"
                className="w-8 h-8 rounded-full bg-[#f3e0db] hover:bg-[#9b5d58] hover:text-white flex items-center justify-center transition-colors text-[#9b5d58]"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/Venus_aesthetics_?fbclid=IwY2xjawTgNwVleHRuA2FlbQIxMABicmlkETFNRTNmWkVRbXhnUVN2cUw2c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHo9imNEf0pAp_7GiXqoZHjldTk4oYqV9_e26GhTradV1qcv7wKdwz-NfKYwK_aem_WAucTQsyilENURF-Dwqsqg"
                className="w-8 h-8 rounded-full bg-[#f3e0db] hover:bg-[#9b5d58] hover:text-white flex items-center justify-center transition-colors text-[#9b5d58]"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-sans-clean font-semibold tracking-[0.2em] text-[#a18f8b] uppercase">
              TREATMENTS
            </h4>
            <ul className="space-y-2 text-xs font-sans-clean text-[#6f5f5c]">
              <li><a href="#treatments" onClick={() => onSelectCategory('injectables')} className="hover:text-[#3c2b2a] transition-colors">Injectables</a></li>
              <li><a href="#treatments" onClick={() => onSelectCategory('rejuvenation')} className="hover:text-[#3c2b2a] transition-colors">Skin Rejuvenation</a></li>
              <li><a href="#treatments" onClick={() => onSelectCategory('rejuvenation')} className="hover:text-[#3c2b2a] transition-colors">Skin Boosters</a></li>
              <li><a href="#treatments" onClick={() => onSelectCategory('body')} className="hover:text-[#3c2b2a] transition-colors">Body Treatments</a></li>
              <li><a href="#treatments" onClick={() => onSelectCategory('all')} className="hover:text-[#3c2b2a] transition-colors">Packages</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-sans-clean font-semibold tracking-[0.2em] text-[#a18f8b] uppercase">
              INFORMATION
            </h4>
            <ul className="space-y-2 text-xs font-sans-clean text-[#6f5f5c]">
              <li><a href="#about" className="hover:text-[#3c2b2a] transition-colors">About Us</a></li>
              <li><a href="#prices" className="hover:text-[#3c2b2a] transition-colors">Prices</a></li>
              <li><a href="#results" className="hover:text-[#3c2b2a] transition-colors">Results</a></li>
              <li><a href="#about" className="hover:text-[#3c2b2a] transition-colors">Aftercare</a></li>
              <li><a href="#skin-concerns" className="hover:text-[#3c2b2a] transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-sans-clean font-semibold tracking-[0.2em] text-[#a18f8b] uppercase">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs font-sans-clean text-[#6f5f5c]">
              <li>
                <a href="tel:07792584920" className="flex items-center gap-2 transition-colors hover:text-[#9b5d58]">
                  <Phone className="w-3.5 h-3.5 text-[#9b5d58] shrink-0" />
                  <span>07792 584920</span>
                </a>
              </li>
              <li>
                <a href="mailto:catbishop@hotmail.com" className="flex items-center gap-2 transition-colors hover:text-[#9b5d58]">
                  <Mail className="w-3.5 h-3.5 text-[#9b5d58] shrink-0" />
                  <span className="truncate">catbishop@hotmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/9VLaadGU4pPyRTVe9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-[#9b5d58]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#9b5d58] shrink-0 mt-0.5" />
                  <span>75-77 Greenhills Rd Eastwood, Nottingham, United Kingdom, NG16 3FT</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-sans-clean font-semibold tracking-[0.2em] text-[#a18f8b] uppercase">
              OPENING HOURS
            </h4>
            <ul className="space-y-1.5 text-xs font-sans-clean text-[#6f5f5c]">
              <li className="flex justify-between">
                <span>Monday</span>
                <span className="text-[#b8a29d]">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Tue - Fri</span>
                <span className="font-medium text-[#3c2b2a]">10:00am - 7:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-[#3c2b2a]">10:00am - 3:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-[#b8a29d]">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans-clean text-[#a18f8b] gap-4">
          <p>© 2026 Venus Beauty Aesthetics. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={onOpenPrivacyPolicy} className="hover:text-[#3c2b2a] transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={onOpenTerms} className="hover:text-[#3c2b2a] transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

