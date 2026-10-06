export const businessInfo = {
  name: "Vivek Online Center",
  subtitle: "Cyber Cafe & Online Centre (साइबर कैफे एवं ऑनलाइन सेंटर)",
  tagline: "आपका अपना डिजिटल सेवा केंद्र | Your Local Digital Service Centre",
  description: "ऑनलाइन फॉर्म, एडमिट कार्ड, प्रिंटिंग, स्कैनिंग, फोटोकॉपी और तुरंत पासपोर्ट फोटो। Fast, simple and accurate digital services for everyone.",
  
  // Contact details
  phone: "+91 88251 24881",
  whatsapp: "918825124881",
  email: "contact@vivekonlinecenter.com",
  address: "V929+934, KURHMA, AURANGABAD, BIHAR - 824121 (NEAR DEVI MANDIR)",
  plusCode: "V929+934",
  pincode: "824121",
  coordinates: {
    lat: 24.850944,
    lng: 84.36795
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=24.850944,84.36795",

  // Business Hours (8:00 AM - 10:00 PM Everyday)
  openingHours: {
    monday: "8:00 AM - 10:00 PM",
    tuesday: "8:00 AM - 10:00 PM",
    wednesday: "8:00 AM - 10:00 PM",
    thursday: "8:00 AM - 10:00 PM",
    friday: "8:00 AM - 10:00 PM",
    saturday: "8:00 AM - 10:00 PM",
    sunday: "8:00 AM - 10:00 PM"
  },

  // Owner Details
  owner: {
    name: "BITTU KUSHWAHA",
    role: "Owner",
    image: "/images/owner-photo.jpg",
    instagram: "https://www.instagram.com/bittukushwaha"
  },

  // Developer Details
  developer: {
    name: "Developed by Sonu",
    role: "",
    image: "/images/developer-photo.jpg"
  },

  // Social & Web
  instagram: "https://www.instagram.com/vivek_online_csc_centre?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  facebook: "",
  
  // Helpers
  isConfigured(value) {
    return value && typeof value === 'string' && !value.startsWith("YOUR_");
  }
};
