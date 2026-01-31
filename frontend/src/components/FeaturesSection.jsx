import React from 'react';
import { features } from '../data/mockData';
import { Mic, BarChart3, Brain, Video, Shield, Lightbulb } from 'lucide-react';

const iconMap = {
  mic: Mic,
  chart: BarChart3,
  brain: Brain,
  video: Video,
  shield: Shield,
  lightbulb: Lightbulb
};

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Tecnologia a serviço do <span className="text-teal-500">cuidado</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ferramentas inteligentes projetadas para simplificar a rotina e oferecer insights valiosos sobre o desenvolvimento.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 space-y-4"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;