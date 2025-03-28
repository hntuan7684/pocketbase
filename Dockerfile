FROM alpine:latest
WORKDIR /pb
RUN apk add --no-cache ca-certificates
COPY ./pocketbase /pb/
COPY ./pb_data /pb/pb_data/
COPY ./pb_public /pb/pb_public/
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
