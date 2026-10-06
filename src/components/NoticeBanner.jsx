import React from 'react';
import { Landmark, Sparkles, ArrowRight, Phone, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/businessInfo';

export default function NoticeBanner() {
  const phoneHref = `tel:${businessInfo.phone.replace(/\s+/g, '')}`;

  return (
    <div className="bg-[#ffd731] border-b-2 border-black py-2.5 px-4 sm:px-8 text-black relative overflow-hidden group">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Notice text & badge */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center shrink-0 hidden sm:flex group-hover:rotate-12 transition-transform duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Megaphone className="w-4 h-4 text-black animate-pulse" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider bg-black text-white px-3 py-0.5 rounded-full mb-1 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)]">
              <Sparkles className="w-3 h-3 text-[#ffd731]" />
              <span className="tracking-widest">मुख्य सूचना / IMPORTANT NOTICE</span>
            </div>
            
            {/* Animated Highlight Line */}
            <p className="font-heading font-black text-xs sm:text-sm text-black leading-snug">
              <span className="bg-white/90 px-2.5 py-0.5 rounded-md border border-black/80 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block transition-transform duration-200 group-hover:scale-[1.01]">
                हमारे यहाँ:- सभी बैंकों से आधार के द्वारा पैसा निकासी और जमा किया जाता है तथा सभी प्रकार का ऑनलाइन कार्य किया जाता है।
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-1.5 bg-white hover:bg-black hover:text-white text-black font-extrabold text-xs py-1.5 px-3.5 rounded-full border-2 border-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{businessInfo.phone}</span>
          </a>

          <Link
            to="/service-request"
            className="inline-flex items-center gap-1.5 bg-black hover:bg-white hover:text-black text-white font-extrabold text-xs py-1.5 px-4 rounded-full border-2 border-black transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase"
          >
            <span>आवेदन करें</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}
