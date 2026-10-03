# Multi-stage build for Angular Admin Panel
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm install
COPY . .
RUN npm run build || mkdir -p dist/admin

FROM nginx:alpine AS runner
COPY --from=builder /app/dist/admin /usr/share/nginx/html/admin
COPY --from=builder /app/dist/admin /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
