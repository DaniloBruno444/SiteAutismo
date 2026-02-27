import React, { useState } from 'react';
import { Check, Zap, Shield, Brain, BarChart3, MessageSquare, Video, Heart, ArrowRight } from 'lucide-react';

const features = [
    { icon: Brain, text: 'Diário Inteligente com IA (Téo)' },
    { icon: BarChart3, text: 'Relatórios Nexus Holísticos' },
    { icon: Zap, text: 'Agentes Científicos (TEA, Genética, Neuro)' },
    { icon: Video, text: 'Curadoria de Vídeos Validados pela IA' },
    { icon: MessageSquare, text: 'Dica do Dia Personalizada' },
    { icon: Shield, text: 'Segurança total LGPD/HIPAA' },
    { icon: Heart, text: 'Suporte 24h via e-mail' },
];

const planos = [
    {
        id: 'mensal',
        label: 'Mensal',
        badge: null,
        precoTotal: 29.90,
        meses: 1,
        destaque: false,
    },
    {
        id: 'semestral',
        label: 'Semestral',
        badge: 'Mais Popular',
        precoTotal: 149.90,
        meses: 6,
        destaque: true,
    },
    {
        id: 'anual',
        label: 'Anual',
        badge: 'Melhor Valor',
        precoTotal: 249.90,
        meses: 12,
        destaque: false,
    },
];

