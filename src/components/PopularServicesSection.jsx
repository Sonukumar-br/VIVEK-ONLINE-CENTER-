import React from 'react';
import { popularServices } from '../data/services';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PopularServicesSection() {
  return (
    <section className="py-20 sm:py-24 bg-white relative border-b border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffd731] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>POPULAR REQUESTS</span>
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-black tracking-tight uppercase">
              Popular Services
            </h2>
            <p className="mt-3 text-base sm:text-lg font-medium text-black/80 max-w-xl">
              Quick access to our most requested online form, admit card, printing, and photo services.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-black bg-[#e9e9e9] hover:bg-[#ffd731] px-6 py-3 rounded-full border border-black transition-all shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Popular Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {popularServices.map((service) => (
            <ServiceCard key={service.id} service={service} compact={false} />
          ))}
        </div>

      </div>
    </section>
  );
}
