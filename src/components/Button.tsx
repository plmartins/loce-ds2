import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconSpinner } from "../icons";

export const buttonVariants = cva(
    [
        "inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-xl text-[13px] font-semibold",
        "transition-all duration-150 select-none",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
        "disabled:pointer-events-none disabled:opacity-50",
        "active:scale-[0.98]",
    ],
    {
        variants: {
            variant: {
                primary: "ds-btn-3d [--btn-bg:var(--accent-brand)] text-white",
                secondary:
                    "border border-border bg-card text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.3)] hover:bg-surface-2/60 hover:border-ring/40 active:shadow-none",
                ghost: "text-foreground/70 hover:bg-foreground/[0.05] hover:text-foreground",
                destructive: "ds-btn-3d [--btn-bg:var(--destructive)] text-white",
                "destructive-ghost": "text-destructive hover:bg-destructive/10",
            },
            size: {
                md: "h-9 px-4",
                sm: "h-8 px-3 text-[12.5px]",
                lg: "h-10 px-5",
                icon: "size-9",
                "icon-sm": "size-8 rounded-lg",
            },
        },
        defaultVariants: { variant: "primary", size: "md" },
    }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
        loading?: boolean;
        children?: ReactNode;
    };

export function Button({ className, variant, size, loading, disabled, children, type = "button", ...props }: ButtonProps) {
    return (
        <button
            type={type}
            aria-busy={loading || undefined}
            disabled={disabled || loading}
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        >
            {loading && <IconSpinner size={15} className="animate-spin" />}
            {children}
        </button>
    );
}
