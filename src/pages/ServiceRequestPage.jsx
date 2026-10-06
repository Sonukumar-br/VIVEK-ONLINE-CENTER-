import React from 'react';
import ServiceRequest from '../components/ServiceRequest';

export default function ServiceRequestPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-[#dceeff] border-b border-black py-16 sm:py-20 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4da2ff] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
            ONLINE INQUIRY
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-black uppercase tracking-tight">
            Service Request Form
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80 max-w-2xl mx-auto">
            Submit your requirements below and our digital service experts will connect with you promptly.
          </p>
        </div>
      </div>

      <ServiceRequest />
    </div>
  );
}
