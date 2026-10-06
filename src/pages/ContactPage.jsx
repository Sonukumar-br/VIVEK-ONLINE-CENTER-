import React from 'react';
import Contact from '../components/Contact';
import ServiceRequest from '../components/ServiceRequest';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-[#dceeff] border-b border-black py-16 sm:py-20 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#55db9c] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
            REACH OUT
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-black uppercase tracking-tight">
            Contact Vivek Online Center
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80 max-w-2xl mx-auto">
            Have questions about an online form or need document printouts? Contact us directly or visit our local centre.
          </p>
        </div>
      </div>

      <Contact />
      <ServiceRequest />
    </div>
  );
}
