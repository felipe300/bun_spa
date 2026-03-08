import { mock } from "bun:test";

mock.module("../src/utils/logger.ts", () => ({
  logger: {
    info: () => {},
    warn: () => {},
    error: () => {},
  },
}));
