'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { SiteContent } from '@/types/content';

export default function ContactPage() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content');
        if (!response.ok) throw new Error('Content fetch failed');
        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error('Error:', err);
      }
    };
    fetchContent();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!content) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <Header navigation={content.navigation} colors={content.colors} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16" style={{ backgroundColor: content.colors.lightMode.lightBlue }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: content.colors.lightMode.darkGray }}>
            İletişim
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto" style={{ color: content.colors.lightMode.darkGray }}>
            Bizimle iletişime geçin, birlikte büyüyelim
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16" style={{ backgroundColor: content.colors.lightMode.white }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8" style={{ color: content.colors.lightMode.primary }}>
                Mesaj Gönderin
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: content.colors.lightMode.darkGray }}>
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: content.colors.lightMode.primary + '40'
                    }}
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: content.colors.lightMode.darkGray }}>
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: content.colors.lightMode.primary + '40'
                    }}
                    placeholder="E-posta adresiniz"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: content.colors.lightMode.darkGray }}>
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: content.colors.lightMode.primary + '40'
                    }}
                  >
                    <option value="">Konu seçin</option>
                    <option value="genel">Genel Bilgi</option>
                    <option value="program">Program Hakkında</option>
                    <option value="katilim">Katılım</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: content.colors.lightMode.darkGray }}>
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 resize-none"
                    style={{ 
                      borderColor: content.colors.lightMode.primary + '40'
                    }}
                    placeholder="Mesajınızı yazın..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 text-white font-medium text-lg rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: content.colors.lightMode.primary }}
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-light mb-8" style={{ color: content.colors.lightMode.primary }}>
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: content.colors.lightMode.primary }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2" style={{ color: content.colors.lightMode.darkGray }}>
                      E-posta
                    </h3>
                    <p className="text-base" style={{ color: content.colors.lightMode.darkGray }}>
                      {content.contact.info.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: content.colors.lightMode.primary }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2" style={{ color: content.colors.lightMode.darkGray }}>
                      Adres
                    </h3>
                    <p className="text-base" style={{ color: content.colors.lightMode.darkGray }}>
                      {content.contact.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: content.colors.lightMode.primary }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2" style={{ color: content.colors.lightMode.darkGray }}>
                      Çalışma Saatleri
                    </h3>
                    <p className="text-base" style={{ color: content.colors.lightMode.darkGray }}>
                      {content.contact.info.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6" style={{ color: content.colors.lightMode.primary }}>
                  Sosyal Medya
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: '📱', label: 'Instagram' },
                    { icon: '🐦', label: 'Twitter' },
                    { icon: '💼', label: 'LinkedIn' },
                    { icon: '📺', label: 'YouTube' }
                  ].map((social, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ 
                        backgroundColor: content.colors.lightMode.lightBlue,
                        border: `1px solid ${content.colors.lightMode.primary}`
                      }}>
                        <span className="text-xl">{social.icon}</span>
                      </div>
                      <span className="text-xs" style={{ color: content.colors.lightMode.darkGray }}>
                        {social.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16" style={{ backgroundColor: content.colors.lightMode.lightBlue }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-8" style={{ color: content.colors.lightMode.primary }}>
            Bizi Ziyaret Edin
          </h2>
          <div className="w-full h-64 rounded-3xl overflow-hidden" style={{ 
            backgroundColor: content.colors.lightMode.white,
            border: `2px solid ${content.colors.lightMode.primary}`
          }}>
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" style={{ color: content.colors.lightMode.primary }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
