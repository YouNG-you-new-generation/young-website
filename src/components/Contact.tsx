'use client';

import { ContactSection, ColorPalette } from '@/types/content';

interface ContactProps {
  contact: ContactSection;
  colors: ColorPalette;
}

export default function Contact({ contact, colors }: ContactProps) {
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
            <span className="text-[#9BC31C] font-semibold tracking-widest text-lg">İLETİŞİM</span>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5DB81] to-[#9BC31C] rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#8A8A8A] mb-6">
            {contact.title}
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-[#9BC31C] mb-8">
            {contact.subtitle}
          </h3>
          
          <p className="text-xl text-[#8A8A8A] leading-relaxed max-w-4xl mx-auto">
            {contact.description}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9BC31C]/20 to-[#C5DB81]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <h4 className="text-2xl font-bold text-[#8A8A8A] mb-8 text-center">
                  Mesaj Gönderin
                </h4>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#8A8A8A] font-medium mb-2">
                        {contact.form.name}
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-[#F0F7FF] border border-[#D9D9D9]/50 rounded-2xl text-[#8A8A8A] placeholder-[#8A8A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#9BC31C] focus:border-transparent transition-all duration-300"
                        placeholder={contact.form.name}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[#8A8A8A] font-medium mb-2">
                        {contact.form.email}
                      </label>
                      <input
                        type="email"
                        className="w-full px-6 py-4 bg-[#F0F7FF] border border-[#D9D9D9]/50 rounded-2xl text-[#8A8A8A] placeholder-[#8A8A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#9BC31C] focus:border-transparent transition-all duration-300"
                        placeholder={contact.form.email}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#8A8A8A] font-medium mb-2">
                      {contact.form.subject}
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-[#F0F7FF] border border-[#D9D9D9]/50 rounded-2xl text-[#8A8A8A] placeholder-[#8A8A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#9BC31C] focus:border-transparent transition-all duration-300"
                      placeholder={contact.form.subject}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#8A8A8A] font-medium mb-2">
                      {contact.form.message}
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-6 py-4 bg-[#F0F7FF] border border-[#D9D9D9]/50 rounded-2xl text-[#8A8A8A] placeholder-[#8A8A8A]/60 focus:outline-none focus:ring-2 focus:ring-[#9BC31C] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={contact.form.message}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg hover:shadow-[#9BC31C]/25 transition-all duration-300 transform hover:scale-105"
                  >
                    {contact.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9BC31C]/20 to-[#C5DB81]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <h4 className="text-2xl font-bold text-[#8A8A8A] mb-8 text-center">
                    İletişim Bilgileri
                  </h4>
                  
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300 transform group-hover/item:scale-110">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-[#8A8A8A] mb-1">Adres</h5>
                        <p className="text-[#8A8A8A]">{contact.info.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300 transform group-hover/item:scale-110">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-[#8A8A8A] mb-1">Telefon</h5>
                        <p className="text-[#8A8A8A]">{contact.info.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#9BC31C] to-[#C5DB81] rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300 transform group-hover/item:scale-110">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-[#8A8A8A] mb-1">E-posta</h5>
                        <p className="text-[#8A8A8A]">{contact.info.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
