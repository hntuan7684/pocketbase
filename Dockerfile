FROM alpine:latest
FROM alpine:3.18
WORKDIR /pb
COPY ./pocketbase /pb/
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
