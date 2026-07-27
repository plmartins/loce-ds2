import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import { IconCheck } from "../icons";

export type CheckboxProps = Omit<ComponentProps<"input">, "type"> & {
    label?: string;
    description?: string;
};

export function Checkbox({ className, label, description, checked, onChange, disabled, ...props }: CheckboxProps) {
    return (
        <label
            className={cn(
                "inline-flex cursor-pointer select-none gap-3",
                description ? "items-start" : "items-center",
                disabled && "cursor-not-allowed opacity-50",
                className
            )}
        >
            <div className={cn("relative shrink-0", description && "mt-0.5")}>
                <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} className="peer sr-only" {...props} />
                <div
                    className={cn(
                        "flex size-5 items-center justify-center rounded-md border transition-all duration-100",
                        "peer-focus-visible:ring-[3px] peer-focus-visible:ring-brand/30",
                        checked
                            ? "border-brand bg-brand text-white shadow-xs"
                            : "border-border bg-card shadow-xs hover:border-ring/60"
                    )}
                >
                    {checked && <IconCheck size={13} />}
                </div>
            </div>
            {(label || description) && (
                <div className="flex flex-col gap-0.5">
                    {label && <span className="text-[13px] font-semibold leading-tight text-foreground">{label}</span>}
                    {description && <span className="text-xs font-medium leading-tight text-muted-foreground">{description}</span>}
                </div>
            )}
        </label>
    );
}
