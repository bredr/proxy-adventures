FROM node:10 AS frontend-builder
LABEL author "david.brett@tessella.com"

ADD package.json .

ADD package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM bitnami/nginx:1.16 

USER root

RUN apt-get update && apt-get install -y gettext-base

RUN chown 1000:100 /opt/bitnami/nginx/

COPY --chown=1000:100 nginx.conf /opt/bitnami/nginx/conf/nginx.conf

USER 1000

RUN mkdir -p /opt/bitnami/nginx/tmp/client_body && \
    mkdir -p /opt/bitnami/nginx/tmp/proxy && \
    mkdir -p /opt/bitnami/nginx/tmp/uwsgi && \
    mkdir -p /opt/bitnami/nginx/tmp/scgi && \
    mkdir -p /opt/bitnami/nginx/www

RUN ln -sf /dev/stdout /opt/bitnami/nginx/logs/access.log && \
    ln -sf /dev/stderr /opt/bitnami/nginx/logs/error.log

WORKDIR /app

COPY --chown=1000:100 --from=frontend-builder /build /opt/bitnami/nginx/www

ENTRYPOINT [ "/entrypoint.sh" ]

STOPSIGNAL SIGQUIT 

CMD envsubst '\$AUTH_SERVICE \$BACKEND' < /opt/bitnami/nginx/conf/nginx.conf > /opt/bitnami/nginx/conf/nginx.conf && /run.sh
