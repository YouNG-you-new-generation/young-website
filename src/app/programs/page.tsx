'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { SiteContent } from '@/types/content';

export default function ProgramsPage() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('liderlik');

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const currentCategory = content.programs.categories.find(cat => cat.id === activeCategory);

  return (
    <main className="min-h-screen">
      <Header navigation={content.navigation} colors={content.colors} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16" style={{ backgroundColor: content.colors.lightMode.lightBlue }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: content.colors.lightMode.darkGray }}>
            Programlarımız
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto" style={{ color: content.colors.lightMode.darkGray }}>
            Ücretsiz gelişim programları ile geleceğinizi şekillendirin
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8" style={{ backgroundColor: content.colors.lightMode.white }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {content.programs.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-green-500'
                }`}
                style={{
                  backgroundColor: activeCategory === category.id 
                    ? content.colors.lightMode.primary 
                    : 'transparent'
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16" style={{ backgroundColor: content.colors.lightMode.lightBlue }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4" style={{ color: content.colors.lightMode.primary }}>
              {currentCategory?.title}
            </h2>
            <p className="text-lg opacity-80" style={{ color: content.colors.lightMode.darkGray }}>
              {currentCategory?.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory?.items.map((program, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-3xl transition-all duration-300 hover:scale-105" style={{ 
                  backgroundColor: content.colors.lightMode.white,
                  border: `2px solid ${content.colors.lightMode.primary}`
                }}>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl" style={{ 
                    backgroundColor: content.colors.lightMode.primary
                  }}>
                    <span className="text-2xl text-white">{program.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3 text-center" style={{ color: content.colors.lightMode.darkGray }}>
                    {program.title}
                  </h3>
                  
                  <p className="text-base leading-relaxed text-center mb-6" style={{ color: content.colors.lightMode.darkGray }}>
                    {program.description}
                  </p>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{ 
                      backgroundColor: content.colors.lightMode.lightGreen,
                      color: content.colors.lightMode.primary
                    }}>
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: content.colors.lightMode.primary }}></div>
                      Ücretsiz
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16" style={{ backgroundColor: content.colors.lightMode.white }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center" style={{ color: content.colors.lightMode.primary }}>
            Program Avantajları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🎓', title: 'Sertifika', desc: 'Program sonunda sertifika alın' },
              { icon: '👥', title: 'Ağ', desc: 'Profesyonel ağınızı genişletin' },
              { icon: '💼', title: 'Deneyim', desc: 'Pratik deneyim kazanın' },
              { icon: '🚀', title: 'Kariyer', desc: 'Kariyerinizi hızlandırın' }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl" style={{ 
                backgroundColor: content.colors.lightMode.lightBlue,
                border: `1px solid ${content.colors.lightMode.primary}20`
              }}>
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-medium mb-2" style={{ color: content.colors.lightMode.primary }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm" style={{ color: content.colors.lightMode.darkGray }}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: content.colors.lightMode.lightBlue }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-10 rounded-3xl" style={{ 
            backgroundColor: content.colors.lightMode.white,
            border: `2px solid ${content.colors.lightMode.primary}`
          }}>
            <h2 className="text-3xl font-light mb-6" style={{ color: content.colors.lightMode.darkGray }}>
              Hangi Program Size Uygun?
            </h2>
            <p className="text-lg mb-8" style={{ color: content.colors.lightMode.darkGray }}>
              Ücretsiz danışmanlık alın ve size en uygun programı bulun
            </p>
            <button className="px-8 py-4 text-white font-medium text-lg rounded-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: content.colors.lightMode.primary }}>
              Danışmanlık Al
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
