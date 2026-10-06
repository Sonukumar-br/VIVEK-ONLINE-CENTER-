import React, { useState } from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function ServiceSection({ showFilter = true }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()) || 
                           (selectedCategory === 'online' && s.category === 'Online Services') ||
                           (selectedCategory === 'document' && s.category === 'Document Services') ||
                           (selectedCategory === 'photo' && s.category === 'Photo Services'));

  return (
    <section className="py-20 sm:py-24 bg-[#dceeff] relative border-b border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#55db9c] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
            CATALOG &amp; SERVICES
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-black tracking-tight uppercase">
            Comprehensive Digital Services
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80">
            Fast, reliable, and convenient local digital assistance right in your neighborhood.
          </p>

          {/* Filter Tabs if enabled */}
          {showFilter && (
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 p-2 bg-white rounded-full border border-black inline-flex">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all border border-black ${
                  selectedCategory === 'all'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-[#ffd731]'
                }`}
              >
                All Services ({services.length})
              </button>
              <button
                onClick={() => setSelectedCategory('online')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all border border-black ${
                  selectedCategory === 'online'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-[#ffd731]'
                }`}
              >
                Online Services
              </button>
              <button
                onClick={() => setSelectedCategory('document')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all border border-black ${
                  selectedCategory === 'document'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-[#ffd731]'
                }`}
              >
                Document Services
              </button>
              <button
                onClick={() => setSelectedCategory('photo')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all border border-black ${
                  selectedCategory === 'photo'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-[#ffd731]'
                }`}
              >
                Photo Services
              </button>
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} compact={false} />
          ))}
        </div>

      </div>
    </section>
  );
}
