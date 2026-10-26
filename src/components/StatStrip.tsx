import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { ACCENT_GLOW, ACCENT_TILE, type WidgetAccent } from "../lib/accents";
import { IconChevronRight } from "../icons";
import { Skeleton } from "./Skeleton";
import type { MetricDeltaTone } from "./MetricCard";

export type StatStripItem = {
    key: string;
    label: string;
    value: string;
    helper?: string;
    icon?: ReactNode;
    accent?: WidgetAccent;
    delta?: { label: string; tone: MetricDeltaTone };
    onClick?: () => void;
    /** Métrica principal da faixa: valor maior e glow mais presente. */
    emphasis?: boolean;
    /** Realce do valor (ex.: text-destructive num contador de ruptura). */
    valueClassName?: string;
};

export type StatStripProps = {
    items: StatStripItem[];
    /** Colunas no desktop (xl); abaixo disso a grade degrada sozinha. */
    columns?: 3 | 4 | 5 | 6;
    /** Troca os valores por skeleton mantendo o layout da faixa. */
    loading?: boolean;
    className?: string;
};

const COLS: Record<NonNullable<StatStripProps["columns"]>, string> = {
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
};

const DELTA_TONE: Record<MetricDeltaTone, string> = {
    positive: "bg-success/12 text-success",
    negative: "bg-destructive/10 text-destructive",
    neutral: "bg-surface-2 text-muted-foreground",
};

const CELL_CLASS = "group/cell relative flex min-w-0 flex-col justify-between gap-1.5 overflow-hidden border-l border-t border-border/60 bg-card p-3.5 text-left";

/**
 * Faixa de indicadores num card só: identidade do MetricCard (tile de ícone
 * com acento + glow no canto) com metade da altura de uma grade de cards.
 * Células clicáveis viram CTA com seta. É o padrão de KPIs dos dashboards
 * da suíte.
 */
export function StatStrip({ items, columns = 6, loading, className }: StatStripProps) {
    return (
        <section className={cn("overflow-hidden rounded-2xl bg-card ring-1 ring-border", className)}>
            {/* Hairlines como borda das células (não gap+fundo): célula que falta
                pra fechar a linha vira só fundo de card, sem "buraco" escuro. */}
            <div className={cn("-ml-px -mt-px grid grid-cols-2 sm:grid-cols-3", COLS[columns])}>
                {items.map((item) => {
                    const accent = item.accent ?? "brand";
                    const content = (
                        <>
                            <span
                                aria-hidden
                                className={cn(
                                    "pointer-events-none absolute -right-6 -top-10 size-24 rounded-full bg-gradient-to-b to-transparent blur-2xl",
                                    ACCENT_GLOW[accent],
                                    !item.emphasis && "opacity-70"
                                )}
                            />
                            {/* Rótulo quebra em até duas linhas: na grade de 2 colunas do celular o truncate cortava no meio ("TOTAL DE MENSA..."). */}
                            <span className="relative flex items-start justify-between gap-2">
                                <span className="line-clamp-2 min-w-0 text-[10.5px] font-bold uppercase leading-snug tracking-[0.07em] text-muted-foreground">{item.label}</span>
                                {item.icon && (
                                    <span className={cn("flex size-7 shrink-0 items-center justify-center rounded-lg", ACCENT_TILE[accent])}>{item.icon}</span>
                                )}
                            </span>
                            {loading ? (
                                <Skeleton className="h-6 w-20" />
                            ) : (
                                <span className="relative flex min-w-0 flex-wrap items-center gap-1.5">
                                    <span
                                        className={cn(
                                            "truncate font-extrabold leading-none tabular-nums tracking-tight",
                                            item.emphasis ? "text-[23px]" : "text-[19px]",
                                            item.valueClassName
                                        )}
                                    >
                                        {item.value}
                                    </span>
                                    {item.delta && (
                                        <span className={cn("shrink-0 rounded-full px-1.5 py-0.5 text-[10.5px] font-bold tabular-nums", DELTA_TONE[item.delta.tone])}>
                                            {item.delta.label}
                                        </span>
                                    )}
                                </span>
                            )}
                            {item.helper && (
                                <span className="relative flex items-center gap-0.5 truncate text-[11px] leading-tight text-muted-foreground" title={item.helper}>
                                    <span className="truncate">{item.helper}</span>
                                    {item.onClick && (
                                        <IconChevronRight size={11} className="shrink-0 opacity-70 transition-transform group-hover/cell:translate-x-0.5" />
                                    )}
                                </span>
                            )}
                        </>
                    );
                    return item.onClick ? (
                        <button
                            key={item.key}
                            type="button"
                            onClick={item.onClick}
                            className={cn(CELL_CLASS, "cursor-pointer transition-colors duration-75 hover:bg-surface-1 active:scale-[0.99]")}
                        >
                            {content}
                        </button>
                    ) : (
                        <div key={item.key} className={CELL_CLASS}>
                            {content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
