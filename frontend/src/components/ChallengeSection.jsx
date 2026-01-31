import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const ChallengeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenge Card */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 space-y-4 transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">O Desafio</h3>
            <p className="text-gray-700 leading-relaxed">
              "Entender o que desencadeia uma crise pode ser um mistério. Cada dia parece diferente, 
              e você se sente perdido tentando conectar os pontos entre sono, alimentação e comportamento."
            </p>
          </div>

          {/* Solution Card */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-3xl p-8 space-y-4 transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">A Solução TEAdobem</h3>
            <p className="text-gray-700 leading-relaxed">
              "Nossa IA analisa áudio, sono e rotina para encontrar padrões invisíveis. 
              O Téo processa suas informações e revela correlações que ajudam a antecipar crises e melhorar a qualidade de vida."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;