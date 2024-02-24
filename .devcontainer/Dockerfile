FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

RUN yarn install

RUN npm run build

COPY . ./

EXPOSE 3000 

CMD ["npm","start"]