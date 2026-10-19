import { defineConfig } from "tsup";

export default defineConfig({
    // Um entry por ícone (src/icons/defs/*): cada ícone vira um módulo próprio no dist,
    // e o bundler do app consegue mandar cada um só pro chunk que o usa.
    // Um entry por componente, primitiva, shell e lib também: cada um vira um módulo
    // próprio no dist e o app leva pro chunk inicial só o que o shell usa.
    entry: ["src/index.ts", "src/icons/index.ts", "src/charts/index.ts", "src/icons/defs/*.ts", "src/components/*.tsx", "src/components/*.ts", "src/primitives/*.tsx", "src/shell/*.tsx", "src/shell/index.ts", "src/lib/*.ts"],
    format: ["esm"],
    dts: true,
    sourcemap: true,
    treeshake: true,
    splitting: true,
    clean: true,
    external: ["react", "react-dom", "tailwindcss", "@phosphor-icons/react", "recharts"],
});
