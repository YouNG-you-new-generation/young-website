'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { SiteContent } from '@/types/content';

export default function ServicesPage() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content');
        if (!response.ok) throw new Error('Content fetch failed');
        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header navigation={content.navigation} colors={content.navigation} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, ${content.colors.lightMode.primary} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Hizmetlerimiz
          </h1>
          <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Gençlere özel, ücretsiz gelişim fırsatları
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {content.services.items.map((service, index) => (
              <div key={index} className="group">
                <div className="p-10 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl transform bg-white shadow-xl border border-gray-200/50 overflow-hidden relative">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-green-600 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl text-white">{service.icon}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg leading-relaxed text-center mb-8 text-gray-600">
                      {service.description}
                    </p>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
                        <div className="w-3 h-3 rounded-full mr-3 bg-white"></div>
                        Ücretsiz
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-green-50 to-blue-50 shadow-2xl border border-green-200/50 transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Topluluğa Katılmak İster misiniz?
            </h2>
            <p className="text-xl mb-10 text-gray-600 leading-relaxed">
              Ücretsiz üye olun ve diğer gençlerle birlikte büyüyün
            </p>
            <button className="px-12 py-6 text-white font-bold text-xl rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform bg-gradient-to-r from-green-500 to-green-600 shadow-xl">
              Hemen Katıl
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Neler Sunuyoruz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Hedef Odaklı', desc: 'Kişisel hedeflerinize uygun programlar', color: 'from-blue-500 to-blue-600' },
              { icon: '🤝', title: 'Topluluk', desc: 'Benzer hedeflere sahip gençlerle tanışın', color: 'from-green-500 to-green-600' },
              { icon: '📚', title: 'Sürekli Öğrenme', desc: 'Güncel ve pratik bilgiler', color: 'from-purple-500 to-purple-600' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="p-8 rounded-3xl bg-white shadow-xl border border-gray-200/50 transform hover:scale-105 transition-all duration-300">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            Rakamlarla Young
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Topluluk Üyesi', icon: '👥', color: 'from-blue-500 to-blue-600' },
              { number: '50+', label: 'Etkinlik', icon: '🎉', color: 'from-green-500 to-green-600' },
              { number: '100%', label: 'Yardımlaşma', icon: '🤝', color: 'from-purple-500 to-purple-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="p-10 rounded-3xl bg-white shadow-xl border border-gray-200/50 transform hover:scale-105 transition-all duration-300">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-5xl">{stat.icon}</span>
                  </div>
                  <div className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.number}</div>
                  <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            Nasıl Çalışır?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Üye Ol', desc: 'Hızlı ve ücretsiz kayıt', icon: '📝' },
              { step: '02', title: 'Profil Oluştur', desc: 'Hedeflerini belirle', icon: '👤' },
              { step: '03', title: 'Program Seç', desc: 'Sana uygun programı bul', icon: '🎯' },
              { step: '04', title: 'Başla', desc: 'Öğrenmeye ve büyümeye başla', icon: '🚀' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white font-bold">{process.step}</span>
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{process.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{process.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
