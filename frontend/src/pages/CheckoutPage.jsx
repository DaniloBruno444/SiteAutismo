import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Heart, Lock, CreditCard, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const API_URL = 'https://autismo.danilobruno.com.br/api/v1';

const PLANOS = {
    mensal: { label: 'Mensal', total: 29.90, meses: 1 },
    semestral: { label: 'Semestral', total: 149.90, meses: 6 },
    anual: { label: 'Anual', total: 249.90, meses: 12 },
};

const fmt = (n) => Number(n).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

const formatCPF = (v) => {
    const d = v.replace(/\D/g, '').slice(0, 11);
    return d
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const formatPhone = (v) => {
    const d = v.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
    return d.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
};

const CheckoutPage = () => {
    const [params] = useSearchParams();
    const planoId = params.get('plano') || 'semestral';
    const plano = PLANOS[planoId] || PLANOS.semestral;

    const [form, setForm] = useState({ nome: '', email: '', cpf: '', telefone: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');
    const [success, setSuccess] = useState(null); // { invoice_url }

    const handleChange = (e) => {
        const { name, value } = e.target;
        let v = value;
        if (name === 'cpf') v = formatCPF(value);
        if (name === 'telefone') v = formatPhone(value);
        setForm({ ...form, [name]: v });
        setErrors({ ...errors, [name]: '' });
    };

    const validate = () => {
        const e = {};
        if (!form.nome.trim()) e.nome = 'Nome é obrigatório';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'E-mail inválido';
        const cpfDigits = form.cpf.replace(/\D/g, '');
        if (cpfDigits.length < 11) e.cpf = 'CPF incompleto';
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setLoading(true);
        setApiError('');

        try {
            const res = await fetch(`${API_URL}/payments/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: form.nome,
                    email: form.email,
                    cpf_cnpj: form.cpf.replace(/\D/g, ''),
                    telefone: form.telefone.replace(/\D/g, '') || null,
                    plano: planoId,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setApiError(data.detail || 'Erro ao processar. Tente novamente.');
                return;
            }

            setSuccess(data);
        } catch (err) {
            setApiError('Erro de conexão. Verifique sua internet e tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 flex items-center justify-center px-6">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center space-y-6">
                    <div className="flex justify-center">
                        <CheckCircle className="w-20 h-20 text-teal-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Cobrança gerada! 🎉</h1>
                    <p className="text-gray-600">
                        Clique no botão abaixo para ir para a página de pagamento seguro.
                        Você pode pagar via <strong>Pix, Boleto ou Cartão de Crédito</strong>.
                    </p>
                    <a
                        href={success.invoice_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-lg group"
                    >
                        Ir para o pagamento
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-xs text-gray-400">
                        Após o pagamento confirmado, você receberá um e-mail com as instruções para criar sua conta.
                    </p>
                    <a href="/precos" className="text-teal-500 hover:text-teal-600 text-sm font-medium block">
                        ← Voltar aos planos
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 font-sans">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/">
                        <img src="/logo.png" alt="TEAdobem" className="h-14 w-auto object-contain" />
                    </a>
                    <a href="/precos" className="text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors">
                        ← Voltar aos planos
                    </a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-start">

                {/* Resumo do plano */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Finalize sua assinatura</h1>
                        <p className="text-gray-600">Preencha os dados abaixo para gerar o link de pagamento.</p>
                    </div>

                    {/* Card do plano */}
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-400 p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-gray-800 text-lg">Plano {plano.label}</span>
                            <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2 py-1 rounded-full">Selecionado</span>
                        </div>

                        <div className="flex items-end gap-1">
                            <span className="text-3xl font-black text-gray-900">R$ {fmt(plano.total)}</span>
                            {plano.meses > 1 && (
                                <span className="text-gray-500 mb-1">/ {plano.meses} meses</span>
                            )}
                        </div>

                        {plano.meses > 1 && (
                            <p className="text-sm text-green-600 font-medium">
                                ≈ R$ {fmt(plano.total / plano.meses)}/mês
                            </p>
                        )}

                        <div className="border-t pt-4 space-y-2">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Formas de pagamento aceitas</p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-600">⚡ Pix</span>
                                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-600">📄 Boleto</span>
                                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-600">💳 Cartão</span>
                            </div>
                        </div>
                    </div>

                    {/* Segurança */}
                    <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <Lock className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-semibold text-gray-700">Pagamento 100% seguro</p>
                            <p className="text-xs text-gray-500">Processado pela Asaas com certificação PCI DSS. Seus dados não são armazenados em nossos servidores.</p>
                        </div>
                    </div>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-5">
                    <h2 className="text-xl font-bold text-gray-900">Seus dados</h2>

                    {/* Nome */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Nome completo <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="nome"
                            type="text"
                            required
                            value={form.nome}
                            onChange={handleChange}
                            placeholder="Seu nome completo"
                            className={`w-full border rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition
                ${errors.nome ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                    </div>

                    {/* E-mail */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            className={`w-full border rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition
                ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        <p className="text-xs text-gray-400 mt-1">Use o mesmo e-mail que vai usar no cadastro do app</p>
                    </div>

                    {/* CPF */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            CPF <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="cpf"
                            type="text"
                            required
                            value={form.cpf}
                            onChange={handleChange}
                            placeholder="000.000.000-00"
                            className={`w-full border rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition
                ${errors.cpf ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf}</p>}
                    </div>

                    {/* Telefone */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Telefone (opcional)
                        </label>
                        <input
                            name="telefone"
                            type="tel"
                            value={form.telefone}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />
                    </div>

                    {/* Erro da API */}
                    {apiError && (
                        <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <p className="text-red-600 text-sm">{apiError}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-500 hover:bg-teal-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Gerando cobrança...
                            </>
                        ) : (
                            <>
                                <CreditCard className="w-5 h-5" />
                                Gerar link de pagamento
                            </>
                        )}
                    </button>

                    <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                        <Heart className="w-3 h-3 text-red-400 fill-current" />
                        <span>TEAdobem — Inteligência que conecta o cuidado</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
