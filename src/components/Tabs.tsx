import { cn } from "../lib/utils";
import { Tooltip } from "./Tooltip";
import { IconLock } from "../icons";

export type Tab<T extends string = string> = {
    key: T;
    label: string;
    icon?: React.ReactNode;
    count?: number;
    /** Tab visível mas indisponível: cadeado + tooltip, sem troca. */
    disabled?: boolean;
    /** Texto do tooltip da tab desabilitada (default: "Chega em breve"). */
    disabledHint?: string;
};

export type TabsProps<T extends string = string> = {
    tabs: Tab<T>[];
    value: T;
    onChange: (value: T) => void;
    className?: string;
    size?: "default" | "sm";
};

export function Tabs<T extends string = string>({ tabs, value, onChange, className, size = "default" }: TabsProps<T>) {
    return (
        <div className={cn("flex w-fit items-center gap-1 rounded-xl border border-border bg-surface-2/60 p-1", className)}>
            {tabs.map((tab) => {
                const isActive = tab.key === value;
                if (tab.disabled) {
                    return (
                        <Tooltip key={tab.key} content={tab.disabledHint ?? "Chega em breve"} side="top" wrap>
                            <span
                                aria-disabled
                                className={cn(
                                    "relative inline-flex cursor-default select-none items-center justify-center gap-1.5 rounded-lg font-semibold text-muted-foreground/50",
                                    size === "default" ? "px-4 py-1.5 text-[13px]" : "px-3 py-1 text-xs"
                                )}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                                <IconLock size={11} className="shrink-0 text-muted-foreground/40" />
                            </span>
                        </Tooltip>
                    );
                }
                return (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => onChange(tab.key)}
                        className={cn(
                            "relative inline-flex cursor-pointer select-none items-center justify-center gap-1.5 rounded-lg font-semibold transition-all duration-150 active:scale-[0.97]",
                            size === "default" ? "px-4 py-1.5 text-[13px]" : "px-3 py-1 text-xs",
                            isActive
                                ? "bg-card text-brand shadow-sm ring-1 ring-border"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                        {tab.count !== undefined && (
                            <span
                                className={cn(
                                    "rounded-full px-1.5 py-px text-[10px] font-bold tabular-nums",
                                    isActive ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
                                )}
                            >
                                {tab.count}
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
