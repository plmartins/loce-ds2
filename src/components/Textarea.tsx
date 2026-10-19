import { useEffect, useId, useRef, type ComponentProps, type Ref } from "react";
import { cn } from "../lib/utils";
import { IconSpinner } from "../icons";

export type TextareaProps = Omit<ComponentProps<"textarea">, "onChange"> & {
    label?: string;
    loading?: boolean;
    error?: string;
    autoResize?: boolean;
    /** Alça vertical própria do DS. Disponível quando autoResize=false. */
    resizable?: boolean;
    onSubmit?: () => void;
    /** Recebe o valor direto (não o evento), como no ds1. */
    onChange?: (value: string) => void;
    ref?: Ref<HTMLTextAreaElement>;
};

export function Textarea({ className, label, loading, error, autoResize = true, resizable = false, onSubmit, onChange, ref, id, ...props }: TextareaProps) {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const drag = useRef<{ y: number; height: number } | null>(null);
    const canResize = resizable && !autoResize && !props.disabled;

    const setHeight = (height: number) => {
        const el = internalRef.current;
        if (!el) return;
        const styles = getComputedStyle(el);
        const min = Math.max(64, parseFloat(styles.minHeight) || 0);
        const max = parseFloat(styles.maxHeight) || Infinity;
        el.style.height = `${Math.max(min, Math.min(max, height))}px`;
    };

    const setRefs = (el: HTMLTextAreaElement | null) => {
        internalRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
    };

    const resize = () => {
        const el = internalRef.current;
        if (!el || !autoResize) return;
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
    };

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
        resize();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey && onSubmit) {
            e.preventDefault();
            onSubmit();
            setTimeout(resize, 50);
        }
    };

    useEffect(() => {
        resize();
    }, [props.value]);

    return (
        <div className="flex w-full flex-col gap-1.5">
            {label && <label htmlFor={fieldId} className="text-[12px] font-semibold text-foreground/80">{label}</label>}
            <div className={cn(
                "relative w-full rounded-xl border border-border bg-card p-1 shadow-xs",
                "transition-[border-color,box-shadow] duration-150 hover:border-ring/50",
                "focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/25",
                props.disabled && "pointer-events-none opacity-50",
                error && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20"
            )}>
                <textarea
                    ref={setRefs}
                    id={fieldId}
                    rows={2}
                    className={cn(
                        "ds-textarea block w-full resize-none rounded-lg border-0 bg-transparent px-2 py-1 text-[13px] font-semibold text-foreground",
                        "placeholder:font-medium placeholder:text-muted-foreground/70",
                        "focus:outline-none focus:ring-0",
                        autoResize && "max-h-40",
                        className
                    )}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    {...props}
                />
                {loading && <IconSpinner size={14} className="absolute right-3 top-3 animate-spin text-muted-foreground" />}
                {canResize && (
                    <div className="flex h-4 justify-end">
                        <button
                            type="button"
                            aria-label={`Redimensionar ${label ?? props["aria-label"] ?? "campo de texto"}`}
                            aria-controls={fieldId}
                            title="Arraste para ajustar a altura ou use as setas para cima e para baixo"
                            className="flex h-5 w-7 touch-none select-none items-center justify-center rounded text-muted-foreground/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 cursor-ns-resize"
                            onPointerDown={(event) => {
                                if (event.button !== 0 || !internalRef.current) return;
                                drag.current = { y: event.clientY, height: internalRef.current.getBoundingClientRect().height };
                                event.currentTarget.setPointerCapture(event.pointerId);
                            }}
                            onPointerMove={(event) => {
                                if (drag.current) setHeight(drag.current.height + event.clientY - drag.current.y);
                            }}
                            onPointerUp={(event) => {
                                drag.current = null;
                                if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
                            }}
                            onPointerCancel={() => { drag.current = null; }}
                            onLostPointerCapture={() => { drag.current = null; }}
                            onKeyDown={(event) => {
                                if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
                                event.preventDefault();
                                if (internalRef.current) setHeight(internalRef.current.getBoundingClientRect().height + (event.key === "ArrowUp" ? -24 : 24));
                            }}
                        >
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                                <path d="M3 3h8M5 6h6" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
            {error && <span className="text-[12px] font-medium text-destructive">{error}</span>}
        </div>
    );
}
