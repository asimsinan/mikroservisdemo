FROM node:latest
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3007 
CMD npm start