# Étape 1 : build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : run
FROM node:18
WORKDIR /app
COPY --from=build /app /app
EXPOSE 5000
CMD ["node", "dist/index.js"]