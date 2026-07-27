import type { SelectHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { fieldClass } from "./Input";
import { IconCheck, IconChevronDown } from "../icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../primitives/dropdown-menu";

export type SelectOption = { value: string | number; label: string };

export type SelectProps = {
    options: SelectOption[];
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};

/** Select com dropdown estilizado do DS (não usa o popup nativo do SO). */
export function Select({ options, value, onChange, placeholder = "Selecionar", disabled, className }: SelectProps) {
    const selected = options.find((opt) => String(opt.value) === String(value ?? ""));

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild disabled={disabled}>
                <button
                    type="button"
                    className={cn(
                        fieldClass,
                        "flex cursor-pointer items-center justify-between gap-2 text-left",
                        "data-[state=open]:border-brand data-[state=open]:ring-2 data-[state=open]:ring-brand/25",
                        !selected && "text-muted-foreground/80",
                        className
                    )}
                >
                    <span className="truncate">{selected?.label ?? placeholder}</span>
                    <IconChevronDown size={12} className="shrink-0 text-muted-foreground" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                style={{ minWidth: "var(--radix-dropdown-menu-trigger-width)" }}
            >
                {options.map((opt) => {
                    const isSelected = String(opt.value) === String(value ?? "");
                    return (
                        <DropdownMenuItem
                            key={opt.value}
                            onClick={() => onChange?.(String(opt.value))}
                            className={cn("justify-between", isSelected && "font-semibold text-brand")}
                        >
                            <span className="truncate">{opt.label}</span>
                            {isSelected && <IconCheck size={13} className="shrink-0 text-brand" />}
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    options: SelectOption[];
    placeholder?: string;
};

/** Select nativo estilizado (popup do SO): útil em mobile e formulários longos. */
export function NativeSelect({ className, options, placeholder, ...props }: NativeSelectProps) {
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
