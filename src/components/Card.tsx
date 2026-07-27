import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

export function Card({ className, ...props }: ComponentProps<"div">) {
    return <div className={cn("rounded-2xl border border-border bg-card shadow-xs", className)} {...props} />;
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
    return <div className={cn("flex flex-col gap-1 px-5 pb-3 pt-5", className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
    return <h3 className={cn("text-[15px] font-bold text-foreground", className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
    return <p className={cn("text-[13px] font-medium text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
    return <div className={cn("px-5 py-3", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
    return <div className={cn("flex items-center gap-2 border-t border-border px-5 pb-5 pt-3", className)} {...props} />;
}
