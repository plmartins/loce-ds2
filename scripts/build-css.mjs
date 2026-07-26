import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const files = ["tokens.css", "animations.css", "base.css"];
const css = files
    .map((f) => readFileSync(join(root, "src/styles", f), "utf8"))
    .join("\n");

writeFileSync(join(root, "dist/styles.css"), css);
console.log(`dist/styles.css gerado (${files.join(" + ")})`);
