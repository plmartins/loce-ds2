import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: [
            { find: "loce-ds2/icons", replacement: fileURLToPath(new URL("../src/icons/index.ts", import.meta.url)) },
            { find: "loce-ds2", replacement: fileURLToPath(new URL("../src/index.ts", import.meta.url)) },
        ],
        dedupe: ["react", "react-dom"],
    },
});
