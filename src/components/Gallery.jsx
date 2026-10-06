import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryItems = [
    {
      src: '/images/centre-front.jpg',
      title: 'Storefront Entrance',
      category: 'Exterior',
      alt: 'Vivek Online Center Cyber Cafe Storefront',
      badgeBg: 'bg-[#ffd731]'
    },
    {
      src: '/images/centre-interior.jpg',
      title: 'Customer Workstations',
      category: 'Interior',
      alt: 'Vivek Online Center Interior Setup',
      badgeBg: 'bg-[#55db9c]'
    },
    {
      src: '/images/computer-setup.jpg',
      title: 'High-Speed Workstation',
      category: 'Equipment',
      alt: 'Computer setup for online form filling',
      badgeBg: 'bg-[#4da2ff]'
    },
    {
      src: '/images/printing-service.jpg',
      title: 'HD Printing & Scanning Station',
      category: 'Services',
      alt: 'Color printer and scanner setup',
      badgeBg: 'bg-[#e9ccff]'
    },
    {
      src: '/images/passport-photo.jpg',
      title: 'Instant Passport Photo Desk',
      category: 'Photo',
      alt: 'Instant passport photo setup',
      badgeBg: 'bg-[#ffd731]'
    },
    {
      src: '/images/vivek-online-profile.jpg',
      title: 'Digital Services Branding',
      category: 'Overview',
      alt: 'Vivek Online Center Branding Profile',
      badgeBg: 'bg-[#55db9c]'
    }
  ];

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev + 1) % galleryItems.length);
    }
  }, [selectedImageIndex, galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [selectedImageIndex, galleryItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <section className="py-20 sm:py-24 bg-white relative border-b-2 border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ffd731] border-2 border-black text-black text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Camera className="w-3.5 h-3.5" />
            <span>OUR FACILITY</span>
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-black tracking-tight uppercase">
            TAKE A LOOK INSIDE
          </h2>
          <p className="text-base sm:text-lg font-bold text-black/80">
            Visit our centre in Kurhma. A glimpse of our store, workstations, and printing setup.
          </p>
        </div>

        {/* Responsive Sticker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-[28px] overflow-hidden bg-[#e9e9e9] border-2 border-black cursor-pointer transition-all duration-200 hover:-translate-y-1.5"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImageIndex(index)}
              aria-label={`View full image: ${item.title}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2.5 rounded-full bg-white text-black border border-black">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-black">
                  <span className={`inline-block px-3 py-0.5 rounded-full ${item.badgeBg} border border-black text-[10px] font-black uppercase text-black mb-1`}>
                    {item.category}
                  </span>
                  <h3 className="font-heading font-black text-base text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          <div
            className="relative max-w-5xl w-full bg-white border-2 border-black rounded-[30px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-white text-black rounded-full border border-black hover:bg-[#ffd731] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Main Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#000000]">
              <img
                src={galleryItems[selectedImageIndex].src}
                alt={galleryItems[selectedImageIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Footer Info & Controls */}
            <div className="p-6 bg-white flex items-center justify-between border-t-2 border-black">
              <div>
                <span className="text-xs text-black font-extrabold uppercase tracking-wider bg-[#55db9c] px-3 py-1 rounded-full border border-black inline-block mb-1">
                  {galleryItems[selectedImageIndex].category} ({selectedImageIndex + 1} of {galleryItems.length})
                </span>
                <h3 className="font-heading font-black text-xl text-black">
                  {galleryItems[selectedImageIndex].title}
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-[#e9e9e9] hover:bg-[#ffd731] text-black rounded-full border border-black transition-colors"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 bg-[#e9e9e9] hover:bg-[#ffd731] text-black rounded-full border border-black transition-colors"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
