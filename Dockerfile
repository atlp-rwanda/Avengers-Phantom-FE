FROM node:12-alpine

WORKDIR /avengersphantom-fe

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm install


CMD ["npm","run","dev"]
