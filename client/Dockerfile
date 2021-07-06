FROM node:14.17.1-alpine3.13

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm ci
RUN npm i serve
RUN npm run build


CMD ["npm", "start"]
