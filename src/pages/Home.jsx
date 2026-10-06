import React from 'react';
import Hero from '../components/Hero';
import PopularServicesSection from '../components/PopularServicesSection';
import ServiceSection from '../components/ServiceSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import ServiceRequest from '../components/ServiceRequest';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Home() {
  const waNumber = businessInfo.whatsapp && businessInfo.isConfigured(businessInfo.whatsapp)
    ? businessInfo.whatsapp
    : '919876543210';

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vivek Online Center, I need assistance with an online form or document service.')}`;

  return (
    <div className="space-y-0">
      {/* 1. Hero Section with Video Background */}
      <Hero />

      {/* 2. Popular Services (4 cards grid) */}
      <PopularServicesSection />

      {/* 3. Comprehensive Services Catalog */}
      <ServiceSection showFilter={true} />

      {/* 4. How It Works Timeline */}
      <HowItWorks />

      {/* 5. Why Choose Vivek Online Center */}
      <WhyChooseUs />

      {/* 6. Facility Gallery */}
      <Gallery />

      {/* 7. Service Request Form */}
      <ServiceRequest />

      {/* 8. Location & Contact Info */}
      <Contact />

      {/* 9. Bottom CTA Banner */}
      <section className="py-20 bg-[#ffd731] border-b border-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black text-black text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Fast &amp; Reliable Digital Assistance</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-black uppercase tracking-tight max-w-4xl mx-auto leading-tight">
            Need Help With an Online Form or Document Service?
          </h2>

          <p className="text-base sm:text-lg font-bold text-black/85 max-w-2xl mx-auto">
            Contact Vivek Online Center today via WhatsApp or visit our centre for prompt guidance and error-free submissions.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#55db9c] hover:bg-black hover:text-white text-black font-extrabold text-base py-4 px-8 rounded-full border-2 border-black transition-all hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp Us Now</span>
            </a>

            <Link
              to="/service-request"
              className="inline-flex items-center gap-2 bg-white hover:bg-black hover:text-white text-black font-extrabold text-base py-4 px-8 rounded-full border-2 border-black transition-all hover:-translate-y-1"
            >
              <span>Submit Inquiry Form</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
