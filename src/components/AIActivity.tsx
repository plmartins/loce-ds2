import { useLayoutEffect, useRef, type HTMLAttributes } from 'react';
import { IconSparkle } from '../icons';
import { cn } from '../lib/utils';
export type AIActivityProps = HTMLAttributes<HTMLSpanElement> & { loading?: boolean; animated?: boolean; size?: 'default' | 'compact' };
/** Shared spectrum for glyph and text, with a single reflection during activity. */
export function AIActivity({ children = 'Pensando…', loading = true, animated = true, size = 'default', className, ...props }: AIActivityProps) {
    const host = useRef<HTMLSpanElement>(null);
    const glyph = useRef<HTMLSpanElement>(null);
    useLayoutEffect(() => {
        const element = host.current;
        const icon = glyph.current?.querySelector('svg');
        if (!element || !icon) return;
        const svg = icon.cloneNode(true) as SVGElement;
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        glyph.current!.style.maskImage = `url("data:image/svg+xml,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}")`;
        const measure = () => element.style.setProperty('--activity-width', `${element.getBoundingClientRect().width}px`);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(element);
        return () => observer.disconnect();
    }, []);
    return <span {...props} ref={host} className={cn('ds-ai-activity', className)} role="status" aria-live="polite" data-loading={loading && animated} data-size={size}>
        <span ref={glyph} className="ds-ai-activity-icon" aria-hidden="true"><IconSparkle size={20} /></span>
        <span className="ds-ai-activity-text">{children}</span>
    </span>;
}
