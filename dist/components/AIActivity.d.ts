import * as react from 'react';
import { HTMLAttributes } from 'react';

type AIActivityProps = HTMLAttributes<HTMLSpanElement> & {
    loading?: boolean;
    animated?: boolean;
    size?: 'default' | 'compact';
};
/** Shared spectrum for glyph and text, with a single reflection during activity. */
declare function AIActivity({ children, loading, animated, size, className, ...props }: AIActivityProps): react.JSX.Element;

export { AIActivity, type AIActivityProps };
