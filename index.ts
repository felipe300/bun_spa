import { logger } from "./src/utils/logger";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;

    const file = Bun.file(`./dist${path}`);
    const fallbackFile = Bun.file("./dist/index.html");
    const buildErrorFile = Bun.file("./404.html");

    logger.info(`${req.method} → ${url.pathname}`);
    if (await file.exists()) {
      return new Response(file);
    }

    if (await fallbackFile.exists()) {
      return new Response(fallbackFile);
    }

    logger.warn(`Assets not ready. Serving 404.html for: ${url.pathname}`);
    return new Response(buildErrorFile);
  },
});

logger.info(`🚀 Server running at http://localhost:${server.port}`);
