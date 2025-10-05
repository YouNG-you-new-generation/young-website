'use client';

import { FooterSection, ColorPalette } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  footer: FooterSection;
  colors: ColorPalette;
}

export default function Footer({ footer, colors }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-br from-[#8A8A8A] via-[#8A8A8A] to-[#8A8A8A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#9BC31C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C5DB81] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Image
                    src="/images/young-logo.jpeg"
                    alt="Young Logo"
                    width={48}
                    height={48}
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Young</h3>
                  <p className="text-sm text-white/80">You New Generation</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-8 max-w-md">
                Yardımlaşmayı hedefleyen, sosyal, zihinsel, kişisel gelişimi gözeterek takım ruhu ile gençleri kendilerini bilen, yenilikçi, lider bireyler olmak ve geleceğimizi en iyi şekilde yönlendirmek amacıyla bir araya geldik.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { icon: "📘", label: "Facebook" },
                  { icon: "📷", label: "Instagram" },
                  { icon: "🐦", label: "Twitter" },
                  { icon: "💼", label: "LinkedIn" }
                ].map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-[#9BC31C] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Hızlı Linkler</h4>
              
              <div className="space-y-3">
                {[
                  { href: "/", label: "Ana Sayfa" },
                  { href: "/about", label: "Hakkımızda" },
                  { href: "/services", label: "Hizmetlerimiz" },
                  { href: "/programs", label: "Programlar" },
                  { href: "/contact", label: "İletişim" }
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-white/80 hover:text-[#9BC31C] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">İletişim</h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#9BC31C] rounded-full"></div>
                  <span className="text-white/80">info@younggeneration.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#9BC31C] rounded-full"></div>
                  <span className="text-white/80">+90 (212) 555 0123</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#9BC31C] rounded-full"></div>
                  <span className="text-white/80">İstanbul, Türkiye</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-white/20">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Güncel Kalın</h4>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              En son haberler, etkinlikler ve programlar hakkında bilgi almak için bültenimize abone olun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#9BC31C] focus:border-transparent transition-all duration-300"
              />
              
              <button className="px-8 py-3 bg-[#9BC31C] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#9BC31C]/25 transition-all duration-300 transform hover:scale-105">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Young - You New Generation. Tüm hakları saklıdır.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-[#9BC31C] transition-colors duration-300">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-[#9BC31C] transition-colors duration-300">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-[#9BC31C] transition-colors duration-300">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
