'use client';

import { AboutSection, ColorPalette } from '@/types/content';

interface AboutProps {
  about: AboutSection;
  colors: ColorPalette;
}

export default function About({ about, colors }: AboutProps) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-[#F0F7FF] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#9BC31C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C5DB81] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-full"></div>
            <span className="text-[#9BC31C] font-semibold tracking-widest text-lg">HAKKIMIZDA</span>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5DB81] to-[#9BC31C] rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#8A8A8A] mb-6">
            {about.title}
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-[#9BC31C] mb-8">
            {about.subtitle}
          </h3>
          
          <p className="text-xl text-[#8A8A8A] leading-relaxed max-w-4xl mx-auto">
            {about.description}
          </p>
        </div>

        {/* Mission Statement - Glassmorphism Card */}
        <div className="mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
            
            <div className="relative p-16 text-center">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-1 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-full"></div>
                <span className="mx-6 text-[#9BC31C] font-bold tracking-widest text-xl">MİSYONUMUZ</span>
                <div className="w-20 h-1 bg-gradient-to-r from-[#C5DB81] to-[#9BC31C] rounded-full"></div>
              </div>
              
              <p className="text-2xl text-[#8A8A8A] leading-relaxed font-light max-w-5xl mx-auto">
                {about.mission}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-full animate-pulse"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-[#C5DB81] to-[#9BC31C] rounded-full animate-pulse delay-500"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-[#8A8A8A] to-[#D9D9D9] rounded-full animate-pulse delay-1000"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-r from-[#D9D9D9] to-[#8A8A8A] rounded-full animate-pulse delay-1500"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {about.stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9BC31C]/20 to-[#C5DB81]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="text-5xl font-black text-[#9BC31C] mb-4 group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  
                  <div className="text-xl font-semibold text-[#8A8A8A]">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
