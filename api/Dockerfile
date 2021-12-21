FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 7000

CMD [ "npm", "run", "prod" ]