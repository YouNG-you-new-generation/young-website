export interface ColorPalette {
  lightMode: {
    primary: string;
    lightGray: string;
    darkGray: string;
    lightBlue: string;
    lightGreen: string;
    white: string;
  };
  darkMode: {
    primary: string;
    lightGreen: string;
    white: string;
    lightGray: string;
    darkGray: string;
  };
}

export interface SiteContent {
  site: SiteInfo;
  colors: ColorPalette;
  navigation: Navigation;
  hero: HeroSection;
  about: AboutSection;
  services: ServicesSection;
  programs: ProgramsSection;
  testimonials: TestimonialsSection;
  contact: ContactSection;
  footer: FooterSection;
}

export interface SiteInfo {
  title: string;
  description: string;
  keywords: string;
}

export interface Navigation {
  home: string;
  about: string;
  services: string;
  programs: string;
  contact: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  secondaryCta: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  description: string;
  mission: string;
  stats: Stat[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface ServicesSection {
  title: string;
  subtitle: string;
  description: string;
  items: ServiceItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProgramsSection {
  title: string;
  subtitle: string;
  categories: ProgramCategory[];
}

export interface ProgramCategory {
  name: string;
  description: string;
  items: ProgramItem[];
}

export interface ProgramItem {
  title: string;
  duration: string;
  features: string[];
  popular: boolean;
}

export interface TestimonialsSection {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ContactSection {
  title: string;
  subtitle: string;
  description: string;
  form: ContactForm;
  info: ContactInfo;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface FooterSection {
  description: string;
  links: FooterLinks;
  social: SocialLinks;
  copyright: string;
}

export interface FooterLinks {
  company: string;
  about: string;
  careers: string;
  contact: string;
}

export interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}
