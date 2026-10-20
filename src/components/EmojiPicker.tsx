import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "../lib/utils";
import { SearchInput } from "./SearchInput";
import { Skeleton } from "./Skeleton";
import { IconBall, IconFlag, IconFood, IconHand, IconHash, IconHistory, IconLightbulb, IconPaw, IconPlane, IconSmiley } from "../icons";
import type { EmojiRow } from "./emoji-data";

export type EmojiPickerProps = {
    /** Chamado com o emoji escolhido. Fechar o seletor é responsabilidade de quem o abriu. */
    onSelect: (emoji: string) => void;
    /** Escape dentro do seletor (pra quem o abriu fechar). */
    onEscape?: () => void;
    /** Foca a busca ao abrir (padrão: sim). */
    autoFocus?: boolean;
    /** Chave do localStorage dos recentes; uma por produto quando fizer sentido separar. */
    recentKey?: string;
    className?: string;
};

type Section = { key: string; title: string; rows: readonly EmojiRow[] };

const CATEGORY_ICONS: Record<number, typeof IconSmiley> = { 0: IconSmiley, 1: IconHand, 3: IconPaw, 4: IconFood, 5: IconPlane, 6: IconBall, 7: IconLightbulb, 8: IconHash, 9: IconFlag };
const RECENT_MAX = 24;
const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

type Data = { rows: readonly EmojiRow[]; groups: Record<number, string> };
let cache: Data | null = null;
let pending: Promise<Data> | null = null;
/** A base (≈60 kB gzip) só desce quando o seletor abre pela primeira vez. */
const loadData = () => {
    if (cache) return Promise.resolve(cache);
    pending ??= import("./emoji-data").then((m) => (cache = { rows: m.EMOJI_DATA, groups: m.EMOJI_GROUPS }));
    return pending;
};

const readRecent = (key: string): string[] => {
    try {
        const raw = localStorage.getItem(key);
        const list = raw ? JSON.parse(raw) : [];
        return Array.isArray(list) ? list.filter((e) => typeof e === "string").slice(0, RECENT_MAX) : [];
    } catch {
        return [];
    }
};
const writeRecent = (key: string, list: string[]) => {
    try {
        localStorage.setItem(key, JSON.stringify(list));
    } catch {
        /* armazenamento bloqueado: recentes só nesta sessão */
    }
};

/**
 * Seletor de emoji da suíte: busca em português, categorias, recentes.
 * Glifos nativos do sistema (sem sprites), base enxuta carregada sob demanda,
 * 1.812 emojis até o Emoji 13.1 pra nunca mostrar quadrado vazio.
 */
