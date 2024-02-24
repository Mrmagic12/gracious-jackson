FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build
RUN npm run format-check

EXPOSE 3000 

CMD ["npm","start"]
