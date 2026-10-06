import React from 'react';
import { Clock, MapPin, FileCheck2, UserCheck, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Local Service Center',
      description: 'Conveniently serving customers in Kurhma, Bihar with personal care.',
      icon: MapPin,
      badgeColor: 'bg-[#ffd731]',
    },
    {
      title: 'Multiple Digital Services',
      description: 'Digital, document, certificate, travel, and utility services at one centre.',
      icon: FileCheck2,
      badgeColor: 'bg-[#55db9c]',
    },
    {
      title: 'Easy Communication',
      description: 'Call or WhatsApp us before visiting for document requirements and instant guidance.',
      icon: Clock,
      badgeColor: 'bg-[#4da2ff]',
    },
    {
      title: 'Friendly Local Assistance',
      description: 'Get step-by-step help with complex online form processes, photo sizing, and submissions.',
      icon: UserCheck,
      badgeColor: 'bg-[#e9ccff]',
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear and reasonable service charges with zero hidden fees for all form & print services.',
      icon: Sparkles,
      badgeColor: 'bg-[#ffd731]',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#dceeff] relative border-b border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Upper Section: Store Intro & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Store Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[30px] overflow-hidden border-2 border-black bg-white group transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/images/centre-interior.jpg"
                alt="Vivek Online Center Workstation Setup"
                loading="lazy"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Sticker Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border-2 border-black flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:scale-[1.02]">
                <div>
                  <h4 className="font-heading font-black text-base text-black uppercase tracking-tight">{businessInfo.name}</h4>
                  <p className="text-xs text-black/70 font-bold">Cyber Cafe &amp; Online Centre</p>
                </div>
                <span className="text-xs bg-[#ffd731] text-[#000000] font-extrabold px-3 py-1 rounded-full border border-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Local Service
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#55db9c] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LOCAL TRUST &amp; RELIABILITY</span>
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-6xl text-black tracking-tight uppercase leading-[0.95]">
                WHY CHOOSE {businessInfo.name}?
              </h2>
              <p className="mt-4 text-base sm:text-lg font-medium text-black/85">
                Navigating complex online form portals or preparing documents can be stressful. We make the process simple, accurate, and convenient.
              </p>
            </div>

            {/* Benefits List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group space-y-2 p-5 rounded-[24px] bg-white border-2 border-black transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className={`w-11 h-11 rounded-full ${item.badgeColor} border-2 border-black flex items-center justify-center text-black mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-extrabold text-base text-black group-hover:translate-x-0.5 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-black/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
