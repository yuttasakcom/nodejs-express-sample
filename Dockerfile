FROM node:9.7.0

WORKDIR /opt
COPY package.json ./
RUN npm install && npm cache clear --force
ENV PATH /opt/node_modules/.bin:$PATH

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . /opt/app

CMD [ "npm", "start" ]