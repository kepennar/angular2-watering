#!/bin/bash

RUNNING=$(docker inspect --format="{{ .State.Running }}" elasticsearch 2> /dev/null)

if [ "$RUNNING" != "true" ]; then
  docker run -d -p 9200:9200 --name elasticsearch -v "$PWD/esdata":/usr/share/elasticsearch/data elasticsearch
fi
