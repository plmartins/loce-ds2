import { lazy, Suspense, useEffect, useState, useSyncExternalStore, type HTMLAttributes } from 'react';
import type { ImageGenerationPreset } from 'img-fx';
import { AICard } from './AICard';
import { AIIcon } from './AIIcon';
import { cn } from '../lib/utils';
const Effect = lazy(() => import('./AIMediaEffect').then(module => ({ default: module.AIMediaEffect })));
const readTheme = () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' as const : 'light' as const;
function subscribeTheme(update: () => void) {
    const observer = new MutationObserver(update); observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] }); return () => observer.disconnect();
}
export type AIMediaPreviewProps = HTMLAttributes<HTMLDivElement> & {
    state: 'generating' | 'ready' | 'failed';
    /** Image URL or video poster. Never pass the MP4 URL here. */
    src?: string;
    preset?: ImageGenerationPreset;
    label?: string;
    animated?: boolean;
    theme?: 'light' | 'dark';
    borderRadius?: number;
    onRevealed?: () => void;
};
/** Keep this component mounted through generating → ready for the real reveal. */
export function AIMediaPreview({ state, src, preset, label = 'Gerando mídia…', animated = true, theme, borderRadius = 0, onRevealed, children, className, style, ...props }: AIMediaPreviewProps) {
    const appTheme = useSyncExternalStore(subscribeTheme, readTheme, () => 'light' as const);
    const [pendingReveal, setPendingReveal] = useState(state === 'generating');
    useEffect(() => { if (state === 'generating') setPendingReveal(true); }, [state]);
    const active = state === 'generating' || (state === 'ready' && pendingReveal);
    const [fadingBeam, setFadingBeam] = useState(false);
    useEffect(() => {
        if (active) { setFadingBeam(true); return; }
        const timer = setTimeout(() => setFadingBeam(false), 500);
        return () => clearTimeout(timer);
    }, [active]);
    return <div {...props} className={cn('ds-ai-media-preview', className)} style={{ borderRadius, ...style }} data-state={state} aria-busy={active || undefined}>
        <div className="ds-ai-media-result" style={{ visibility: active ? 'hidden' : undefined }}>{children}</div>
        {active && <div className="ds-ai-media-overlay" role="status" aria-label={state === 'generating' ? label : 'Revelando resultado'}>
            <div className="ds-ai-effect-base" aria-hidden="true"><AIIcon size={30} /></div>
            <Suspense fallback={null}><Effect preset={preset} dark={(theme ?? appTheme) === 'dark'} animated={animated} imageSrc={src} reveal={state === 'ready'} onRevealed={() => { setPendingReveal(false); onRevealed?.(); }} /></Suspense>
        </div>}
        {(active || fadingBeam) && <AICard aria-hidden="true" animated={animated} beamType="pulse-inner" borderRadius={borderRadius} className="ds-ai-media-beam" style={{ opacity: active ? 1 : 0 }} surfaceClassName="ds-ai-effect-content"><span /></AICard>}
    </div>;
}
