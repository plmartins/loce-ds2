import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { useRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils";

/**
 * Raiz com `modal={false}` por padrão. No modo modal o Radix trava `pointer-events: none`
 * no body enquanto o menu está aberto; quando um item abre um Dialog no mesmo tick, a
 * trava do menu e a do diálogo se cruzam e o body pode ficar preso sem cliques depois
 * que os dois fecham. Sem modal o menu continua fechando ao clicar fora, sem a trava.
 */
export const DropdownMenu = ({ modal = false, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>) => (
    <DropdownMenuPrimitive.Root modal={modal} {...props} />
);
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export function DropdownMenuContent({
    className,
    sideOffset = 6,
    collisionPadding = 12,
    onPointerDownCapture,
    onKeyDownCapture,
    onCloseAutoFocus,
    ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>) {
    const pointerInteraction = useRef(false);

    return (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
                sideOffset={sideOffset}
                collisionPadding={collisionPadding}
                className={cn(
                    // Nunca passa da área visível: lista longa rola dentro do menu em vez de sair da tela.
                    "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[190px] overflow-y-auto overscroll-contain rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl shadow-black/5 dark:shadow-black/30",
                    "data-[state=open]:animate-slide-up",
                    className
                )}
                {...props}
                onPointerDownCapture={(event) => {
                    pointerInteraction.current = true;
                    onPointerDownCapture?.(event);
                }}
                onKeyDownCapture={(event) => {
                    pointerInteraction.current = false;
                    onKeyDownCapture?.(event);
                }}
                onCloseAutoFocus={(event) => {
                    onCloseAutoFocus?.(event);
                    // Pointer selection must not transfer the menu item's focus-visible
                    // state to the trigger. Keyboard selection still restores focus.
                    if (pointerInteraction.current) event.preventDefault();
                    pointerInteraction.current = false;
                }}
            />
        </DropdownMenuPrimitive.Portal>
    );
}

export function DropdownMenuItem({
    className,
    ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>) {
    return (
        <DropdownMenuPrimitive.Item
            className={cn(
                "flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium outline-none transition-colors",
                "focus:bg-foreground/[0.05] data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
                className
            )}
            {...props}
        />
    );
}

export function DropdownMenuLabel({
    className,
    ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>) {
    return (
        <DropdownMenuPrimitive.Label
            className={cn("px-2.5 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-muted-foreground", className)}
            {...props}
        />
    );
}

export function DropdownMenuSeparator({
    className,
    ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>) {
    return <DropdownMenuPrimitive.Separator className={cn("mx-1 my-1 h-px bg-border", className)} {...props} />;
}
