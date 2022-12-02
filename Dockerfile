FROM node:16.18.1-slim
 
WORKDIR /usr/app
COPY ./ /usr/app
 
RUN npm install

EXPOSE 80

CMD ["npm", "start"]
