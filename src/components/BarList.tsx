import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../lib/utils";

export type BarListItem = {
    key?: string;
    label: ReactNode;
    /** Valor já formatado (ex.: "R$ 581,28"). */
    value: string;
    /** Proporção da barra em relação ao maior item (0 a 1). */
    ratio: number;
    /** Linha auxiliar (ex.: "5 vendas · ticket R$ 116,26"). */
    sub?: ReactNode;
    /** Item apagado (ex.: "Sem vendedor"). */
    muted?: boolean;
};

export type BarListProps = {
    items: BarListItem[];
    emptyText?: string;
    className?: string;
};

/** Ranking com barras na cor da marca; a largura anima na montagem. */
export function BarList({ items, emptyText = "Nada no período.", className }: BarListProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    if (!items.length) {
        return <p className={cn("py-2 text-[13px] text-muted-foreground", className)}>{emptyText}</p>;
    }

    return (
        <div className={cn("flex flex-col gap-3.5", className)}>
            {items.map((item, idx) => (
                <div key={item.key ?? idx} className="group flex flex-col gap-1.5">
                    <div className="flex items-baseline justify-between gap-3">
                        <span
                            className={cn(
                                "truncate text-[13px] font-semibold",
                                item.muted && "font-medium text-muted-foreground"
                            )}
                        >
                            {item.label}
                        </span>
                        <span className="shrink-0 text-[13px] font-bold tabular-nums">{item.value}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                        <div
                            className="h-full rounded-full bg-brand transition-[width] duration-700 ease-out group-hover:brightness-110"
                            style={{ width: mounted ? `${Math.max(item.ratio * 100, 2)}%` : "0%" }}
                        />
                    </div>
                    {item.sub && <span className="text-[11px] text-muted-foreground tabular-nums">{item.sub}</span>}
                </div>
            ))}
        </div>
    );
}
