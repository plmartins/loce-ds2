import * as react from 'react';
import { HTMLAttributes, ReactNode } from 'react';

type AISurfaceProps = HTMLAttributes<HTMLDivElement> & {
    loading?: boolean;
    effect?: boolean;
    animated?: boolean;
    borderRadius?: number;
    contentClassName?: string;
};
/** Content stays mounted while the two beam layers crossfade. */
declare function AISurface({ loading, effect, animated, borderRadius, contentClassName, className, style, children, ...props }: AISurfaceProps): react.JSX.Element;
type AIWidgetProps = Omit<AISurfaceProps, 'title'> & {
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode;
};
declare function AIWidget({ title, description, icon, actions, children, ...props }: AIWidgetProps): react.JSX.Element;

export { AISurface, type AISurfaceProps, AIWidget, type AIWidgetProps };
