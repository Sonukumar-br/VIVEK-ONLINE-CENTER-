import React from 'react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-[#dceeff] border-b border-black py-16 sm:py-20 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ffd731] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
            VISUAL TOUR
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-black uppercase tracking-tight">
            Centre Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80 max-w-2xl mx-auto">
            Take a look inside Vivek Online Center. Explore our storefront, computer workstations, high-speed printing, and photo studio area.
          </p>
        </div>
      </div>

      <Gallery />
    </div>
  );
}
