import React from 'react';
import { Sparkles, Shield, Heart, ArrowRight, Star } from 'lucide-react';
import { stats } from '../data/mockData';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20">
      {/* Background decoration blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-200/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Inteligência Artificial para o cuidado com TEA
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
                O assistente que{' '}
                <br className="hidden sm:block" />
                <span className="text-gradient-teal">entende seu filho</span>{' '}
                <br className="hidden sm:block" />
                tão bem quanto você.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-body">
              Fale com o <strong className="text-teal-700">Téo</strong> — nossa IA — e transforme 
              observações do dia a dia em insights que ajudam a antecipar crises, organizar rotinas 
              e melhorar a qualidade de vida de toda a família.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://teadobem.danilobruno.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-teal hover:shadow-xl hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Falar com o Téo — Grátis
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-teal-400 text-gray-700 hover:text-teal-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:bg-teal-50"
              >
                Ver como funciona
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <Shield className="w-4 h-4 text-teal-500" />
                <span>100% LGPD</span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                <span>Feito por pais, para pais</span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 pelas famílias</span>
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative flex items-center justify-center animate-fade-in-right">
            {/* Main floating card — Chat mockup */}
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-3xl shadow-2xl shadow-teal-500/20 p-6 w-80 border border-teal-50">
                {/* Chat header */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                      🤖
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Téo</div>
                    <div className="text-xs text-teal-600 font-medium">● Online agora</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 py-4">
                  {/* Teo message */}
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-sm flex-shrink-0 mt-0.5">🤖</div>
                    <div className="bg-teal-50 border border-teal-100 rounded-2xl rounded-tl-sm px-3 py-2.5 text-sm text-gray-800 leading-relaxed max-w-[220px]">
                      Bom dia! 🌅 Ontem o <strong>Lucas</strong> teve um dia excelente. Notei que após 
                      <strong> 20 min de rotina estruturada</strong>, ele ficou mais calmo por toda a tarde.
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl rounded-tr-sm px-3 py-2.5 text-sm text-white max-w-[200px]">
                      Que ótimo! O que você sugere para hoje?
                    </div>
                  </div>

                  {/* Teo response */}
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-sm flex-shrink-0 mt-0.5">🤖</div>
                    <div className="flex flex-col gap-1">
                      <div className="bg-teal-50 border border-teal-100 rounded-2xl rounded-tl-sm px-3 py-2.5 text-sm text-gray-800 max-w-[220px]">
                        💡 <strong>Dica do Dia:</strong> Inicie com 15 min de atividade sensorial leve antes do café da manhã.
                      </div>
                      <div className="text-xs text-gray-400 ml-1">Baseado em 18 observações</div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2.5 border border-gray-100">
                  <span className="text-xs text-gray-400 flex-1">Fale com o Téo...</span>
                  <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge cards */}
            <div className="absolute -top-6 -left-8 glass rounded-2xl px-4 py-3 shadow-lg animate-float-delay z-20">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎙️</span>
                <div>
                  <div className="text-xs font-bold text-gray-800">Áudio analisado</div>
                  <div className="text-xs text-teal-600">há 2 minutos</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-6 glass rounded-2xl px-4 py-3 shadow-lg animate-float z-20" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <div>
                  <div className="text-xs font-bold text-gray-800">Padrão detectado</div>
                  <div className="text-xs text-orange-500">Sono → Crise</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 glass rounded-2xl px-4 py-3 shadow-lg animate-float-slow z-20">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-gray-800">4.9/5</div>
              </div>
            </div>

            {/* Glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/10 rounded-full blur-2xl -z-10 scale-75" />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 text-center border border-white/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 font-display">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;