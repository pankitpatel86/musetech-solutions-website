export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  services: string[];
  color: string;
  accent: string;
  image: string;
  linkText: string;
  linkUrl: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string; // Lucide icon name reference
}

export interface SocialLink {
  platform: string;
  url: string;
}