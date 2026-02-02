# Guia de Resolução - Conflitos de Dependências NPM

## 🔴 Problema Identificado

Conflito de dependências entre:
- `date-fns@^4.1.0` (requerido pelo frontend)
- `react-day-picker@8.10.1` (requer `date-fns@^2.28.0 || ^3.0.0`)

## ✅ Solução

### Opção 1: Usar --legacy-peer-deps (Rápido)

```bash
# Limpar cache
rm -rf node_modules package-lock.json

# Instalar com flag
npm install --legacy-peer-deps

# Build
npm run build --legacy-peer-deps
```

### Opção 2: Usar --force (Alternativa)

```bash
npm install --force
npm run build
```

### Opção 3: Corrigir package.json (Recomendado)

Downgrade do `date-fns` para versão compatível:

```json
{
  "dependencies": {
    "date-fns": "^3.0.0",  // Mudar de ^4.1.0 para ^3.0.0
    "react-day-picker": "8.10.1"
  }
}
```

Depois:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Opção 4: Usar Yarn (Mais Tolerante)

```bash
# Instalar yarn se não tiver
npm install -g yarn

# Usar yarn
yarn install
yarn build
```

## 🚀 Comando Completo para Deploy

```bash
# No servidor SSH
cd /opt/site_autismo/frontend

# Limpar tudo
rm -rf node_modules package-lock.json

# Instalar com flag
npm install --legacy-peer-deps

# Build
npm run build

# Verificar se build foi criado
ls -la build/

# Copiar para local servido
cd ..
cp -r frontend/build /opt/site_autismo_build

# Se usar Docker/Nginx
docker compose up -d
```

## 📝 Se Continuar com Erro

### Alternativa: Build Local (Windows)

```powershell
# No seu PC Windows
cd C:\Users\DaniloBruno\.gemini\antigravity\scratch\site_autismo\frontend

# Limpar
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue

# Instalar
npm install --legacy-peer-deps

# Build
npm run build

# Enviar para servidor via SCP
scp -r build/ root@seu-servidor:/opt/site_autismo/frontend/
```

## 🔧 Troubleshooting

### Se npm install falhar por memória:
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm install --legacy-peer-deps
```

### Se CRACO não for encontrado:
```bash
npm install @craco/craco --save-dev --legacy-peer-deps
```

### Verificar versões:
```bash
node --version  # Deve ser >= 18
npm --version   # Deve ser >= 9
```
