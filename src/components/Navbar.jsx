import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, MessageSquare } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { businessInfo } from '../data/businessInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const waNumber = businessInfo.whatsapp && businessInfo.isConfigured(businessInfo.whatsapp)
    ? businessInfo.whatsapp
    : '919876543210';

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vivek Online Center, I would like to inquire about your digital services.')}`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white border-b-2 border-black transition-all duration-200 ${
          isScrolled ? 'py-2.5 shadow-md' : 'py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-[64px] flex items-center justify-between">
          {/* Left: Branding Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-full bg-[#4da2ff] border-2 border-black flex items-center justify-center font-heading font-black text-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#ffd731] transition-colors">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg sm:text-xl text-black tracking-tight leading-none group-hover:text-[#4da2ff] transition-colors uppercase">
                {businessInfo.name}
              </span>
              <span className="text-[11px] text-black/70 font-bold tracking-wide uppercase mt-0.5">
                Cyber Cafe &amp; Online Centre
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1.5 bg-[#e9e9e9] p-1.5 rounded-full border-2 border-black">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wide transition-all ${
                    isActive
                      ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'text-black hover:bg-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#55db9c] hover:bg-[#ffd731] text-black font-extrabold text-xs uppercase py-2.5 px-6 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden space-x-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="p-2.5 bg-[#55db9c] text-black border-2 border-black rounded-full hover:bg-[#ffd731] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2.5 bg-white text-black border-2 border-black rounded-full hover:bg-[#e9e9e9] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
