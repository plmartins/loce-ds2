import { cn } from "../lib/utils";

export type SegmentedControlOption = { value: string; label: string };

export type SegmentedControlProps = {
    options: SegmentedControlOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
};

export function SegmentedControl({ options, value, onChange, className }: SegmentedControlProps) {
    return (
        <div
            role="tablist"
            className={cn("inline-flex items-center gap-0.5 rounded-xl bg-surface-2 p-1", className)}
        >
            {options.map((opt) => {
                const active = opt.value === value;
                return (
                    <button
                        key={opt.value}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => onChange(opt.value)}
                        className={cn(
                            "h-8 cursor-pointer whitespace-nowrap rounded-lg px-3.5 text-[13px] font-semibold transition-all duration-150",
                            "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/25",
                            active
                                ? "bg-card text-foreground shadow-xs"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {opt.label}
                    </button>
                );
            })}
        </div>
    );
}
