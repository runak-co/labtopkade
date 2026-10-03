.PHONY: help up down restart build logs test clean dev-storefront dev-backend dev-admin

help:
	@echo "E-Commerce Monorepo Commands:"
	@echo "  make up               Start all services via Docker Compose"
	@echo "  make down             Stop all running Docker Compose services"
	@echo "  make restart          Restart all Docker Compose services"
	@echo "  make build            Build all Docker images"
	@echo "  make logs             Follow logs from all services"
	@echo "  make dev-storefront   Run Storefront (Next.js) locally in dev mode"
	@echo "  make dev-backend      Run Backend (Spring Boot) locally in dev mode"
	@echo "  make dev-admin        Run Admin Panel (Angular) locally in dev mode"
	@echo "  make test             Run test suites across all 3 applications"
	@echo "  make clean            Clean up local build artifacts and containers"

up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose down && docker compose up -d

build:
	docker compose build

logs:
	docker compose logs -f

dev-storefront:
	cd storefront && npm run dev

dev-backend:
	cd backend && ./mvnw spring-boot:run

dev-admin:
	cd admin && npm start

test:
	cd storefront && npm test
	cd backend && ./mvnw test
	cd admin && npm test

clean:
	docker compose down -v
	rm -rf storefront/.next storefront/node_modules
	rm -rf backend/target
	rm -rf admin/.angular admin/dist admin/node_modules
