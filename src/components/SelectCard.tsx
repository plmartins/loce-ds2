import { cn } from "../lib/utils";
import { AICard } from "./AICard";

export type SelectCardOption<T extends string = string> = {
    value: T;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    /** "ai": selecionada, a opção vira um AICard (luz em espectro na borda) em vez da cor da marca. */
    tone?: "ai";
};

export type SelectCardProps<T extends string = string> = {
    options: SelectCardOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    columns?: 1 | 2 | 3 | 4;
    layout?: "horizontal" | "vertical";
    className?: string;
};

export function SelectCard<T extends string = string>({ options, value, onChange, columns = 2, layout = "horizontal", className }: SelectCardProps<T>) {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-2 md:grid-cols-4",
    };

    return (
        <div className={cn("grid gap-3", gridCols[columns], className)}>
            {options.map((option) => {
                const isSelected = option.value === value;
                const aiSelected = isSelected && option.tone === "ai";
                const tile = option.icon && (
                    <div
                        className={cn(
                            "flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                            aiSelected
                                ? "bg-card text-foreground shadow-xs ring-1 ring-border/60"
                                : isSelected ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
                        )}
                    >
                        {option.icon}
                    </div>
                );
                const button = (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange?.(option.value)}
                        className={cn(
                            "cursor-pointer rounded-2xl border p-4 transition-all duration-150 active:scale-[0.98]",
                            layout === "vertical" ? "flex flex-col items-center gap-2 text-center" : "flex items-center gap-3 text-left",
                            aiSelected
                                ? "w-full border-transparent bg-transparent"
                                : isSelected
                                    ? "border-brand/50 bg-brand/5 ring-2 ring-brand/15"
                                    : "border-border bg-card shadow-xs hover:border-ring/50"
                        )}
                    >
                        {tile}
                        <div className={cn("min-w-0", layout === "vertical" ? "flex flex-col items-center gap-0.5" : "flex-1")}>
                            <span className="block text-[13px] font-semibold text-foreground">{option.label}</span>
                            {option.description && (
                                <span className={cn("block text-xs font-medium", isSelected && !aiSelected ? "text-brand/80" : "text-muted-foreground")}>
                                    {option.description}
                                </span>
                            )}
                        </div>
                    </button>
                );
                if (!aiSelected) return button;
                // Selecionada por IA: o mesmo card de IA da suíte (luz na borda + contorno fino neutro).
                return (
                    <AICard key={option.value} as="section" animated borderRadius={16} className="ds-ai-card-outline min-w-0" surfaceClassName="p-0">
                        {button}
                    </AICard>
                );
            })}
        </div>
    );
}
