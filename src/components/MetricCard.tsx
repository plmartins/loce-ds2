import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconArrowRight } from "../icons";
import { Skeleton } from "./Skeleton";

export type MetricDeltaTone = "positive" | "negative" | "neutral";

export type MetricAccent = "brand" | "green" | "red" | "amber" | "purple" | "pink" | "teal";

export type MetricCardProps = {
    label: ReactNode;
    value: ReactNode;
    helper?: ReactNode;
    delta?: { label: string; tone: MetricDeltaTone };
    icon?: ReactNode;
    /** Cor do chip do ícone e do brilho do card. */
    accent?: MetricAccent;
    /** Troca o card inteiro por um skeleton do mesmo tamanho. */
    loading?: boolean;
    className?: string;
};

const ACCENT_TILE: Record<MetricAccent, string> = {
    brand: "bg-brand/10 text-brand",
    green: "bg-success/12 text-success",
    red: "bg-destructive/10 text-destructive",
    amber: "bg-warning/15 text-warning",
    purple: "bg-[#8b5cf6]/12 text-[#8b5cf6]",
    pink: "bg-[#ec4899]/12 text-[#ec4899]",
    teal: "bg-[#14b8a6]/12 text-[#14b8a6]",
};

const ACCENT_GLOW: Record<MetricAccent, string> = {
    brand: "from-brand/[0.07]",
    green: "from-success/[0.08]",
    red: "from-destructive/[0.07]",
    amber: "from-warning/[0.1]",
    purple: "from-[#8b5cf6]/[0.08]",
    pink: "from-[#ec4899]/[0.08]",
    teal: "from-[#14b8a6]/[0.08]",
};

const DELTA_CLASS: Record<MetricDeltaTone, string> = {
    positive: "bg-success/12 text-success",
    negative: "bg-destructive/10 text-destructive",
    neutral: "bg-surface-2 text-foreground/60",
};

export function MetricCard({ label, value, helper, delta, icon, accent = "brand", loading, className }: MetricCardProps) {
    if (loading) return <Skeleton className={cn("h-[104px] rounded-2xl", className)} />;

    return (
        <div
            className={cn(
                "group relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xs",
                "transition-all duration-150 hover:-translate-y-px hover:border-brand/25 hover:shadow-md hover:shadow-black/[0.05]",
                className
            )}
        >
            <span aria-hidden className={cn("pointer-events-none absolute -right-8 -top-10 size-32 rounded-full bg-gradient-to-b to-transparent blur-2xl", ACCENT_GLOW[accent])} />
            <div className="relative flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.07em] text-muted-foreground">{label}</span>
                {icon && (
                    <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", ACCENT_TILE[accent])}>
                        {icon}
                    </span>
                )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-2xl font-extrabold leading-none tracking-tight tabular-nums">{value}</span>
                {delta && (
                    <span
                        className={cn(
                            "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-bold tabular-nums",
                            DELTA_CLASS[delta.tone]
                        )}
                    >
                        {delta.tone !== "neutral" && (
                            <IconArrowRight size={10} className={delta.tone === "positive" ? "-rotate-45" : "rotate-45"} />
                        )}
                        {delta.label}
                    </span>
                )}
            </div>
            {helper && <span className="text-[11.5px] leading-snug text-muted-foreground">{helper}</span>}
        </div>
    );
}
