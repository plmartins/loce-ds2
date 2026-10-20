import * as react from 'react';

type SkeletonProps = {
    className?: string;
};
declare function Skeleton({ className }: SkeletonProps): react.JSX.Element;
declare function SkeletonText({ lines, className }: {
    lines?: number;
    className?: string;
}): react.JSX.Element;
/** Placeholder de card genérico (mesmo raio/superfície do Card). Listagens preferem SkeletonTable. */
declare function SkeletonCard({ className }: SkeletonProps): react.JSX.Element;
/** Skeleton de listagem no formato do DataTable: header + linhas com thumb, textos e pills. */
declare function SkeletonTable({ rows, className }: {
    rows?: number;
    className?: string;
}): react.JSX.Element;

export { Skeleton, SkeletonCard, type SkeletonProps, SkeletonTable, SkeletonText };
