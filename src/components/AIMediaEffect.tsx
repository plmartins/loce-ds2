import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { ImageGeneration, type ImageGenerationHandle, type ImageGenerationPreset } from 'img-fx';
import { AIIcon } from './AIIcon';

class EffectBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
    state = { failed: false };
    static getDerivedStateFromError() { return { failed: true }; }
    render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function EffectFallback({ reveal, onComplete, children }: { reveal: boolean; onComplete: () => void; children: ReactNode }) {
    const callback = useRef(onComplete); callback.current = onComplete;
    useEffect(() => { if (reveal) callback.current(); }, [reveal]);
    return <>{children}</>;
}

type Props = {
    dark: boolean;
    animated: boolean;
    preset?: ImageGenerationPreset;
    reveal?: boolean;
    imageSrc?: string;
    /** For video, imageSrc is the poster and readyContent is the ready player. */
    readyContent?: ReactNode;
    onRevealed?: () => void;
};

/** The generator stays mounted until its real pixel reveal reaches `visible`. */
export function AIMediaEffect({ dark, animated, preset = 'pixels-organic', reveal = false, imageSrc, readyContent, onRevealed }: Props) {
    const host = useRef<HTMLDivElement>(null);
    const effect = useRef<ImageGenerationHandle>(null);
    const callback = useRef(onRevealed);
    callback.current = onRevealed;
    const [visible, setVisible] = useState(false);
    const [hidden, setHidden] = useState(typeof document !== 'undefined' && document.hidden);
    const [reduced, setReduced] = useState(() => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches);
    const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
    const [loadError, setLoadError] = useState(false);
    const [complete, setComplete] = useState(false);
    const ready = !!imageSrc && loadedSrc === imageSrc;

    useEffect(() => {
        const preference = matchMedia('(prefers-reduced-motion: reduce)');
        const onMotion = () => setReduced(preference.matches);
        const onVisibility = () => setHidden(document.hidden);
        const observer = new IntersectionObserver(entries => setVisible(entries[0].isIntersecting));
        if (host.current) observer.observe(host.current);
        preference.addEventListener('change', onMotion);
        document.addEventListener('visibilitychange', onVisibility);
        return () => { observer.disconnect(); preference.removeEventListener('change', onMotion); document.removeEventListener('visibilitychange', onVisibility); };
    }, []);

    useEffect(() => {
        let cancelled = false;
        setLoadedSrc(null); setLoadError(false); setComplete(false);
        if (!imageSrc) return;
        const image = new Image();
        image.onload = async () => {
            try { await image.decode(); } catch { /* onload already confirmed a usable image */ }
            if (!cancelled) setLoadedSrc(imageSrc);
        };
        image.onerror = () => { if (!cancelled) setLoadError(true); };
        image.src = imageSrc;
        return () => { cancelled = true; image.onload = null; image.onerror = null; };
    }, [imageSrc]);

    useEffect(() => {
        if (!reveal) {
            setComplete(false);
            if (effect.current?.isImageActive()) effect.current.triggerRegenerate({ autoReveal: false });
            return;
        }
        if (loadError || !imageSrc) { setComplete(true); callback.current?.(); return; }
        if (!ready) return;
        if (!animated || reduced) { setComplete(true); callback.current?.(); return; }
        // A paused engine ignores triggerReveal. Retry when the preview becomes visible.
        if (!visible || hidden) return;
        // Wait for the engine layout effect and its image pool to commit.
        const frame = requestAnimationFrame(() => effect.current?.triggerReveal({ hold: 'manual' }));
        // A lost graphics context must never keep a completed result hidden.
        const timeout = setTimeout(() => { setComplete(true); callback.current?.(); }, 10000);
        return () => { cancelAnimationFrame(frame); clearTimeout(timeout); };
    }, [reveal, ready, animated, reduced, loadError, imageSrc, visible, hidden]);

    const finalContent = readyContent ?? <img src={imageSrc} alt="Resultado da geração" className="ds-ai-revealed-image" />;
    return <div ref={host} className="ds-ai-media-effect" data-reveal={complete && reveal ? 'complete' : reveal ? 'revealing' : 'generating'} aria-label={complete && reveal ? 'Mídia gerada' : 'Efeito de geração de imagem'} role="group">
        <div className="ds-ai-effect-base" aria-hidden="true"><AIIcon size={30} /></div>
        {!reduced && <EffectBoundary fallback={<EffectFallback reveal={reveal} onComplete={() => callback.current?.()}>{ready && reveal ? finalContent : null}</EffectFallback>}>
            <ImageGeneration ref={effect} images={ready ? imageSrc : undefined} preset={preset} theme={dark ? 'dark' : 'light'} autoReveal={false} revealInitialDelay={0} paused={!animated || hidden || !visible || (complete && reveal)} borderRadius={0} onCycle={event => { if (event.phase === 'visible') { setComplete(true); callback.current?.(); } }} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <div style={{ height: '100%', width: '100%' }} />
            </ImageGeneration>
        </EffectBoundary>}
        {complete && reveal && ready && <div className="ds-ai-revealed-content">{finalContent}</div>}
        {loadError && <span className="ds-ai-effect-fallback">Não foi possível carregar o resultado.</span>}
        {reduced && !reveal && <span className="ds-ai-effect-fallback">Movimento reduzido ativado</span>}
    </div>;
}
