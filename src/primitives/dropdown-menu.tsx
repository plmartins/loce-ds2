import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { useRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export function DropdownMenuContent({
    className,
    sideOffset = 6,
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
                className={cn(
                    "z-50 min-w-[190px] overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl shadow-black/5 dark:shadow-black/30",
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
