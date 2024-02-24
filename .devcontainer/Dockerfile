FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn install

RUN npm run build

COPY . ./

CMD ["npm","start"]