FROM node:16
WORKDIR /data/watchcon/app
COPY ../WEB(BE)/package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY ../WEB(BE) ./
EXPOSE 8080
CMD [ "nodemon", "-L", "server.js" ]