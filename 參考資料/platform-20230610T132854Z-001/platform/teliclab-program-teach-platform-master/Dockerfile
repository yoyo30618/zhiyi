FROM --platform=linux/amd64 node:18.4.0-alpine3.16

LABEL MAINTAINER="Shengche Hsiao <shengchehsiao@gmail.com>"

WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]