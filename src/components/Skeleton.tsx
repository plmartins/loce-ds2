import { cn } from "../lib/utils";

export type SkeletonProps = {
    className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
    return <span className={cn("ds-skeleton block rounded-lg", className)} aria-hidden />;
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
    return (
        <div className={cn("flex flex-col gap-2", className)} aria-hidden>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton key={i} className={cn("h-3.5", i === lines - 1 ? "w-2/3" : "w-full")} />
            ))}
        </div>
    );
}

/** Placeholder de card genérico (mesmo raio/superfície do Card). Listagens preferem SkeletonTable. */
export function SkeletonCard({ className }: SkeletonProps) {
    return <Skeleton className={cn("h-40 w-full rounded-2xl", className)} />;
}

/** Skeleton de listagem no formato do DataTable: header + linhas com thumb, textos e pills. */
export function SkeletonTable({ rows = 8, className }: { rows?: number; className?: string }) {
    return (
        <div className={cn("overflow-hidden rounded-2xl border border-border bg-card shadow-xs", className)} aria-hidden>
            <div className="flex h-10 items-center gap-4 border-b border-border bg-surface-1/70 px-4">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
                <Skeleton className="ml-auto h-3 w-20" />
            </div>
            {Array.from({ length: rows }).map((_, i) => (
                <div
                    key={i}
                    className="flex items-center gap-4 border-b border-border/60 px-4 py-3 last:border-0"
                    style={{ opacity: 1 - i * 0.09 }}
                >
                    <Skeleton className="size-[42px] shrink-0 rounded-md" />
                    <Skeleton className="h-3.5 w-[26%]" />
                    <Skeleton className="h-3.5 w-24" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-3.5 w-16" />
                    <div className="ml-auto flex items-center gap-3">
                        <Skeleton className="h-5 w-9 rounded-full" />
                        <Skeleton className="h-5 w-9 rounded-full" />
                        <Skeleton className="size-7 rounded-lg" />
                    </div>
                </div>
            ))}
        </div>
    );
}
