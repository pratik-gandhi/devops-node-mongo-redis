# devops-node-mongo-redis

## Description

Follow through of Sanjeev Thiyagarajan's [Youtube tutorial](https://www.youtube.com/watch?v=jotpVtFwYBk)

## docker-compose

``` bash
sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```


Use of `-V` flag to renew annonymous volume (being used for `node_modules`)
```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build -V
```