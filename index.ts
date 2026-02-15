const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;

    // IMPORTANTE: Construimos la ruta absoluta al archivo
    const filePath = import.meta.dir + path;
    const file = Bun.file(filePath);

    console.log(`🔍 Petición: ${path} -> Buscando en: ${filePath}`);

    if (await file.exists()) {
      return new Response(file);
    }

    // Si el archivo NO existe y no es una ruta de API/Dist, enviamos index.html
    // Pero si el usuario pide algo en /dist/ y no está, enviamos un 404 real
    if (path.startsWith("/dist/")) {
      console.error(`❌ ERROR: El archivo ${path} no existe en el disco.`);
      return new Response("Archivo no encontrado en dist", { status: 404 });
    }

    return new Response(Bun.file(import.meta.dir + "/index.html"));
  },
});

console.log(`🚀 Servidor en http://localhost:${server.port}`);

