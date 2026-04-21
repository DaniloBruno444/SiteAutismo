import React, { useState, useEffect } from 'react';
import { navigationItems } from '../data/mockData';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'glass shadow-sm shadow-teal-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#inicio')}
            className="flex items-center space-x-3 group"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_teado-clone/artifacts/xjm3y939_LogoTeaDoBem.png"
              alt="TEAdobem Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 rounded-full text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 font-medium text-sm"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://teadobem.danilobruno.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200 font-medium text-sm px-3 py-2"
            >
              Entrar
            </a>
            <a
              href="https://teadobem.danilobruno.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-teal hover:shadow-lg hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Começar Grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-white/40 absolute w-full left-0 py-4 px-6">
          <div className="flex flex-col space-y-1 mb-4">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium py-2.5 px-3 rounded-lg transition-all"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <a
              href="https://teadobem.danilobruno.com.br"
              className="text-center text-teal-600 border border-teal-200 py-2.5 rounded-full font-semibold hover:bg-teal-50 transition-colors"
            >
              Entrar
            </a>
            <a
              href="https://teadobem.danilobruno.com.br"
              className="text-center bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2.5 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all"
            >
              Começar Grátis ✨
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;