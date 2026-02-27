import React, { useState } from 'react';
import { Heart, Mail, CheckCircle, MessageSquare } from 'lucide-react';

const ContatoPage = () => {
    const [form, setForm] = useState({ nome: '', telefone: '', email: '', descricao: '' });
    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviando(true);
        // Simula envio (integração futura)
        setTimeout(() => {
            setEnviando(false);
            setEnviado(true);
        }, 1400);
    };

    const emailLink = `mailto:contato@teadobem.com.br?subject=Contato via Site&body=Nome: ${encodeURIComponent(form.nome)}%0ATelefone: ${encodeURIComponent(form.telefone)}%0AEmail: ${encodeURIComponent(form.email)}%0A%0A${encodeURIComponent(form.descricao)}`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/">
                        <img src="/logo.png" alt="TEAdobem" className="h-14 w-auto object-contain" />
                    </a>
                    <a href="/" className="text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors">
                        ← Voltar ao site
                    </a>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-6 py-16">
                {/* Título */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                        <MessageSquare className="w-8 h-8 text-teal-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Entre em Contato</h1>
                    <p className="text-gray-600 text-lg">
                        Tem alguma dúvida, sugestão ou precisa de suporte? Preencha o formulário abaixo
                        ou envie um e-mail diretamente para nossa equipe.
                    </p>
                </div>

                {/* E-mail direto */}
                <a
                    href="mailto:contato@teadobem.com.br"
                    className="flex items-center justify-center gap-3 bg-teal-50 border border-teal-200 rounded-xl px-6 py-4 mb-8 hover:bg-teal-100 transition-colors group"
                >
                    <Mail className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />
                    <span className="text-teal-700 font-semibold">contato@teadobem.com.br</span>
                </a>

                <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-gray-400 text-sm font-medium">ou preencha o formulário</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {enviado ? (
                    <div className="bg-white rounded-2xl shadow-lg p-10 text-center space-y-4">
                        <div className="flex justify-center">
                            <CheckCircle className="w-16 h-16 text-teal-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Mensagem enviada!</h2>
                        <p className="text-gray-600">
                            Recebemos sua mensagem e responderemos em breve. Obrigado pelo contato!
                        </p>
                        <a href="/" className="inline-block mt-4 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            Voltar ao site
                        </a>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                        {/* Nome */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="nome">
                                Nome <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="nome"
                                name="nome"
                                type="text"
                                required
                                value={form.nome}
                                onChange={handleChange}
                                placeholder="Seu nome completo"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>

                        {/* Telefone */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="telefone">
                                Telefone <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="telefone"
                                name="telefone"
                                type="tel"
                                required
                                value={form.telefone}
                                onChange={handleChange}
                                placeholder="(11) 99999-9999"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>

                        {/* E-mail */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                                E-mail <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>

                        {/* Descrição */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="descricao">
                                Descrição do contato <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="descricao"
                                name="descricao"
                                required
                                rows={5}
                                value={form.descricao}
                                onChange={handleChange}
                                placeholder="Descreva sua dúvida, sugestão ou solicitação..."
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                type="submit"
                                disabled={enviando}
                                className="flex-1 bg-teal-500 hover:bg-teal-600 disabled:opacity-50 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg"
                            >
                                {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>

                            <a
                                href={emailLink}
                                className="flex-1 flex items-center justify-center gap-2 border-2 border-teal-500 text-teal-600 hover:bg-teal-50 py-4 rounded-xl font-semibold text-base transition-all duration-200"
                            >
                                <Mail className="w-4 h-4" />
                                Enviar por E-mail
                            </a>
                        </div>

                        <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                            <Heart className="w-3 h-3 text-red-400 fill-current" />
                            <span>TEAdobem — Inteligência que conecta o cuidado</span>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContatoPage;
