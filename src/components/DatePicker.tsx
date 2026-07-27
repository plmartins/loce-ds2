import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

export type DatePickerProps = {
    label?: string;
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    clearable?: boolean;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
};

export function DatePicker({ label, value, onChange, placeholder = "Selecione uma data", error, disabled, clearable = true, className, minDate, maxDate }: DatePickerProps) {
    const [open, setOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLButtonElement>(null);
    const calRef = useRef<HTMLDivElement>(null);
    const formatted = value ? value.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" }) : "";

    const updateCoords = () => {
        const el = triggerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setCoords({ top: rect.bottom + 4, left: rect.left });
    };

    useEffect(() => {
        if (!open) return;
        updateCoords();
        const handleClick = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            if (!triggerRef.current?.contains(t) && !calRef.current?.contains(t)) setOpen(false);
        };
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
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
    }, [open]);

    return (
        <div className={cn("flex w-full flex-col gap-1.5", className)}>
            {label && <span className="text-[12px] font-semibold text-foreground/80">{label}</span>}
            <button
                ref={triggerRef}
                type="button"
                disabled={disabled}
                onClick={() => {
                    updateCoords();
                    setOpen((p) => !p);
                }}
                className={cn(
                    fieldClass,
                    "flex cursor-pointer items-center gap-2 text-left",
                    open && "border-brand ring-2 ring-brand/25",
                    error && "border-destructive focus:border-destructive focus:ring-destructive/20",
                    !value && "text-muted-foreground/80"
                )}
            >
                <IconCalendar size={15} className="shrink-0 text-muted-foreground" />
                <span className="flex-1 truncate">{formatted || placeholder}</span>
                {value && clearable && (
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
                        data-ds-portal="datepicker"
                        style={{ top: coords.top, left: coords.left }}
                        className="fixed z-[100] overflow-hidden rounded-2xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30"
                    >
                        <Calendar
                            mode="single"
                            selected={value}
                            onSelect={(date) => {
                                onChange?.(date);
                                setOpen(false);
                            }}
                            disabled={(date) => {
                                if (minDate && date < minDate) return true;
                                if (maxDate && date > maxDate) return true;
                                return false;
                            }}
                        />
                    </div>,
                    getPortalContainer(triggerRef.current)
                )}
        </div>
    );
}
