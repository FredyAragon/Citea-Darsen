# --- Etapa 1: Construcción (Build) ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos primero los archivos de dependencias para aprovechar el caché de Docker
COPY package*.json ./

# Instalamos dependencias
RUN npm ci

# Copiamos el resto del código del proyecto
COPY . .

# Compilamos el proyecto (esto genera la carpeta 'dist')
RUN npm run build

# --- Etapa 2: Servidor de producción ---
FROM nginx:alpine

# Copiamos el resultado de la compilación de la etapa anterior a la carpeta pública de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]