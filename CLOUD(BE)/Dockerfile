FROM node:16
WORKDIR /data/watchcon/app
ADD https://raw.githubusercontent.com/osamhack2022/WEB_CLOUD_WATCHCON/main/WEB(BE)/package.json ./
RUN npm install
RUN npm install -g nodemon
ADD https://raw.githubusercontent.com/osamhack2022/WEB_CLOUD_WATCHCON/main/WEB(BE)/server.js ./
EXPOSE 8080
CMD [ "nodemon", "-L", "server.js" ]