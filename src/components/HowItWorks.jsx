import React from 'react';
import { Search, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose a Service',
      subTitle: 'सेवा चुनें',
      description: 'Select the service you need from online forms, banking, certificates, or printing.',
      hindiDescription: 'अपनी जरूरत की सेवा ऑनलाइन फॉर्म, प्रिंटिंग या फोटो में से चुनें।',
      icon: Search,
      badgeBg: 'bg-[#ffd731]',
    },
    {
      number: '02',
      title: 'Contact Us',
      subTitle: 'संपर्क करें',
      description: 'Call or WhatsApp us to share your details and document requirements.',
      hindiDescription: 'व्हाट्सएप या फोन करके जरूरी कागजात की जानकारी लें।',
      icon: MessageSquare,
      badgeBg: 'bg-[#55db9c]',
    },
    {
      number: '03',
      title: 'Visit Centre',
      subTitle: 'सेंटर पर आएं',
      description: 'Come to Vivek Online Center at Kurhma, Bihar with your documents.',
      hindiDescription: 'विवेक ऑनलाइन सेंटर, कुरहमा पर अपने ओरिजिनल कागज़ात लाएं।',
      icon: MapPin,
      badgeBg: 'bg-[#4da2ff]',
    },
    {
      number: '04',
      title: 'Get Service',
      subTitle: 'सेवा पाएं',
      description: 'Get fast, error-free submission receipts, prints, or passport photos.',
      hindiDescription: 'बिना किसी परेशानी के अपना काम आसानी से पूरा करवाएं।',
      icon: CheckCircle2,
      badgeBg: 'bg-[#e9ccff]',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white relative border-b-2 border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#e9ccff] border-2 border-black text-black text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            आसान प्रक्रिया | HOW IT WORKS
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-black tracking-tight uppercase">
            4 Simple Steps to Get Your Work Done
          </h2>
          <p className="text-base sm:text-lg font-medium text-black/80">
            विवेक ऑनलाइन सेंटर से सेवा प्राप्त करने की आसान प्रक्रिया।
          </p>
        </div>

        {/* Timeline Grid: Clean vertical flow on mobile, 4-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-black rounded-[28px] p-7 relative group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-full ${step.badgeBg} border-2 border-black flex items-center justify-center font-heading font-black text-xl text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-300`}>
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#e9e9e9] border-2 border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="font-heading font-black text-xl text-black leading-snug group-hover:translate-x-0.5 transition-transform">
                      {step.title}
                    </h3>
                    <span className="text-xs font-extrabold text-black/70 uppercase tracking-wide">
                      ({step.subTitle})
                    </span>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-1.5 text-xs sm:text-sm font-medium text-black/85 leading-relaxed">
                    <p className="font-bold text-black">{step.description}</p>
                    <p className="text-black/70">{step.hindiDescription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
