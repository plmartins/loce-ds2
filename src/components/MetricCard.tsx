import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconArrowRight } from "../icons";

export type MetricDeltaTone = "positive" | "negative" | "neutral";

export type MetricCardProps = {
    label: ReactNode;
    value: ReactNode;
    helper?: ReactNode;
    delta?: { label: string; tone: MetricDeltaTone };
    icon?: ReactNode;
    className?: string;
};

const DELTA_CLASS: Record<MetricDeltaTone, string> = {
    positive: "bg-success/12 text-success",
    negative: "bg-destructive/10 text-destructive",
    neutral: "bg-surface-2 text-foreground/60",
};

export function MetricCard({ label, value, helper, delta, icon, className }: MetricCardProps) {
    return (
        <div
            className={cn(
                "group flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-4 shadow-xs",
                "transition-all duration-150 hover:-translate-y-px hover:shadow-md hover:shadow-black/[0.04]",
                className
            )}
        >
            <div className="flex items-start justify-between gap-2">
                <span className="text-[12.5px] font-semibold text-muted-foreground">{label}</span>
                {icon && (
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-foreground/55 transition-colors duration-150 group-hover:bg-brand/10 group-hover:text-brand">
                        {icon}
                    </span>
                )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <span className="text-[22px] font-extrabold leading-none tracking-tight tabular-nums">{value}</span>
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
            {helper && <span className="text-[12px] leading-snug text-muted-foreground">{helper}</span>}
        </div>
    );
}
