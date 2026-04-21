import React from 'react';
import { howItWorksSteps } from '../data/mockData';
import { Mic, Cpu, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const iconMap = {
  mic: Mic,
  cpu: Cpu,
  lightbulb: Lightbulb,
  check: CheckCircle,
};

const colorClasses = [
  { bg: 'from-teal-400 to-teal-600', light: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100' },
  { bg: 'from-cyan-400 to-cyan-600', light: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100' },
  { bg: 'from-indigo-400 to-indigo-600', light: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
  { bg: 'from-teal-500 to-green-600', light: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-white relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">A jornada com o Téo</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Como funciona, na prática?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-body">
            Em 4 passos simples, transforme registros do dia a dia em insights que mudam a rotina.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="absolute hidden lg:block top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-200 via-cyan-200 to-teal-200 z-0" />

          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const colors = colorClasses[index];
            return (
              <div key={step.step} className="relative text-center group">
                {/* Step number bubble */}
                <div className="relative z-10 inline-flex flex-col items-center">
                  <div className={`relative w-24 h-24 mx-auto ${colors.light} ${colors.border} border-2 rounded-3xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-teal-500/20`}>
                    {/* Emoji on top */}
                    <span className="text-4xl">{step.emoji}</span>
                    {/* Step number badge */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-body mb-3">{step.description}</p>
                  <span className={`inline-block text-xs font-semibold ${colors.text} ${colors.light} px-3 py-1 rounded-full border ${colors.border}`}>
                    {step.detail}
                  </span>
                </div>

                {/* Arrow for mobile */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-5 h-5 text-teal-300 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://teadobem.danilobruno.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-teal hover:shadow-xl hover:scale-105"
          >
            Começar agora — é grátis
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;