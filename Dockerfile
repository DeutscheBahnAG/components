# latest update to nginx introduced a regression https://github.com/nginxinc/docker-nginx-unprivileged/issues/56
#FROM nginxinc/nginx-unprivileged:stable-alpine
FROM nginxinc/nginx-unprivileged:1.19.4-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html/
