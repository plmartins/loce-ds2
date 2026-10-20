import * as react from 'react';

type SeparatorProps = {
    className?: string;
    orientation?: "horizontal" | "vertical";
    label?: string;
};
declare function Separator({ className, orientation, label }: SeparatorProps): react.JSX.Element;

export { Separator, type SeparatorProps };
