import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/*.tsx"],
  format: ["cjs", "esm"],
  outDir: "./dist",
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  minify: false,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.jsx = "transform";
    options.jsxFactory = "React.createElement";
    options.jsxFragment = "React.Fragment";
  }
});
