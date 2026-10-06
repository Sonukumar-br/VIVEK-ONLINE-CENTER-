import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageSquare, CreditCard, Banknote, FileText, ShieldCheck, MapPin, UserCheck, Sparkles, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = (delay = 0) => ({
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : delay }
    }
  });

  const waNumber = businessInfo.whatsapp && businessInfo.isConfigured(businessInfo.whatsapp)
    ? businessInfo.whatsapp
    : '919876543210';

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vivek Online Center, I need assistance with an online service.')}`;

  return (
    <section className="relative min-h-[600px] lg:min-h-[660px] py-12 lg:py-16 flex items-center overflow-hidden bg-[#e9e9e9]">
      
      {/* 1. Full-Bleed Background Video / Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/videos/vivek-online-hero.mp4"
          poster="/images/centre-front.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center scale-105"
        />

        {/* 2. Enhanced Solid Semi-Transparent Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 w-full">
        
        {/* Top Header Row: Left Trust Label, Right Owner Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          
          {/* 1. Small Trust Label */}
          <motion.div
            variants={fadeIn(0.05)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd731] border-2 border-black text-black font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>आपका अपना डिजिटल सेवा केंद्र | DIGITAL SERVICE CENTER</span>
          </motion.div>

          {/* Right-Hand Owner Badge (BITTU KUSHWAHA) */}
          <motion.div
            variants={fadeIn(0.1)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 bg-white border-2 border-black rounded-full p-1.5 pr-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffd731] transition-all shrink-0 hover:-translate-y-0.5 cursor-pointer"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-black bg-[#ffd731] shrink-0">
              <img
                src={businessInfo.owner.image}
                alt={businessInfo.owner.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-sm sm:text-base text-black uppercase">
                  {businessInfo.owner.name}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black" title="Verified Owner" />
              </div>
              <span className="text-[11px] font-extrabold text-black/80 uppercase">
                {businessInfo.owner.role}
              </span>
            </div>
          </motion.div>

        </div>

        {/* Main Clean Content Box */}
        <div className="max-w-4xl space-y-5">
          
          {/* 2. Main Title */}
          <motion.h1
            variants={fadeIn(0.15)}
            initial="hidden"
            animate="visible"
            className="font-heading font-black text-black tracking-tight uppercase"
            style={{
              fontSize: 'clamp(40px, 7.5vw, 96px)',
              lineHeight: 0.92,
            }}
          >
            {businessInfo.name}
          </motion.h1>

          {/* 3. Short Clear Description */}
          <motion.div
            variants={fadeIn(0.2)}
            initial="hidden"
            animate="visible"
            className="space-y-1.5"
          >
            <p className="font-heading font-black text-2xl sm:text-4xl text-black leading-snug">
              Digital &amp; Online Services Near You
            </p>
            <p className="text-sm sm:text-lg text-black/90 font-bold max-w-2xl leading-relaxed">
              पैन कार्ड, ऑनलाइन फॉर्म, आधार पैसा निकासी, प्रिंटिंग, ज़ेरॉक्स व पासपोर्ट फोटो सेवाएं।
            </p>
          </motion.div>

          {/* 4. Location Badge */}
          <motion.div
            variants={fadeIn(0.25)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-black text-black font-black text-xs sm:text-sm tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <MapPin className="w-4 h-4 text-[#fb4903]" />
            <span>📍 (Near Devi Mandir) Kurhma, Aurangabad(Bihar)</span>
          </motion.div>

          {/* 5. Clear CTAs: Primary & Secondary */}
          <motion.div
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="visible"
            className="pt-3 flex flex-wrap gap-3.5 items-center"
          >
            {/* Primary CTA */}
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#4da2ff] hover:bg-black hover:text-white text-black font-extrabold text-sm sm:text-base py-3.5 px-7 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#55db9c] hover:bg-[#ffd731] text-black font-extrabold text-sm sm:text-base py-3.5 px-7 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            {/* Direct Call Action */}
            <a
              href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-black hover:text-white text-black font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
            >
              <Phone className="w-4 h-4" />
              <span>Call ({businessInfo.phone})</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
