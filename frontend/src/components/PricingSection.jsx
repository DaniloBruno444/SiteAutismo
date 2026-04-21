import React from 'react';
import { pricingPlans } from '../data/mockData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="planos" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-teal-50/80 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">Planos e Preços</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Comece <span className="text-gradient-teal">grátis</span>,{' '}
            cresça quando quiser
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-body">
            Sem cartão de crédito. Sem pegadinhas. O plano gratuito já transforma sua rotina.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricingPlans.map((plan) => {
            const isPopular = plan.badge === 'Mais Popular';
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-2xl shadow-teal-500/30 scale-105'
                    : 'bg-white border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-100 card-hover'
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                )}

                {/* Plan name & price */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${isPopular ? 'text-teal-100' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold font-display ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${isPopular ? 'text-teal-100' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isPopular ? 'bg-green-400/30' : 'bg-teal-100'
                      }`}>
                        <Check className={`w-3 h-3 ${isPopular ? 'text-green-300' : 'text-teal-600'}`} />
                      </div>
                      <span className={`text-sm leading-relaxed ${isPopular ? 'text-teal-50' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-200 ${
                    isPopular
                      ? 'bg-white text-teal-700 hover:bg-teal-50 hover:scale-105 shadow-md'
                      : 'border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:scale-105'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8 font-body">
          ✓ Sem cartão de crédito &nbsp;•&nbsp; ✓ Cancele quando quiser &nbsp;•&nbsp; ✓ LGPD compliant
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
