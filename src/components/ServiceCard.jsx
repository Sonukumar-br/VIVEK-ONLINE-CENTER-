import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Printer, Camera, Files, Award, Globe, 
  FileCheck, Layers, Image, Upload, CreditCard, Zap, 
  Receipt, Banknote, Smartphone, Tv, Train, Plane, 
  Sprout, UserCheck, ShieldCheck, ArrowRight 
} from 'lucide-react';

const iconMap = {
  FileText,
  Printer,
  Camera,
  Files,
  Award,
  Globe,
  FileCheck,
  Layers,
  Image,
  Upload,
  CreditCard,
  Zap,
  Receipt,
  Banknote,
  Smartphone,
  Tv,
  Train,
  Plane,
  Sprout,
  UserCheck,
  ShieldCheck
};

// Pastel surface colors per category/service
const getCardBg = (category, title) => {
  if (title && (title.includes('पैन') || title.includes('PAN') || title.includes('मनी') || title.includes('Money'))) return 'bg-[#ffd731]'; // Sunburst
  if (title && (title.includes('रिचार्ज') || title.includes('बिल') || title.includes('Bill'))) return 'bg-[#55db9c]'; // Mint pop
  if (title && (title.includes('टिकट') || title.includes('Ticket'))) return 'bg-[#4da2ff]'; // Electric blue
  if (title && (title.includes('किसान') || title.includes('प्रमाण'))) return 'bg-[#e9ccff]'; // Lavender
  if (category === 'Online Services') return 'bg-[#dceeff]';
  if (category === 'Document Services') return 'bg-[#e9ccff]';
  if (category === 'Photo Services') return 'bg-[#ffd731]';
  return 'bg-white';
};

// Fallback Watermark Component if image load is pending
const ServiceWatermark = ({ serviceId, category, title }) => {
  const sId = serviceId || '';
  const sTitle = title || '';

  if (sId.includes('pan') || sTitle.includes('PAN')) {
    return (
      <div className="absolute -right-4 top-2 pointer-events-none opacity-[0.12] group-hover:opacity-[0.22] group-hover:scale-105 transition-all duration-300 z-0 transform -rotate-6">
        <div className="w-28 h-18 rounded-lg bg-white border-2 border-black p-1 flex flex-col justify-between">
          <div className="bg-[#4da2ff] text-[6px] font-black text-black px-1 py-0.5 rounded-xs flex justify-between items-center border border-black">
            <span>INCOME TAX DEPT</span>
            <span>PAN CARD</span>
          </div>
          <div className="flex gap-1 items-center my-0.5">
            <div className="w-4 h-5 rounded-xs bg-black/40 border border-black shrink-0" />
            <div className="flex-1 space-y-0.5">
              <div className="h-1 bg-black rounded-xs w-full" />
              <div className="h-0.5 bg-black/70 rounded-xs w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function ServiceCard({ service, compact = false }) {
  const IconComponent = iconMap[service.icon] || FileText;
  const bgClass = getCardBg(service.category, service.title);
  const docImage = service.backgroundDocument;

  return (
    <Link
      to={`/service-request?service=${encodeURIComponent(service.id)}`}
      className={`group ${bgClass} border-2 border-black rounded-[24px] p-5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-full relative overflow-hidden block cursor-pointer select-none`}
    >
      
      {/* Background Service Document Watermark Image Layer */}
      {docImage ? (
        <img
          src={docImage}
          alt=""
          aria-hidden="true"
          className="absolute -right-4 -top-2 w-[52%] max-w-[210px] sm:max-w-[240px] opacity-10 group-hover:opacity-20 transition-all duration-300 transform -rotate-3 group-hover:-rotate-1 group-hover:scale-102 pointer-events-none z-0 object-contain drop-shadow-sm select-none"
        />
      ) : (
        <ServiceWatermark serviceId={service.id} category={service.category} title={service.title} />
      )}

      {/* Main Foreground Card Content Layer */}
      <div className="relative z-10">
        {/* Header: Icon + Category Badge */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-11 h-11 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>

          {service.category && (
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-black text-[10px] font-black uppercase tracking-wider text-black group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              {service.category}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-lg text-black mb-2 leading-snug group-hover:translate-x-0.5 transition-transform">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm font-medium text-black/90 leading-relaxed mb-3.5">
          {service.description}
        </p>

        {/* Feature List (Max 3-4 bullet points) */}
        {!compact && service.features && service.features.length > 0 && (
          <ul className="space-y-1.5 mb-4 text-xs sm:text-sm font-bold text-black/90">
            {service.features.slice(0, 4).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer link / CTA */}
      <div className="pt-3 border-t-2 border-black/20 mt-auto flex items-center justify-between relative z-10">
        <div
          className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-extrabold text-black bg-white group-hover:bg-black group-hover:text-white px-4 py-2.5 rounded-full border-2 border-black transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        >
          <span>Request Service (आवेदन करें)</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
