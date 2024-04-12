FROM node:14-alpine

WORKDIR /node-app

COPY package*.json .

# RUN npm install --quiet
RUN npm install

# RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]