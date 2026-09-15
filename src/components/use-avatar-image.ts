import { useEffect, useRef, useState } from "react";

/** Fotos já exibidas nesta sessão: reaparecem na hora, sem passar pelo placeholder. */
const revealed = new Set<string>();

/**
 * Estado de carregamento da foto de um avatar: placeholder enquanto a imagem
 * baixa, fade-in assim que ela chega, fallback em erro.
 */
export function useAvatarImage(src?: string | null) {
    const [imgError, setImgError] = useState(false);
    const [loaded, setLoaded] = useState(() => !!src && revealed.has(src));
    const imgRef = useRef<HTMLImageElement>(null);

    // Uma URL nova (troca de foto) merece nova tentativa e novo loading.
    useEffect(() => {
        setImgError(false);
        const img = imgRef.current;
        // Imagem em cache pode completar antes do onLoad ser ligado.
        const done = (!!src && revealed.has(src)) || !!(img && img.complete && img.naturalWidth > 0);
        if (done && src) revealed.add(src);
        setLoaded(done);
    }, [src]);

    const onLoad = () => {
        if (src) revealed.add(src);
        setLoaded(true);
    };
    const onError = () => setImgError(true);

    return { imgRef, imgError, ready: loaded, onLoad, onError };
}
