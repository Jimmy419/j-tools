import { terser } from "rollup-plugin-terser";
import baseConfig from "./rollup.config";

const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: ["src/**/*.test.ts"],
};

const config = {
  ...baseConfig,
  output: [
    {
      name: "Jtools",
      file: "build/index.umd.js",
      format: "umd",
      exports: "named",
      plugins: [terser()],
    },
  ],
};

export default config;
