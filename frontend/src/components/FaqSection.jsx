import React, { useState } from 'react';
import { faqItems } from '../data/mockData';

// Inline icon to avoid dependency issue
const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


const FaqItem = ({ item, isOpen, onToggle }) => (
  <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
    isOpen ? 'border-teal-200 shadow-sm shadow-teal-500/10' : 'border-gray-100'
  }`}>
    <button
      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      onClick={onToggle}
    >
      <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
      <ChevronDown
        className={`w-5 h-5 text-teal-500 flex-shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
    {isOpen && (
      <div className="px-6 pb-6">
        <p className="text-gray-600 leading-relaxed font-body text-sm">{item.answer}</p>
      </div>
    )}
  </div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">Dúvidas Frequentes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Perguntas e{' '}
            <span className="text-gradient-teal">Respostas</span>
          </h2>
          <p className="text-lg text-gray-500 font-body">
            Tudo que você precisa saber antes de começar.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Footer question */}
        <div className="mt-10 text-center bg-teal-50 border border-teal-100 rounded-2xl p-6">
          <p className="text-gray-600 font-body text-sm">
            Ainda tem dúvidas? Fale direto com o Téo ou envie um e-mail para
          </p>
          <a href="mailto:contato@teadobem.com.br" className="text-teal-600 font-semibold hover:underline">
            contato@teadobem.com.br
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
