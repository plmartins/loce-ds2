import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconSearch } from "../icons";

export type EmptyStateProps = {
    icon?: ReactNode;
    title?: string;
    description?: string;
    /** Ação de saída (ex.: botão "Criar produto"). */
    action?: ReactNode;
    className?: string;
};

/** Vazio com presença: anéis decorativos, tile da marca com profundidade, texto orientando a saída. */
export function EmptyState({
    icon,
    title = "Nenhum resultado encontrado",
    description = "Ajuste a busca ou os filtros e tente de novo.",
    action,
    className,
}: EmptyStateProps) {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center",
                className
            )}
        >
            {/* Anéis decorativos atrás do tile */}
            <span aria-hidden className="pointer-events-none absolute left-1/2 top-[88px] -translate-x-1/2 -translate-y-1/2">
                <span className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/80" />
                <span className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/50" />
                <span className="absolute left-1/2 top-1/2 size-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/25" />
                <span className="absolute left-[74px] top-[-10px] size-1.5 rounded-full bg-brand/40" />
                <span className="absolute left-[-86px] top-[26px] size-1 rounded-full bg-brand/30" />
            </span>

            <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-brand/25 ds-btn-3d [--btn-bg:var(--accent-brand)]">
                {icon ?? <IconSearch size={24} />}
            </span>

            <div className="relative z-10 mt-5 flex max-w-sm flex-col gap-1">
                <span className="text-[15px] font-bold">{title}</span>
                {description && <span className="text-[12.5px] leading-snug text-muted-foreground">{description}</span>}
            </div>
            {action && <div className="relative z-10 mt-4">{action}</div>}
        </div>
    );
}
