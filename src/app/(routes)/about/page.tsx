'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { SiteContent } from '@/types/content';

export default function AboutPage() {
  const [content, setContent] = useState<SiteContent | null>(null);

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

  if (!content) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header navigation={content.navigation} colors={content.colors} />
      
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
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Hakkımızda
            </h1>
            <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Gençlerin geleceğini şekillendiren topluluk
            </p>
          </div>
          
          {/* Motto Badge */}
          <div className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-xl font-bold tracking-wide">"Bağ Kur, Büyü, Lider Ol"</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Misyonumuz
            </h2>
            <div className="p-12 rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl border border-gray-200/50 transform hover:scale-105 transition-all duration-500">
              <p className="text-xl leading-relaxed text-gray-700 font-light">
                {content.about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Vizyonumuz
            </h2>
            <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-2xl border border-blue-200/50 transform hover:scale-105 transition-all duration-500">
              <p className="text-xl leading-relaxed text-gray-700 font-light">
                Gençlerin potansiyelini keşfetmelerine, birbirlerine yardım etmelerine ve birlikte büyümelerine yardımcı oluyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Yardımlaşma', desc: 'Birlikte daha güçlüyüz', icon: '🤝', color: 'from-blue-500 to-blue-600' },
              { title: 'Şeffaflık', desc: 'Açık ve dürüst iletişim', icon: '🔍', color: 'from-green-500 to-green-600' },
              { title: 'Sürdürülebilirlik', desc: 'Uzun vadeli düşünme', icon: '🌱', color: 'from-emerald-500 to-emerald-600' },
              { title: 'İnovasyon', desc: 'Yaratıcı çözümler', icon: '💡', color: 'from-purple-500 to-purple-600' },
              { title: 'Kapsayıcılık', desc: 'Herkes için fırsat', icon: '🌟', color: 'from-yellow-500 to-yellow-600' },
              { title: 'Liderlik', desc: 'Örnek olma ve yönlendirme', icon: '👑', color: 'from-red-500 to-red-600' }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="p-8 rounded-3xl bg-white shadow-xl border border-gray-200/50 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-600 text-center leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Visual */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            Bağ Kur
          </h2>
          <div className="relative w-80 h-80 mx-auto">
            {/* Central node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl animate-pulse">
              <span className="text-2xl font-bold">Young</span>
            </div>
            
            {/* Connection lines and nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, index) => (
              <div key={index} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-1 origin-left animate-pulse bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ 
                  transform: `rotate(${angle}deg)`,
                  animationDelay: `${index * 0.2}s`
                }}></div>
                <div className="absolute top-0 right-0 w-6 h-6 rounded-full transform translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg animate-bounce" style={{ 
                  animationDelay: `${index * 0.2}s`
                }}></div>
              </div>
            ))}
          </div>
          <p className="text-xl mt-12 text-gray-600 font-medium">
            Gençler arasında güçlü bağlar kuruyoruz
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Topluluk Üyesi', icon: '👥' },
              { number: '50+', label: 'Etkinlik', icon: '🎉' },
              { number: '100%', label: 'Yardımlaşma', icon: '🤝' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl border border-gray-200/50 transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black mb-2 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
