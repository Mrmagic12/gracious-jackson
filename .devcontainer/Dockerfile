FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN yarn build 

COPY . ./

RUN npm run build

EXPOSE 3000 

CMD ["npm","start"]
