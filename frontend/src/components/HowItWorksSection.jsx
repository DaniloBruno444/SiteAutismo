import React from 'react';
import { howItWorksSteps } from '../data/mockData';
import { Mic, Cpu, Lightbulb, CheckCircle } from 'lucide-react';

const iconMap = {
  mic: Mic,
  cpu: Cpu,
  lightbulb: Lightbulb,
  check: CheckCircle
};

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Como funciona?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Em 4 passos simples, transforme o registro diário em insights valiosos.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-teal-300 to-teal-200 -translate-x-1/2 z-0"></div>
                )}

                {/* Step Card */}
                <div className="relative z-10 text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-teal-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;