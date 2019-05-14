FROM node:10

ADD package.json .

ADD package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV=production

CMD node ./build/index.js