FROM registry.dataos.io/nodejs/nodejs:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /start.sh
ADD . /datahub/raw/main/webapp
EXPOSE  80
RUN chmod u+x /start.sh
CMD ["/start.sh"]
