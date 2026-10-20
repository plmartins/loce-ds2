import * as react from 'react';
import { ReactNode } from 'react';

type TooltipProps = {
    content: ReactNode;
    children: ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    /** Envolve o filho num <span> (necessário quando o filho não aceita ref). */
    wrap?: boolean;
    className?: string;
};
declare function Tooltip({ content, children, side, wrap, className }: TooltipProps): react.JSX.Element;

export { Tooltip, type TooltipProps };
