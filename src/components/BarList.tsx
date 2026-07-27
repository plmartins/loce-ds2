import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../lib/utils";

export type BarListItem = {
    key?: string;
    label: ReactNode;
    /** Valor já formatado (ex.: "R$ 581,28"). */
    value: string;
    /** Proporção da barra em relação ao maior item (0 a 1). */
    ratio: number;
    /** Participação no total (0 a 1): vira o "42%" ao lado do valor. */
    share?: number;
    /** Linha auxiliar (ex.: "5 vendas · ticket R$ 116,26"). */
    sub?: ReactNode;
    /** Estatísticas em chips (ex.: ["5 vendas", "ticket R$ 116,26"]); tem precedência sobre sub. */
    stats?: string[];
    /** Item apagado (ex.: "Sem vendedor"). */
    muted?: boolean;
};

export type BarListProps = {
    items: BarListItem[];
    /** Numera as posições (1, 2, 3...) com o líder destacado. */
    showRank?: boolean;
    emptyText?: string;
    className?: string;
};

/** Ranking com barras na cor da marca; a largura anima na montagem. */
export function BarList({ items, showRank = false, emptyText = "Nada no período.", className }: BarListProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    if (!items.length) {
        return <p className={cn("py-2 text-[13px] text-muted-foreground", className)}>{emptyText}</p>;
    }

    return (
        <div className={cn("flex flex-col gap-4", className)}>
            {items.map((item, idx) => {
                const isZero = item.ratio <= 0;
                const isLeader = showRank && idx === 0 && !isZero;
                return (
                    <div
                        key={item.key ?? idx}
                        className={cn(
                            "group flex items-start gap-2.5 rounded-xl px-2 py-1.5 -mx-2 transition-colors duration-100 hover:bg-foreground/[0.025]",
                            isZero && "opacity-55"
                        )}
                    >
                        {showRank && (
                            <span
                                className={cn(
                                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold tabular-nums",
                                    isLeader ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
                                )}
                            >
                                {idx + 1}
                            </span>
                        )}
                        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                            <div className="flex items-baseline justify-between gap-3">
                                <span
                                    className={cn(
                                        "truncate text-[13px] font-semibold",
                                        item.muted && "font-medium text-muted-foreground"
                                    )}
                                >
                                    {item.label}
                                </span>
                                <span className="flex shrink-0 items-center gap-1.5">
                                    <span className="text-[13.5px] font-bold tabular-nums">{item.value}</span>
                                    {item.share !== undefined && (
                                        <span className="rounded-md bg-surface-2 px-1.5 py-0.5 text-[10.5px] font-bold text-muted-foreground tabular-nums">
                                            {Math.round(item.share * 100)}%
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                                {/* Zero é zero: sem barra fake de 2% pra quem não vendeu */}
                                <div
                                    className={cn(
                                        "h-full rounded-full transition-[width] duration-700 ease-out group-hover:brightness-110",
                                        isLeader || !showRank ? "bg-gradient-to-r from-brand to-brand-sec" : "bg-brand/70"
                                    )}
                                    style={{ width: mounted && !isZero ? `${Math.max(item.ratio * 100, 1.5)}%` : "0%" }}
                                />
                            </div>
                            {item.stats?.length ? (
                                <span className="flex flex-wrap items-center gap-1">
                                    {item.stats.map((stat) => (
                                        <span key={stat} className="rounded-md bg-surface-1 px-1.5 py-0.5 text-[10.5px] font-medium text-muted-foreground tabular-nums ring-1 ring-border/60">
                                            {stat}
                                        </span>
                                    ))}
                                </span>
                            ) : item.sub ? (
                                <span className="text-[11px] text-muted-foreground tabular-nums">{item.sub}</span>
                            ) : null}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
