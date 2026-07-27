import type { ComponentProps, ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconClose, IconSpinner } from "../icons";

/* Base compartilhada por Input, Select e SearchInput: superfície de card com
   borda visível e sombra sutil, pra parecer clicável de longe. */
export const fieldClass = cn(
    "h-9 w-full rounded-xl border border-border bg-card px-3 text-[13px] font-semibold text-foreground",
    "shadow-xs transition-all duration-150",
    "placeholder:font-medium placeholder:text-muted-foreground/70",
    "hover:border-ring/50",
    "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25",
    "disabled:pointer-events-none disabled:opacity-50"
);

export type InputProps = ComponentProps<"input"> & {
    label?: string;
    error?: string;
    /** Ação inline ao lado do label (ex.: "Gerar automático"). */
    labelAction?: { label: string; onClick: () => void };
    /** Rótulo curto dentro do campo, à direita (ex.: "R$", "un"). */
    suffix?: ReactNode;
    /** Mostra um botão de limpar dentro do campo. */
    onClear?: () => void;
    loading?: boolean;
};

export function Input({ className, label, error, labelAction, suffix, onClear, loading, id, ...props }: InputProps) {
    const hasAdornment = suffix || onClear || loading;

    const input = (
        <input
            id={id}
            className={cn(
                fieldClass,
                hasAdornment && "pr-12",
                error && "border-destructive focus:border-destructive focus:ring-destructive/20",
                className
            )}
            {...props}
        />
    );

    const field = hasAdornment ? (
        <div className="relative flex w-full min-w-0 items-center">
            {input}
            <div className="absolute right-2 flex items-center gap-1">
                {loading && <IconSpinner size={14} className="animate-spin text-muted-foreground" />}
                {!loading && onClear && (
                    <button
                        type="button"
                        tabIndex={-1}
                        onClick={onClear}
                        className="flex size-5 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
                    >
                        <IconClose size={12} />
                    </button>
                )}
                {suffix && (
                    <span className="rounded-md bg-surface-2 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">{suffix}</span>
                )}
            </div>
        </div>
    ) : (
        input
    );

    if (!label && !error) return field;

    return (
        <div className="flex w-full min-w-0 flex-col gap-1.5">
            {label && (
                <div className="flex items-center justify-between">
                    <label htmlFor={id} className="text-[12px] font-semibold text-foreground/80">
                        {label}
                    </label>
                    {labelAction && (
                        <button
                            type="button"
                            onClick={labelAction.onClick}
                            className="cursor-pointer text-[12px] font-semibold text-brand transition-opacity hover:opacity-80"
                        >
                            {labelAction.label}
                        </button>
                    )}
                </div>
            )}
            {field}
            {error && <span className="text-[12px] font-medium text-destructive">{error}</span>}
        </div>
    );
}
