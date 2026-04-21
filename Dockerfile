# ==============================
# Stage 1: Build do Frontend React
# ==============================
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependências primeiro (cache eficiente)
COPY frontend/package*.json ./
RUN npm install

# Copia o código-fonte e compila
COPY frontend/ .
RUN npm run build

# ==============================
# Stage 2: Servidor Nginx
# ==============================
FROM nginx:alpine

# Copia os arquivos compilados do Stage 1
COPY --from=builder /app/build /usr/share/nginx/html

# Copia a configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
