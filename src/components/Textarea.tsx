import { useEffect, useRef, type ComponentProps, type Ref } from "react";
import { cn } from "../lib/utils";
import { IconSpinner } from "../icons";

export type TextareaProps = Omit<ComponentProps<"textarea">, "onChange"> & {
    label?: string;
    loading?: boolean;
    error?: string;
    autoResize?: boolean;
    onSubmit?: () => void;
    /** Recebe o valor direto (não o evento), como no ds1. */
    onChange?: (value: string) => void;
    ref?: Ref<HTMLTextAreaElement>;
};

export function Textarea({ className, label, loading, error, autoResize = true, onSubmit, onChange, ref, ...props }: TextareaProps) {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

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
            {label && <span className="text-[12px] font-semibold text-foreground/80">{label}</span>}
            <div className="relative flex w-full items-center">
                <textarea
                    ref={setRefs}
                    rows={2}
                    className={cn(
                        "w-full resize-none rounded-xl border border-border bg-card px-3 py-2 text-[13px] font-semibold text-foreground",
                        "shadow-xs transition-all duration-150",
                        "placeholder:font-medium placeholder:text-muted-foreground/70",
                        "hover:border-ring/50",
                        "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25",
                        "disabled:pointer-events-none disabled:opacity-50",
                        autoResize && "max-h-40",
                        error && "border-destructive focus:border-destructive focus:ring-destructive/20",
                        className
                    )}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    {...props}
                />
                {loading && <IconSpinner size={14} className="absolute right-3 animate-spin text-muted-foreground" />}
            </div>
            {error && <span className="text-[12px] font-medium text-destructive">{error}</span>}
        </div>
    );
}
