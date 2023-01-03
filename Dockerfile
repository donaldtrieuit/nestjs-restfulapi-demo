FROM node:16-alpine as builder

WORKDIR .

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 5000

CMD ["npm", "start"]