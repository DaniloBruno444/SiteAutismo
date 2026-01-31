# Plano de Deploy - SiteAutismo para site.danilobruno.com.br

## 📋 Validação da Estrutura Atual

### ✅ Estrutura Identificada:
- **Frontend**: React App (Create React App + CRACO)
- **Backend**: Python Flask (server.py)
- **Stack**: React 19 + Tailwind CSS + shadcn/ui + Radix UI
- **Build**: `npm run build` → gera pasta `build/`

### 📦 Componentes Principais:
1. Header (Navbar)
2. HeroSection
3. ChallengeSection
4. FeaturesSection
5. HowItWorksSection
6. ProfessionalSection
7. CTASection
8. Footer

---

## 🚀 Estratégia de Deploy

### Opção 1: Deploy Standalone (Recomendado)
Subir este site como aplicação independente no mesmo servidor.

**Vantagens:**
- Isolamento total
- Fácil manutenção
- Pode usar domínio diferente no futuro

**Estrutura no Servidor:**
```
/opt/
├── autismoapp/          # App atual (health_saas_mvp)
└── site_autismo/        # Novo site institucional
    ├── frontend/
    │   └── build/       # Build React
    └── backend/         # API Flask (se necessário)
```

### Opção 2: Integrar no Projeto Atual
Substituir o frontend atual pelo SiteAutismo.

**Vantagens:**
- Um único projeto
- Mesma infraestrutura Docker

**Desvantagens:**
- Perde o frontend atual (NeuroCare)

---

## 📝 Passos para Deploy (Opção 1 - Recomendado)

### 1. Build Local do Frontend

```powershell
# No Windows
cd C:\Users\DaniloBruno\.gemini\antigravity\scratch\site_autismo\frontend

# Instalar dependências
npm install
# ou
yarn install

# Build de produção
npm run build
# ou
yarn build
```

### 2. Preparar Servidor

```bash
# SSH no servidor
ssh root@seu-servidor

# Criar diretório
mkdir -p /opt/site_autismo

# Dar permissões
chown -R www-data:www-data /opt/site_autismo
```

### 3. Enviar Build para Servidor

**Opção A: Via SCP (do Windows)**
```powershell
scp -r C:\Users\DaniloBruno\.gemini\antigravity\scratch\site_autismo\frontend\build root@seu-servidor:/opt/site_autismo/
```

**Opção B: Via Git (no servidor)**
```bash
cd /opt
git clone https://github.com/DaniloBruno444/SiteAutismo site_autismo
cd site_autismo/frontend
npm install
npm run build
```

### 4. Configurar Nginx/Traefik

**Se usar Nginx direto:**
```nginx
server {
    listen 443 ssl http2;
    server_name site.danilobruno.com.br;

    ssl_certificate /etc/letsencrypt/live/site.danilobruno.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/site.danilobruno.com.br/privkey.pem;

    root /opt/site_autismo/frontend/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;  # Se usar backend Flask
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

**Se usar Traefik (via Docker):**
Criar `docker-compose.yml` no `/opt/site_autismo/`:

```yaml
version: '3.8'

services:
  site:
    image: nginx:alpine
    container_name: site_autismo
    restart: always
    volumes:
      - ./frontend/build:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    networks:
      - n8n_default
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.site-autismo.rule=Host(`site.danilobruno.com.br`)"
      - "traefik.http.routers.site-autismo.entrypoints=websecure"
      - "traefik.http.routers.site-autismo.tls=true"
      - "traefik.http.routers.site-autismo.tls.certresolver=mytlschallenge"
      - "traefik.http.services.site-autismo.loadbalancer.server.port=80"
      - "traefik.docker.network=n8n_default"

networks:
  n8n_default:
    external: true
```

### 5. Criar nginx.conf

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### 6. Deploy

```bash
# Se usar Docker
cd /opt/site_autismo
docker compose up -d

# Verificar logs
docker logs site_autismo

# Se usar Nginx direto
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔍 Validação Pós-Deploy

1. Acessar: `https://site.danilobruno.com.br`
2. Verificar:
   - ✅ Certificado SSL válido
   - ✅ Todas as seções carregando
   - ✅ Imagens e assets funcionando
   - ✅ Navegação suave (smooth scroll)
   - ✅ Responsividade mobile

---

## 🆘 Troubleshooting

### Build falha por memória
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Assets 404
Verificar `homepage` no `package.json`:
```json
{
  "homepage": "."
}
```

### Rotas não funcionam
Garantir `try_files $uri /index.html` no Nginx.

---

## 📌 Próximos Passos

1. [ ] Build local do frontend
2. [ ] Enviar para servidor
3. [ ] Configurar Traefik/Nginx
4. [ ] Testar em produção
5. [ ] Configurar CI/CD (opcional)
