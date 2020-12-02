From node

#Create app directory
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["nodemon","index.js"]