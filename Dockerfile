FROM node:22 as build
WORKDIR /
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
Entrypoint ["npm", "run", "start"]
