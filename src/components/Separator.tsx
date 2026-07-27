import { cn } from "../lib/utils";

export type SeparatorProps = {
    className?: string;
    orientation?: "horizontal" | "vertical";
    label?: string;
};

export function Separator({ className, orientation = "horizontal", label }: SeparatorProps) {
    if (label) {
        return (
            <div className={cn("flex items-center gap-3", className)}>
                <div className="h-px flex-1 bg-border" />
                <span className="select-none text-xs font-medium text-muted-foreground">{label}</span>
                <div className="h-px flex-1 bg-border" />
            </div>
        );
    }
    if (orientation === "vertical") {
        return <div className={cn("h-full w-px bg-border", className)} />;
    }
    return <div className={cn("h-px w-full bg-border", className)} />;
}
