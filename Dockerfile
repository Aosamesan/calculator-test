FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install pm2 -g
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["pm2-runtime", "app.config.js"]