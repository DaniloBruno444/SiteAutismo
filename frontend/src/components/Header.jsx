import React, { useState, useEffect } from 'react';
import { navigationItems } from '../data/mockData';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      // Scroll anchor — se estiver em outra página, vai para home primeiro
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  const allNavItems = [
    ...navigationItems,
    { name: 'Preços', href: '/precos', highlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="TEAdobem Logo"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {allNavItems.map((item) => (
              item.highlight ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="bg-teal-50 text-teal-600 hover:bg-teal-100 border border-teal-200 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                >
                  {item.name} 💰
                </button>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://autismo.danilobruno.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
            >
              Entrar
            </a>
            <a href="https://autismo.danilobruno.com.br/register" target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition-all duration-200">
                Começar Agora
              </Button>
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-4 space-y-3">
          {allNavItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${item.highlight
                  ? 'bg-teal-50 text-teal-600 border border-teal-200'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-teal-600'
                }`}
            >
              {item.name} {item.highlight && '💰'}
            </button>
          ))}
          <div className="pt-2 border-t border-gray-100 space-y-2">
            <a
              href="https://autismo.danilobruno.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-gray-600 hover:text-teal-600 py-2 font-medium transition-colors"
            >
              Entrar
            </a>
            <a
              href="https://autismo.danilobruno.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;