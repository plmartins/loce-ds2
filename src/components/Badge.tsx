import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export const badgeVariants = cva(
    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap",
    {
        variants: {
            variant: {
                neutral: "bg-surface-2 text-foreground/70",
                brand: "bg-brand/12 text-brand",
                success: "bg-success/12 text-success",
                warning: "bg-warning/15 text-warning",
                destructive: "bg-destructive/12 text-destructive",
                info: "bg-info/12 text-info",
            },
        },
        defaultVariants: { variant: "neutral" },
    }
);

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
    return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
