import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function MobileMenu({ isOpen, onClose }) {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery / Centre', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Service Request', path: '/service-request' },
  ];

  const waNumber = businessInfo.whatsapp && businessInfo.isConfigured(businessInfo.whatsapp)
    ? businessInfo.whatsapp
    : '919876543210';

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vivek Online Center, I would like to inquire about your services.')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#dceeff] border-l-2 border-black z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b-2 border-black">
                <div>
                  <h2 className="font-heading font-black text-lg text-black uppercase tracking-tight">
                    {businessInfo.name}
                  </h2>
                  <p className="text-xs text-black/70 font-extrabold uppercase">
                    Cyber Cafe &amp; Online Centre
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 text-black bg-white hover:bg-[#ffd731] rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="mt-6 flex flex-col space-y-2.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl font-black text-sm uppercase tracking-wide transition-all flex items-center justify-between border-2 border-black ${
                        isActive
                          ? 'bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                          : 'bg-white text-black hover:bg-[#ffd731] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Contact Actions */}
            <div className="pt-6 border-t-2 border-black space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-[#55db9c] hover:bg-[#ffd731] text-black font-black uppercase tracking-wide py-3.5 px-4 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-colors text-xs"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              {businessInfo.isConfigured(businessInfo.phone) && (
                <a
                  href={`tel:${businessInfo.phone}`}
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black border-2 border-black font-black uppercase tracking-wide py-3 px-4 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors text-xs"
                >
                  <Phone className="w-4 h-4 text-black" />
                  <span>Call {businessInfo.phone}</span>
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
