import * as react from 'react';
import { HTMLAttributes, ReactNode } from 'react';

type AISpectrumProps = HTMLAttributes<HTMLSpanElement> & {
    /** Sem filhos, renderiza só o glifo. */
    children?: ReactNode;
    iconSize?: number;
    hideIcon?: boolean;
};
/**
 * Glifo e texto no espectro de IA, ESTÁTICOS e inteiros: as nove cores da
 * faísca (--ai-icon-*, por plataforma) esticadas de ponta a ponta, sem
 * escurecer e sem animação. Pra rótulos de
 * IA em repouso (o AIActivity é a versão em atividade, com reflexo).
 */
declare function AISpectrum({ children, iconSize, hideIcon, className, ...props }: AISpectrumProps): react.JSX.Element;

export { AISpectrum, type AISpectrumProps };
