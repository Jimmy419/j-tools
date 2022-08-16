import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
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
      file: "build/index.cjs.js",
      format: "cjs",
    },
  ],
  plugins: [
    ...baseConfig.plugins,
    excludeDependenciesFromBundle(), //把package.json中的dependencies和peerDependencies从打包结果中移除掉
  ],
};

export default config;
