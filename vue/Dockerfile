FROM node:16.14-alpine

WORKDIR /app

RUN apk update && \
    apk add git && \
    npm install -g npm @vue/cli

COPY ./app/package*.json ./

RUN npm install

COPY . .