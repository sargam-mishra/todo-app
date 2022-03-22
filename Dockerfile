FROM node:16.13.1-alpine3.13 as build-step
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY ./public/index.html ./public
RUN npm install
COPY . ./app
CMD ["npm", "start"]
