# Sử dụng Alpine Linux nhẹ
FROM alpine:3.18

# Thiết lập thư mục làm việc
WORKDIR /pb

# Cài đặt chứng chỉ SSL (nếu cần)
RUN apk --no-cache add ca-certificates tini

# Sao chép file PocketBase Linux binary vào container
COPY ./pocketbase /pb/
RUN chmod +x /pb/pocketbase

# Chạy ứng dụng với Tini để tránh lỗi tiến trình
CMD ["tini", "--", "./pocketbase", "serve", "--http=0.0.0.0:8080"]
