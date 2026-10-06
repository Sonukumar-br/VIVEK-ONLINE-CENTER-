import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const waNumber = businessInfo.whatsapp && businessInfo.isConfigured(businessInfo.whatsapp)
    ? businessInfo.whatsapp
    : '919876543210';

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vivek Online Center, I would like to inquire about your services.')}`;

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white text-black text-xs font-extrabold px-3 py-1.5 rounded-full border border-black shadow-none whitespace-nowrap">
          Chat on WhatsApp
        </div>
      )}

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#55db9c] hover:bg-[#ffd731] text-black rounded-full border-2 border-black flex items-center justify-center transition-all hover:-translate-y-1"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
