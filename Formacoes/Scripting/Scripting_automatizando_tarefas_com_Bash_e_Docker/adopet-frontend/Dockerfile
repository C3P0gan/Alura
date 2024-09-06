FROM node:20
WORKDIR /app
COPY package* ./
RUN npm install
COPY . ./
CMD ["npm", "start"]
