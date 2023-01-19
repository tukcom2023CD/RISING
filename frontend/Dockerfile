FROM node:16 as builder

WORKDIR /frontend

COPY /package.json .

RUN npm i --force

RUN npm cache clear --force

COPY ./ ./

RUN npm run build