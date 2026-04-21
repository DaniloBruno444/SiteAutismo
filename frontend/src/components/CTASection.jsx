import React from 'react';
import { ArrowRight, Sparkles, Shield, Users } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800" />
      
      {/* Overlay patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-teal-300/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-8">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          Junte-se a 2.400+ famílias
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
          A jornada é longa.
          <br />
          <span className="text-teal-200">Você não precisa caminhar sozinho.</span>
        </h2>

        <p className="text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed mb-12 font-body">
          O Téo está pronto para ser o seu parceiro de cuidado — disponível 24h, 
          empático, e sempre baseado em evidências científicas.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://teadobem.danilobruno.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white text-teal-700 hover:bg-teal-50 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <Sparkles className="w-5 h-5 text-teal-500" />
            Começar Grátis Agora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-teal-200 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>100% LGPD Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>2.400+ famílias ativas</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Sem cartão de crédito</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;