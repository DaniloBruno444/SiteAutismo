// Dados do Site TEAdobem — Versão Premium

export const navigationItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Funcionalidades', href: '#funcionalidades' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Planos', href: '#planos' },
];

export const features = [
  {
    id: 1,
    title: 'Diário de Voz com IA',
    description: 'Fale, não escreva. Envie um áudio curto e o Téo transcreve, analisa o sentimento e registra tudo de forma organizada.',
    icon: 'mic',
    badge: null,
    benefit: 'Economize até 40 min/dia',
    color: 'teal',
  },
  {
    id: 2,
    title: 'Relatórios Nexus',
    description: 'Cruzamos dados de sono, alimentação e terapias para revelar padrões ocultos e correlações que ajudam a antecipar crises.',
    icon: 'chart',
    badge: 'Novo',
    benefit: 'Visão 360° do seu filho',
    color: 'cyan',
  },
  {
    id: 3,
    title: 'Agentes Científicos',
    description: 'Equipe de AIs especializadas em Comportamento, Neurociência e Genética validam e enriquecem cada observação registrada.',
    icon: 'brain',
    badge: null,
    benefit: 'Validação por especialistas',
    color: 'indigo',
  },
  {
    id: 4,
    title: 'Curadoria de Vídeos',
    description: 'Chega de fake news. Nossa IA analisa YouTubers e canais e recomenda apenas os conteúdos cientificamente validados.',
    icon: 'video',
    badge: 'Beta',
    benefit: 'Conteúdo seguro e confiável',
    color: 'purple',
  },
  {
    id: 5,
    title: 'Segurança Total',
    description: 'Seus dados são protegidos com criptografia de ponta a ponta e conformidade LGPD. Sua privacidade é sagrada.',
    icon: 'shield',
    badge: null,
    benefit: 'LGPD + HIPAA compliance',
    color: 'green',
  },
  {
    id: 6,
    title: 'Dica do Dia Personalizada',
    description: 'Cada manhã, o Téo analisa o histórico recente e sugere uma ação concreta para o dia — baseada em evidências, não em achismos.',
    icon: 'lightbulb',
    badge: null,
    benefit: 'Sugestões práticas e acionáveis',
    color: 'orange',
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Você Registra',
    description: 'Mande um áudio de 30 segundos contando como foi o dia. Pode ser no carro, na cozinha, onde estiver.',
    icon: 'mic',
    emoji: '🎙️',
    detail: 'Áudio, texto ou foto',
  },
  {
    step: 2,
    title: 'Téo Processa',
    description: 'Nossa IA transcreve, analisa sentimentos, identifica gatilhos e conecta com o histórico dos últimos 30 dias.',
    icon: 'cpu',
    emoji: '🤖',
    detail: '< 10 segundos',
  },
  {
    step: 3,
    title: 'Padrões Revelados',
    description: 'O app mostra correlações como "Noites com menos de 6h de sono aumentam episódios de crise em 73%".',
    icon: 'lightbulb',
    emoji: '💡',
    detail: 'Insights personalizados',
  },
  {
    step: 4,
    title: 'Ação Clara',
    description: 'Receba a "Dica do Dia", ajuste a rotina com a sugestão visual ou compartilhe o relatório com o terapeuta.',
    icon: 'check',
    emoji: '✅',
    detail: 'Rotina visual no app',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Carla Mendonça',
    role: 'Mãe do Pedro, 7 anos — TEA Nível 2',
    avatar: '👩',
    rating: 5,
    text: 'Antes eu me sentia perdida, sem entender o que desencadeava as crises do Pedro. Com o Téo, em 3 semanas já consegui identificar que o barulho do liquidificador era o maior gatilho. Parece simples, mas mudou tudo.',
    highlight: 'Identifiquei o gatilho em 3 semanas',
    city: 'São Paulo, SP',
  },
  {
    id: 2,
    name: 'Roberto Ferreira',
    role: 'Pai do Miguel, 9 anos — TEA Nível 1',
    avatar: '👨',
    rating: 5,
    text: 'O que me conquistou foi a praticidade. Não preciso escrever nada — falo um áudio no caminho do trabalho e o app cuida do resto. Os relatórios que levo para a fonoaudióloga agora são muito mais completos.',
    highlight: 'Relatórios completos para os especialistas',
    city: 'Belo Horizonte, MG',
  },
  {
    id: 3,
    name: 'Juliana Costa',
    role: 'Mãe da Sofia, 5 anos — TEA Nível 3',
    avatar: '👩‍🦱',
    rating: 5,
    text: 'O Téo é como ter um amigo especialista disponível 24 horas. Nas noites difíceis, quando eu estava exausta, ele me ajudou a escrever um relato claro para a médica sem eu precisar me esforçar.',
    highlight: 'Suporte 24h como um amigo especialista',
    city: 'Porto Alegre, RS',
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Gratuito',
    price: 'R$ 0',
    period: 'para sempre',
    description: 'Para começar a sua jornada com o Téo',
    badge: null,
    color: 'gray',
    features: [
      'Chat com Téo (20 mensagens/dia)',
      'Diário de áudio (5 áudios/mês)',
      'Relatório semanal básico',
      '1 perfil de criança',
      'Dica do Dia',
    ],
    cta: 'Começar Grátis',
    ctaVariant: 'outline',
    href: 'https://teadobem.danilobruno.com.br',
  },
  {
    id: 2,
    name: 'Familiar',
    price: 'R$ 29',
    period: '/mês',
    description: 'O plano mais completo para famílias',
    badge: 'Mais Popular',
    color: 'teal',
    features: [
      'Chat com Téo ilimitado',
      'Diário de áudio ilimitado',
      'Relatórios Nexus completos',
      'Upload de exames para análise (PDF)',
      'Agentes Científicos',
      'Curadoria de Vídeos',
      'Dica do Dia personalizada',
      'Até 3 perfis de crianças',
      'Suporte prioritário',
    ],
    cta: 'Experimentar 14 dias grátis',
    ctaVariant: 'primary',
    href: 'https://teadobem.danilobruno.com.br',
  },
];

