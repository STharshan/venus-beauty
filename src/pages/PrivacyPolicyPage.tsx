import React from 'react';
import logo from '../assets/images/logo.png';

interface PrivacyPolicyPageProps {
  onBackHome: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBackHome }) => {
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
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#7b6966]">
          This page explains how Venus Beauty Aesthetics collects, uses, and protects your personal information when you use the website or contact the clinic.
        </p>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-[#a18f8b]">
          Last updated: August 5, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#5f4f4d]">
          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">1. Information We Collect</h2>
            <p className="mt-3">We may collect the information you share with us directly, including your name, phone number, email address, treatment interests, and any message you send through the website or by email.</p>
            <p className="mt-3">We may also collect limited technical data such as your browser type, device information, and general usage data to help us understand how the site is used.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">2. How We Use Your Information</h2>
            <p className="mt-3">We use your information to respond to enquiries, arrange consultations, manage bookings, provide treatments, improve our services, and meet legal or regulatory obligations.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">3. Sharing Your Information</h2>
            <p className="mt-3">We only share personal information when necessary with trusted service providers who support our operations, or when required by law.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">4. Cookies and Analytics</h2>
            <p className="mt-3">The website may use cookies or similar technologies to improve performance, remember preferences, and understand site activity. You can manage cookies in your browser settings.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">5. Data Retention and Security</h2>
            <p className="mt-3">We keep personal information only for as long as needed for the purposes described above. Reasonable safeguards are used to protect your data against unauthorized access, misuse, or loss.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">6. Your Rights</h2>
            <p className="mt-3">Depending on your location and applicable law, you may have rights to access, correct, delete, or restrict your personal data, and to object to certain types of processing.</p>
          </section>

          <section className="rounded-3xl border border-[#ead8d1] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#3c2b2a]">7. Contact Us</h2>
            <p className="mt-3">If you have any questions about this Privacy Policy, please contact Venus Beauty Aesthetics through the contact details shown on the website.</p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;

