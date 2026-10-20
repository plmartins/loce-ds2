import * as react from 'react';

type ImageWithZoomProps = {
    src: string;
    fallbackSrc?: string;
    fallbackClassName?: string;
    width: number;
    height: number;
    className?: string;
    onLoad?: () => void;
    onError?: () => void;
    isDisabled?: boolean;
};
/** Imagem clicável que abre em lightbox com zoom por scroll e arraste. */
declare function ImageWithZoom({ src, fallbackSrc, fallbackClassName, width, height, className, onLoad, onError, isDisabled }: ImageWithZoomProps): react.JSX.Element;

export { ImageWithZoom, type ImageWithZoomProps };
