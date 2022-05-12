FROM node:16.14.0

WORKDIR /GameProjectBack

COPY package*.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "run", "production"]



