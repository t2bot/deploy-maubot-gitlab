FROM node:14

WORKDIR /app
COPY . /app
RUN yarn install

VOLUME "/app/config.json"
VOLUME "/app/tokens.json"
VOLUME "/app/gitlab.db"

CMD node index.js
