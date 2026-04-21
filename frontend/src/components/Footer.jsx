import React from 'react';
import { footerLinks } from '../data/mockData';
import { Heart, Shield, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-5">
            <img
              src="https://customer-assets.emergentagent.com/job_teado-clone/artifacts/xjm3y939_LogoTeaDoBem.png"
              alt="TEAdobem Logo"
              className="h-14 w-auto object-contain brightness-90"
            />
            <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
              Inteligência Artificial a serviço das famílias com TEA. 
              Transformamos observações do dia a dia em insights que mudam vidas.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>no Brasil 🇧🇷</span>
            </div>

            {/* LGPD badge */}
            <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 px-3 py-2 rounded-xl text-xs text-gray-400">
              <Shield className="w-4 h-4 text-teal-500" />
              <span>LGPD Compliant &amp; Dados Protegidos</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link, i) => (
                <li key={i}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm hover:text-teal-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-sm hover:text-teal-400 transition-colors duration-200">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm hover:text-teal-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm hover:text-teal-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Contato</h4>
              <a
                href="mailto:contato@teadobem.com.br"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@teadobem.com.br
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2026 TEAdobem · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">Todos os sistemas operacionais</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;