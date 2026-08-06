import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { DateRange } from "react-day-picker";
import { cn } from "../lib/utils";
import { fieldClass } from "./Input";
import { IconCalendar, IconClose } from "../icons";
import { Calendar } from "../primitives/calendar";

function getPortalContainer(trigger: HTMLElement | null): HTMLElement {
    if (!trigger) return document.body;
    const radixPortal = trigger.closest("[data-radix-portal]");
    if (radixPortal) return radixPortal as HTMLElement;
    return document.body;
}

export type { DateRange };

/** Atalho de período exibido dentro do popover, acima do calendário. */
export type DateRangePreset = {
    key: string;
    label: string;
};

export type DateRangePickerProps = {
    label?: string;
    /** Intervalo completo (from e to). Parciais nunca vazam pelo onChange. */
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    clearable?: boolean;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
    /** Meses lado a lado no popover (2 = estilo reserva de hotel, padrão). */
    numberOfMonths?: 1 | 2;
    /** Abre o calendário já na montagem (ex.: logo após escolher "Personalizado"). */
    defaultOpen?: boolean;
    /**
     * Atalhos de período no popover (Hoje, Últimos 7 dias...). Quem resolve o
     * range do atalho é o consumidor, no onPresetSelect; o popover só fecha.
     * Com presets, o controle vira o filtro de período completo da tela: um
     * botão só, sem reflow na barra de filtros.
     */
    presets?: DateRangePreset[];
    /** Atalho ativo (pinta o chip). Ignorado sem `presets`. */
    activePresetKey?: string;
    /** Texto do gatilho quando um atalho está ativo (ex.: "Hoje"). */
    displayLabel?: string;
    onPresetSelect?: (preset: DateRangePreset) => void;
};

const fmt = (date: Date) =>
    date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

/**
 * Seletor de período num único controle: abre um calendário só, o primeiro
 * clique marca o início e o segundo o fim (clicar duas vezes no mesmo dia =
 * período de um dia). Enquanto o intervalo não fecha, a seleção fica interna;
 * o onChange só dispara com o período completo, e fechar no meio do caminho
 * reverte para o valor anterior.
 */
export function DateRangePicker({
    label,
    value,
    onChange,
    placeholder = "Selecione um período",
    error,
    disabled,
    clearable = true,
    className,
    minDate,
    maxDate,
    numberOfMonths = 2,
    defaultOpen = false,
    presets,
    activePresetKey,
    displayLabel,
    onPresetSelect,
}: DateRangePickerProps) {
    const [open, setOpen] = useState(defaultOpen);
    const [pending, setPending] = useState<DateRange | undefined>(undefined);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLButtonElement>(null);
    const calRef = useRef<HTMLDivElement>(null);

    const formatted = value?.from
        ? value.to && value.to.getTime() !== value.from.getTime()
            ? `${fmt(value.from)} até ${fmt(value.to)}`
            : fmt(value.from)
        : "";
    const triggerText = displayLabel || formatted || placeholder;

    const updateCoords = () => {
        const el = triggerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setCoords({ top: rect.bottom + 4, left: rect.left });
    };

    const openPicker = () => {
        // Recomeça a marcação do zero: com um range completo carregado, o
        // react-day-picker "estica" o intervalo no clique em vez de iniciar
        // um novo, e o usuário quase sempre quer trocar o período inteiro.
        setPending(undefined);
        updateCoords();
        setOpen(true);
    };

    const close = () => {
        setOpen(false);
        setPending(undefined);
    };

    useEffect(() => {
        if (!open) return;
        updateCoords();
        const handleClick = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            if (!triggerRef.current?.contains(t) && !calRef.current?.contains(t)) close();
        };
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        const handleScroll = () => updateCoords();
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleEsc);
        window.addEventListener("scroll", handleScroll, true);
        window.addEventListener("resize", handleScroll);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleEsc);
            window.removeEventListener("scroll", handleScroll, true);
            window.removeEventListener("resize", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <div className={cn("flex w-full flex-col gap-1.5", className)}>
            {label && <span className="text-[12px] font-semibold text-foreground/80">{label}</span>}
            <button
                ref={triggerRef}
                type="button"
                disabled={disabled}
                onClick={() => (open ? close() : openPicker())}
                className={cn(
                    fieldClass,
                    "flex cursor-pointer items-center gap-2 text-left",
                    open && "border-brand ring-2 ring-brand/25",
                    error && "border-destructive focus:border-destructive focus:ring-destructive/20",
                    !value?.from && "text-muted-foreground/80"
                )}
            >
                <IconCalendar size={15} className="shrink-0 text-muted-foreground" />
                <span className={cn("flex-1 truncate", displayLabel && "text-foreground")}>{triggerText}</span>
                {value?.from && clearable && (
                    <span
                        role="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange?.(undefined);
                        }}
                        className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <IconClose size={13} />
                    </span>
                )}
            </button>
            {error && <span className="text-[12px] font-medium text-destructive">{error}</span>}
            {open &&
                createPortal(
                    <div
                        ref={calRef}
                        data-ds-portal="daterangepicker"
                        style={{ top: coords.top, left: coords.left }}
                        className="fixed z-[100] overflow-hidden rounded-2xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30"
                    >
                        {presets && presets.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1 border-b border-border px-2 pb-2 pt-1.5">
                                {presets.map((preset) => (
                                    <button
                                        key={preset.key}
                                        type="button"
                                        onClick={() => {
                                            onPresetSelect?.(preset);
                                            close();
                                        }}
                                        className={cn(
                                            "h-6 cursor-pointer select-none rounded-full px-2.5 text-[11px] font-semibold transition-colors",
                                            preset.key === activePresetKey
                                                ? "bg-brand text-white"
                                                : "bg-surface-2 text-muted-foreground hover:bg-foreground/[0.08] hover:text-foreground"
                                        )}
                                    >
                                        {preset.label}
                                    </button>
                                ))}
                            </div>
                        )}
                        <Calendar
                            mode="range"
                            numberOfMonths={numberOfMonths}
                            defaultMonth={value?.from}
                            // Sempre abre limpo (pending): se o valor atual entrasse como
                            // selected, o primeiro clique MESCLARIA com o range antigo em
                            // vez de iniciar um novo.
                            selected={pending}
                            onSelect={(range) => {
                                // Primeiro clique: o react-day-picker devolve {from, to: from}
                                // (range "completo" de 1 dia). Vira seleção parcial: é o
                                // SEGUNDO clique que define o fim, inclusive no mesmo dia
                                // pra período de um dia só.
                                if (
                                    !pending?.from &&
                                    range?.from &&
                                    range.to &&
                                    range.from.getTime() === range.to.getTime()
                                ) {
                                    setPending({ from: range.from, to: undefined });
                                    return;
                                }
                                setPending(range);
                                if (range?.from && range.to) {
                                    onChange?.(range);
                                    close();
                                }
                            }}
                            disabled={(date) => {
                                if (minDate && date < minDate) return true;
                                if (maxDate && date > maxDate) return true;
                                return false;
                            }}
                        />
                        <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-1 text-[11px] font-medium text-muted-foreground">
                            <span>
                                {pending?.from && !pending.to
                                    ? `Início: ${fmt(pending.from)}. Agora clique no fim.`
                                    : "Clique no início e depois no fim do período"}
                            </span>
                        </div>
                    </div>,
                    getPortalContainer(triggerRef.current)
                )}
        </div>
    );
}
