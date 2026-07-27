import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        index: "src/index.ts",
        "icons/index": "src/icons/index.ts",
        "charts/index": "src/charts/index.ts",
    },
    format: ["esm"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: true,
    clean: true,
    external: ["react", "react-dom", "tailwindcss", "@phosphor-icons/react", "recharts"],
});
