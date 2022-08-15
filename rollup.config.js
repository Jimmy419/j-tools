import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: ["src/**/*.test.ts"],
};

const config = {
  input: "src/index.ts",
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      tsconfigOverride: overrides,
    }),
  ],
};

export default config;
