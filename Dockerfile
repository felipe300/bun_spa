FROM oven/bun:canary-alpine AS base
WORKDIR /app

COPY package.json .
COPY bun.lock* .
RUN bun install --production --frozen-lickfile

COPY index.ts .
COPY src/ ./src/
COPY dist/ ./dist/

USER bun

EXPOSE 3000
CMD ["bun", "run", "index.ts"]
