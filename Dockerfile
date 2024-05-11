# frontend/Dockerfile
FROM node:16.10-alpine AS prod

WORKDIR /app
COPY package*.json .
COPY yarn*.lock .
RUN yarn install
COPY . .
RUN yarn build

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=prod /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
