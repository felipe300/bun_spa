FROM oven/bun:canary-alpine AS base
WORKDIR /app

COPY package.json .
COPY bun.lockb .
RUN bun install --production

COPY index.ts . 
COPY src/ ./src/
COPY dist/ ./dist/

EXPOSE 3000
CMD ["bun", "run", "index.ts"]
