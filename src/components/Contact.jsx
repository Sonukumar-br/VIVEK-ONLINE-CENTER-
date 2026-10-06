import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink, Instagram } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Contact() {
  const isPhoneConfigured = businessInfo.isConfigured(businessInfo.phone);
  const isWhatsappConfigured = businessInfo.isConfigured(businessInfo.whatsapp);
  const isAddressConfigured = businessInfo.isConfigured(businessInfo.address);
  const isMapsConfigured = businessInfo.isConfigured(businessInfo.mapsUrl);
  const isInstagramConfigured = businessInfo.isConfigured(businessInfo.instagram);

  const phoneDisplay = businessInfo.phone;
  const phoneHref = `tel:${businessInfo.phone.replace(/\s+/g, '')}`;

  const waNumber = businessInfo.whatsapp;
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vivek Online Center, I have an inquiry about your services.')}`;

  const addressDisplay = businessInfo.address;
  const mapsHref = businessInfo.mapsUrl;
  const instaHref = businessInfo.instagram;

  const hasConfiguredHours = Object.values(businessInfo.openingHours).some(time => businessInfo.isConfigured(time));

  return (
    <section className="py-20 sm:py-24 bg-white relative border-b border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#55db9c] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
            पता व संपर्क | LOCATION &amp; CONTACT
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-black uppercase tracking-tight">
            हमसे संपर्क करें (Get In Touch)
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80">
            सेंटर पर आएं या तुरंत मदद के लिए फोन, व्हाट्सएप या इंस्टाग्राम पर संपर्क करें।
          </p>
        </div>

        {/* 4 Contact Cards Grid (Call, WhatsApp, Location, Instagram) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Call Us */}
          <div className="group bg-[#dceeff] border-2 border-black rounded-[28px] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black mb-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-black mb-2 group-hover:translate-x-0.5 transition-transform">कॉल करें (Call Us)</h3>
              <p className="text-xs font-medium text-black/80 mb-5 leading-relaxed">
                सीधे सेंटर पर बात करें। Speak directly with us.
              </p>
              <p className="font-extrabold text-sm text-black break-words mb-5 bg-white p-3 rounded-xl border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {phoneDisplay}
              </p>
            </div>
            <a
              href={phoneHref}
              className="w-full flex items-center justify-center gap-2 bg-[#4da2ff] hover:bg-black hover:text-white text-black font-extrabold py-3 px-4 rounded-full border-2 border-black transition-all duration-200 text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Phone className="w-4 h-4" />
              <span>कॉल करें ({phoneDisplay})</span>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="group bg-[#55db9c] border-2 border-black rounded-[28px] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black mb-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform duration-300">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-heading font-black text-xl text-black mb-2 group-hover:translate-x-0.5 transition-transform">व्हाट्सएप (WhatsApp)</h3>
              <p className="text-xs font-medium text-black/80 mb-5 leading-relaxed">
                कागज़ात भेजें या तुरंत जानकारी प्राप्त करें।
              </p>
              <p className="font-extrabold text-sm text-black mb-5 bg-white p-3 rounded-xl border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                +{waNumber}
              </p>
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-[#ffd731] hover:text-black font-extrabold py-3 px-4 rounded-full border-2 border-black transition-all duration-200 text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>व्हाट्सएप चैट करें</span>
            </a>
          </div>

          {/* Card 3: Location & Directions */}
          <div className="group bg-[#ffd731] border-2 border-black rounded-[28px] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black mb-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-xl text-black mb-2 group-hover:translate-x-0.5 transition-transform">सेंटर का पता (Visit Us)</h3>
              <p className="text-xs font-medium text-black/80 mb-3 leading-relaxed">
                हमारे डिजिटल सेवा केंद्र का पता:
              </p>
              <p className="font-bold text-xs text-black leading-snug mb-5 bg-white p-3 rounded-xl border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {addressDisplay}
              </p>
            </div>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-black hover:text-white text-black font-extrabold py-3 px-4 rounded-full border-2 border-black transition-all duration-200 text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <span>गूगल मैप्स (Directions)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 4: Instagram */}
          <div className="group bg-[#e9ccff] border-2 border-black rounded-[28px] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black mb-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform duration-300">
                <Instagram className="w-6 h-6 text-[#fb4903]" />
              </div>
              <h3 className="font-heading font-black text-xl text-black mb-2 group-hover:translate-x-0.5 transition-transform">इंस्टाग्राम (Instagram)</h3>
              <p className="text-xs font-medium text-black/80 mb-5 leading-relaxed">
                विवेक ऑनलाइन सेंटर का ऑफिशियल इंस्टाग्राम प्रोफाइल।
              </p>
              <p className="font-extrabold text-xs text-black mb-5 bg-white p-3 rounded-xl border border-black truncate shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" title="@vivek_online_csc_centre">
                @vivek_online_csc_centre
              </p>
            </div>
            <a
              href={instaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-black hover:text-white text-black font-extrabold py-3 px-4 rounded-full border-2 border-black transition-all duration-200 text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
