import { defineConfig } from "tsup";

export default defineConfig({
    // Um entry por ícone (src/icons/defs/*): cada ícone vira um módulo próprio no dist,
    // e o bundler do app consegue mandar cada um só pro chunk que o usa.
    entry: ["src/index.ts", "src/icons/index.ts", "src/charts/index.ts", "src/icons/defs/*.ts"],
    format: ["esm"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: true,
    clean: true,
    external: ["react", "react-dom", "tailwindcss", "@phosphor-icons/react", "recharts"],
});
