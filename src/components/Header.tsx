'use client';

import { useState, useEffect } from 'react';
import { Navigation, ColorPalette } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  navigation: Navigation;
  colors?: ColorPalette;
}

export default function Header({ navigation }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { key: 'home', href: '/', label: navigation.home },
    { key: 'about', href: '/about', label: navigation.about },
    { key: 'services', href: '/services', label: navigation.services },
    { key: 'programs', href: '/programs', label: navigation.programs },
    { key: 'contact', href: '/contact', label: navigation.contact }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#D9D9D9]/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/images/young-logo.jpeg"
                  alt="Young Logo"
                  width={48}
                  height={48}
                  className="rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-[#8A8A8A]">
                  Young
                </h1>
                <p className="text-xs text-[#8A8A8A] font-medium tracking-wide">
                  You New Generation
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="relative px-4 py-2 text-[#8A8A8A] hover:text-[#9BC31C] transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Hover Background */}
                <div className="absolute inset-0 bg-[#F0F7FF] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                
                {/* Bottom Border */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#9BC31C] group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-3 text-[#8A8A8A] hover:text-[#9BC31C] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#D9D9D9]/50 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="block px-6 py-3 text-[#8A8A8A] hover:text-[#9BC31C] hover:bg-[#F0F7FF] transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
