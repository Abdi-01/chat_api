From node

#Create app directory
WORKDIR /app

# Install app dependencies

# COPY package*.json ./
# Menyalin semua file pada directory kita kedalam directory /app yg telah kita buat
COPY . /app

RUN npm install


EXPOSE 4444

CMD ["node","index.js"]