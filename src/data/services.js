export const serviceCategories = [
  {
    id: "online-services",
    title: "ऑनलाइन सेवाएं | Online Services",
    subtitle: "पैन कार्ड, जाति/आय/निवास प्रमाणपत्र व ऑनलाइन फॉर्म। PAN, certificates & online forms.",
    icon: "Globe"
  },
  {
    id: "financial-services",
    title: "बैंकिंग व रिचार्ज | Banking & Recharge",
    subtitle: "आधार पैसा निकासी, मनी ट्रांसफर, बिल भुगतान व रिचार्ज। AEPS, Money Transfer & Bill Payments.",
    icon: "Banknote"
  },
  {
    id: "travel-services",
    title: "टिकट व किसान सेवाएं | Travel & Kisan Services",
    subtitle: "रेलवे व फ्लाईट टिकट, किसान पंजीकरण व e-KYC। Railway, Flight & Kisan e-KYC.",
    icon: "Train"
  },
  {
    id: "document-services",
    title: "प्रिंटिंग व फोटो | Print & Photos",
    subtitle: "फोटोकॉपी, प्रिंटिंग, स्कैनिंग व पासपोर्ट फोटो। Xerox, printing & passport photos.",
    icon: "Printer"
  }
];

export const popularServices = [
  {
    id: "pan-card",
    title: "पैन कार्ड (PAN Card)",
    description: "नया पैन कार्ड बनवाएं या पुराने पैन कार्ड में नाम/पता सुधरवाएं। New PAN card & correction.",
    icon: "CreditCard",
    category: "Online Services",
    backgroundDocument: "/images/documents/pan-card-demo.svg",
    popular: true,
    features: [
      "नया पैन कार्ड आवेदन (New PAN Card)",
      "पैन कार्ड सुधार (PAN Correction)",
      "ई-पैन डाउनलोड (e-PAN Print)"
    ]
  },
  {
    id: "online-form-filling",
    title: "ऑनलाइन फार्म (Online Forms)",
    description: "सरकारी नौकरी, भर्ती, एडमिशन व स्कॉलरशिप फॉर्म भरने की सुविधा। Govt job & admission forms.",
    icon: "FileText",
    category: "Online Services",
    backgroundDocument: "/images/documents/online-form-demo.svg",
    popular: true,
    features: [
      "सरकारी भर्ती फॉर्म (Govt Vacancies)",
      "कॉलेज एडमिशन (College Admission)",
      "एडमिट कार्ड प्रिंट (Admit Cards)"
    ]
  },
  {
    id: "money-transfer",
    title: "आधार निकासी व मनी ट्रांसफर (AEPS & Money Transfer)",
    description: "सभी बैंकों से आधार द्वारा पैसा निकासी/जमा और किसी भी बैंक में तुरंत मनी ट्रांसफर। AEPS cash withdrawal & money transfer.",
    icon: "Banknote",
    category: "Banking & Recharge",
    backgroundDocument: "/images/documents/aeps-banking-demo.svg",
    popular: true,
    features: [
      "आधार कैश निकासी (Aadhaar Cash)",
      "तुरंत मनी ट्रांसफर (Instant Transfer)",
      "बैंक बैलेंस इंक्वायरी (Balance Check)"
    ]
  },
  {
    id: "caste-certificate",
    title: "जाति / आय / निवास प्रमाण (Certificates)",
    description: "जाति, आय व निवास प्रमाण पत्र हेतु ऑनलाइन आवेदन व प्रिंटिंग। Caste, Income & Residence Certificate.",
    icon: "ShieldCheck",
    category: "Online Services",
    backgroundDocument: "/images/documents/caste-certificate-demo.svg",
    popular: true,
    features: [
      "जाति प्रमाण पत्र (Caste Certificate)",
      "आय प्रमाण पत्र (Income Certificate)",
      "निवास प्रमाण पत्र (Residence)"
    ]
  },
  {
    id: "railway-ticket",
    title: "रेलवे टिकट (Railway Ticket Booking)",
    description: "IRCTC कन्फर्म ट्रेन टिकट बुकिंग, तत्काल कोटा व PNR स्टेटस जांच। Train ticket booking.",
    icon: "Train",
    category: "Travel & Kisan Services",
    backgroundDocument: "/images/documents/railway-ticket-demo.svg",
    popular: true,
    features: [
      "कन्फर्म ट्रेन टिकट (Train Tickets)",
      "तत्काल टिकट बुकिंग (Tatkal Booking)",
      "PNR स्टेटस जांच (PNR Check)"
    ]
  }
];

