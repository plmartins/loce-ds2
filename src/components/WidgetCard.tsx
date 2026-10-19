import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { ACCENT_TILE, type WidgetAccent } from "../lib/accents";

export type WidgetCardProps = {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    accent?: WidgetAccent;
    /** Canto direito do cabeçalho (ex.: total do período ou um controle). */
    right?: ReactNode;
    /** Linha fina abaixo do right (ex.: "No período"). */
    rightHint?: string;
    className?: string;
    /** Classe do corpo (ex.: flex-1 pra esticar um gráfico). */
    bodyClassName?: string;
    children: ReactNode;
};

/**
 * Casca dos widgets de dashboard: tile de ícone + título compacto + conteúdo.
 * Um `right` em string vira o número do período; qualquer outro nó entra
 * como controle (SegmentedControl, botão).
 */
export function WidgetCard({ title, subtitle, icon, accent = "brand", right, rightHint, className, bodyClassName, children }: WidgetCardProps) {
    return (
        <section className={cn("flex flex-col rounded-2xl bg-card p-4 ring-1 ring-border", className)}>
            <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                    {icon && (
                        <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", ACCENT_TILE[accent])}>{icon}</span>
                    )}
                    <div className="flex min-w-0 flex-col">
                        <h3 className="truncate text-[13.5px] font-bold leading-tight text-foreground">{title}</h3>
                        {subtitle && <p className="truncate text-[11.5px] leading-tight text-muted-foreground">{subtitle}</p>}
                    </div>
                </div>
                {(right || rightHint) && (
                    <div className="flex shrink-0 flex-col items-end">
                        {right &&
                            (typeof right === "string" ? (
                                <span className="text-[14px] font-extrabold leading-tight tabular-nums text-foreground">{right}</span>
                            ) : (
                                right
                            ))}
                        {rightHint && <span className="text-[10.5px] text-muted-foreground">{rightHint}</span>}
                    </div>
                )}
            </div>
            <div className={cn("min-w-0", bodyClassName)}>{children}</div>
        </section>
    );
}
