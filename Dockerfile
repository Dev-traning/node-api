FROM node:latest
WORKDIR /home/server/Documents/node-doc
COPY  . .
RUN npm install
EXPOSE 55000
CMD [ "node","index.js" ]

















