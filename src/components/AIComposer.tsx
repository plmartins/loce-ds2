import { useLayoutEffect, useRef, useState, type ReactNode, type TextareaHTMLAttributes, type Ref } from 'react';
import { AISurface, type AISurfaceProps } from './AISurface';
import { cn } from '../lib/utils';
export function AIComposerRegion({ children, className }: { children: ReactNode; className?: string }) {
    const content = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>();
    useLayoutEffect(() => {
        const element = content.current;
        if (!element) return;
        const measure = () => setHeight(element.offsetHeight);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(element);
        return () => observer.disconnect();
    }, []);
    return <div className={cn('ds-ai-composer-region', className)} style={{ height }}><div ref={content}>{children}</div></div>;
}
export type AIComposerInputProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> & {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: () => void;
    canSubmit?: boolean;
    maxTextHeight?: number;
    minTextHeight?: number;
    ref?: Ref<HTMLTextAreaElement>;
};
export function AIComposerInput({ value, onChange, onSubmit, canSubmit = true, maxTextHeight = 112, minTextHeight = 48, className, style, ref, onKeyDown, onTransitionEnd, ...props }: AIComposerInputProps) {
    const input = useRef<HTMLTextAreaElement | null>(null);
    const measurement = useRef<HTMLTextAreaElement>(null);
    const [height, setHeight] = useState(minTextHeight);
    useLayoutEffect(() => {
        const measure = () => { if (measurement.current) setHeight(Math.max(minTextHeight, Math.min(measurement.current.scrollHeight, maxTextHeight))); };
        measure();
        const observer = new ResizeObserver(measure);
        if (measurement.current) observer.observe(measurement.current);
        return () => observer.disconnect();
    }, [value, minTextHeight, maxTextHeight]);
    const keepCaretVisible = () => {
        const element = input.current;
        if (element && document.activeElement === element && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) element.scrollTop = element.scrollHeight;
    };
    return <div className="ds-ai-composer-input">
        <textarea {...props} ref={element => { input.current = element; if (typeof ref === 'function') ref(element); else if (ref) ref.current = element; }} value={value} onChange={e => { onChange(e.target.value); requestAnimationFrame(keepCaretVisible); }} rows={1} className={cn('ds-ai-prompt', className)} style={{ ...style, height }} onTransitionEnd={e => { keepCaretVisible(); onTransitionEnd?.(e); }} onKeyDown={e => { onKeyDown?.(e); if (!e.defaultPrevented && e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing && onSubmit) { e.preventDefault(); if (canSubmit && !props.disabled) onSubmit(); } }} />
        <textarea className={cn('ds-ai-prompt ds-ai-prompt-measure', className)} style={style} ref={measurement} value={value} readOnly aria-hidden="true" tabIndex={-1} inert rows={1} />
    </div>;
}
export type AIComposerProps = AIComposerInputProps & { topSlot?: ReactNode; controls?: ReactNode; action?: ReactNode; effect?: boolean; loading?: boolean; animated?: boolean; surfaceProps?: AISurfaceProps };
export function AIComposer({ topSlot, controls, action, effect, loading, animated, surfaceProps, className, disabled, ...input }: AIComposerProps) {
    return <AISurface {...surfaceProps} className={cn('ds-ai-composer', className, surfaceProps?.className)} effect={effect} loading={loading} animated={animated} contentClassName="ds-ai-composer-content">
        <AIComposerRegion>{topSlot}</AIComposerRegion>
        <AIComposerInput {...input} disabled={disabled || loading} />
        <AIComposerRegion><div className="ds-ai-composer-toolbar"><div className="ds-ai-composer-controls">{controls}</div>{action}</div></AIComposerRegion>
    </AISurface>;
}
