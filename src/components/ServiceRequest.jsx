import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { services } from '../data/services';
import { submitServiceRequest } from '../services/api';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function ServiceRequest() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    selectedService: preselectedService || (services[0] ? services[0].id : ''),
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: false,
    successData: null
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, selectedService: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status.error) setStatus(prev => ({ ...prev, error: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: false, successData: null });

    const result = await submitServiceRequest(formData);

    if (result.success) {
      setStatus({
        loading: false,
        error: '',
        success: true,
        successData: result
      });
      setFormData({
        fullName: '',
        mobileNumber: '',
        selectedService: services[0] ? services[0].id : '',
        message: ''
      });
    } else {
      setStatus({
        loading: false,
        error: result.message || 'एक त्रुटि हुई, कृपया पुन: प्रयास करें।',
        success: false,
        successData: null
      });
    }
  };

  const waNumber = businessInfo.whatsapp && businessInfo.isConfigured(businessInfo.whatsapp)
    ? businessInfo.whatsapp
    : '919876543210';

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `नमस्ते Vivek Online Center, मैंने ${
      services.find(s => s.id === formData.selectedService)?.title || 'सेवा'
    } के लिए पूछताछ भेजी है।`
  )}`;

  return (
    <section className="py-20 sm:py-24 bg-[#e9e9e9] relative border-b border-black" id="service-request-form">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#4da2ff] border border-black text-black text-xs font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>सेवा हेतु आवेदन फॉर्म | SERVICE REQUEST</span>
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-black uppercase tracking-tight">
              सेवा हेतु अनुरोध भेजें
            </h2>
            <p className="mt-3 text-base sm:text-lg font-medium text-black/80">
              अपनी जानकारी भरें, हम आपसे तुरंत संपर्क करेंगे। Fill in your details below.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border-2 border-black rounded-[30px] p-6 sm:p-10 relative">
            
            {status.success ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-[#55db9c] text-black rounded-full border-2 border-black flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-black text-2xl text-black uppercase">
                    अनुरोध प्राप्त हुआ! (Request Received)
                  </h3>
                  <p className="text-sm font-medium text-black/80 max-w-lg mx-auto leading-relaxed">
                    धन्यवाद! आपका अनुरोध प्राप्त हो गया है। आप हमसे तुरंत व्हाट्सएप पर भी संपर्क कर सकते हैं।
                  </p>
                  {status.successData.data && (
                    <p className="text-xs text-black font-mono font-bold bg-[#ffd731] px-3 py-1 rounded-full border border-black inline-block mt-2">
                      Reference ID: {status.successData.data.id}
                    </p>
                  )}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#55db9c] hover:bg-[#ffd731] text-black font-extrabold py-3.5 px-6 rounded-full border-2 border-black transition-all"
                  >
                    <span>व्हाट्सएप पर बात करें (WhatsApp Chat)</span>
                  </a>
                  <button
                    onClick={() => setStatus({ loading: false, error: '', success: false, successData: null })}
                    className="inline-flex items-center justify-center gap-2 bg-white text-black font-extrabold py-3.5 px-6 rounded-full border-2 border-black hover:bg-[#e9e9e9] transition-all"
                  >
                    <span>दूसरा अनुरोध भेजें (New Request)</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Banner */}
                {status.error && (
                  <div className="p-4 rounded-2xl bg-red-100 border border-red-500 flex items-center gap-3 text-red-800 text-sm font-bold">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-extrabold text-black uppercase">
                      पूरा नाम (Full Name) <span className="text-[#fb4903]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="अपना पूरा नाम दर्ज करें"
                      className="w-full bg-[#f8fafc] border border-black rounded-2xl px-4 py-3.5 text-sm font-medium text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-[#4da2ff] transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <label htmlFor="mobileNumber" className="block text-sm font-extrabold text-black uppercase">
                      मोबाइल नंबर (Mobile Number) <span className="text-[#fb4903]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      required
                      maxLength="10"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="10 अंकों का मोबाइल नंबर"
                      className="w-full bg-[#f8fafc] border border-black rounded-2xl px-4 py-3.5 text-sm font-medium text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-[#4da2ff] transition-all"
                    />
                  </div>
                </div>

                {/* Select Service */}
                <div className="space-y-2">
                  <label htmlFor="selectedService" className="block text-sm font-extrabold text-black uppercase">
                    सेवा चुनें (Select Service) <span className="text-[#fb4903]">*</span>
                  </label>
                  <select
                    id="selectedService"
                    name="selectedService"
                    required
                    value={formData.selectedService}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-black rounded-2xl px-4 py-3.5 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-[#4da2ff] transition-all"
                  >
                    {services.map((svc) => (
                      <option key={svc.id} value={svc.id} className="bg-white text-black">
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-extrabold text-black uppercase">
                    अतिरिक्त विवरण / मैसेज <span className="text-black/60 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="फॉर्म या सेवा से संबंधित कोई विशेष जानकारी लिखें..."
                    className="w-full bg-[#f8fafc] border border-black rounded-2xl px-4 py-3.5 text-sm font-medium text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-[#4da2ff] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#4da2ff] hover:bg-black hover:text-white text-black font-extrabold text-base py-4 px-6 rounded-full border-2 border-black transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>भेज रहे हैं (Submitting)...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>अनुरोध भेजें (Submit Request)</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
