import React, { useState, useRef } from 'react';
import { Heart, Upload, CheckCircle, AlertCircle, Briefcase } from 'lucide-react';

const MAX_FILE_SIZE_MB = 20;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const CarreirasPage = () => {
    const [form, setForm] = useState({ nome: '', telefone: '', email: '', endereco: '' });
    const [arquivo, setArquivo] = useState(null);
    const [arquivoErro, setArquivoErro] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);
    const fileRef = useRef();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFile = (e) => {
        const file = e.target.files[0];
        setArquivoErro('');
        setArquivo(null);
        if (!file) return;
        if (file.type !== 'application/pdf') {
            setArquivoErro('Apenas arquivos PDF são aceitos.');
            return;
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
            setArquivoErro(`O arquivo excede o limite de ${MAX_FILE_SIZE_MB}MB.`);
            return;
        }
        setArquivo(file);
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
                        <Briefcase className="w-8 h-8 text-teal-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Trabalhe Conosco</h1>
                    <p className="text-gray-600 text-lg">
                        Faça parte de uma equipe que transforma o cuidado com tecnologia e empatia.
                        Preencha o formulário abaixo e anexe seu currículo.
                    </p>
                </div>

                {enviado ? (
                    <div className="bg-white rounded-2xl shadow-lg p-10 text-center space-y-4">
                        <div className="flex justify-center">
                            <CheckCircle className="w-16 h-16 text-teal-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Candidatura enviada!</h2>
                        <p className="text-gray-600">
                            Recebemos suas informações. Nossa equipe entrará em contato em breve. Obrigado pelo interesse!
                        </p>
                        <a href="/" className="inline-block mt-4 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            Voltar ao site
                        </a>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
                    >
                        {/* Nome */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="nome">
                                Nome completo <span className="text-red-500">*</span>
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

                        {/* Endereço */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="endereco">
                                Endereço <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="endereco"
                                name="endereco"
                                type="text"
                                required
                                value={form.endereco}
                                onChange={handleChange}
                                placeholder="Rua, número, cidade, estado"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                            />
                        </div>

                        {/* Upload Currículo */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Currículo (PDF, máx. {MAX_FILE_SIZE_MB}MB) <span className="text-red-500">*</span>
                            </label>
                            <div
                                onClick={() => fileRef.current.click()}
                                className={`border-2 border-dashed rounded-xl px-6 py-8 text-center cursor-pointer transition-all
                  ${arquivo ? 'border-teal-400 bg-teal-50' : 'border-gray-200 hover:border-teal-400 hover:bg-teal-50'}`}
                            >
                                <input
                                    ref={fileRef}
                                    type="file"
                                    accept="application/pdf"
                                    className="hidden"
                                    onChange={handleFile}
                                />
                                {arquivo ? (
                                    <div className="flex flex-col items-center space-y-2">
                                        <CheckCircle className="w-8 h-8 text-teal-500" />
                                        <p className="font-medium text-teal-700">{arquivo.name}</p>
                                        <p className="text-xs text-gray-500">{(arquivo.size / 1024 / 1024).toFixed(2)} MB</p>
                                        <p className="text-xs text-teal-500 underline cursor-pointer">Trocar arquivo</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center space-y-2">
                                        <Upload className="w-8 h-8 text-gray-400" />
                                        <p className="text-gray-600 font-medium">Clique para fazer upload do currículo</p>
                                        <p className="text-xs text-gray-400">Somente PDF • Máximo {MAX_FILE_SIZE_MB}MB</p>
                                    </div>
                                )}
                            </div>
                            {arquivoErro && (
                                <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{arquivoErro}</span>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={enviando || !arquivo}
                            className="w-full bg-teal-500 hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg"
                        >
                            {enviando ? 'Enviando...' : 'Enviar Candidatura'}
                        </button>

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

export default CarreirasPage;