export const services = [
  // 1. PAN Card
  {
    id: "pan-card",
    title: "पैन कार्ड (PAN Card)",
    description: "नया पैन कार्ड (Instant PAN) आवेदन तथा पैन कार्ड में नाम, जन्मतिथि व फोटो संशोधन। New PAN card application & corrections.",
    icon: "CreditCard",
    category: "Online Services",
    backgroundDocument: "/images/documents/pan-card-demo.svg",
    features: [
      "नया पैन कार्ड आवेदन (New PAN Card)",
      "पैन कार्ड सुधार व अपडेट (PAN Card Correction)",
      "ई-पैन कार्ड डाउनलोड (e-PAN Download)",
      "आधार-पैन लिंक (Aadhaar PAN Link)"
    ]
  },

  // 2. Online Forms
  {
    id: "online-form-filling",
    title: "ऑनलाइन फार्म (Online Forms)",
    description: "सरकारी भर्ती, राज्य व केंद्र सरकार की योजनाओं एवं कॉलेज एडमिशन के ऑनलाइन फॉर्म। Govt vacancy & college admission forms.",
    icon: "FileText",
    category: "Online Services",
    backgroundDocument: "/images/documents/online-form-demo.svg",
    features: [
      "सरकारी भर्ती फॉर्म (Govt Job Forms)",
      "कॉलेज व यूनिवर्सिटी एडमिशन (College Admission)",
      "स्कॉलरशिप फॉर्म (Scholarship Applications)",
      "प्रतियोगी परीक्षा फॉर्म (Competitive Exams)"
    ]
  },

  // 3. Electricity Bill
  {
    id: "electricity-bill",
    title: "बिजली बिल भुगतान (Electricity Bill Payment)",
    description: "बिजली बिल की तुरंत ऑनलाइन जांच व बिना किसी अतिरिक्त शुल्क के भुगतान रसीद। Fast electricity bill checking & receipt printout.",
    icon: "Zap",
    category: "Banking & Recharge",
    backgroundDocument: "/images/documents/electricity-bill-demo.svg",
    features: [
      "बिजली बिल चेक (Check Electricity Bill)",
      "तुरंत बिल भुगतान (Instant Bill Payment)",
      "पक्की रसीद प्रिंट आउट (Official Payment Receipt)",
      "बकाया बिल स्टेटस (Bill Due Status)"
    ]
  },

  // 4. Caste Certificate
  {
    id: "caste-certificate",
    title: "जाति प्रमाण पत्र (Caste Certificate)",
    description: "जाति प्रमाण पत्र बनवाने हेतु ऑनलाइन आवेदन, स्थिति जांच व डाउनलोड। Online application for Caste Certificate.",
    icon: "Award",
    category: "Online Services",
    backgroundDocument: "/images/documents/caste-certificate-demo.svg",
    features: [
      "नया जाति प्रमाण पत्र आवेदन (New Application)",
      "आवेदन स्थिति जांच (Track Application Status)",
      "सर्टिफिकेट डाउनलोड व प्रिंट (Download Certificate)",
      "सत्यापन सहायता (Verification Support)"
    ]
  },

  // 5. Income Certificate
  {
    id: "income-certificate",
    title: "आय प्रमाण पत्र (Income Certificate)",
    description: "छात्रवृत्ति व योजनाओं हेतु आय प्रमाण पत्र का ऑनलाइन आवेदन व सत्यापन। Income Certificate application for scholarships.",
    icon: "ShieldCheck",
    category: "Online Services",
    backgroundDocument: "/images/documents/income-certificate-demo.svg",
    features: [
      "आय प्रमाण पत्र ऑनलाइन फॉर्म (Income Certificate Form)",
      "स्कॉलरशिप हेतु मान्य प्रमाणपत्र (Valid for Scholarship)",
      "डिजिटल सिग्नेचर सर्टिफिकेट प्रिंट (Digital Signature Print)",
      "रसीद जांच (Receipt Check)"
    ]
  },

  // 6. Residence Certificate
  {
    id: "residence-certificate",
    title: "निवास प्रमाण पत्र (Residence Certificate)",
    description: "मूल निवास/अधिवास प्रमाण पत्र (Domicile Certificate) आवेदन व प्रिंटिंग। Domicile & Residence Certificate services.",
    icon: "FileCheck",
    category: "Online Services",
    backgroundDocument: "/images/documents/residence-certificate-demo.svg",
    features: [
      "निवास प्रमाण पत्र ऑनलाइन (Domicile Application)",
      "ऑफिशियल पोर्टल प्रिंट (Official Portal Print)",
      "फास्ट प्रोसेसिंग सहायता (Fast Assistance)",
      "प्रमाणपत्र रसीद (Registration Receipt)"
    ]
  },

  // 7. Online Receipt
  {
    id: "online-receipt",
    title: "रसिद ऑनलाइन (Online Receipt / Revenue)",
    description: "सरकारी व राजस्व चालान, लगान रसीद व फीस रसीद ऑनलाइन डाउनलोड व प्रिंट। Govt fees & revenue receipt printing.",
    icon: "Receipt",
    category: "Online Services",
    backgroundDocument: "/images/documents/online-receipt-demo.svg",
    features: [
      "राजस्व व लगान रसीद (Revenue Receipt)",
      "सरकारी चालान भुगतान (Govt Fee Payment)",
      "ऑनलाइन भुगतान रसीद (Payment Printout)",
      "पोर्टल रसीद रिकवरी (Receipt Recovery)"
    ]
  },

  // 8. Photocopy
  {
    id: "photocopy",
    title: "फोटोकॉपी (Photocopy / Xerox)",
    description: "साफ़ व स्पष्ट ब्लैक एंड व्हाइट तथा कलर फोटोकॉपी/ज़ेरॉक्स। Clean B&W & Color photostat xerox.",
    icon: "Files",
    category: "Document Services",
    backgroundDocument: "/images/documents/photocopy-xerox-demo.svg",
    features: [
      "B&W व कलर फोटोकॉपी (B&W & Color Xerox)",
      "आधार व वोटर कार्ड डबल-साइड फोटोकॉपी (ID Card Copy)",
      "बुकलेट फोटोकॉपी (Booklet Copying)",
      "लेमिनेशन सुविधा (Lamination Option)"
    ]
  },

  // 9. Money Transfer & AEPS
  {
    id: "money-transfer",
    title: "मनी ट्रांसफर व आधार निकासी (Money Transfer & AEPS)",
    description: "सभी बैंकों से आधार द्वारा पैसा निकासी और किसी भी बैंक खाते में तुरंत मनी ट्रांसफर। AEPS Aadhaar Cash Withdrawal & Money Transfer.",
    icon: "Banknote",
    category: "Banking & Recharge",
    backgroundDocument: "/images/documents/aeps-banking-demo.svg",
    features: [
      "आधार द्वारा कैश निकासी (Aadhaar Cash Withdrawal)",
      "सभी बैंक बैलेंस इंक्वायरी (Balance Enquiry)",
      "तुरंत मनी ट्रांसफर (Instant Money Transfer)",
      "बैंक मिनी स्टेटमेंट (Mini Statement)"
    ]
  },

  // 10. Kisan Registration
  {
    id: "kisan-registration",
    title: "किसान पंजिकरण (Kisan Registration)",
    description: "PM किसान व राज्य कृषि पोर्टल पर नया किसान पंजीकरण एवं आवेदन। Farmers registration & PM Kisan portal applications.",
    icon: "Sprout",
    category: "Travel & Kisan Services",
    backgroundDocument: "/images/documents/kisan-registration-demo.svg",
    features: [
      "नया किसान पंजीकरण (New Kisan Registration)",
      "PM किसान सम्मान निधि आवेदन (PM Kisan Application)",
      "पंजीकरण रसीद प्रिंट (Registration Receipt Print)",
      "स्टेटस जांच (Application Status Check)"
    ]
  },

  // 11. DTH Recharge
  {
    id: "dth-recharge",
    title: "DTH रिचार्ज (DTH Recharge)",
    description: "Tata Play, Airtel Digital TV, Dish TV, Sun Direct व Videocon D2H का तुरंत रिचार्ज। Instant DTH connection recharge.",
    icon: "Tv",
    category: "Banking & Recharge",
    backgroundDocument: "/images/documents/dth-recharge-demo.svg",
    features: [
      "सभी DTH ऑपरेटर रिचार्ज (All DTH Operators)",
      "प्लान व ऑफर जानकारी (Best DTH Offers)",
      "तुरंत रिचार्ज कन्फर्मेशन (Instant Confirmation)",
      "भुगतान रसीद (Payment Receipt)"
    ]
  },

  // 12. Railway Ticket
  {
    id: "railway-ticket",
    title: "रेलवे टिकट (Railway Ticket Booking)",
    description: "IRCTC द्वारा कन्फर्म ट्रेन टिकट बुकिंग, सीट उपलब्धता व PNR स्टेटस जांच। Train ticket booking & PNR status check.",
    icon: "Train",
    category: "Travel & Kisan Services",
    backgroundDocument: "/images/documents/railway-ticket-demo.svg",
    features: [
      "ट्रेन टिकट बुकिंग (Train Ticket Booking)",
      "तत्काल व स्लीपर/AC सीट बुकिंग (Tatkal & AC Tickets)",
      "PNR स्टेटस व टाइमटेबल जांच (PNR Status Check)",
      "प्रिंटेड बोर्डिंग पास (Print Boarding Ticket)"
    ]
  },

  // 13. Flight Ticket
  {
    id: "flight-ticket",
    title: "फ्लाईट टिकट (Flight Ticket Booking)",
    description: "घरेलू व अंतरराष्ट्रीय हवाई जहाज़ (Flight) टिकट बुकिंग कम दामों पर। Domestic & international flight ticket booking.",
    icon: "Plane",
    category: "Travel & Kisan Services",
    backgroundDocument: "/images/documents/flight-ticket-demo.svg",
    features: [
      "सस्ते फ्लाईट टिकट बुकिंग (Best Flight Deals)",
      "वेब चेक-इन सहायता (Web Check-in)",
      "ई-टिकट प्रिंट आउट (E-Ticket Printout)",
      "सीट व मील सिलेक्शन (Seat & Meal Selection)"
    ]
  },

  // 14. Kisan e-KYC
  {
    id: "kisan-ekyc",
    title: "किसान e-KYC (Kisan e-KYC)",
    description: "PM किसान योजना हेतु बायोमेट्रिक व ओटीपी आधारित e-KYC सत्यापन। PM Kisan e-KYC verification via Aadhaar.",
    icon: "UserCheck",
    category: "Travel & Kisan Services",
    backgroundDocument: "/images/documents/kisan-ekyc-demo.svg",
    features: [
      "PM किसान e-KYC (PM Kisan e-KYC Verification)",
      "फिंगरप्रिंट बायोमेट्रिक ऑथेंटिकेशन (Biometric Authentication)",
      "आधार ओटीपी e-KYC (Aadhaar OTP e-KYC)",
      "सत्यापन रसीद प्रिंट (KYC Confirmation Receipt)"
    ]
  },

  // 15. Mobile Recharge
  {
    id: "mobile-recharge",
    title: "मोबाइल रिचार्ज (Mobile Recharge)",
    description: "Airtel, Jio, Vi (Vodafone Idea) व BSNL का तुरंत रिचार्ज एवं बेस्ट रीचार्ज प्लान। Fast mobile recharge for all networks.",
    icon: "Smartphone",
    category: "Banking & Recharge",
    backgroundDocument: "/images/documents/mobile-recharge-demo.svg",
    features: [
      "सभी मोबाइल नेटवर्क रिचार्ज (All Mobile Operators)",
      "अनलिमिटेड व डेटा प्लान (Unlimited Data Plans)",
      "बेस्ट ऑफर जांच (Check Best Offers)",
      "रिचार्ज रसीद (Instant Confirmation)"
    ]
  }
];
