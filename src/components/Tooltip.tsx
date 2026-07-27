import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export type TooltipProps = {
    content: ReactNode;
    children: ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    /** Envolve o filho num <span> (necessário quando o filho não aceita ref). */
    wrap?: boolean;
    className?: string;
};

export function Tooltip({ content, children, side = "top", wrap, className }: TooltipProps) {
    if (content == null || content === "") return <>{children}</>;
    return (
        <TooltipPrimitive.Provider delayDuration={250}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {wrap ? <span className="min-w-0">{children}</span> : (children as never)}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side={side}
                        sideOffset={6}
                        className={cn(
                            "z-50 max-w-xs rounded-lg bg-foreground px-2.5 py-1.5 text-[12px] font-medium text-background shadow-md animate-slide-up",
                            className
                        )}
                    >
                        {content}
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
}
