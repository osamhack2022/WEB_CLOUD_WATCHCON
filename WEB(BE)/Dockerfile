FROM node:16
WORKDIR /data/watchcon/app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 8080
CMD [ "nodemon", "-L", "server.js" ]