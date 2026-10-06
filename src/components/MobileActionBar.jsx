import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, MessageSquare, MapPin } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function MobileActionBar() {
  const waNumber = businessInfo.whatsapp && businessInfo.isConfigured(businessInfo.whatsapp)
    ? businessInfo.whatsapp
    : '919876543210';

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vivek Online Center, I need assistance.')}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-black py-2 px-4 lg:hidden">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1 text-center">
        
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 rounded-xl text-xs font-bold transition-colors ${
              isActive ? 'text-[#4da2ff]' : 'text-black hover:text-[#4da2ff]'
            }`
          }
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span>Home</span>
        </NavLink>

        {/* Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 rounded-xl text-xs font-bold transition-colors ${
              isActive ? 'text-[#4da2ff]' : 'text-black hover:text-[#4da2ff]'
            }`
          }
        >
          <Grid className="w-5 h-5 mb-0.5" />
          <span>Services</span>
        </NavLink>

        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-xl text-xs font-bold text-black hover:text-[#55db9c] transition-colors"
        >
          <MessageSquare className="w-5 h-5 mb-0.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Location / Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 rounded-xl text-xs font-bold transition-colors ${
              isActive ? 'text-[#4da2ff]' : 'text-black hover:text-[#4da2ff]'
            }`
          }
        >
          <MapPin className="w-5 h-5 mb-0.5" />
          <span>Location</span>
        </NavLink>

      </div>
    </div>
  );
}
