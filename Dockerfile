# latest update to nginx introduced a regression https://github.com/nginxinc/docker-nginx-unprivileged/issues/56
#FROM nginxinc/nginx-unprivileged:stable-alpine
FROM nginxinc/nginx-unprivileged:1.21.4-alpine
COPY packages/docs/nginx.conf /etc/nginx/conf.d/default.conf
COPY packages/docs/build/ /usr/share/nginx/html/
