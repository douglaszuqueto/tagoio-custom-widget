dev:
	pnpm dev

build:
	pnpm build

lint:
	pnpm lint

deploy: build
	npx http-server dist

.PHONY: dev deploy
