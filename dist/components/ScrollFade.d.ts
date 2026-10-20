import * as react from 'react';

type ScrollFadeProps = {
    children: React.ReactNode;
    className?: string;
    fadeHeight?: number;
    position?: "bottom" | "top" | "both";
};
/** Contêiner rolável com fade nas bordas indicando conteúdo além da dobra. */
declare function ScrollFade({ children, className, fadeHeight, position }: ScrollFadeProps): react.JSX.Element;

export { ScrollFade, type ScrollFadeProps };
