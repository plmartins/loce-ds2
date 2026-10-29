import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";
import { IconCheck, IconClose, IconPlus, IconSearch } from "../icons";
import { Avatar } from "./Avatar";

export type MultiSelectOption = {
    value: string;
    label: string;
    image?: string;
    description?: string;
};

export type MultiSelectProps = {
    label?: string;
    options: MultiSelectOption[];
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    addLabel?: string;
    /** Campo de busca no menu. Padrão: aparece a partir de 8 opções. */
    searchable?: boolean;
    searchPlaceholder?: string;
    className?: string;
};

/** Altura máxima do menu (px); encolhe quando a tela não dá. */
const MENU_MAX_HEIGHT = 288;
const MENU_GAP = 4;
const VIEWPORT_PADDING = 8;
const SEARCH_FROM = 8;

type MenuCoords = { top: number; left: number; width: number; maxHeight: number };

/**
 * Seleção múltipla em chips (ex.: responsáveis de uma tarefa). O menu abre
 * pra cima quando falta espaço embaixo e nunca passa da borda da tela; com
 * muitas opções ganha busca.
 */
export function MultiSelect({ label, options, value, onChange, placeholder, addLabel = "Adicionar", searchable, searchPlaceholder = "Buscar", className }: MultiSelectProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [coords, setCoords] = useState<MenuCoords>({ top: 0, left: 0, width: 0, maxHeight: MENU_MAX_HEIGHT });
    const triggerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    const hasSearch = searchable ?? options.length >= SEARCH_FROM;
    const filtered = useMemo(() => {
        const term = query.trim().toLowerCase();
        if (!term) return options;
        return options.filter((o) => o.label.toLowerCase().includes(term) || o.description?.toLowerCase().includes(term));
    }, [options, query]);

    const toggle = (val: string) => onChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val]);
    const remove = (val: string) => onChange(value.filter((v) => v !== val));

    const updateCoords = () => {
        const el = triggerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const below = window.innerHeight - rect.bottom - MENU_GAP - VIEWPORT_PADDING;
        const above = rect.top - MENU_GAP - VIEWPORT_PADDING;
        // Embaixo quando cabe (ou quando embaixo tem mais espaço que em cima); senão, em cima.
        const dropUp = below < Math.min(MENU_MAX_HEIGHT, 180) && above > below;
        const maxHeight = Math.max(120, Math.min(MENU_MAX_HEIGHT, dropUp ? above : below));
        const height = Math.min(maxHeight, listRef.current?.offsetHeight ?? maxHeight);
        setCoords({ top: dropUp ? rect.top - MENU_GAP - height : rect.bottom + MENU_GAP, left: rect.left, width: rect.width, maxHeight });
    };

    useEffect(() => {
        if (!open) {
            setQuery("");
            return;
        }
        updateCoords();
        // Segunda medida depois do menu existir no DOM (altura real pra abrir pra cima).
        const raf = requestAnimationFrame(updateCoords);
        searchRef.current?.focus();
        const handleClick = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            if (!triggerRef.current?.contains(t) && !listRef.current?.contains(t)) setOpen(false);
        };
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleEsc);
        window.addEventListener("scroll", updateCoords, true);
        window.addEventListener("resize", updateCoords);
        return () => {
            cancelAnimationFrame(raf);
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleEsc);
            window.removeEventListener("scroll", updateCoords, true);
            window.removeEventListener("resize", updateCoords);
        };
    }, [open]);

    const selectedOptions = value.map((v) => options.find((o) => o.value === v)).filter(Boolean) as MultiSelectOption[];
    const getContainer = () => {
        const radix = triggerRef.current?.closest("[data-radix-portal]");
        return (radix as HTMLElement) || document.body;
    };

    return (
        <div className={cn("flex flex-col gap-1.5", className)}>
            {label && <span className="text-[12px] font-semibold text-foreground/80">{label}</span>}
            <div ref={triggerRef} className="flex flex-wrap items-center gap-1.5">
                {selectedOptions.map((opt) => (
                    <span key={opt.value} className="flex items-center gap-1.5 rounded-full border border-border bg-card py-1 pl-1 pr-2 shadow-xs">
                        <Avatar src={opt.image} name={opt.label} size={20} />
                        <span className="text-xs font-semibold text-foreground">{opt.label}</span>
                        <button
                            type="button"
                            onClick={() => remove(opt.value)}
                            className="flex size-4 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive"
                        >
                            <IconClose size={10} />
                        </button>
                    </span>
                ))}
                <button
                    type="button"
                    onClick={() => {
                        updateCoords();
                        setOpen((p) => !p);
                    }}
                    className="flex cursor-pointer items-center gap-1 rounded-full border border-dashed border-border px-2.5 py-1 text-muted-foreground transition-colors hover:border-ring/60 hover:text-foreground"
                >
                    <IconPlus size={11} />
                    <span className="text-[11px] font-semibold">{addLabel}</span>
                </button>
            </div>
            {value.length === 0 && placeholder && <span className="text-xs font-medium text-muted-foreground/80">{placeholder}</span>}
            {open &&
                createPortal(
                    <div
                        ref={listRef}
                        data-ds-portal="multiselect"
                        style={{ top: coords.top, left: coords.left, width: Math.max(coords.width, 230), maxHeight: coords.maxHeight }}
                        className="fixed z-[100] flex flex-col overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30"
                    >
                        {hasSearch && (
                            <label className="mb-1 flex shrink-0 items-center gap-2 rounded-lg bg-surface-1 px-2.5 py-1.5 text-muted-foreground ring-1 ring-border focus-within:ring-ring/60">
                                <IconSearch size={13} />
                                <input
                                    ref={searchRef}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={searchPlaceholder}
                                    className="min-w-0 flex-1 bg-transparent text-[13px] font-medium text-foreground outline-none placeholder:text-muted-foreground/70"
                                />
                            </label>
                        )}
                        <div className="min-h-0 flex-1 overflow-y-auto">
                        {filtered.map((opt) => {
                            const selected = value.includes(opt.value);
                            return (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => toggle(opt.value)}
                                    className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-foreground/[0.05]"
                                >
                                    <div
                                        className={cn(
                                            "flex size-4 shrink-0 items-center justify-center rounded-[5px] border transition-all",
                                            selected ? "border-brand bg-brand text-white" : "border-border bg-card"
                                        )}
                                    >
                                        {selected && <IconCheck size={10} />}
                                    </div>
                                    <Avatar src={opt.image} name={opt.label} size={24} />
                                    <div className="min-w-0 flex-1">
                                        <span className="block truncate text-[13px] font-semibold text-foreground">{opt.label}</span>
                                        {opt.description && <span className="block truncate text-xs font-medium text-muted-foreground">{opt.description}</span>}
                                    </div>
                                </button>
                            );
                        })}
                        {filtered.length === 0 && (
                            <div className="px-4 py-3 text-center text-[13px] text-muted-foreground">{options.length === 0 ? "Nenhuma opção" : "Nada com esse nome"}</div>
                        )}
                        </div>
                    </div>,
                    getContainer()
                )}
        </div>
    );
}
