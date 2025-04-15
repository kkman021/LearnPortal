#!/bin/bash

#docker run -it --rm -v $(pwd)/build:/usr/share/nginx/html \
#    -v $(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf \
#    -p 80:80 nginx:latest

DOCKER_NAME="learn-site"

docker stop $DOCKER_NAME
docker run -itd --rm --name $DOCKER_NAME -p 80:80 learn-site:latest
