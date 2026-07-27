import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/utils";
import { fieldClass } from "./Input";
import { IconChevronDown, IconClose, IconSpinner } from "../icons";

export type ComboBoxOption = {
    value: string;
    label: string;
    /** Linha secundária no dropdown (ex.: CNPJ do fornecedor, CPF do cliente). */
    description?: string;
    /** Elemento à esquerda da opção (ex.: avatar, foto do produto). */
    icon?: ReactNode;
};

export type ComboBoxProps = {
    options: ComboBoxOption[];
    value: ComboBoxOption | null;
    onChange: (option: ComboBoxOption | null) => void;
    label?: string;
    /** Elemento extra ao lado do label (ex.: tooltip de ajuda, botão "criar"). */
    labelExtra?: ReactNode;
    error?: string;
    placeholder?: string;
    /** Busca controlada (server-side): valor digitado no input. */
    inputValue?: string;
    onInputChange?: (value: string) => void;
    /** Quantos caracteres antes de abrir o dropdown (0 abre no focus). */
    minCharsToOpen?: number;
    /** Com busca server-side, desliga o filtro local. */
    disableLocalFilter?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    emptyText?: string;
    loadingText?: string;
    /** Esconde o texto de vazio (ex.: durante o gap do debounce). */
    showEmpty?: boolean;
    autoFocus?: boolean;
    className?: string;
};

/**
 * Campo de busca com seleção (substituto ds2 do SelectWithSearch).
 * O input continua digitável: serve pra listas grandes e busca assíncrona.
 */
export function ComboBox({
    options,
    value,
    onChange,
    label,
    labelExtra,
    error,
    placeholder = "Buscar...",
    inputValue: controlledInput,
    onInputChange,
    minCharsToOpen = 0,
    disableLocalFilter = false,
    isLoading = false,
    disabled = false,
    emptyText = "Nenhum resultado encontrado",
    loadingText = "Buscando...",
    showEmpty = true,
    autoFocus,
    className,
}: ComboBoxProps) {
    const [uncontrolledInput, setUncontrolledInput] = useState(value?.label ?? "");
    const [open, setOpen] = useState(false);
    const [highlighted, setHighlighted] = useState(0);
    const [dropUp, setDropUp] = useState(false);

    const inputValue = controlledInput ?? uncontrolledInput;
    const setInputValue = (next: string) => {
        onInputChange?.(next);
        if (controlledInput === undefined) setUncontrolledInput(next);
    };

    const wrapperRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const filtered = disableLocalFilter
        ? options
        : options.filter((opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase()));

    // Sincroniza o texto quando a seleção muda por fora (modo não-controlado)
    useEffect(() => {
        if (controlledInput === undefined) setUncontrolledInput(value?.label ?? "");
    }, [value]);

    useEffect(() => setHighlighted(0), [inputValue, options.length]);

    // Clique fora com o dropdown aberto: reconcilia texto digitado × seleção.
    // Guard no `open` pra não reemitir onChange em cliques aleatórios da página.
    useEffect(() => {
        if (!open) return;
        const handleOutside = (event: MouseEvent) => {
            if (wrapperRef.current?.contains(event.target as Node)) return;
            setOpen(false);
            const match = options.find((opt) => opt.label.toLowerCase() === inputValue.toLowerCase());
            if (match) onChange(match);
            else {
                setInputValue("");
                onChange(null);
            }
        };
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, [open, inputValue, options, onChange]);

    // Abre pra cima quando não há espaço embaixo
    useEffect(() => {
        if (!open || !wrapperRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        const below = window.innerHeight - rect.bottom;
        const height = listRef.current?.offsetHeight ?? 280;
        setDropUp(below < height && rect.top > below);
    }, [open, filtered.length, isLoading]);

    const pick = (option: ComboBoxOption) => {
        setInputValue(option.label);
        setOpen(false);
        onChange(option);
    };

    const clear = () => {
        setInputValue("");
        onChange(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!open) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlighted((prev) => (prev + 1) % Math.max(filtered.length, 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlighted((prev) => (prev === 0 ? Math.max(filtered.length - 1, 0) : prev - 1));
        } else if (e.key === "Enter") {
            e.preventDefault();
            const opt = filtered[highlighted];
            if (opt) pick(opt);
        } else if (e.key === "Escape") {
            setOpen(false);
        }
    };

    const field = (
        <div ref={wrapperRef} className="relative w-full min-w-0">
            <input
                type="text"
                disabled={disabled}
                placeholder={placeholder}
                value={inputValue}
                autoFocus={autoFocus}
                className={cn(
                    fieldClass,
                    "pr-14",
                    error && "border-destructive focus:border-destructive focus:ring-destructive/20",
                    className
                )}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    setOpen(e.target.value.length >= minCharsToOpen);
                }}
                onFocus={() => setOpen(inputValue.length >= minCharsToOpen)}
                onBlur={() => setTimeout(() => setOpen(false), 120)}
                onKeyDown={handleKeyDown}
            />
            <div className="absolute inset-y-0 right-2 flex items-center gap-1">
                {isLoading && <IconSpinner size={14} className="animate-spin text-muted-foreground" />}
                {!isLoading && inputValue && !disabled && (
                    <button
                        type="button"
                        tabIndex={-1}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            clear();
                        }}
                        className="flex size-5 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
                    >
                        <IconClose size={12} />
                    </button>
                )}
                <IconChevronDown size={12} className={cn("text-muted-foreground transition-transform duration-150", open && "rotate-180")} />
            </div>

            {open && (
                <div
                    ref={listRef}
                    className={cn(
                        "absolute z-50 flex w-full flex-col overflow-auto rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
                        "max-h-72",
                        dropUp ? "bottom-full mb-1.5" : "top-full mt-1.5"
                    )}
                >
                    {isLoading && (
                        <span className="select-none py-4 text-center text-[12.5px] font-medium text-muted-foreground">{loadingText}</span>
                    )}
                    {!isLoading &&
                        filtered.map((option, index) => (
                            <div
                                key={option.value}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    pick(option);
                                }}
                                onMouseEnter={() => setHighlighted(index)}
                                className={cn(
                                    "flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors",
                                    index === highlighted && "bg-foreground/[0.05]"
                                )}
                            >
                                {option.icon}
                                <div className="min-w-0">
                                    <span
                                        className={cn(
                                            "block truncate text-[13px] font-medium leading-tight",
                                            option.value === value?.value && "font-semibold text-brand"
                                        )}
                                    >
                                        {option.label}
                                    </span>
                                    {option.description && (
                                        <span className="mt-0.5 block truncate text-[11.5px] leading-tight text-muted-foreground">
                                            {option.description}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    {!isLoading && filtered.length === 0 && showEmpty && (
                        <span className="select-none py-4 text-center text-[12.5px] font-medium text-muted-foreground">{emptyText}</span>
                    )}
                </div>
            )}
        </div>
    );

    if (!label && !error) return field;

    return (
        <div className="flex w-full min-w-0 flex-col gap-1.5">
            {label && (
                <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-foreground/80">{label}</span>
                    {labelExtra}
                </div>
            )}
            {field}
            {error && <span className="text-[12px] font-medium text-destructive">{error}</span>}
        </div>
    );
}
