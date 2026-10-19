import type { FilterStateProps } from "../lib/filter";
import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { fieldClass } from "./Input";
import { IconClose, IconSearch } from "../icons";

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & FilterStateProps & {
    /** Limpa a busca. Com ele, o X aparece sempre que há texto no campo. */
    onClear?: () => void;
    /** Força (true) ou esconde (false) o X; por padrão segue o valor. */
    showClear?: boolean;
};

/**
 * Busca das listagens da suíte: lupa à esquerda, estado de filtro aplicado e
 * um X único pra limpar. Sem spinner: carregamento de lista é o esqueleto da
 * tabela (TableLoading), nunca um indicador dentro do campo.
 */
export function SearchInput({ className, onClear, showClear, filterActive, ...props }: SearchInputProps) {
    const hasValue = props.value != null && String(props.value).length > 0;
    const clearVisible = (showClear ?? hasValue) && !!onClear;
    return (
        <div className={cn("relative flex w-full items-center", className)}>
            <IconSearch size={14} className={cn("pointer-events-none absolute left-3", filterActive ? "text-brand" : "text-muted-foreground")} />
            <input
                data-filter-active={filterActive || undefined}
                title={filterActive ? "Busca aplicada. Use o X para limpar" : props.title}
                aria-label={props["aria-label"] ?? (filterActive ? `${props.placeholder ?? "Busca"} — filtro ativo` : props.placeholder)}
                type="search"
                className={cn(fieldClass, "pl-8.5 pr-2 [&::-webkit-search-cancel-button]:hidden", clearVisible && "pr-10")}
                {...props}
            />
            {clearVisible && (
                <button
                    type="button"
                    onClick={onClear}
                    aria-label="Limpar busca"
                    title="Limpar busca"
                    className="absolute right-2 flex size-7 cursor-pointer items-center justify-center rounded-full text-foreground/70 transition-colors duration-100 hover:bg-surface-2 hover:text-foreground active:scale-[0.97]"
                >
                    <IconClose size={15} />
                </button>
            )}
        </div>
    );
}
