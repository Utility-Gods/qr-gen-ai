FROM node:18 
WORKDIR /app
COPY docker/package.json ./
RUN npm install --force
COPY . .
COPY docker/package.json ./
EXPOSE 5176
CMD ["npm", "run","dev","--open"]