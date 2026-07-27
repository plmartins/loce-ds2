import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconClose } from "../icons";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({
    className,
    children,
    showCloseButton = true,
    ...props
}: ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { showCloseButton?: boolean }) {
    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="ds-dialog-overlay fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px]" />
            <DialogPrimitive.Content
                className={cn(
                    "ds-dialog-content fixed left-1/2 top-1/2 z-50 flex max-h-[85vh] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-4",
                    "rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-2xl shadow-black/20 sm:max-w-lg",
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close
                        className="absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30"
                        aria-label="Fechar"
                    >
                        <IconClose size={15} />
                    </DialogPrimitive.Close>
                )}
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    );
}

export function DialogHeader({ className, children }: { className?: string; children: ReactNode }) {
    return <div className={cn("flex flex-col gap-1 pr-8", className)}>{children}</div>;
}

export function DialogTitle({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
    return <DialogPrimitive.Title className={cn("text-lg font-bold leading-tight", className)} {...props} />;
}

export function DialogDescription({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
    return <DialogPrimitive.Description className={cn("text-[13px] text-muted-foreground", className)} {...props} />;
}

/** Corpo com scroll próprio quando o conteúdo estoura o teto de 85vh. */
export function DialogBody({ className, children }: { className?: string; children: ReactNode }) {
    return <div className={cn("-mx-6 min-h-0 flex-1 space-y-2 overflow-y-auto px-6 pb-1", className)}>{children}</div>;
}

export function DialogFooter({ className, children }: { className?: string; children: ReactNode }) {
    return <div className={cn("flex items-center justify-end gap-2 pt-1", className)}>{children}</div>;
}
