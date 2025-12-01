import { Brand, WhyChooseItem } from './types';

export const COMPANY_INFO = {
  name: "Musetech Solutions FZCO",
  tagline: "Technology • Wellness • Digital Identity",
  description: "Three Brands. One Vision. Thoughtfully Curated to Support Modern Growth.",
  about: "Established in Dubai, Musetech Solutions is a proudly Canadian-owned company dedicated to blending innovation with purpose. We create sustainable digital ecosystems through our brands, combining technology, wellness, and creativity to enhance businesses and communities across the UAE.",
  email: "info@musetechsolutions.com",
  phone: "+971 50 000 0000", // Placeholder based on generic format, using info from PDF footer if available
  copyright: "Copyrights © 2025 Designed & Developed by iGrowth Media"
};

export const BRANDS: Brand[] = [
  {
    id: 'creative-muse',
    name: "Creative Muse Marketing",
    tagline: "Technology that works for your business.",
    description: "We provide modern IT services to help businesses scale with confidence — from professional website development to digital automation and technical support.",
    services: [
      "Website & App Development",
      "Business Software & Automation",
      "Branding + Digital Presence",
      "Ongoing Technical Support"
    ],
    color: "bg-[#1a2e35]", // Solid deep slate/teal
    accent: "#00C2FF",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    linkText: "Read More",
    linkUrl: "https://creativemuse.ca/"
  },
  {
    id: 'auralis-crystals',
    name: "Auralis Crystals",
    tagline: "Wellness through natural energy.",
    description: "Our crystal shop offers handpicked healing crystals and spiritual tools created to support emotional balance, clarity, and mindful living.",
    services: [
      "Raw & Polished Crystals",
      "Crystal Bracelets & Jewelry",
      "Cleansing & Meditation Tools"
    ],
    color: "bg-[#2d1b2e]", // Solid deep purple
    accent: "#E0AAFF",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop",
    linkText: "Shop Crystals",
    linkUrl: "https://auraliscrystals.com/"
  },
  {
    id: 'tappitcards',
name: "TappitCards | Digital Business Cards",
    tagline: "Share your identity in one tap.",
    description: "A smart, eco-friendly alternative to paper business cards. Custom designs you can share instantly via QR, link, or NFC.",
    services: [
      "Modern + Professional Impression",
      "Instantly Updatable Details",
      "One Tap Sharing",
      "Works on Any Device"
    ],
    color: "bg-[#0f0f0f]", // Solid almost black
    accent: "#FFFFFF",
    image: "/Bamboo-card.jpg",
    linkText: "Get Your Digital Card",
    linkUrl: "https://tappitcards.com/"
  }
];

export const WHY_CHOOSE: WhyChooseItem[] = [
  {
    title: "Unified Quality",
    description: "Thoughtfully built brands, not just products.",
    icon: "Diamond"
  },
  {
    title: "Purpose-Driven",
    description: "We create with meaning and use.",
    icon: "Target"
  },
  {
    title: "Modern Approach",
    description: "Simple, practical, people-focused solutions.",
    icon: "Zap"
  },
  {
    title: "Consistent Support",
    description: "We believe in relationships, not transactions.",
    icon: "HeartHandshake"
  }
];
