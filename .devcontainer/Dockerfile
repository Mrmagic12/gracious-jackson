FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn install

COPY . ./

CMD ["npm","start"]