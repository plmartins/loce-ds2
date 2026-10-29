import * as react from 'react';

/**
 * Estado de carregamento da foto de um avatar: placeholder enquanto a imagem
 * baixa, fade-in assim que ela chega, fallback em erro.
 */
declare function useAvatarImage(src?: string | null): {
    imgRef: react.RefObject<HTMLImageElement | null>;
    imgError: boolean;
    ready: boolean;
    onLoad: () => void;
    onError: () => void;
};

export { useAvatarImage };
