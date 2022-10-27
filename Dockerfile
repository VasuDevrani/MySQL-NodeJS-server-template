FROM node:18-alpine

WORKDIR /mysql-server

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]