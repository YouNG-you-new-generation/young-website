'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Programs from '@/components/Programs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { SiteContent } from '@/types/content';

export default function Home() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content');
        if (!response.ok) {
          throw new Error('Content fetch failed');
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
      }
    };

    fetchContent();
  }, []);


  if (error || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Hata: {error || 'İçerik yüklenemedi'}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header navigation={content.navigation} colors={content.colors} />
      <Hero hero={content.hero} colors={content.colors} />
      <About about={content.about} colors={content.colors} />
      <Services services={content.services} colors={content.colors} />
      <Programs programs={content.programs} colors={content.colors} />
      <Contact contact={content.contact} colors={content.colors} />
      <Footer footer={content.footer} colors={content.colors} />
    </main>
  );
}
