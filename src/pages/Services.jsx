import React from 'react';
import ServiceSection from '../components/ServiceSection';
import ServiceRequest from '../components/ServiceRequest';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-[#dceeff] border-b border-black py-12 sm:py-16 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#55db9c] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
            सेवा सूची | OUR CATALOG
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-black uppercase tracking-tight">
            समस्त डिजिटल व ऑनलाइन सेवाएं
          </h1>
          <p className="mt-3 text-base sm:text-lg font-medium text-black/80 max-w-2xl mx-auto">
            पैन कार्ड, जाति/आय/निवास प्रमाणपत्र, फोटोकॉपी, आधार पैसा निकासी, मनी ट्रांसफर, रिचार्ज व टिकट बुकिंग।
          </p>
        </div>
      </div>

      {/* Services Section with Filter */}
      <ServiceSection showFilter={true} />

      {/* Request Section */}
      <ServiceRequest />
    </div>
  );
}
