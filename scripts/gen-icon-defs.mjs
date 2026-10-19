/**
 * Gera um módulo por ícone a partir de src/icons/catalog.ts (a fonte editada à mão).
 * Motivo: num único módulo, o bundler do app coloca TODO ícone usado em qualquer
 * página dentro do chunk inicial (um módulo só pode viver num chunk). Com um
 * arquivo por ícone, cada um vai só pro chunk que o usa.
 * Saída: src/icons/defs/<IconName>.ts (gerados, não editar) e src/icons/map.ts (barrel).
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(root, "..", "src", "icons");
const catalog = readFileSync(join(iconsDir, "catalog.ts"), "utf8");

const exportRe = /^export const (Icon[A-Za-z0-9]+) = \/\*#__PURE__\*\/ createIcon\(([A-Za-z0-9]+)(?:, "([a-z]+)")?\);$/gm;
const icons = [];
for (const m of catalog.matchAll(exportRe)) icons.push({ name: m[1], base: m[2], weight: m[3] });
if (!icons.length) throw new Error("Nenhum ícone encontrado em catalog.ts");

const defsDir = join(iconsDir, "defs");
rmSync(defsDir, { recursive: true, force: true });
mkdirSync(defsDir, { recursive: true });
for (const { name, base, weight } of icons) {
    const args = weight ? `${base}, "${weight}"` : base;
    writeFileSync(join(defsDir, `${name}.ts`), `// Gerado por scripts/gen-icon-defs.mjs a partir de catalog.ts. Não editar.\nimport { ${base} } from "@phosphor-icons/react";\nimport { createIcon } from "../create-icon";\n\nexport const ${name} = /*#__PURE__*/ createIcon(${args});\n`);
}
writeFileSync(join(iconsDir, "map.ts"), `// Gerado por scripts/gen-icon-defs.mjs a partir de catalog.ts. Não editar.\n${icons.map(({ name }) => `export { ${name} } from "./defs/${name}";`).join("\n")}\n`);
console.log(`icons: ${icons.length} módulos gerados`);
