import { useEffect, useRef, useState } from "react";

/** Fotos já reveladas nesta sessão: reaparecem na hora, sem placeholder de novo. */
const revealed = new Set<string>();

/** Tempo mínimo do placeholder na primeira exibição — foto em cache carregaria
    em 0ms e o loading nem seria visto. */
const MIN_PLACEHOLDER_MS = 500;

/**
 * Estado de carregamento da foto de um avatar: placeholder até a imagem
 * baixar (e o tempo mínimo passar), fade-in depois, fallback em erro.
 */
export function useAvatarImage(src?: string | null) {
    const known = !!src && revealed.has(src);
    const [imgError, setImgError] = useState(false);
    const [loaded, setLoaded] = useState(known);
    const [minElapsed, setMinElapsed] = useState(known);
    const imgRef = useRef<HTMLImageElement>(null);

    // Uma URL nova (troca de foto) merece nova tentativa e novo loading.
    useEffect(() => {
        const isKnown = !!src && revealed.has(src);
        setImgError(false);
        setLoaded(isKnown);
        setMinElapsed(isKnown);
        if (!src || isKnown) return;

        const timer = setTimeout(() => setMinElapsed(true), MIN_PLACEHOLDER_MS);
        // Imagem já em cache pode completar antes do onLoad ser ligado.
        const img = imgRef.current;
        if (img && img.complete && img.naturalWidth > 0) {
            revealed.add(src);
            setLoaded(true);
        }
        return () => clearTimeout(timer);
    }, [src]);

    const onLoad = () => {
        if (src) revealed.add(src);
        setLoaded(true);
    };
    const onError = () => setImgError(true);

    return { imgRef, imgError, ready: loaded && minElapsed, onLoad, onError };
}
