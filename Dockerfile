# Sử dụng Alpine Linux nhẹ
FROM alpine:3.18

# Thiết lập thư mục làm việc
WORKDIR /pb

# Chạy ứng dụng với Tini để tránh lỗi tiến trình
CMD ["./pocketbase.exe", "serve"]
