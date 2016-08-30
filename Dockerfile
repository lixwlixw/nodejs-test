FROM registry.dataos.io/nodejs/baseimage-web-nodejs:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /start.sh
ADD . /datahub/raw/main/webapp
RUN cd /datahub/raw/main/webapp && gulp build
WORKDIR /datahub/raw/main/webapp/dist
EXPOSE  80 443
CMD ["/start.sh"]
