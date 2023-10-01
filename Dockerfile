
FROM  node:current-alpine3.18 as build

WORKDIR /app

COPY package*.json ./
RUN rm -rf node_modules
RUN rm -rf build
COPY . .
RUN npm install --force
RUN npm run build

FROM  node:current-alpine3.18 as run

WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build
RUN npm install --force --omit=dev

EXPOSE 5175
ENTRYPOINT [ "npm", "run", "start" ]