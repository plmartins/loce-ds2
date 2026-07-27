/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState, type ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconChevronDown, IconChevronUp, IconMore, IconSort } from "../icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../primitives/dropdown-menu";

export type Column<T = any> = {
    header: string;
    accessor: string;
    render?: (value: any, row: T, index?: number) => ReactNode;
    sortable?: boolean;
    className?: string;
    align?: "left" | "center" | "right";
};

export type Action<T = any> = {
    label: string;
    icon: ReactNode;
    onClick?: (row: T) => void;
    color?: string;
    condition?: (row: T) => boolean;
    disabled?: (row: T) => boolean;
    /** Com items, a ação principal vira um dropdown (ex.: botão de imprimir com 2 formas). */
    items?: { label: string; icon?: ReactNode; onClick: (row: T) => void; disabled?: (row: T) => boolean }[];
};

export type SortState = { accessor: string; direction: "asc" | "desc" } | null;

export type DataTableProps<T = any> = {
    data: T[];
    columns: Column<T>[];
    actions?: Action<T>[];
    mainActions?: Action<T>[];
    emptyText?: string;
    rowKey?: (row: T, index: number) => string | number;
    onRowClick?: (row: T) => void;
    rowDisabled?: (row: T) => boolean;
    className?: string;
    /** Modo servidor: estado de ordenação controlado pelo pai (null = sem ordenação). */
    sort?: SortState;
    /** Modo servidor: recebe o próximo estado (asc -> desc -> null). Desativa o sort client-side. */
    onSortChange?: (sort: SortState) => void;
};

const ALIGN_CLASS = { left: "text-left", center: "text-center", right: "text-right" } as const;

