import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "../lib/utils";

export type RankListSplit = {
    /** Parcela principal (absoluta), desenhada na cor da marca. */
    primary: number;
    /** Parcela secundária (absoluta), desenhada em teal. Já está dentro do total da linha. */
    secondary: number;
    /** Texto do chip da parcela principal, já formatado (ex.: "Produtos R$ 900"). */
    primaryLabel: string;
    /** Texto do chip da parcela secundária, já formatado (ex.: "Frete R$ 100"). */
    secondaryLabel: string;
};

export type RankListItem = {
    key: string;
    label: ReactNode;
    /** Valor principal, já formatado. */
    value: string;
    /** Secundário à direita (ex.: "37 vendas · Ticket R$ 80"). Some no celular. */
    sub?: string;
    /** Largura do preenchimento (0 a 1, relativo ao maior item). */
    ratio: number;
    /** Participação no total (0 a 1), vira o "42%". */
    share?: number;
    /**
     * Divide a barra em duas parcelas (ex.: produtos x frete). Só na variante
     * "bar"; a conta aparece em chips numa linha própria.
     */
    split?: RankListSplit;
    muted?: boolean;
    /** Linha clicável (ex.: abre a listagem já filtrada). */
    onClick?: () => void;
};

export type RankListProps = {
    items: RankListItem[];
    showRank?: boolean;
    emptyText?: string;
    /**
     * "bar" (default): barra fina sob o texto.
     * "background": preenchimento atrás da própria linha (preferido nos
     * rankings densos, como os de produtos); ignora `split`.
     */
    variant?: "bar" | "background";
    className?: string;
};

/** Props de acessibilidade e cursor da linha clicável; nada quando não há onClick. */
const clickableProps = (onClick?: () => void) =>
    onClick
        ? {
              role: "button" as const,
              tabIndex: 0,
              onClick,
              onKeyDown: (event: KeyboardEvent) => {
                  if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onClick();
                  }
              },
          }
        : {};

const CLICKABLE_CLASS = "cursor-pointer transition-colors hover:bg-foreground/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

const clamp = (ratio: number) => Math.max(Math.min(ratio, 1), 0) * 100;

export const formatShare = (share: number) => {
    const pct = share * 100;
    if (pct > 0 && pct < 1) return "<1%";
    return `${Math.round(pct)}%`;
};

const rankClass = (index: number, ratio: number) =>
    cn(
        "flex size-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold tabular-nums",
        index === 0 && ratio > 0 ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
    );

/**
 * Ranking compacto: uma linha de texto por item e uma barra fina e sólida
 * logo abaixo, ou o preenchimento atrás da linha. Metade da altura do
 * BarList, pensado pra dashboards densos.
 */
export function RankList({ items, showRank, emptyText = "Nada por aqui no período.", variant = "bar", className }: RankListProps) {
    if (!items.length) {
        return <p className="py-4 text-center text-[12px] text-muted-foreground">{emptyText}</p>;
    }

    if (variant === "background") {
        return (
            <ul className={cn("flex flex-col gap-0.5", className)}>
                {items.map((item, index) => (
                    <li key={item.key} className={cn("relative overflow-hidden rounded-lg", item.onClick && CLICKABLE_CLASS)} {...clickableProps(item.onClick)}>
                        <span aria-hidden className="absolute inset-y-0 left-0 rounded-lg bg-brand/[0.08] dark:bg-brand/[0.14]" style={{ width: `${clamp(item.ratio)}%` }} />
                        <div className="relative flex items-center gap-2 px-2 py-1.5">
                            {showRank && <span className={rankClass(index, item.ratio)}>{index + 1}</span>}
                            <span className={cn("min-w-0 flex-1 truncate text-[13px] font-semibold", item.muted && "text-muted-foreground")}>{item.label}</span>
                            {item.sub && <span className="hidden shrink-0 text-[11px] tabular-nums text-muted-foreground sm:inline">{item.sub}</span>}
                            <span className="shrink-0 text-[13px] font-bold tabular-nums">{item.value}</span>
                            {item.share !== undefined && (
                                <span className="w-9 shrink-0 text-right text-[10px] font-semibold tabular-nums text-muted-foreground">{formatShare(item.share)}</span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul className={cn("flex flex-col gap-1", className)}>
            {items.map((item, index) => {
                const width = clamp(item.ratio);
                const splitTotal = item.split ? item.split.primary + item.split.secondary : 0;
                const secondaryShare = item.split && splitTotal > 0 ? item.split.secondary / splitTotal : 0;
                const primaryWidth = width * (1 - secondaryShare);
                const secondaryWidth = width * secondaryShare;
                // Linha com split: a conta (chips + total) desce pra uma linha
                // própria; tudo numa linha só estoura o card estreito da grade.
                const hasChips = Boolean(item.split && item.split.secondary > 0);
                return (
                    <li key={item.key} className={cn("flex flex-col gap-[5px] rounded-lg px-2 py-1", item.onClick && CLICKABLE_CLASS)} {...clickableProps(item.onClick)}>
                        <div className="flex items-center gap-2">
                            {showRank && <span className={rankClass(index, item.ratio)}>{index + 1}</span>}
                            <span className={cn("min-w-0 flex-1 truncate text-[13px] font-semibold", item.muted && "text-muted-foreground")}>{item.label}</span>
                            {item.sub && <span className="hidden shrink-0 text-[11px] tabular-nums text-muted-foreground sm:inline">{item.sub}</span>}
                            {!hasChips && <span className="shrink-0 text-[13px] font-bold tabular-nums">{item.value}</span>}
                            {item.share !== undefined && (
                                <span className="w-9 shrink-0 text-right text-[10px] font-semibold tabular-nums text-muted-foreground">{formatShare(item.share)}</span>
                            )}
                        </div>
                        {hasChips && item.split && (
                            <div className={cn("flex flex-wrap items-center justify-end gap-x-1 gap-y-1", showRank && "pl-7")}>
                                <span className="rounded-full bg-brand/10 px-1.5 py-0.5 text-[10.5px] font-bold tabular-nums text-brand">{item.split.primaryLabel}</span>
                                <span className="rounded-full bg-teal-500/10 px-1.5 py-0.5 text-[10.5px] font-bold tabular-nums text-teal-600 dark:text-teal-400">
                                    + {item.split.secondaryLabel}
                                </span>
                                <span className="pl-1 text-[13px] font-bold tabular-nums">= {item.value}</span>
                            </div>
                        )}
                        <div className={cn("h-[5px] rounded-full bg-surface-2", showRank && "ml-7")}>
                            <div className="flex h-full w-full gap-[2px]">
                                {primaryWidth > 0 && (
                                    <span className="h-full rounded-full bg-brand transition-[width] duration-500" style={{ width: `${primaryWidth}%` }} />
                                )}
                                {secondaryWidth > 0 && (
                                    <span className="h-full rounded-full bg-teal-500 dark:bg-teal-400" style={{ width: `${secondaryWidth}%`, minWidth: 4 }} />
                                )}
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
