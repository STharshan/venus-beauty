import React from 'react';
import logo from '../assets/images/logo.png';

interface TermsPageProps {
  onBackHome: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBackHome }) => {
  return (
    <main className="min-h-screen bg-[#fbf6f4] text-[#3c2b2a]">
      <div className="border-b border-[#ead8d1] bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={onBackHome} className="flex items-center gap-3 text-left">
            <img src={logo} alt="Venus Beauty Aesthetics logo" className="h-12 w-12 rounded-full object-cover shadow-sm ring-1 ring-black/5" />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl uppercase leading-none tracking-wide text-[#3c2b2a]">
                Venus
              </span>
              <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] text-[#a18f8b]">
                Beauty Aesthetics
              </span>
            </div>
          </button>
          <button
            onClick={onBackHome}
            className="rounded-full border border-[#e2c8c2] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#9b5d58] transition-colors hover:border-[#9b5d58] hover:bg-[#fff7f5]"
          >
            Back to home
          </button>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a18f8b]">
          Legal
        </span>
        <h1 className="mt-3 font-serif-luxury text-4xl font-normal tracking-tight text-[#3c2b2a] sm:text-5xl">
          Terms and Conditions
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#7b6966]">
          These terms set out the basis on which you may use the Venus Beauty Aesthetics website and the information provided here.
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-[#a18f8b]">
          Last updated: August 5, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#5f4f4d]">
          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">1. Website Use</h2>
            <p className="mt-3">The content on this website is provided for general information only. You agree not to use the site for unlawful purposes or in a way that could damage, disable, or interfere with its operation.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">2. Accuracy of Information</h2>
            <p className="mt-3">We make reasonable efforts to keep information up to date, but we do not guarantee that all content will always be complete, current, or error-free. Please contact us directly if you need to confirm any treatment or booking detail.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">3. Intellectual Property</h2>
            <p className="mt-3">All text, images, graphics, branding, and layout on this website are owned by or licensed to Venus Beauty Aesthetics unless otherwise stated. You may not reproduce or redistribute site content without permission.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">4. Third-Party Links</h2>
            <p className="mt-3">The website may include links to third-party services such as social platforms or maps. We are not responsible for the content, availability, or privacy practices of external websites.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">5. Liability</h2>
            <p className="mt-3">We are not liable for loss or damage arising from use of the website, except where liability cannot be excluded by law. The site does not replace professional advice or in-person consultation.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">6. Changes to These Terms</h2>
            <p className="mt-3">We may update these terms from time to time. Any changes will take effect when posted on this page, so please check back periodically.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">7. Contact Us</h2>
            <p className="mt-3">If you have questions about these terms, please use the contact details provided elsewhere on the website.</p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;

