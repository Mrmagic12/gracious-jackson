FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN yarn install

COPY . ./

RUN npm run build

RUN npm run format-check

RUN npm run prettier

EXPOSE 3000 

CMD ["npm","start"]
