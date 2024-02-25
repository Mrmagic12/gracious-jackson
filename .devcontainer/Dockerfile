FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN yarn install

RUN yarn start

EXPOSE 3000 

CMD ["npm","start"]
