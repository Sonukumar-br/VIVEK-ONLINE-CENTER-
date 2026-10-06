import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import { ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-[#dceeff] border-b border-black py-16 sm:py-20 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ffd731] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
            ABOUT US
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-black uppercase tracking-tight">
            Welcome to {businessInfo.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80 max-w-2xl mx-auto">
            {businessInfo.subtitle} — Dedicated to providing reliable, convenient, and friendly local digital assistance.
          </p>
        </div>
      </div>

      {/* Main Intro Section */}
      <section className="py-20 bg-white border-b border-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-black uppercase">
                Your Trusted Neighborhood Digital Service Centre
              </h2>
              <p className="text-base text-black/85 font-medium leading-relaxed">
                At <strong className="text-black font-extrabold">{businessInfo.name}</strong>, we understand that completing online government forms, exam registrations, or resizing document files can be complex and time-consuming.
              </p>
              <p className="text-base text-black/85 font-medium leading-relaxed">
                Our centre is equipped with high-speed workstations, heavy-duty laser printing machinery, HD scanners, and instant photo printing setups to handle your requirements accurately and promptly.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-[24px] bg-[#e9ccff] border-2 border-black space-y-1">
                  <HeartHandshake className="w-6 h-6 text-black mb-2" />
                  <h4 className="font-heading font-extrabold text-base text-black">Friendly Support</h4>
                  <p className="text-xs font-semibold text-black/80">Personalized guidance for every client</p>
                </div>

                <div className="p-5 rounded-[24px] bg-[#55db9c] border-2 border-black space-y-1">
                  <ShieldCheck className="w-6 h-6 text-black mb-2" />
                  <h4 className="font-heading font-extrabold text-base text-black">Accuracy First</h4>
                  <p className="text-xs font-semibold text-black/80">Thorough verification before portal submit</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[30px] overflow-hidden border-2 border-black bg-[#e9e9e9]">
                <img
                  src="/images/centre-front.jpg"
                  alt="Vivek Online Center Front"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works */}
      <HowItWorks />
    </div>
  );
}
