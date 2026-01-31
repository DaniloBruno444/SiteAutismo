# TEAdobem Care Connect - Clone

Clone pixel-perfect do site TEAdobem Care Connect, uma plataforma de inteligência artificial para cuidado e acompanhamento de crianças com autismo.

## 📋 Sobre o Projeto

Este é um clone completo do site https://teado-care-connect.lovable.app/, desenvolvido com React e Tailwind CSS, replicando fielmente o design, layout, cores, animações e estrutura do site original.

## 🚀 Tecnologias Utilizadas

- **React** 19.0.0
- **React Router DOM** 7.5.1
- **Tailwind CSS** 3.4.17
- **Shadcn/ui** - Componentes UI modernos
- **Lucide React** - Ícones
- **Axios** - Requisições HTTP

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes Shadcn UI
│   ├── Header.jsx             # Cabeçalho com navegação
│   ├── HeroSection.jsx        # Seção hero principal
│   ├── ChallengeSection.jsx   # Seção desafio/solução
│   ├── FeaturesSection.jsx    # Seção de funcionalidades
│   ├── HowItWorksSection.jsx  # Como funciona (4 passos)
│   ├── ProfessionalSection.jsx # Seção para profissionais
│   ├── CTASection.jsx         # Call-to-action final
│   └── Footer.jsx             # Rodapé
├── data/
│   └── mockData.js            # Dados mockados do site
├── App.js                     # Componente principal
├── App.css                    # Estilos customizados
└── index.css                  # Estilos globais Tailwind

```

## 🎨 Características do Design

### Paleta de Cores
- **Principal**: Teal/Verde-azulado (#5fb8b0)
- **Secundária**: Laranja (#f59e0b)
- **Backgrounds**: Gradientes suaves com tons pastéis
- **Texto**: Cinza escuro para contraste

### Componentes Principais

1. **Header**
   - Navegação fixa com scroll spy
   - Logo personalizado (círculos laranja e teal)
   - Menu responsivo
   - Botões CTA

2. **Hero Section**
   - Título com destaque em teal
   - Ilustração criança + robô IA
   - Dois CTAs principais
   - Badges de segurança (LGPD, IA de Ponta)

3. **Challenge Section**
   - Dois cards lado a lado
   - Gradientes suaves (laranja e teal)
   - Ícones ilustrativos

4. **Features Section**
   - Grid 3x2 de cards
   - Ícones Lucide React
   - Efeito hover com elevação
   - 6 funcionalidades principais

5. **How It Works**
   - 4 passos numerados
   - Layout horizontal responsivo
   - Linha conectora entre passos

6. **Professional Section**
   - Background escuro (dark gradient)
   - Cards translúcidos
   - Lista de benefícios com checkmarks

7. **CTA Section**
   - Gradiente colorido de fundo
   - Card branco centralizado
   - Estatísticas de destaque
   - CTA principal

8. **Footer**
   - 4 colunas de links
   - Logo e descrição
   - Copyright e status do sistema

## 🎭 Animações e Interatividade

- **Scroll suave** entre seções
- **Hover effects** em cards e botões
- **Transições** suaves em todos elementos
- **Animações de entrada** com fade-in
- **Efeitos de elevação** em cards

## 📦 Como Exportar o Código

### Opção 1: Copiar Arquivos Manualmente

Todos os arquivos necessários estão em:
```
/app/frontend/src/
```

Copie os seguintes diretórios/arquivos:
- `src/components/` (todos os componentes)
- `src/data/mockData.js`
- `src/App.js`
- `src/App.css`
- `src/index.css`
- `package.json`
- `tailwind.config.js`

### Opção 2: Download ZIP

1. Acesse o terminal do projeto
2. Execute: `cd /app/frontend && zip -r teadobem-clone.zip src/ public/ package.json tailwind.config.js craco.config.js`
3. Faça download do arquivo ZIP gerado

## 🔧 Instalação Local

```bash
# Clone ou copie os arquivos do projeto

# Instale as dependências
yarn install

# Inicie o servidor de desenvolvimento
yarn start

# Build para produção
yarn build
```

## 📝 Dados Mockados

Todos os dados são mockados e estão centralizados em `src/data/mockData.js`:
- Itens de navegação
- Funcionalidades (6 features)
- Passos do "Como Funciona" (4 steps)
- Features profissionais
- Benefícios
- Links do footer
- Estatísticas

## 🎯 Funcionalidades Implementadas

✅ Header fixo com navegação suave
✅ Hero section com ilustração animada
✅ Seção desafio/solução com cards
✅ Grid de 6 funcionalidades
✅ Timeline de 4 passos
✅ Seção para profissionais (dark theme)
✅ CTA com gradiente
✅ Footer completo com links
✅ Animações e transições
✅ Responsividade total
✅ Componentes Shadcn UI
✅ Scroll suave entre seções

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customização

Para personalizar cores, edite o arquivo `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Personalize as cores aqui
    }
  }
}
```

## 📄 Licença

Este é um projeto de clone para fins educacionais e de demonstração.

## 🤝 Contribuições

Este projeto foi desenvolvido como um clone fiel do site original TEAdobem Care Connect.

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**
