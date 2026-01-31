import React from 'react';
import { professionalFeatures, professionalBenefits } from '../data/mockData';
import { Button } from './ui/button';
import { Activity, CheckCircle } from 'lucide-react';

const ProfessionalSection = () => {
  return (
    <section id="profissionais" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <Activity className="w-8 h-8 text-teal-400" />
          <span className="text-teal-400 font-semibold text-lg">NeuroCare Connect</span>
        </div>

        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Para Profissionais de Saúde
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Eleve o nível do cuidado com dados estruturados. Acompanhe pacientes remotamente e tome decisões baseadas em evidências.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {professionalFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h4 className="text-xl font-bold">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 space-y-8">
          <div className="text-center">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-lg">
              Cadastre sua Clínica
            </Button>
          </div>

          <div className="border-t border-white/20 pt-8">
            <h3 className="text-2xl font-bold text-center mb-8">Tudo que você precisa</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {professionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;