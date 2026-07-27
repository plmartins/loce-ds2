import { cn } from "../lib/utils";
import { Skeleton } from "./Skeleton";

/** Skeleton de formulário: blocos de label+campo em grid, com coluna lateral opcional. */
export function SkeletonForm({ withAside = true, className }: { withAside?: boolean; className?: string }) {
    return (
        <div className={cn("grid gap-6", withAside && "xl:grid-cols-[1.6fr_1fr]", className)} aria-hidden>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-9 w-full" />
                    <div className="grid grid-cols-2 gap-3">
                        <Skeleton className="h-9" />
                        <Skeleton className="h-9" />
                    </div>
                    <Skeleton className="h-24 w-full" />
                </div>
                <div className="flex flex-col gap-3">
                    <Skeleton className="h-4 w-32" />
                    <div className="grid grid-cols-3 gap-3">
                        <Skeleton className="h-9" />
                        <Skeleton className="h-9" />
                        <Skeleton className="h-9" />
                    </div>
                    <Skeleton className="h-9 w-full" />
                </div>
            </div>
            {withAside && (
                <div className="flex flex-col gap-3">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-28 rounded-2xl" />
                    <Skeleton className="h-40 rounded-2xl" />
                </div>
            )}
        </div>
    );
}
