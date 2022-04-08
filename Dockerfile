FROM node:16

WORKDIR /opt/app

COPY . .

# Install the Gatsby CLI to enable building and serving
RUN npm install -g gatsby-cli

## Install dependencies from package.json
RUN npm install --verbose

RUN gatsby build --verbose

EXPOSE 5000

# RUN gatsby serve --port 8000
