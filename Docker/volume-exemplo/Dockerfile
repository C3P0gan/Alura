FROM node:latest
LABEL author Cristoffer Pogan
COPY . /var/www
WORKDIR /var/www
RUN npm i
ENTRYPOINT ["npm", "start"]
EXPOSE 3000
