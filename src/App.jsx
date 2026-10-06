import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NoticeBanner from './components/NoticeBanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileActionBar from './components/MobileActionBar';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ServiceRequestPage from './pages/ServiceRequestPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-[#4da2ff] selection:text-white overflow-x-hidden">
      <ScrollToTop />
      
      {/* Top Notice Announcement Banner */}
      <NoticeBanner />

      {/* Sticky Navbar below Notice Banner */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service-request" element={<ServiceRequestPage />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
