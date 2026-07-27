import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

/* Base compartilhada por Input, Select e SearchInput: superfície de card com
   borda visível e sombra sutil, pra parecer clicável de longe. */
export const fieldClass = cn(
    "h-9 w-full rounded-xl border border-border bg-card px-3 text-[13px] font-medium text-foreground",
    "shadow-xs transition-all duration-150",
    "placeholder:font-normal placeholder:text-muted-foreground/80",
    "hover:border-ring/50",
    "focus:border-brand focus:outline-none focus:ring-[3px] focus:ring-brand/20",
    "disabled:pointer-events-none disabled:opacity-50"
);

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

export function Input({ className, label, error, id, ...props }: InputProps) {
    const input = (
        <input
            id={id}
            className={cn(fieldClass, error && "border-destructive focus:border-destructive focus:ring-destructive/20", className)}
            {...props}
        />
    );

    if (!label && !error) return input;

    return (
        <div className="flex w-full flex-col gap-1.5">
            {label && (
                <label htmlFor={id} className="text-[12px] font-semibold text-foreground/80">
                    {label}
                </label>
            )}
            {input}
            {error && <span className="text-[12px] font-medium text-destructive">{error}</span>}
        </div>
    );
}
