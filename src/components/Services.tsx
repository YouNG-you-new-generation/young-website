'use client';

import { ServicesSection, ColorPalette } from '@/types/content';

interface ServicesProps {
  services: ServicesSection;
  colors?: ColorPalette;
}

export default function Services({ services }: ServicesProps) {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#9BC31C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C5DB81] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-full"></div>
            <span className="text-[#9BC31C] font-semibold tracking-widest text-lg">HİZMETLERİMİZ</span>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5DB81] to-[#9BC31C] rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#8A8A8A] mb-6">
            {services.title}
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-[#9BC31C] mb-8">
            {services.subtitle}
          </h3>
          
          <p className="text-xl text-[#8A8A8A] leading-relaxed max-w-4xl mx-auto">
            {services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.items.map((service, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9BC31C]/20 to-[#C5DB81]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6 group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-[#8A8A8A] mb-4 group-hover:text-[#9BC31C] transition-colors duration-300">
                    {service.title}
                  </h4>
                  
                  <p className="text-[#8A8A8A] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-full"></div>
            <span className="text-[#9BC31C] font-semibold tracking-widest text-lg">ÜCRETSİZ HİZMET</span>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5DB81] to-[#9BC31C] rounded-full"></div>
          </div>
          
          <p className="text-xl text-[#8A8A8A] max-w-2xl mx-auto">
            Tüm hizmetlerimiz gençlerin gelişimi için tamamen ücretsizdir. 
            Geleceğin liderlerini yetiştirmek için buradayız.
          </p>
        </div>
      </div>
    </section>
  );
}
