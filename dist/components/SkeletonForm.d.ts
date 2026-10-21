import * as react from 'react';

/** Skeleton de formulário: blocos de label+campo em grid, com coluna lateral opcional. */
declare function SkeletonForm({ withAside, className }: {
    withAside?: boolean;
    className?: string;
}): react.JSX.Element;

export { SkeletonForm };
