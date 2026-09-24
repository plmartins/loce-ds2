/**
 * Left do popover fixo ancorado no gatilho. Por padrão alinha pela esquerda do
 * gatilho; se não couber até a borda da tela (gatilho encostado à direita da
 * barra ou dentro de um sheet), alinha pela direita do gatilho, nunca antes da
 * margem. Sem largura medida ainda (primeiro render), fica na esquerda.
 */
export function anchoredLeft(rect: DOMRect, width: number, viewportWidth: number, margin = 8): number {
    if (!width || rect.left + width <= viewportWidth - margin) return rect.left;
    return Math.max(margin, Math.min(rect.right, viewportWidth - margin) - width);
}
