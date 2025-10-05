'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Programs from '@/components/Programs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import content from '@/data/content.json';
import { SiteContent } from '@/types/content';

const siteContent = content as SiteContent;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header navigation={siteContent.navigation} />
      <Hero hero={siteContent.hero} />
      <About about={siteContent.about} />
      <Services services={siteContent.services} />
      <Programs programs={siteContent.programs} />
      <Contact contact={siteContent.contact} />
      <Footer />
    </main>
  );
}


