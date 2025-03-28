FROM alpine:latest
WORKDIR /app
RUN apk add --no-cache unzip curl
RUN curl -fsSL https://github.com/pocketbase/pocketbase/releases/latest/download/pocketbase-linux-amd64.zip -o pocketbase.zip && \
    unzip pocketbase.zip && \
    chmod +x pocketbase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
EXPOSE 8090
