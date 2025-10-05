// content.ts

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

// ----------------------------------------------------------
// Şimdi örnek içeriklerle SiteContent objesi:

const content: SiteContent = {
  site: {
    title: "Young Website",
    description: "A modern website for new generation.",
    keywords: "nextjs, react, typescript, young",
  },
  colors: {
    lightMode: {
      primary: "#9BC31C",
      lightGray: "#D9D9D9",
      darkGray: "#8A8A8A",
      lightBlue: "#ADD8E6",
      lightGreen: "#90EE90",
      white: "#FFFFFF",
    },
    darkMode: {
      primary: "#9BC31C",
      lightGreen: "#90EE90",
      white: "#FFFFFF",
      lightGray: "#D9D9D9",
      darkGray: "#8A8A8A",
    },
  },
  navigation: {
    home: "Home",
    about: "About",
    services: "Services",
    programs: "Programs",
    contact: "Contact",
  },
  hero: {
    title: "Welcome to Young Website",
    subtitle: "New generation web solutions",
    description: "We create modern and responsive websites.",
    cta: "Get Started",
    secondaryCta: "Learn More",
  },
  about: {
    title: "About Us",
    subtitle: "Who we are",
    description: "We are a young and dynamic team.",
    mission: "Deliver high quality software solutions.",
    stats: [
      { number: "10+", label: "Years of Experience" },
      { number: "100+", label: "Projects Delivered" },
    ],
  },
  services: {
    title: "Our Services",
    subtitle: "What we offer",
    description: "We provide a variety of services to meet your needs.",
    items: [
      {
        title: "Web Development",
        description: "Modern and scalable web applications.",
        icon: "web-icon.svg",
      },
      {
        title: "Mobile Apps",
        description: "iOS and Android mobile apps.",
        icon: "mobile-icon.svg",
      },
    ],
  },
  programs: {
    title: "Programs",
    subtitle: "Our training programs",
    categories: [
      {
        name: "Web Development",
        description: "Learn to build websites",
        items: [
          {
            title: "Beginner",
            duration: "3 months",
            features: ["HTML", "CSS", "JavaScript"],
            popular: true,
          },
          {
            title: "Advanced",
            duration: "6 months",
            features: ["React", "Next.js", "TypeScript"],
            popular: false,
          },
        ],
      },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What our clients say",
    items: [
      {
        name: "Jane Doe",
        role: "CEO, CompanyX",
        content: "Amazing service and support!",
        avatar: "jane-avatar.png",
      },
      {
        name: "John Smith",
        role: "Developer, CompanyY",
        content: "Highly recommend!",
        avatar: "john-avatar.png",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    description: "Reach out for inquiries or support.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send",
    },
    info: {
      address: "123 Main St, City",
      phone: "+123456789",
      email: "info@youngwebsite.com",
    },
  },
  footer: {
    description: "© 2025 Young Website. All rights reserved.",
    links: {
      company: "Company",
      about: "About Us",
      careers: "Careers",
      contact: "Contact",
    },
    social: {
      facebook: "https://facebook.com/youngwebsite",
      twitter: "https://twitter.com/youngwebsite",
      instagram: "https://instagram.com/youngwebsite",
      linkedin: "https://linkedin.com/company/youngwebsite",
    },
    copyright: "© 2025 Young Website",
  },
};

export default content;
