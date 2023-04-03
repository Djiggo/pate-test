FROM node:18 as build-stage

WORKDIR /app
COPY . /app
RUN npm ci && npm run build

FROM nginx

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
