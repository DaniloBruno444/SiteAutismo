# 📋 Project Memory: Site Institucional (NeuroCare Autismo)

> **Propósito**: Site de Landing Page e Apresentação do Produto para Pacientes e Responsáveis.
> **Repositório**: `DaniloBruno444/SiteAutismo` (Pasta `site_autismo` no monorepo).
> **URL Produção**: `site.danilobruno.com.br` (Previsão).

---

## 1. Stack Tecnológica
- **Frontend**: React (Vite) + TailwindCSS.
- **Hospedagem**: Static Files (S3/Netlify/Vercel) ou Nginx Container.
- **Icons**: `lucide-react`.

---

## 2. Decisões de Design (UX/UI)
### Temática
- **Cores**: Tons de **Teal (Turquesa)** para calma e tecnologia (`teal-500`, `teal-600`) + **Laranja** quente para acolhimento (Ilustrações).
- **Tipografia**: `Inter` (UI) e `Nunito` (Títulos amigáveis).

### Layout & Responsividade
- **Hero Section**:
  - *Desktop*: 2 Colunas (Texto Esquerda, Ilustração 3D Direita).
  - *Mobile*: 1 Coluna (Texto topo, ilustração abaixo).
- **Header**:
  - *Desktop*: Menu horizontal + Botões CTA.
  - *Mobile*: Hamburger Menu (Sheet Style) + Apenas Logo e ícone sanduíche.
  - **Comportamento**: Sticky Header com fundo branco ao rolar.

---

## 3. Funcionalidades Ativas
1.  **Apresentação do Produto**: Seções "Como Funciona" e "Funcionalidades".
2.  **Captura de Leads**: Botões "Começar Agora" (Link externo para App SaaS).
3.  **Segurança**: Selos de LGPD/HIPAA para tranquilizar pais.
4.  **Feature Flag**: Seção "Para Profissionais" **REMOVIDA/OCULTA** (Decisão de Negócio v1.0).

---

## 4. Histórico de Alterações Relevantes
- **[2024-02-02] Remoção de Médicos**: O componente `ProfessionalSection` foi setado para `return null` e links de navegação removidos para focar exclusivamente em B2C (Pais).
- **[2024-02-02] Mobile Menu**: Implementação de menu sanduíche responsivo no `Header.jsx` para corrigir falha de navegação em celulares.

---

## 5. Instruções de Deploy
```bash
cd frontend
npm install
npm run build
# Output em: dist/
```
