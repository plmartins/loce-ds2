import { cn } from "../lib/utils";

export type StatusDotProps = {
    status: "online" | "offline" | "busy" | "away";
    size?: "sm" | "default" | "lg";
    className?: string;
    pulse?: boolean;
};

const statusColors = {
    online: "bg-success",
    offline: "bg-muted-foreground/50",
    busy: "bg-destructive",
    away: "bg-warning",
};

const sizes = {
    sm: "size-2",
    default: "size-2.5",
    lg: "size-3",
};

export function StatusDot({ status, size = "default", className, pulse = false }: StatusDotProps) {
    return (
        <span className={cn("relative inline-block", className)}>
            <span className={cn("block rounded-full", statusColors[status], sizes[size])} />
            {pulse && status === "online" && (
                <span className={cn("absolute inset-0 animate-ping rounded-full opacity-40", statusColors[status])} />
            )}
        </span>
    );
}
