docker pull webrecorder/browsertrix-crawler:latest
docker run \
    -p 9037:9037 \
    -it \
    --rm \
    -v $PWD:/crawls/ \
    webrecorder/browsertrix-crawler:latest crawl \
    --config /crawls/config.yaml
