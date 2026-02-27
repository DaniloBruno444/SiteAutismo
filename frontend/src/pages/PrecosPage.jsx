import React, { useState } from 'react';
import { Check, Zap, Shield, Brain, BarChart3, MessageSquare, Video, Heart, ArrowRight } from 'lucide-react';

const features = [
    { icon: Brain, text: 'Diário Inteligente com IA (Téo)' },
    { icon: BarChart3, text: 'Relatórios Nexus Holísticos' },
    { icon: Zap, text: 'Agentes Científicos (TEA, Genética, Neuro)' },
    { icon: Video, text: 'Curadoria de Vídeos Validados pela IA' },
    { icon: MessageSquare, text: 'Dica do Dia Personalizada' },
    { icon: Shield, text: 'Segurança LGPD/HIPAA completa' },
    { icon: Heart, text: 'Suporte 24h via e-mail' },
];

const PrecosPage = () => {
    const [ciclo, setCiclo] = useState('mensal'); // 'mensal' | 'anual'

    const precoMensal = 79.90;
    const precoAnual = 59.90; // por mês quando pago anualmente
    const economiaPct = Math.round((1 - precoAnual / precoMensal) * 100);

    const preco = ciclo === 'mensal' ? precoMensal : precoAnual;
    const precoTotal = ciclo === 'anual' ? (precoAnual * 12).toFixed(2) : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 font-sans">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/">
                        <img src="/logo.png" alt="TEAdobem" className="h-14 w-auto object-contain" />
                    </a>
                    <div className="flex items-center gap-4">
                        <a href="/" className="text-gray-600 hover:text-teal-600 font-medium text-sm transition-colors">
                            Voltar ao site
                        </a>
                        <a
                            href="https://autismo.danilobruno.com.br/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                        >
                            Criar Conta
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20">

                {/* Hero */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                        💳 Sem plano gratuito — 100% de funcionalidades desde o início
                    </span>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Um plano. <span className="text-teal-600">Tudo incluso.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Acesso completo à plataforma TEAdobem, com toda a inteligência artificial
                        disponível para cuidar melhor do seu filho.
                    </p>
                </div>

                {/* Toggle Mensal / Anual */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <button
                        onClick={() => setCiclo('mensal')}
                        className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200
              ${ciclo === 'mensal'
                                ? 'bg-teal-500 text-white shadow-md'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'}`}
                    >
                        Mensal
                    </button>
                    <button
                        onClick={() => setCiclo('anual')}
                        className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2
              ${ciclo === 'anual'
                                ? 'bg-teal-500 text-white shadow-md'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300'}`}
                    >
                        Anual
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full
              ${ciclo === 'anual' ? 'bg-white text-teal-600' : 'bg-teal-100 text-teal-700'}`}>
                            -{economiaPct}%
                        </span>
                    </button>
                </div>

                {/* Card de Preço */}
                <div className="max-w-lg mx-auto">
                    <div className="relative bg-white rounded-3xl shadow-2xl border border-teal-100 overflow-hidden">
                        {/* Faixa decorativa */}
                        <div className="h-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500" />

                        <div className="p-10">
                            {/* Badge */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="bg-teal-50 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full border border-teal-200">
                                    Plano TEAdobem {ciclo === 'anual' ? 'Anual' : 'Mensal'}
                                </span>
                                {ciclo === 'anual' && (
                                    <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                                        🎉 Melhor valor
                                    </span>
                                )}
                            </div>

                            {/* Preço */}
                            <div className="mb-2">
                                <div className="flex items-end gap-2">
                                    <span className="text-gray-400 text-xl font-medium">R$</span>
                                    <span className="text-6xl font-black text-gray-900 leading-none">
                                        {preco.toFixed(2).replace('.', ',')}
                                    </span>
                                    <span className="text-gray-500 text-lg mb-1">/mês</span>
                                </div>
                                {ciclo === 'anual' && (
                                    <p className="text-sm text-gray-500 mt-2">
                                        Cobrado anualmente — <strong className="text-gray-700">R$ {Number(precoTotal).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/ano</strong>
                                        <span className="ml-2 text-green-600 font-semibold">
                                            (economia de R$ {((precoMensal - precoAnual) * 12).toFixed(2).replace('.', ',')} vs mensal)
                                        </span>
                                    </p>
                                )}
                                {ciclo === 'mensal' && (
                                    <p className="text-sm text-gray-400 mt-1">Cancele quando quiser</p>
                                )}
                            </div>

                            {/* Formas de pagamento */}
                            <div className="flex items-center gap-2 mt-4 mb-8 flex-wrap">
                                <span className="text-xs text-gray-500">Aceito:</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded font-medium text-gray-600">💳 Cartão</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded font-medium text-gray-600">⚡ Pix</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded font-medium text-gray-600">📄 Boleto</span>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://autismo.danilobruno.com.br/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:shadow-lg group"
                            >
                                Assinar agora
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                🔒 Pagamento seguro via Asaas · Cancele a qualquer momento
                            </p>

                            {/* Divisor */}
                            <div className="my-8 border-t border-gray-100" />

                            {/* Funcionalidades */}
                            <p className="text-sm font-bold text-gray-700 mb-5 uppercase tracking-wide">
                                Tudo incluso no plano:
                            </p>
                            <ul className="space-y-4">
                                {features.map(({ icon: Icon, text }, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                                            <Check className="w-3.5 h-3.5 text-teal-600 stroke-[3]" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{text}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAQ rápido */}
                <div className="mt-20 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Dúvidas frequentes</h2>
                    <div className="space-y-5">
                        {[
                            {
                                p: 'Posso cancelar a qualquer momento?',
                                r: 'Sim. Você pode cancelar sua assinatura a qualquer momento diretamente no painel, sem multas ou burocracia.'
                            },
                            {
                                p: 'Quais formas de pagamento são aceitas?',
                                r: 'Aceitamos cartão de crédito (Visa, Mastercard, Elo, Amex), Pix e boleto bancário.'
                            },
                            {
                                p: 'Meus dados são seguros?',
                                r: 'Sim. Todos os dados são protegidos com criptografia e estamos em conformidade com a LGPD.'
                            },
                            {
                                p: 'O plano anual tem alguma vantagem?',
                                r: `Sim! No plano anual você economiza ${economiaPct}% em relação ao mensal, pagando apenas R$ ${precoAnual.toFixed(2).replace('.', ',')} por mês.`
                            },
                        ].map(({ p, r }, i) => (
                            <div key={i} className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-100">
                                <p className="font-semibold text-gray-900 mb-1.5">❓ {p}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{r}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm mb-4">Ainda tem dúvidas?</p>
                    <a
                        href="/contato"
                        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Fale com nossa equipe
                    </a>
                </div>

                <div className="mt-10 flex items-center justify-center gap-1 text-xs text-gray-400">
                    <Heart className="w-3 h-3 text-red-400 fill-current" />
                    <span>TEAdobem — Inteligência que conecta o cuidado • Feito com amor no Brasil</span>
                </div>
            </div>
        </div>
    );
};

export default PrecosPage;
