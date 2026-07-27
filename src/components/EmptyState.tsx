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

/** Vazio com superfície própria (não some no canvas): tile de ícone, título, descrição e ação. */
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
                "flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card/70 px-6 py-14 text-center",
                className
            )}
        >
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                {icon ?? <IconSearch size={22} />}
            </span>
            <div className="flex max-w-sm flex-col gap-1">
                <span className="text-[14px] font-bold">{title}</span>
                {description && <span className="text-[12.5px] leading-snug text-muted-foreground">{description}</span>}
            </div>
            {action}
        </div>
    );
}
