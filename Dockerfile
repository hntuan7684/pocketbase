FROM alpine:latest
WORKDIR /pb
RUN apk --no-cache add ca-certificates tini
COPY ./pocketbase /pb/
COPY ./pb_data /pb/pb_data/
COPY ./pb_public /pb/pb_public/
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
