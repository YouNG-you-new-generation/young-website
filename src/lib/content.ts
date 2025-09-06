import { SiteContent } from '@/types/content';

export async function getContent(): Promise<SiteContent> {
  try {
    const response = await fetch('/api/content');
    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }
    return response.json();
  } catch (error) {
    console.error('Error loading content:', error);
    // Fallback content
    return {
      site: {
        title: "Young - You New Generation",
        description: "Geleceğin liderlerini yetiştiriyoruz",
        keywords: "gençlik, eğitim, gelecek, liderlik, teknoloji"
      },
      colors: {
        primary: "#9BC31C",
        primaryLight: "#C5DB81",
        lightGray: "#D9D9D9",
        darkGray: "#8A8A8A",
        lightBlue: "#F0F7FF",
        white: "#FFFFFF",
        black: "#000000"
      },
      navigation: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        services: "Hizmetlerimiz",
        programs: "Programlar",
        contact: "İletişim"
      },
      hero: {
        title: "Young",
        subtitle: "You New Generation",
        description: "Modern dünyada gençlerin potansiyelini keşfetmelerine yardımcı oluyoruz.",
        cta: "Hemen Başla",
        secondaryCta: "Daha Fazla Bilgi"
      },
      about: {
        title: "Hakkımızda",
        subtitle: "Neden Young - You New Generation?",
        description: "Young - You New Generation olarak, gençlerin kişisel ve profesyonel gelişimine odaklanıyoruz.",
        stats: [
          { number: "1000+", label: "Mutlu Öğrenci" },
          { number: "50+", label: "Uzman Eğitmen" },
          { number: "95%", label: "Başarı Oranı" }
        ]
      },
      services: {
        title: "Hizmetlerimiz",
        subtitle: "Size Sunduğumuz Değerler",
        items: [
          {
            title: "Teknoloji Eğitimi",
            description: "Güncel teknolojileri öğrenin ve geleceğin dijital dünyasına hazır olun.",
            icon: "💻"
          },
          {
            title: "Liderlik Gelişimi",
            description: "Liderlik becerilerinizi geliştirin ve takımları yönetmeyi öğrenin.",
            icon: "🎯"
          }
        ]
      },
      programs: {
        title: "Programlarımız",
        subtitle: "Ücretsiz Genel Eğitim Programları",
        categories: [
          {
            name: "Liderlik Programları",
            description: "Liderlik becerilerinizi geliştirin ve geleceğin lideri olun",
            items: [
              {
                title: "Genç Liderler Akademisi",
                duration: "6 Ay",
                features: ["Liderlik Eğitimi", "Mentorluk", "Proje Yönetimi", "Sertifika", "Takım Yönetimi"],
                popular: true
              }
            ]
          }
        ]
      },
      testimonials: {
        title: "Öğrencilerimiz Ne Diyor?",
        subtitle: "Başarı Hikayeleri",
        items: [
          {
            name: "Ayşe Yılmaz",
            role: "Yazılım Geliştirici",
            content: "Young - You New Generation sayesinde hayalimdeki kariyere kavuştum.",
            avatar: "👩‍💻"
          }
        ]
      },
      contact: {
        title: "İletişim",
        subtitle: "Bizimle İletişime Geçin",
        description: "Sorularınız için bize ulaşın.",
        form: {
          name: "Ad Soyad",
          email: "E-posta",
          subject: "Konu",
          message: "Mesajınız",
          submit: "Gönder"
        },
        info: {
          address: "İstanbul, Türkiye",
          phone: "+90 (212) 555 0123",
          email: "info@youngyounewgeneration.com"
        }
      },
      footer: {
        description: "Young - You New Generation, gençlerin geleceğe hazırlanması için çalışan bir eğitim kurumudur.",
        links: {
          company: "Şirket",
          about: "Hakkımızda",
          careers: "Kariyer",
          contact: "İletişim"
        },
        social: {
          facebook: "Facebook",
          twitter: "Twitter",
          instagram: "Instagram",
          linkedin: "LinkedIn"
        },
        copyright: "© 2024 Young - You New Generation. Tüm hakları saklıdır."
      }
    };
  }
}
