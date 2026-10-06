import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const waNumber = businessInfo.whatsapp && businessInfo.isConfigured(businessInfo.whatsapp)
    ? businessInfo.whatsapp
    : '919876543210';

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vivek Online Center, I would like to inquire about your services.')}`;

  return (
    <footer className="bg-black text-white pt-16 pb-24 lg:pb-12 border-t-2 border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/20">
          
          {/* Column 1: Branding & Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={businessInfo.logo}
                alt="Vivek Online Center Logo"
                className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl text-white tracking-tight group-hover:text-[#4da2ff] transition-colors uppercase leading-none">
                  {businessInfo.name}
                </span>
                <span className="text-xs text-[#ffd731] font-bold tracking-wider uppercase mt-1">
                  Cyber Cafe &amp; Online Centre
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm font-medium">
              आपका अपना डिजिटल सेवा केंद्र — ऑनलाइन फॉर्म, आधार पैसा निकासी, प्रिंटिंग, फोटोकॉपी और तुरंत पासपोर्ट फोटो।
            </p>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#55db9c] text-black font-extrabold text-xs py-2 px-4 rounded-full border border-black hover:bg-[#ffd731] transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Assistance</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-extrabold text-base text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#4da2ff] transition-colors">Home (मुख्य पृष्ठ)</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-[#4da2ff] transition-colors">Services (सेवाएं)</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#4da2ff] transition-colors">About Us (हमारे बारे में)</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-[#4da2ff] transition-colors">Gallery (गैलरी)</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#4da2ff] transition-colors">Contact Us (संपर्क)</Link>
              </li>
              <li>
                <Link to="/service-request" className="text-white/80 hover:text-[#4da2ff] transition-colors">Service Request (अनुरोध)</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider">Popular Services</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link to="/services" className="text-white/80 hover:text-[#4da2ff] transition-colors">पैन कार्ड (PAN Card)</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-[#4da2ff] transition-colors">ऑनलाइन फार्म (Online Forms)</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-[#4da2ff] transition-colors">प्रमाणपत्र (Certificates)</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-[#4da2ff] transition-colors">ट्रेन व फ्लाईट टिकट (Ticket Booking)</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-[#4da2ff] transition-colors">रिचार्ज व बिल (Recharge &amp; Utility)</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location, Contact & Opening Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-black text-sm text-white uppercase tracking-wider">Location &amp; Contact</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ffd731] mt-0.5 shrink-0" />
                <span className="text-white/90 leading-snug">
                  Kurhma (Near Devi Mandir), Aurangabad, Bihar
                </span>
              </li>
              {businessInfo.isConfigured(businessInfo.phone) && (
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#4da2ff] shrink-0" />
                  <a href={`tel:${businessInfo.phone}`} className="text-white/90 hover:text-[#4da2ff] transition-colors font-bold">
                    {businessInfo.phone}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#55db9c] shrink-0 fill-current" />
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#55db9c] transition-colors font-bold">
                  WhatsApp Support
                </a>
              </li>
            </ul>

            {/* Opening Hours Badge */}
            <div className="pt-2 border-t border-white/10 text-xs text-white/80">
              <span className="font-bold text-[#ffd731] block mb-0.5 uppercase tracking-wide">Opening Hours:</span>
              <span>8:00 AM - 10:00 PM Everyday</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Developed by Sonu Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/80 font-bold gap-6">
          <p>© {currentYear} {businessInfo.name}. All Rights Reserved.</p>

          {/* Developed by Sonu Credit Tag */}
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-white shrink-0 shadow-md">
              <img
                src={businessInfo.developer.image}
                alt={businessInfo.developer.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="text-xs sm:text-sm text-white font-extrabold tracking-wider">
              {businessInfo.developer.name}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
