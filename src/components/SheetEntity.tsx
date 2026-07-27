import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";
import { IconClose } from "../icons";
import { Button } from "./Button";
import { ScrollFade } from "./ScrollFade";

export type SheetEntityProps = {
    open: boolean;
    onClose: () => void;
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Conteúdo extra no header, abaixo do título/descrição (ex.: tags). */
    headerExtra?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
    submitLabel?: string;
    cancelLabel?: string;
    onSubmit?: () => void;
    isLoading?: boolean;
    /** "wide" para telas de detalhe densas (ex.: venda, NF-e). */
    size?: "default" | "wide";
    /** Classes do contêiner rolável do corpo (padding/fundo). */
    contentClassName?: string;
};

/** Painel lateral direito para criar/editar/detalhar entidades. */
export function SheetEntity({
    open,
    onClose,
    title,
    description,
    headerExtra,
    children,
    footer,
    submitLabel = "Salvar",
    cancelLabel = "Cancelar",
    onSubmit,
    isLoading,
    size = "default",
    contentClassName,
}: SheetEntityProps) {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (open) {
            setMounted(true);
        } else {
            setVisible(false);
            const timer = setTimeout(() => setMounted(false), 200);
            return () => clearTimeout(timer);
        }
    }, [open]);

    useEffect(() => {
        if (!mounted || !open) return;
        const raf = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(raf);
    }, [mounted, open]);

    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open, onClose]);

    useEffect(() => {
        if (!mounted) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [mounted]);

    if (!mounted) return null;

    return createPortal(
        // stopPropagation: aberto de dentro de uma row clicável, cliques no
        // painel não podem vazar pro onClick da linha (portal preserva bubbling
        // na árvore React).
        <div className="fixed inset-0 z-50" onClick={(e) => e.stopPropagation()}>
            <div
                className={cn("absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity duration-200", visible ? "opacity-100" : "opacity-0")}
                onClick={onClose}
            />
            <div
                className={cn(
                    "absolute bottom-0 right-0 top-0 flex w-full flex-col border-l border-border bg-card shadow-2xl shadow-black/25",
                    "transition-transform duration-200 ease-out",
                    size === "wide" ? "sm:max-w-3xl" : "sm:max-w-md",
                    visible ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="relative shrink-0 border-b border-border px-6 pb-4 pr-14 pt-6">
                    <h2 className="text-lg font-bold leading-tight text-foreground">{title}</h2>
                    {description && <p className="mt-1.5 text-[13px] font-medium leading-snug text-muted-foreground">{description}</p>}
                    {headerExtra && <div className="mt-3">{headerExtra}</div>}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar"
                        className="absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
                    >
                        <IconClose size={15} />
                    </button>
                </div>
                <ScrollFade position="both" className={cn("px-6 py-6", contentClassName)}>
                    {children}
                </ScrollFade>
                {(footer || onSubmit) && (
                    <div className="shrink-0 border-t border-border px-6 py-4">
                        {footer || (
                            <div className="flex gap-3">
                                {!isLoading && (
                                    <Button onClick={onClose} variant="secondary" className="flex-1">
                                        {cancelLabel}
                                    </Button>
                                )}
                                <Button onClick={onSubmit} variant="primary" className="flex-1" loading={isLoading}>
                                    {isLoading ? "Salvando..." : submitLabel}
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}