export function DataTable<T extends Record<string, any>>({
    data,
    columns,
    actions = [],
    mainActions = [],
    emptyText = "Nenhum item encontrado",
    rowKey,
    onRowClick,
    rowDisabled,
    className,
    sort,
    onSortChange,
}: DataTableProps<T>) {
    const [internalSort, setInternalSort] = useState<SortState>(null);
    const isServerSort = onSortChange !== undefined;
    const sortConfig = isServerSort ? (sort ?? null) : internalSort;

    // Ciclo tri-state: sem ordenação -> asc -> desc -> sem ordenação (removível)
    const handleSort = (accessor: string) => {
        const next: SortState =
            sortConfig?.accessor !== accessor
                ? { accessor, direction: "asc" }
                : sortConfig.direction === "asc"
                    ? { accessor, direction: "desc" }
                    : null;
        if (isServerSort) onSortChange(next);
        else setInternalSort(next);
    };

    const sortedData = useMemo(() => {
        if (isServerSort || !sortConfig) return data;
        return [...data].sort((a, b) => {
            const aVal = a[sortConfig.accessor];
            const bVal = b[sortConfig.accessor];
            if (aVal === bVal) return 0;
            if (aVal == null) return 1;
            if (bVal == null) return -1;
            if (typeof aVal === "string" && typeof bVal === "string")
                return sortConfig.direction === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
            return sortConfig.direction === "asc" ? (aVal < bVal ? -1 : 1) : (aVal > bVal ? -1 : 1);
        });
    }, [data, sortConfig, isServerSort]);

    const hasActions = actions.length > 0 || mainActions.length > 0;
    const getKey = (row: T, idx: number) => (rowKey ? rowKey(row, idx) : idx);

    const renderActions = (row: T) => {
        const visibleMain = mainActions.filter((a) => a.condition?.(row) ?? true);
        const visibleMore = actions.filter((a) => a.condition?.(row) ?? true);
        if (!visibleMain.length && !visibleMore.length) return null;
        return (
            <div className="flex items-center justify-end gap-0.5">
                {visibleMain.map((action) => {
                    const isDisabled = action.disabled?.(row);
                    const btnClass = "flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors duration-100 hover:bg-foreground/[0.06] hover:text-foreground disabled:pointer-events-none disabled:opacity-35 data-[state=open]:bg-foreground/[0.06] data-[state=open]:text-foreground";
                    if (action.items?.length) {
                        return (
                            <DropdownMenu key={action.label}>
                                <DropdownMenuTrigger asChild>
                                    <button type="button" title={action.label} disabled={isDisabled} onClick={(e) => e.stopPropagation()} className={btnClass}>
                                        {action.icon}
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                                    {action.items.map((item) => {
                                        const itemDisabled = item.disabled?.(row);
                                        return (
                                            <DropdownMenuItem
                                                key={item.label}
                                                disabled={itemDisabled}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (!itemDisabled) item.onClick(row);
                                                }}
                                            >
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </DropdownMenuItem>
                                        );
                                    })}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        );
                    }
                    return (
                        <button
                            key={action.label}
                            type="button"
                            title={action.label}
                            disabled={isDisabled}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isDisabled) action.onClick?.(row);
                            }}
                            className={btnClass}
                        >
                            {action.icon}
                        </button>
                    );
                })}
                {visibleMore.length > 0 && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                type="button"
                                aria-label="Mais ações"
                                onClick={(e) => e.stopPropagation()}
                                className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors duration-100 hover:bg-foreground/[0.06] hover:text-foreground data-[state=open]:bg-foreground/[0.06] data-[state=open]:text-foreground"
                            >
                                <IconMore size={16} />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                            {visibleMore.map((action) => {
                                const isDisabled = action.disabled?.(row);
                                return (
                                    <DropdownMenuItem
                                        key={action.label}
                                        disabled={isDisabled}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (!isDisabled) action.onClick?.(row);
                                        }}
                                        className={action.color}
                                    >
                                        {action.icon}
                                        <span>{action.label}</span>
                                    </DropdownMenuItem>
                                );
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        );
    };

    if (!data.length)
        return <div className="flex items-center justify-center py-12 text-sm text-muted-foreground">{emptyText}</div>;

    return (
        <div className={cn("w-full", className)}>
            {/* Mobile: cards */}
            <div className="flex flex-col gap-2 md:hidden">
                {sortedData.map((row, idx) => (
                    <div
                        key={getKey(row, idx)}
                        onClick={() => onRowClick?.(row)}
                        className={cn(
                            "rounded-2xl border border-border bg-card p-4",
                            rowDisabled?.(row) && "opacity-50",
                            onRowClick && "cursor-pointer active:scale-[0.99] duration-75"
                        )}
                    >
                        <div className="flex flex-col gap-2.5">
                            {columns.map((col) => (
                                <div key={col.accessor} className="flex items-baseline justify-between gap-2">
                                    <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                        {col.header}
                                    </span>
                                    <div className="text-right text-sm font-semibold">
                                        {col.render ? col.render(row[col.accessor] ?? "-", row, idx) : String(row[col.accessor] ?? "-")}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {hasActions && <div className="mt-3 border-t border-border pt-2">{renderActions(row)}</div>}
                    </div>
                ))}
            </div>

            {/* Desktop: tabela */}
            <div className="hidden overflow-x-auto rounded-2xl border border-border bg-card shadow-xs md:block">
                <table className="w-full caption-bottom text-sm">
                    <thead>
                        <tr className="border-b border-border bg-surface-1/70">
                            {columns.map((col) => {
                                const sortable = col.sortable !== false;
                                const isSorted = sortConfig?.accessor === col.accessor;
                                return (
                                    <th
                                        key={col.accessor}
                                        onClick={() => sortable && handleSort(col.accessor)}
                                        aria-sort={isSorted ? (sortConfig!.direction === "asc" ? "ascending" : "descending") : undefined}
                                        className={cn(
                                            "group/th h-10 px-4 text-left text-[11px] font-semibold uppercase tracking-[0.07em] text-muted-foreground",
                                            sortable && "cursor-pointer select-none",
                                            isSorted && "text-foreground",
                                            col.align && ALIGN_CLASS[col.align],
                                            col.className
                                        )}
                                    >
                                        <span className="inline-flex items-center gap-1">
                                            {col.header}
                                            {sortable &&
                                                (isSorted ? (
                                                    sortConfig!.direction === "asc" ? (
                                                        <IconChevronUp size={11} className="text-brand" />
                                                    ) : (
                                                        <IconChevronDown size={11} className="text-brand" />
                                                    )
                                                ) : (
                                                    <IconSort size={11} className="opacity-0 transition-opacity group-hover/th:opacity-50" />
                                                ))}
                                        </span>
                                    </th>
                                );
                            })}
                            {hasActions && <th className="w-[1%] whitespace-nowrap" />}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, idx) => (
                            <tr
                                key={getKey(row, idx)}
                                onClick={() => onRowClick?.(row)}
                                className={cn(
                                    "border-b border-border/60 transition-colors duration-100 last:border-0",
                                    "hover:bg-foreground/[0.025]",
                                    rowDisabled?.(row) && "opacity-50",
                                    onRowClick && "cursor-pointer"
                                )}
                            >
                                {columns.map((col) => (
                                    <td key={col.accessor} className={cn("px-4 py-2.5", col.align && ALIGN_CLASS[col.align], col.className)}>
                                        {col.render ? col.render(row[col.accessor] ?? "-", row, idx) : String(row[col.accessor] ?? "-")}
                                    </td>
                                ))}
                                {hasActions && <td className="w-[1%] whitespace-nowrap px-2 py-2.5">{renderActions(row)}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
