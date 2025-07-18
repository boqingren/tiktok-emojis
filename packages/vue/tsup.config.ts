import type { Options } from "tsup";
import { defineConfig } from "tsup";

type Plugin = NonNullable<Options["esbuildPlugins"]>[number];
type Build = Parameters<NonNullable<Options["esbuildPlugins"]>[number]["setup"]>[0];

class HPlugin implements Plugin {
  public readonly name: string = "h-plugin";

  public setup(build: Build) {
    build.onLoad({ filter: /\.tsx$/ }, async args => {
      const fs = await import("fs");
      const text = await fs.promises.readFile(args.path, "utf8");
      if (!text.includes("defineComponent")) return;
      if (text.includes("import { h")) return;
      const regex = /import { defineComponent/;
      const contents = text.replace(regex, "import { defineComponent, h");
      return { contents, loader: "tsx" };
    });
  }
}

export default defineConfig({
  entry: ["./src/index.ts", "./src/*.tsx"],
  format: ["cjs", "esm"],
  outDir: "./dist",
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  minify: false,
  external: ["vue"],
  esbuildPlugins: [new HPlugin()],
  esbuildOptions(options) {
    options.jsx = "transform";
    options.jsxFactory = "h";
    options.jsxFragment = "Fragment";
  }
});
