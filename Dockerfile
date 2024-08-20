#Imagem do Node.js 
FROM node:18 AS build

#Diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Constroei a aplicação React
RUN npm run build

# Use uma imagem de servidor Nginx para servir a aplicação
FROM nginx:alpine

# Copie os arquivos construídos para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# porta 80 para acessar a aplicação
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]