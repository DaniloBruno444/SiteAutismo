import React, { useState } from 'react';
import { testimonials } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-teal-50/60 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">Histórias Reais</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Famílias que já{' '}
            <span className="text-gradient-teal">transformaram</span>{' '}
            sua rotina
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-body">
            Mais de 2.400 famílias brasileiras já usam o Téo. Veja o que elas dizem.
          </p>
        </div>

        {/* All cards — desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 border border-gray-100 hover:border-teal-100 transition-all duration-300 card-hover flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-teal-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Highlight */}
              <div className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4 w-fit">
                "{t.highlight}"
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed font-body text-sm flex-1 mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                  <div className="text-xs text-teal-500 font-medium">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <Quote className="w-8 h-8 text-teal-200 mb-4" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
              "{testimonials[active].highlight}"
            </div>
            <p className="text-gray-600 leading-relaxed font-body text-sm mb-6">
              "{testimonials[active].text}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-xl">
                {testimonials[active].avatar}
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">{testimonials[active].name}</div>
                <div className="text-xs text-gray-500">{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-teal-50 hover:border-teal-200 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === active ? 'bg-teal-500 w-6' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-teal-50 hover:border-teal-200 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
