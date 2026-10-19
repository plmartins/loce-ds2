import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconInfo } from "../icons";
import { Tooltip } from "./Tooltip";

export type TableHeadingProps = {
    title: string;
    /** Explicação curta; vai pro tooltip do ícone, não pra tela. */
    hint?: string;
    /** Controle à direita (ordenação, filtro, contador). */
    right?: ReactNode;
    className?: string;
};

/**
 * Linha de título de uma tabela ou lista fora de card: título compacto com
 * o ícone de informação (hint no tooltip) e um controle alinhado à direita.
 * Substitui o par título + frase solta acima das tabelas. O px-5 alinha o
 * título com o texto da primeira coluna da DataTable.
 */
export function TableHeading({ title, hint, right, className }: TableHeadingProps) {
    return (
        <div className={cn("flex min-h-8 items-center justify-between gap-3 px-5", className)}>
            <span className="flex min-w-0 items-center gap-1.5">
                <span className="truncate text-[13.5px] font-bold text-foreground">{title}</span>
                {hint && (
                    <Tooltip content={hint} side="top" wrap>
                        <span className="flex size-5 shrink-0 cursor-help items-center justify-center rounded-full text-muted-foreground hover:bg-surface-2 hover:text-foreground">
                            <IconInfo size={13} />
                        </span>
                    </Tooltip>
                )}
            </span>
            {right && <div className="flex shrink-0 items-center gap-2">{right}</div>}
        </div>
    );
}
