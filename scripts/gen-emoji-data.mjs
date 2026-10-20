/**
 * Gera src/components/emoji-data.ts (a base do EmojiPicker) a partir do emojibase-data.
 * Rode à mão quando quiser atualizar: `node scripts/gen-emoji-data.mjs`. O arquivo
 * gerado é commitado, então o build normal não depende do emojibase.
 *
 * Formato enxuto, uma tupla por emoji: [emoji, grupo, "rótulo pt-BR", "palavras de busca"].
 * - Só até Emoji 13.1 (2020): acima disso ainda vira quadrado em Windows 10 e
 *   Android antigo, e um seletor que mostra tofu é pior que não mostrar.
 * - Sem tons de pele (o uso no chat nunca pediu) e sem o grupo "componentes".
 * - Palavras em pt-BR e inglês, sem acento e em minúsculas, já prontas pra busca.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const MAX_VERSION = 13.1;

const pt = require("emojibase-data/pt/data.json");
const en = require("emojibase-data/en/data.json");
const groups = require("emojibase-data/pt/messages.json").groups;
const enByHex = new Map(en.map((e) => [e.hexcode, e]));

const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const rows = pt
    .filter((e) => e.version <= MAX_VERSION && e.group !== undefined && e.group !== 2)
    .sort((a, b) => a.order - b.order)
    .map((e) => {
        const x = enByHex.get(e.hexcode);
        const words = new Set();
        [e.label, ...(e.tags || []), x?.label || "", ...(x?.tags || [])].forEach((t) =>
            norm(t).split(/[\s:,]+/).forEach((w) => w.length > 1 && words.add(w)),
        );
        return [e.emoji, e.group, e.label, [...words].join(" ")];
    });

const groupNames = Object.fromEntries(groups.filter((g) => g.key !== "component").map((g) => [g.order, g.message.replace(/^\w/, (c) => c.toUpperCase())]));

const out = `// GERADO por scripts/gen-emoji-data.mjs (emojibase-data). Não editar à mão.
// [emoji, grupo, rótulo, "palavras de busca"], ${rows.length} emojis até Emoji ${MAX_VERSION}.
export type EmojiRow = readonly [emoji: string, group: number, label: string, keywords: string];
export const EMOJI_GROUPS: Record<number, string> = ${JSON.stringify(groupNames)};
export const EMOJI_DATA: readonly EmojiRow[] = ${JSON.stringify(rows)};
`;
writeFileSync(join(root, "src/components/emoji-data.ts"), out);
console.log(`emoji-data.ts: ${rows.length} emojis, ${(out.length / 1024).toFixed(0)} kB bruto, ${(gzipSync(out).length / 1024).toFixed(0)} kB gzip`);
