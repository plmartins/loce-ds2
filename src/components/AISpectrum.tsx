import { useLayoutEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import { IconSparkle } from "../icons";
import { cn } from "../lib/utils";

export type AISpectrumProps = HTMLAttributes<HTMLSpanElement> & {
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
export function AISpectrum({ children, iconSize = 14, hideIcon = false, className, ...props }: AISpectrumProps) {
    const glyph = useRef<HTMLSpanElement>(null);
    useLayoutEffect(() => {
        const icon = glyph.current?.querySelector("svg");
        if (!icon || !glyph.current) return;
        const svg = icon.cloneNode(true) as SVGElement;
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        const url = `url("data:image/svg+xml,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}")`;
        glyph.current.style.maskImage = url;
        glyph.current.style.webkitMaskImage = url;
    }, []);
    return <span {...props} className={cn("ds-ai-spectrum", className)}>
        {!hideIcon && <span ref={glyph} className="ds-ai-spectrum-glyph" style={{ width: iconSize, height: iconSize }} aria-hidden="true"><IconSparkle size={iconSize} /></span>}
        {children != null && <span className="ds-ai-spectrum-text">{children}</span>}
    </span>;
}
