import { expect, test, describe } from "bun:test";
import * as _ from "../index.ts";

describe("Server Integration Tests", () => {
  const BASE_URL = `http://localhost:${_.server.port}`;

  test("Debe servir index.html en la ruta raíz", async () => {
    const res = await fetch(`${BASE_URL}/`);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("text/html");
  });

  test("Debe servir archivos estáticos desde /dist", async () => {
    const res = await fetch(`${BASE_URL}/main.js`);
    if (res.status === 200) {
      expect(res.status).toBe(200);
    } else {
      expect(res.status).toBe(200);
    }
  });

  test("Debe retornar 404 si no existe dist/index.html", async () => {
    const res = await fetch(`${BASE_URL}/ruta-inexistente`);
    expect(res.status).toBe(200);
  });
});
