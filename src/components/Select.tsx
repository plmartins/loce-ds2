import type { SelectHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { fieldClass } from "./Input";
import { IconChevronDown } from "../icons";

export type SelectOption = { value: string | number; label: string };

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    options: SelectOption[];
    placeholder?: string;
};

/** Select nativo estilizado: robusto, acessível e com affordance de clique. */
export function Select({ className, options, placeholder, ...props }: SelectProps) {
    return (
        <div className={cn("relative flex items-center", className)}>
            <select className={cn(fieldClass, "cursor-pointer appearance-none pr-8")} {...props}>
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <IconChevronDown size={12} className="pointer-events-none absolute right-3 text-muted-foreground" />
        </div>
    );
}