const PrecosPage = () => {
    const [cicloId, setCicloId] = useState('semestral');

    const planoAtual = planos.find(p => p.id === cicloId);
    const precoMensal = planoAtual.precoTotal / planoAtual.meses;
    const economiaVsMensal = planoAtual.id !== 'mensal'
        ? ((planos[0].precoTotal * planoAtual.meses) - planoAtual.precoTotal).toFixed(2)
        : null;
    const economiaPct = planoAtual.id !== 'mensal'
        ? Math.round((1 - planoAtual.precoTotal / (planos[0].precoTotal * planoAtual.meses)) * 100)
        : null;

    const fmt = (n) => Number(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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
                        💳 Acesso completo · Sem plano gratuito · Cancele quando quiser
                    </span>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Um plano. <span className="text-teal-600">Tudo incluso.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Escolha o período que melhor se adapta à sua família e tenha acesso
                        completo à inteligência artificial do TEAdobem.
                    </p>
                </div>

                {/* Toggle de Ciclo */}
                <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
                    {planos.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setCicloId(p.id)}
                            className={`relative px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200
                ${cicloId === p.id
                                    ? 'bg-teal-500 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-600'}`}
                        >
                            {p.label}
                            {p.badge && cicloId !== p.id && (
                                <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-orange-400 text-white px-1.5 py-0.5 rounded-full leading-tight">
                                    {p.badge === 'Mais Popular' ? '🔥' : '🏆'}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Card Principal */}
                <div className="max-w-lg mx-auto">
                    <div className={`relative bg-white rounded-3xl shadow-2xl border-2 overflow-hidden transition-all duration-300
            ${planoAtual.destaque ? 'border-teal-400' : 'border-teal-100'}`}>

                        {/* Destaque top */}
                        {planoAtual.destaque && (
                            <div className="bg-teal-500 text-white text-center text-sm font-bold py-2 tracking-wide">
                                🔥 PLANO MAIS POPULAR
                            </div>
                        )}
                        {!planoAtual.destaque && planoAtual.id === 'anual' && (
                            <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-center text-sm font-bold py-2 tracking-wide">
                                🏆 MELHOR CUSTO-BENEFÍCIO
                            </div>
                        )}

                        {/* Faixa superior se não tem destaque */}
                        {planoAtual.id === 'mensal' && (
                            <div className="h-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500" />
                        )}

                        <div className="p-10">
                            {/* Badge do plano */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="bg-teal-50 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full border border-teal-200">
                                    Plano {planoAtual.label}
                                </span>
                                {economiaPct && (
                                    <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                                        -{economiaPct}% vs mensal
                                    </span>
                                )}
                            </div>

                            {/* Preço por mês */}
                            <div className="mb-2">
                                <div className="flex items-end gap-2">
                                    <span className="text-gray-400 text-xl font-medium">R$</span>
                                    <span className="text-6xl font-black text-gray-900 leading-none">
                                        {fmt(precoMensal)}
                                    </span>
                                    <span className="text-gray-500 text-lg mb-1">/mês</span>
                                </div>

                                {planoAtual.id !== 'mensal' ? (
                                    <div className="mt-3 space-y-1">
                                        <p className="text-sm text-gray-600">
                                            Cobrado como <strong className="text-gray-800">R$ {fmt(planoAtual.precoTotal)}</strong> a cada {planoAtual.meses} meses
                                        </p>
                                        <p className="text-sm text-green-600 font-semibold">
                                            💰 Você economiza R$ {fmt(economiaVsMensal)} comparado ao plano mensal
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-400 mt-2">Cobrado mensalmente · Cancele quando quiser</p>
                                )}
                            </div>

                            {/* Formas de pagamento */}
                            <div className="flex items-center gap-2 mt-5 mb-8 flex-wrap">
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
                                className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:shadow-lg group
                  ${planoAtual.destaque
                                        ? 'bg-teal-500 hover:bg-teal-600 text-white'
                                        : 'bg-teal-500 hover:bg-teal-600 text-white'}`}
                            >
                                Assinar plano {planoAtual.label}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                🔒 Pagamento seguro via Asaas · Cancele a qualquer momento
                            </p>

                            {/* Divisor */}
                            <div className="my-8 border-t border-gray-100" />

                            {/* Funcionalidades */}
                            <p className="text-sm font-bold text-gray-700 mb-5 uppercase tracking-wide">
                                Tudo incluso em qualquer plano:
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

                {/* Comparativo rápido */}
                <div className="mt-14 max-w-lg mx-auto">
                    <h2 className="text-lg font-bold text-gray-800 text-center mb-5">Comparativo de planos</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="text-left text-gray-600 font-semibold px-5 py-3">Plano</th>
                                    <th className="text-center text-gray-600 font-semibold px-4 py-3">Total</th>
                                    <th className="text-center text-gray-600 font-semibold px-4 py-3">Por mês</th>
                                    <th className="text-center text-gray-600 font-semibold px-4 py-3">Economia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {planos.map((p, i) => {
                                    const pmMes = p.precoTotal / p.meses;
                                    const eco = p.id !== 'mensal'
                                        ? Math.round((1 - p.precoTotal / (planos[0].precoTotal * p.meses)) * 100)
                                        : null;
                                    return (
                                        <tr
                                            key={p.id}
                                            onClick={() => setCicloId(p.id)}
                                            className={`border-b border-gray-50 cursor-pointer transition-colors
                        ${cicloId === p.id ? 'bg-teal-50' : 'hover:bg-gray-50'}`}
                                        >
                                            <td className="px-5 py-3 font-semibold text-gray-800 flex items-center gap-2">
                                                {cicloId === p.id && <span className="w-2 h-2 bg-teal-500 rounded-full inline-block"></span>}
                                                {p.label}
                                                {p.badge && <span className="text-[10px] bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded font-bold">{p.badge}</span>}
                                            </td>
                                            <td className="px-4 py-3 text-center text-gray-700">R$ {fmt(p.precoTotal)}</td>
                                            <td className={`px-4 py-3 text-center font-semibold ${cicloId === p.id ? 'text-teal-600' : 'text-gray-700'}`}>
                                                R$ {fmt(pmMes)}
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                {eco ? (
                                                    <span className="text-green-600 font-bold">-{eco}%</span>
                                                ) : (
                                                    <span className="text-gray-400">—</span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-16 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Dúvidas frequentes</h2>
                    <div className="space-y-4">
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
                                p: 'Posso mudar de plano depois?',
                                r: 'Sim! Você pode migrar para um plano maior a qualquer momento. A diferença é calculada proporcionalmente.'
                            },
                            {
                                p: 'Meus dados são seguros?',
                                r: 'Sim. Todos os dados são protegidos com criptografia e estamos em conformidade com a LGPD.'
                            },
                            {
                                p: 'Qual a diferença entre os planos?',
                                r: 'Nenhuma em termos de funcionalidades — todos os planos dão acesso completo à plataforma. A diferença é apenas no período de cobrança e no preço final.'
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
                <div className="mt-14 text-center">
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
                    <span>TEAdobem — Inteligência que conecta o cuidado · Feito com amor no Brasil</span>
                </div>
            </div>
        </div>
    );
};

export default PrecosPage;
