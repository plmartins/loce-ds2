import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconSearch } from "../icons";

export type EmptyStateProps = {
    icon?: ReactNode;
    title?: string;
    description?: string;
    /** Ação de saída (ex.: botão "Criar produto"). */
    action?: ReactNode;
    /** horizontal (padrão): tile à esquerda, texto ao lado. centered: tudo centralizado. */
    variant?: "horizontal" | "centered";
    className?: string;
};

function RingedTile({ icon }: { icon: ReactNode }) {
    return (
        <span className="relative flex size-24 shrink-0 items-center justify-center">
            <span aria-hidden className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/80" />
            <span aria-hidden className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/45" />
            <span aria-hidden className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20" />
            <span aria-hidden className="absolute right-1 top-2 size-1.5 rounded-full bg-brand/40" />
            <span aria-hidden className="absolute bottom-3 left-0 size-1 rounded-full bg-brand/30" />
            <span className="relative z-10 flex size-12 items-center justify-center rounded-xl text-white shadow-lg shadow-brand/25 ds-btn-3d [--btn-bg:var(--accent-brand)]">
                {icon ?? <IconSearch size={21} />}
            </span>
        </span>
    );
}

/** Vazio com presença: tile da marca com anéis, texto orientando a saída e ação. */
export function EmptyState({
    icon,
    title = "Nenhum resultado encontrado",
    description = "Ajuste a busca ou os filtros e tente de novo.",
    action,
    variant = "horizontal",
    className,
}: EmptyStateProps) {
    if (variant === "centered") {
        return (
            <div className={cn("relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center", className)}>
                <RingedTile icon={icon} />
                <div className="z-10 mt-3 flex max-w-sm flex-col gap-1">
                    <span className="text-[15px] font-bold">{title}</span>
                    {description && <span className="text-[12.5px] leading-snug text-muted-foreground">{description}</span>}
                </div>
                {action && <div className="z-10 mt-4">{action}</div>}
            </div>
        );
    }

    return (
        <div className={cn("relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card px-6 py-8", className)}>
            <RingedTile icon={icon} />
            <div className="z-10 flex min-w-0 flex-col gap-1">
                <span className="text-[15px] font-bold">{title}</span>
                {description && <span className="max-w-md text-[12.5px] leading-snug text-muted-foreground">{description}</span>}
                {action && <div className="mt-3">{action}</div>}
            </div>
        </div>
    );
}
