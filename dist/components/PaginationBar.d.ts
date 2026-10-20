import * as react from 'react';

type PaginationBarProps = {
    currentPage: number;
    perPage: number;
    totalResults: number;
    totalPages: number;
    action: (page: number) => void;
    className?: string;
};
declare function PaginationBar({ currentPage, perPage, totalResults, totalPages, action, className }: PaginationBarProps): react.JSX.Element | null;

export { PaginationBar, type PaginationBarProps };
