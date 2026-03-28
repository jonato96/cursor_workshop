import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Carpeta del proyecto (donde está este archivo). Evita que Turbopack use un lockfile ajeno, p. ej. en el home del usuario. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
