import React from 'react';
import { features } from '../data/mockData';
import { Mic, BarChart3, Brain, Video, Shield, Lightbulb } from 'lucide-react';

const iconMap = {
  mic: Mic,
  chart: BarChart3,
  brain: Brain,
  video: Video,
  shield: Shield,
  lightbulb: Lightbulb,
};

const colorMap = {
  teal: {
    icon: 'from-teal-400 to-teal-600',
    badge: 'bg-teal-100 text-teal-700',
    glow: 'group-hover:shadow-teal-500/20',
    accent: 'text-teal-600',
    ring: 'ring-teal-100',
  },
  cyan: {
    icon: 'from-cyan-400 to-cyan-600',
    badge: 'bg-cyan-100 text-cyan-700',
    glow: 'group-hover:shadow-cyan-500/20',
    accent: 'text-cyan-600',
    ring: 'ring-cyan-100',
  },
  indigo: {
    icon: 'from-indigo-400 to-indigo-600',
    badge: 'bg-indigo-100 text-indigo-700',
    glow: 'group-hover:shadow-indigo-500/20',
    accent: 'text-indigo-600',
    ring: 'ring-indigo-100',
  },
  purple: {
    icon: 'from-purple-400 to-purple-600',
    badge: 'bg-purple-100 text-purple-700',
    glow: 'group-hover:shadow-purple-500/20',
    accent: 'text-purple-600',
    ring: 'ring-purple-100',
  },
  green: {
    icon: 'from-green-400 to-green-600',
    badge: 'bg-green-100 text-green-700',
    glow: 'group-hover:shadow-green-500/20',
    accent: 'text-green-600',
    ring: 'ring-green-100',
  },
  orange: {
    icon: 'from-orange-400 to-orange-600',
    badge: 'bg-orange-100 text-orange-700',
    glow: 'group-hover:shadow-orange-500/20',
    accent: 'text-orange-600',
    ring: 'ring-orange-100',
  },
};

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">O que o Téo oferece</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Tecnologia a serviço do{' '}
            <span className="text-gradient-teal">cuidado</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-body">
            Ferramentas inteligentes projetadas para simplificar a rotina e transformar 
            observações do dia a dia em decisões melhores.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            const colors = colorMap[feature.color] || colorMap.teal;
            return (
              <div
                key={feature.id}
                className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl ${colors.glow} border border-gray-100 hover:border-transparent transition-all duration-300 card-hover`}
              >
                {/* Badge */}
                {feature.badge && (
                  <div className={`absolute top-6 right-6 text-xs font-bold px-2.5 py-1 rounded-full ${colors.badge}`}>
                    {feature.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${colors.icon} rounded-2xl flex items-center justify-center mb-5 shadow-md ring-4 ${colors.ring}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-body mb-4">{feature.description}</p>

                {/* Benefit line */}
                <div className={`flex items-center gap-2 text-sm font-semibold ${colors.accent}`}>
                  <span className="text-base">✓</span>
                  {feature.benefit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;