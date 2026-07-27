import { cn } from "../lib/utils";
import { IconChevronLeft, IconChevronRight } from "../icons";

export type PaginationBarProps = {
    currentPage: number;
    perPage: number;
    totalResults: number;
    totalPages: number;
    action: (page: number) => void;
    className?: string;
};

function pageWindow(current: number, total: number): number[] {
    const max = 5;
    if (total <= max) return Array.from({ length: total }, (_, i) => i + 1);
    const start = Math.max(1, Math.min(current - 2, total - max + 1));
    return Array.from({ length: max }, (_, i) => start + i);
}

export function PaginationBar({ currentPage, perPage, totalResults, totalPages, action, className }: PaginationBarProps) {
    if (totalPages <= 0) return null;
    const from = (currentPage - 1) * perPage + 1;
    const to = Math.min(currentPage * perPage, totalResults);

    const navBtn =
        "flex size-8 cursor-pointer items-center justify-center rounded-lg text-[12.5px] font-semibold text-foreground/70 transition-colors duration-100 hover:bg-foreground/[0.05] hover:text-foreground disabled:pointer-events-none disabled:opacity-35";

    return (
        <div className={cn("flex flex-wrap items-center justify-between gap-3", className)}>
            <span className="text-[12px] font-medium text-muted-foreground tabular-nums">
                Mostrando {from.toLocaleString("pt-BR")} a {to.toLocaleString("pt-BR")} de {totalResults.toLocaleString("pt-BR")}
            </span>
            <div className="flex items-center gap-1">
                <button type="button" className={navBtn} disabled={currentPage <= 1} onClick={() => action(currentPage - 1)} aria-label="Página anterior">
                    <IconChevronLeft size={13} />
                </button>
                {pageWindow(currentPage, totalPages).map((page) => (
                    <button
                        key={page}
                        type="button"
                        onClick={() => action(page)}
                        aria-current={page === currentPage ? "page" : undefined}
                        className={cn(
                            navBtn,
                            "tabular-nums",
                            page === currentPage && "bg-brand text-white hover:bg-brand hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                        )}
                    >
                        {page}
                    </button>
                ))}
                <button type="button" className={navBtn} disabled={currentPage >= totalPages} onClick={() => action(currentPage + 1)} aria-label="Próxima página">
                    <IconChevronRight size={13} />
                </button>
            </div>
        </div>
    );
}
