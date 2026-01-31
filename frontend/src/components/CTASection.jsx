import React from 'react';
import { Button } from './ui/button';
import { stats } from '../data/mockData';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-400 via-cyan-400 to-orange-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl space-y-8">
          {/* Stats */}
          <div className="flex justify-center items-center space-x-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comece a transformar o cuidado hoje
            </h2>
            <p className="text-lg text-gray-600">
              Junte-se a milhares de famílias que já descobriram uma nova forma de entender e apoiar seus filhos com TEA.
            </p>
            <div className="pt-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-lg">
                Experimente Grátis por 14 Dias →
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Sem cartão de crédito • Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;