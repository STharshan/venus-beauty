import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar, Phone } from 'lucide-react';
import logo from '../assets/images/logo.png';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TREATMENTS', href: '#treatments' },
    { name: 'SKIN CONCERNS', href: '#skin-concerns' },
    { name: 'PRICES', href: '#prices' },
    { name: 'RESULTS', href: '#results' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbf6f4]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#ead8d1]'
          : 'bg-[#fbf6f4] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Venus Beauty Aesthetics logo"
            className="w-14 h-14 rounded-full object-cover shadow-sm ring-1 ring-black/5 group-hover:scale-[1.02] transition-transform"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-sans-clean font-medium tracking-[0.18em] text-[#9b5d58] hover:text-[#3c2b2a] transition-colors uppercase py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9b5d58] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onBookClick}
            className="group inline-flex items-center gap-2 bg-[#9b5d58] hover:bg-[#7f4d49] text-white px-5 py-2.5 rounded-full text-[11px] font-sans-clean font-medium tracking-[0.15em] uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>BOOK CONSULTATION</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onBookClick}
            className="sm:hidden bg-[#9b5d58] text-white p-2 rounded-full text-xs"
            aria-label="Book Consultation"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#9b5d58] hover:bg-[#f1e5e0] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf6f4] border-b border-[#ead8d1] px-4 pt-4 pb-6 space-y-3 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-sans-clean font-medium tracking-[0.18em] text-[#9b5d58] hover:text-[#3c2b2a] py-2 border-b border-[#f2e2dc]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#9b5d58] text-white px-5 py-3 rounded-full text-xs font-sans-clean font-medium tracking-[0.15em] uppercase"
            >
              <span>BOOK CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

