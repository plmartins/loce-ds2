import { cn } from "../lib/utils";

export type TimelineItem = {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    time?: string;
    /** Classes do tile do ícone (ex.: "bg-success/10 text-success"). */
    color?: string;
};

export type TimelineProps = {
    items: TimelineItem[];
    className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
    return (
        <div className={cn("flex flex-col", className)}>
            {items.map((item, i) => {
                const isLast = i === items.length - 1;
                return (
                    <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                            <div className={cn("grid size-8 shrink-0 place-items-center rounded-xl", item.color || "bg-surface-2 text-muted-foreground")}>
                                {item.icon}
                            </div>
                            {!isLast && <div className="min-h-6 w-px flex-1 bg-border" />}
                        </div>
                        <div className={cn("flex min-h-8 min-w-0 flex-1 flex-col justify-center pb-6", isLast && "pb-0")}>
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-[13px] font-semibold text-foreground">{item.title}</span>
                                {item.time && <span className="shrink-0 text-[11px] font-medium text-muted-foreground">{item.time}</span>}
                            </div>
                            {item.description && <span className="block text-xs font-medium text-muted-foreground">{item.description}</span>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
