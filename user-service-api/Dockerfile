#INITIAL STAGE

# FROM node:latest
# WORKDIR /app
# ADD . .
# RUN npm install
# CMD node index.js


#AFTER PRODUCTION

#FROM node:latest
FROM node:20.10-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js