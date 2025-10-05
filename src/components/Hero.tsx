'use client';

import { HeroSection, ColorPalette } from '@/types/content';

interface HeroProps {
  hero: HeroSection;
  colors?: ColorPalette;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* AĞ DEĞİL BAĞ KUR */}
        <div className="mb-16">
          <h2 className="text-8xl md:text-9xl font-black text-[#8A8A8A] leading-none tracking-tight mb-4">
            AĞ DEĞİL
          </h2>
          <h3 className="text-8xl md:text-9xl font-black text-[#9BC31C] leading-none tracking-tight">
            BAĞ KUR
          </h3>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-[#8A8A8A] leading-relaxed">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
