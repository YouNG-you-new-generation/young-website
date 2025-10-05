'use client';

import { ProgramsSection, ColorPalette } from '@/types/content';

interface ProgramsProps {
  programs: ProgramsSection;
  colors?: ColorPalette;
}

export default function Programs({ programs }: ProgramsProps) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F0F7FF] to-white overflow-hidden">
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
            <span className="text-[#9BC31C] font-semibold tracking-widest text-lg">PROGRAMLARIMIZ</span>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5DB81] to-[#9BC31C] rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#8A8A8A] mb-6">
            {programs.title}
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-[#9BC31C] mb-8">
            {programs.subtitle}
          </h3>
        </div>

        {/* Programs Categories */}
        <div className="space-y-20">
          {programs.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              {/* Category Header */}
              <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-bold text-[#8A8A8A] mb-6">
                  {category.name}
                </h3>
                
                <p className="text-xl text-[#8A8A8A] leading-relaxed max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Programs Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((program, programIndex) => (
                  <div key={programIndex} className="group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9BC31C]/20 to-[#C5DB81]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full">
                        {/* Popular Badge */}
                        {program.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                              POPÜLER
                            </div>
                          </div>
                        )}

                        {/* Program Title */}
                        <h4 className="text-2xl font-bold text-[#8A8A8A] mb-4 text-center group-hover:text-[#9BC31C] transition-colors duration-300">
                          {program.title}
                        </h4>

                        {/* Duration */}
                        <div className="text-center mb-6">
                          <span className="inline-block bg-[#F0F7FF] text-[#9BC31C] px-4 py-2 rounded-full font-semibold">
                            {program.duration}
                          </span>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                          {program.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-[#9BC31C] rounded-full flex-shrink-0"></div>
                              <span className="text-[#8A8A8A] text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-full"></div>
            <span className="text-[#9BC31C] font-semibold tracking-widest text-lg">ÜCRETSİZ EĞİTİM</span>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5DB81] to-[#9BC31C] rounded-full"></div>
          </div>
          
          <p className="text-xl text-[#8A8A8A] max-w-2xl mx-auto">
            Tüm programlarımız gençlerin gelişimi için tamamen ücretsizdir. 
            Geleceğin liderlerini yetiştirmek için buradayız.
          </p>
        </div>
      </div>
    </section>
  );
}
