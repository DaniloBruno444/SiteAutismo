import React from 'react';
import { Button } from './ui/button';
import { Sparkles, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Inteligência Artificial para o cuidado</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">O seu assistente inteligente na </span>
              <span className="text-teal-600">
                jornada do autismo
              </span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Use a inteligência artificial para entender crises, organizar rotinas e conectar-se com especialistas. 
              O cuidado que seu filho merece, com a tecnologia que você precisa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-lg">
                Experimente o Téo Grátis →
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:border-teal-500 hover:text-teal-600 px-8 py-6 rounded-full text-lg font-medium transition-all duration-200"
              >
                Conheça as Funcionalidades
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Seguro (LGPD)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>IA de Ponta</span>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center space-y-6">
                {/* Illustration */}
                <div className="relative w-full max-w-sm">
                  <div className="flex items-center justify-center space-x-8">
                    {/* Child */}
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                        <div className="text-white text-4xl">👦</div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-lg">✨</span>
                      </div>
                    </div>

                    {/* Connection Line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-teal-500"></div>

                    {/* AI Robot */}
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                        <div className="text-white text-4xl">🤖</div>
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-lg">💡</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Logo */}
                <div className="text-center">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_teado-clone/artifacts/xjm3y939_LogoTeaDoBem.png" 
                    alt="TEAdobem" 
                    className="h-24 w-auto mx-auto object-contain"
                  />
                  <p className="text-gray-600 text-sm mt-2">Inteligência que conecta o cuidado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;