export type AnchoredPosition = { top: number; left?: number; right?: number; maxWidth?: number };

/**
 * Posição do popover fixo ancorado no gatilho. Cabe à direita: alinha pela
 * esquerda do gatilho. Não cabe (gatilho encostado à direita da barra ou dentro
 * de um sheet): ancora pela direita do gatilho via `right`, e o popover cresce
 * para a esquerda com a largura natural, nunca além da margem da tela.
 * Sem largura medida ainda (primeiro render), fica na esquerda.
 */
export function anchoredPosition(rect: DOMRect, width: number, viewportWidth: number, margin = 8): AnchoredPosition {
    const top = rect.bottom + 4;
    if (!width || rect.left + width <= viewportWidth - margin) return { top, left: rect.left };
    const right = Math.max(margin, viewportWidth - rect.right);
    return { top, right, maxWidth: viewportWidth - right - margin };
}

/**
 * Largura natural do popover, independente de onde ele está agora: um elemento
 * fixed encolhe até a borda da tela, então medir na posição atual daria a
 * largura já cortada (e ela mudaria a cada reposicionamento).
 */
export function naturalWidth(el: HTMLElement | null): number {
    if (!el) return 0;
    const prev = el.style.cssText;
    el.style.left = "0px";
    el.style.right = "auto";
    el.style.maxWidth = "none";
    const width = el.offsetWidth;
    el.style.cssText = prev;
    return width;
}
