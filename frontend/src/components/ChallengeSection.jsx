import React from 'react';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

const challenges = [
  'Crises sem motivo aparente',
  'Relatórios difíceis de escrever',
  'Informações dispersas e confusas',
  'Noites sem dormir sem saber o porquê',
];

const solutions = [
  'Padrões revelados pela IA',
  'Relatórios gerados automaticamente',
  'Tudo em um só lugar, organizado',
  'Correlações sono-comportamento em minutos',
];

const ChallengeSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">A Realidade de Muitas Famílias</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Você reconhece{' '}
            <span className="text-gradient-teal">esse cenário?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Challenge Card */}
          <div className="group relative bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-3xl p-8 space-y-6 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center shadow-md">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">O Desafio</h3>
                <p className="text-sm text-orange-600 font-medium">O que muitas famílias vivem</p>
              </div>
            </div>

            <blockquote className="text-gray-700 leading-relaxed italic border-l-4 border-orange-200 pl-4">
              "Entender o que desencadeia uma crise é um mistério. Um dia parece de um jeito, no outro 
              é completamente diferente. Me sinto perdida tentando conectar os pontos entre sono, 
              alimentação e comportamento."
            </blockquote>

            <ul className="space-y-2">
              {challenges.map((c, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✕</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-3xl p-8 space-y-6 hover:shadow-xl hover:shadow-teal-100 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-md">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">A Solução TEAdobem</h3>
                <p className="text-sm text-teal-600 font-medium">O que o Téo faz por você</p>
              </div>
            </div>

            <blockquote className="text-gray-700 leading-relaxed italic border-l-4 border-teal-200 pl-4">
              "Nossa IA analisa áudio, sono e rotina para encontrar padrões invisíveis. O Téo 
              processa suas informações e revela correlações que ajudam a antecipar crises e 
              melhorar a rotina — sem você precisar virar analista de dados."
            </blockquote>

            <ul className="space-y-2">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>

            <a
              href="https://teadobem.danilobruno.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors group mt-2"
            >
              Experimente agora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;