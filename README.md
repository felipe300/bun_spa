# bun_spa

Este proyecto es una prueba de concepto (PoC) centrada en el rendimiento y la simplicidad. El objetivo es construir una Single Page Application (SPA) utilizando un ecosistema de herramientas de "próxima generación" escritas en lenguajes de bajo nivel como Rust y Zig.

## Stack Tecnológico

| Herramienta | Función                 | ¿Por qué esta combinación?                                                                                  |
| ----------- | ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| Bun         | "Runtime, Bundler & PM" | Reemplaza a Node.js y npm. Es increíblemente rápido para instalar paquetes y empaquetar archivos.           |
| Alpine.js   | Frontend Framework      | Ofrece la reactividad de Vue o React pero con un peso mínimo y sin la complejidad de un Virtual DOM pesado. |
| Oxlint      | Linter                  | "Escrito en Rust. Detecta errores en el código casi instantáneamente, eliminando las pausas de ESLint."     |
| Oxfmt (Oxc) | Formateador             | Mantiene el estilo del código coherente con una velocidad de ejecución imperceptible.                       |

## ¿Cómo funcionan juntas?

El flujo de trabajo de bun_spa está diseñado para eliminar la fricción en el desarrollo:

1. **Entorno de Ejecución**: Bun orquesta todo. Maneja las dependencias y sirve como el motor que transforma nuestro código TypeScript en JavaScript que el navegador entiende.
2. **Interactividad**: Alpine.js se encarga de la lógica del cliente (frontend). Al ser declarativo, permite que el HTML sea el centro de la aplicación, manteniendo el código limpio y fácil de seguir.
3. **Calidad de Código Quirúrgica**: Mientras escribes, Oxlint y Oxfmt analizan tus archivos. Al estar integrados en el ecosistema de Oxc, no tienes que esperar segundos a que el linter termine; los errores aparecen (y se corrigen) al instante.
4. **Distribución**: Al ser una SPA, Bun empaqueta todo en archivos estáticos listos para ser desplegados en cualquier CDN o servidor web de alto rendimiento.

## Comandos Rápidos

Si acabas de clonar el proyecto, usa estos comandos:

- Instalar dependencias:

```bash
bun install
```

- Analizar el código (Lint):

```bash
bun run lint
```

- Corregir errores y formato:

```bash
bun run fix
```

Estado del proyecto: En fase de experimentación con herramientas de alto rendimiento.
