import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Treatments } from './components/Treatments';
import { SkinConcerns } from './components/SkinConcerns';
import { ClinicExperience } from './components/ClinicExperience';
import { HowItWorks } from './components/HowItWorks';
import { Transformations } from './components/Transformations';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricesSection } from './components/PricesSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import { Treatment } from './types';

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<Treatment | null>(null);
  const [selectedTreatmentForDetail, setSelectedTreatmentForDetail] = useState<Treatment | null>(null);
  const [initialConcernTitle, setInitialConcernTitle] = useState<string | undefined>(undefined);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });

    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (nextPath: string) => {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
      setPathname(nextPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (treatment?: Treatment | null, concernTitle?: string) => {
    setSelectedTreatmentForBooking(treatment || null);
    setInitialConcernTitle(concernTitle);
    setIsBookingOpen(true);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategoryFilter(category);
    const element = document.getElementById('treatments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (pathname === '/privacy-policy') {
    return <PrivacyPolicyPage onBackHome={() => navigate('/')} />;
  }

  if (pathname === '/terms-conditions') {
    return <TermsPage onBackHome={() => navigate('/')} />;
  }

  return (
    <div className="min-h-screen bg-[#fbf6f4] font-sans-clean text-[#3c2b2a] antialiased overflow-x-hidden">
      
      {/* Header Bar */}
      <Header onBookClick={() => handleOpenBooking()} />

      {/* Main Content Sections matching Reference Image exactly */}
      <main>
        {/* Hero Section */}
        <Hero
          onViewTreatmentsClick={() => handleSelectCategory('all')}
          onAboutClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectCategory={handleSelectCategory}
        />

        {/* Treatments Section */}
        <Treatments
          onSelectTreatment={(t) => setSelectedTreatmentForDetail(t)}
          onBookTreatment={(t) => handleOpenBooking(t)}
          selectedCategoryFilter={selectedCategoryFilter}
        />

        {/* Skin Concerns Grid Section */}
        <SkinConcerns
          onSelectTreatment={(t) => setSelectedTreatmentForDetail(t)}
          onBookConsultation={(title) => handleOpenBooking(null, title)}
        />

        {/* Clinic Experience Section */}
        <ClinicExperience onBookClick={() => handleOpenBooking()} />

        {/* How It Works Section */}
        <HowItWorks onStartJourneyClick={() => handleOpenBooking()} />

        {/* Transformations / Before & After Section */}
        <Transformations onBookClick={() => handleOpenBooking()} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Transparent Price Guide Section */}
        <PricesSection onBookTreatment={(t) => handleOpenBooking(t)} />

        {/* Bottom CTA Banner */}
        <CtaBanner onBookClick={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onBookClick={() => handleOpenBooking()}
        onSelectCategory={handleSelectCategory}
        onOpenPrivacyPolicy={() => navigate('/privacy-policy')}
        onOpenTerms={() => navigate('/terms-conditions')}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTreatment={selectedTreatmentForBooking}
        initialConcern={initialConcernTitle}
      />

      <TreatmentDetailModal
        treatment={selectedTreatmentForDetail}
        onClose={() => setSelectedTreatmentForDetail(null)}
        onBook={(t) => handleOpenBooking(t)}
      />

    </div>
  );
}
