import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import { AICard } from './AICard';
import { AIIcon } from './AIIcon';
import { cn } from '../lib/utils';
export type AISurfaceProps = HTMLAttributes<HTMLDivElement> & {
    loading?: boolean;
    effect?: boolean;
    animated?: boolean;
    borderRadius?: number;
    contentClassName?: string;
};
/** Content stays mounted while the two beam layers crossfade. */
export function AISurface({ loading = false, effect = true, animated = true, borderRadius = 20, contentClassName, className, style, children, ...props }: AISurfaceProps) {
    return <div {...props} className={cn('ds-ai-surface', className)} data-loading={loading} style={{ '--ds-ai-radius': `${borderRadius}px`, ...style } as CSSProperties}>
        {effect && animated && <div className="ds-ai-surface-effects" aria-hidden="true">
            <AICard beamType="md" borderRadius={borderRadius} className="ds-ai-surface-beam ds-ai-idle" surfaceClassName="ds-ai-effect-content"><span /></AICard>
            <AICard beamType="pulse-inner" borderRadius={borderRadius} className="ds-ai-surface-beam ds-ai-busy" surfaceClassName="ds-ai-effect-content"><span /></AICard>
        </div>}
        <div className={cn('ds-ai-surface-content', contentClassName)}>{children}</div>
    </div>;
}
export type AIWidgetProps = Omit<AISurfaceProps, 'title'> & { title?: ReactNode; description?: ReactNode; icon?: ReactNode; actions?: ReactNode };
export function AIWidget({ title, description, icon = <AIIcon size={28} />, actions, children, ...props }: AIWidgetProps) {
    return <AISurface {...props}>
        {title && <header className="ds-ai-widget-header">{icon}<div><h3>{title}</h3>{description && <p>{description}</p>}</div></header>}
        {children}
        {actions && <div className="ds-ai-widget-actions">{actions}</div>}
    </AISurface>;
}
