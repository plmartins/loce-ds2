import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { fieldClass } from "./Input";
import { IconClose, IconSearch } from "../icons";

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
    /** Mostra o chip "Limpar" e dispara ao clicar. */
    onClear?: () => void;
    showClear?: boolean;
};

export function SearchInput({ className, onClear, showClear, ...props }: SearchInputProps) {
    return (
        <div className={cn("relative flex w-full items-center", className)}>
            <IconSearch size={14} className="pointer-events-none absolute left-3 text-muted-foreground" />
            <input type="search" className={cn(fieldClass, "pl-8.5 pr-2 [&::-webkit-search-cancel-button]:hidden")} {...props} />
            {showClear && onClear && (
                <button
                    type="button"
                    onClick={onClear}
                    className="absolute right-2 flex cursor-pointer items-center gap-1 rounded-lg bg-surface-2 px-2 py-1 text-[11px] font-semibold text-foreground/70 transition-colors duration-100 hover:bg-surface-3 hover:text-foreground active:scale-[0.97]"
                >
                    Limpar
                    <IconClose size={10} className="text-destructive" />
                </button>
            )}
        </div>
    );
}