export const faqItems = [
  {
    question: 'O TEAdobem substitui o terapeuta ou médico?',
    answer: 'Não. O TEAdobem é uma ferramenta de registro e apoio para famílias. Ele organiza observações do dia a dia e gera insights para enriquecer as consultas com os profissionais, mas nunca substitui o diagnóstico ou tratamento médico.',
  },
  {
    question: 'Meus dados e os dados do meu filho são seguros?',
    answer: 'Absolutamente. Utilizamos criptografia de ponta a ponta, cumprimos a LGPD integralmente e jamais vendemos dados para terceiros. Seus dados são exclusivamente seus.',
  },
  {
    question: 'Como o Téo analisa os áudios que envio?',
    answer: 'O Téo usa modelos de IA de última geração (Gemini 2.0) para transcrever o áudio, identificar emoções, detectar gatilhos mencionados e correlacionar com o histórico de registros no banco de dados seguro da sua família.',
  },
  {
    question: 'Preciso registrar todos os dias para funcionar?',
    answer: 'Quanto mais registros, melhores os padrões identificados. Mas mesmo com poucos registros por semana o Téo já começa a identificar tendências. A consistência é mais importante do que a frequência diária.',
  },
  {
    question: 'Funciona para todos os níveis do espectro (TEA 1, 2 e 3)?',
    answer: 'Sim. O TEAdobem foi projetado para ser útil independentemente do grau de suporte. As funcionalidades se adaptam ao perfil da criança cadastrada pelo responsável.',
  },
  {
    question: 'Posso compartilhar os relatórios com o terapeuta?',
    answer: 'Sim! Os relatórios Nexus são exportáveis em PDF e foram desenhados especificamente para serem levados às consultas. Muitos terapeutas já pedem os relatórios gerados pelo Téo como complemento ao prontuário.',
  },
];

export const stats = [
  { value: '2.400+', label: 'Famílias Ativas', icon: '👨‍👩‍👧' },
  { value: '98%', label: 'Satisfação', icon: '⭐' },
  { value: '18.000+', label: 'Insights Gerados', icon: '💡' },
  { value: 'LGPD', label: 'Compliance Total', icon: '🔒' },
];

export const footerLinks = {
  produto: [
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Planos e Preços', href: '#planos' },
    { name: 'Status do Sistema', href: '#' },
  ],
  empresa: [
    { name: 'Sobre Nós', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carreiras', href: '#' },
    { name: 'Contato', href: '#' },
  ],
  legal: [
    { name: 'Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'LGPD', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
};