export function EmojiPicker({ onSelect, onEscape, autoFocus = true, recentKey = "loce:emoji-recent", className }: EmojiPickerProps) {
    const [data, setData] = useState<Data | null>(cache);
    const [query, setQuery] = useState("");
    const [recent] = useState<string[]>(() => readRecent(recentKey));
    const [active, setActive] = useState<string>("recent");
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const spyLocked = useRef(false);

    useEffect(() => {
        let alive = true;
        if (!data) loadData().then((d) => alive && setData(d));
        return () => { alive = false; };
    }, [data]);

    const byEmoji = useMemo(() => new Map((data?.rows ?? []).map((r) => [r[0], r])), [data]);

    const sections = useMemo<Section[]>(() => {
        if (!data) return [];
        const q = norm(query);
        if (q) {
            const terms = q.split(/\s+/).filter(Boolean);
            const rows = data.rows.filter((r) => {
                const hay = ` ${r[3]} `;
                return terms.every((t) => hay.includes(` ${t}`));
            });
            return [{ key: "results", title: rows.length ? "Resultados" : "", rows }];
        }
        const out: Section[] = [];
        const recentRows = recent.map((e) => byEmoji.get(e)).filter((r): r is EmojiRow => !!r);
        if (recentRows.length) out.push({ key: "recent", title: "Recentes", rows: recentRows });
        const grouped = new Map<number, EmojiRow[]>();
        for (const r of data.rows) {
            const list = grouped.get(r[1]);
            if (list) list.push(r); else grouped.set(r[1], [r]);
        }
        for (const [g, rows] of grouped) out.push({ key: String(g), title: data.groups[g] ?? "", rows });
        return out;
    }, [data, query, recent, byEmoji]);

    const tabs = useMemo(() => {
        const list: { key: string; title: string; Icon: typeof IconSmiley }[] = [];
        if (recent.length) list.push({ key: "recent", title: "Recentes", Icon: IconHistory });
        for (const g of Object.keys(CATEGORY_ICONS).map(Number)) list.push({ key: String(g), title: data?.groups[g] ?? "", Icon: CATEGORY_ICONS[g] });
        return list;
    }, [recent.length, data]);

    useEffect(() => {
        if (!tabs.some((t) => t.key === active)) setActive(tabs[0]?.key ?? "0");
    }, [tabs, active]);

    // Recentes só mudam na PRÓXIMA abertura: atualizar a grade enquanto o seletor está aberto
    // faz a seção "Recentes" crescer e tudo pular na hora do clique.
    const persistedRecent = useRef(recent);
    const pick = (emoji: string) => {
        const next = [emoji, ...persistedRecent.current.filter((e) => e !== emoji)].slice(0, RECENT_MAX);
        persistedRecent.current = next;
        writeRecent(recentKey, next);
        onSelect(emoji);
    };

    const jumpTo = (key: string) => {
        setActive(key);
        const el = sectionRefs.current[key];
        const scroller = scrollRef.current;
        if (!el || !scroller) return;
        spyLocked.current = true;
        scroller.scrollTo({ top: el.offsetTop - scroller.offsetTop, behavior: "smooth" });
        window.setTimeout(() => { spyLocked.current = false; }, 450);
    };

    // Aba ativa acompanha o scroll: a última seção cujo topo já passou.
    const onScroll = () => {
        if (spyLocked.current || query) return;
        const scroller = scrollRef.current;
        if (!scroller) return;
        const top = scroller.scrollTop + 12;
        let current = sections[0]?.key;
        for (const s of sections) {
            const el = sectionRefs.current[s.key];
            if (el && el.offsetTop - scroller.offsetTop <= top) current = s.key;
        }
        if (current && current !== active) setActive(current);
    };

    const onSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") { e.preventDefault(); if (query) setQuery(""); else onEscape?.(); }
        if (e.key === "Enter" && query) {
            const first = sections[0]?.rows[0];
            if (first) { e.preventDefault(); pick(first[0]); }
        }
    };

    return (
        <div
            role="dialog"
            aria-label="Escolher emoji"
            onKeyDown={(e) => { if (e.key === "Escape" && e.target === e.currentTarget) onEscape?.(); }}
            className={cn("flex h-[380px] w-[328px] max-w-[calc(100vw-16px)] flex-col overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-lg", className)}
        >
            <div className="p-2 pb-1.5">
                <SearchInput
                    autoFocus={autoFocus}
                    placeholder="Buscar emoji"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onClear={() => setQuery("")}
                    onKeyDown={onSearchKeyDown}
                    autoComplete="off"
                />
            </div>

            {!query && (
                <div role="tablist" aria-label="Categorias" className="flex items-center justify-between px-2 pb-1">
                    {tabs.map(({ key, title, Icon }) => (
                        <button
                            key={key}
                            type="button"
                            role="tab"
                            aria-selected={active === key}
                            aria-label={title}
                            title={title}
                            onClick={() => jumpTo(key)}
                            className={cn(
                                "relative flex size-7 cursor-pointer items-center justify-center rounded-lg transition-colors duration-150",
                                active === key ? "text-brand" : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                            )}
                        >
                            <Icon size={16} />
                            <span aria-hidden className={cn("absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand transition-[opacity,transform] duration-150", active === key ? "scale-x-100 opacity-100" : "scale-x-50 opacity-0")} />
                        </button>
                    ))}
                </div>
            )}

            <div ref={scrollRef} onScroll={onScroll} key={query ? "search" : "browse"} className="ds-emoji-fade min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 pb-2">
                {!data && (
                    <div className="grid grid-cols-8 gap-0.5 pt-1">
                        {Array.from({ length: 48 }).map((_, i) => <Skeleton key={i} className="m-1 size-7 rounded-full" />)}
                    </div>
                )}
                {data && sections.length === 1 && sections[0].rows.length === 0 && (
                    <div className="flex h-full flex-col items-center justify-center gap-1 text-center">
                        <IconSmiley size={22} className="text-muted-foreground/60" />
                        <span className="text-[13px] font-semibold text-foreground/80">Nenhum emoji para “{query.trim()}”</span>
                        <span className="text-[12px] font-medium text-muted-foreground">Tente outra palavra, em português ou inglês.</span>
                    </div>
                )}
                {sections.map((s) => (
                    <section
                        key={s.key}
                        ref={(el) => { sectionRefs.current[s.key] = el; }}
                        aria-label={s.title || undefined}
                        className="[content-visibility:auto] [contain-intrinsic-size:auto_200px]"
                    >
                        {s.title && (
                            <h4 className="sticky top-0 z-10 bg-card/95 px-1 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-sm">{s.title}</h4>
                        )}
                        <div className="grid grid-cols-8">
                            {s.rows.map((r) => (
                                <button
                                    key={r[0]}
                                    type="button"
                                    title={r[2]}
                                    aria-label={r[2]}
                                    onClick={() => pick(r[0])}
                                    className="ds-emoji-glyph flex size-9 cursor-pointer items-center justify-center rounded-lg text-[22px] leading-none transition-[background-color,transform] duration-150 ease-out hover:bg-surface-2 hover:scale-110 active:scale-95"
                                >
                                    {r[0]}
                                </button>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
