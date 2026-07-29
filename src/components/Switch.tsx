import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export type SwitchProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
    /** Título ao lado do toggle (o toggle fica à esquerda do texto, padrão da suíte). */
    label?: ReactNode;
    description?: ReactNode;
    className?: string;
    "aria-label"?: string;
};

export function Switch({ checked, onCheckedChange, disabled, label, description, className, ...props }: SwitchProps) {
    const control = (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => onCheckedChange(!checked)}
            className={cn(
                "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
                "disabled:cursor-not-allowed disabled:opacity-50",
                checked ? "bg-brand" : "bg-surface-3",
                !label && !description && className
            )}
            {...props}
        >
            <span
                className={cn(
                    "pointer-events-none block size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out",
                    checked ? "translate-x-[18px]" : "translate-x-[2px]"
                )}
            />
        </button>
    );

    if (!label && !description) return control;

    return (
        <div className={cn("flex items-start gap-3", className)}>
            <span className="mt-0.5 flex shrink-0">{control}</span>
            <span className="flex min-w-0 flex-col gap-0.5">
                {label && <span className="text-sm font-semibold text-foreground">{label}</span>}
                {description && <span className="text-xs leading-snug text-muted-foreground">{description}</span>}
            </span>
        </div>
    );
}
