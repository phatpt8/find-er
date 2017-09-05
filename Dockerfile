from node:8.4.0

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080
ENV NODE_ENV=production
CMD npm start
