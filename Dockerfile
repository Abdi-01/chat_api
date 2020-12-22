FROM node:12

#lokasi current directory atau folder tempat app bekerja
WORKDIR /usr/src/app

# COPY package json ke WORKDIR
COPY package*.json .

# Install app dependencies
RUN npm install

# Menyalin semua file pada directory kita kedalam directory /app yg telah kita buat
COPY . .

EXPOSE 2020

CMD ["node","index.js"]