const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = `./dist${path}`;

    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file);
    }

    const indexFile = Bun.file("./dist/index.html");
    if (await indexFile.exists()) {
      return new Response(indexFile);
    }

    return new Response("🏗️ El build se está generando... recarga en un segundo.", {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`🚀 Servidor en http://localhost:${server.port}`);
