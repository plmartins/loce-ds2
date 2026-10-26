import * as react from 'react';
import { ReactNode } from 'react';

type Column<T = any> = {
    header: string;
    accessor: string;
    render?: (value: any, row: T, index?: number) => ReactNode;
    sortable?: boolean;
    className?: string;
    align?: "left" | "center" | "right";
};
type Action<T = any> = {
    label: string;
    icon: ReactNode;
    onClick?: (row: T) => void;
    color?: string;
    condition?: (row: T) => boolean;
    disabled?: (row: T) => boolean;
    /** Com items, a ação principal vira um dropdown (ex.: botão de imprimir com 2 formas). */
    items?: {
        label: string;
        icon?: ReactNode;
        onClick: (row: T) => void;
        disabled?: (row: T) => boolean;
    }[];
};
type SortState = {
    accessor: string;
    direction: "asc" | "desc";
} | null;
type DataTableProps<T = any> = {
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
declare function DataTable<T extends Record<string, any>>({ data, columns, actions, mainActions, emptyText, rowKey, onRowClick, rowDisabled, className, sort, onSortChange, }: DataTableProps<T>): react.JSX.Element;

export { type Action, type Column, DataTable, type DataTableProps, type SortState };
