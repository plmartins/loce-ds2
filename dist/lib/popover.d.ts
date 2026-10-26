type AnchoredPosition = {
    top: number;
    left?: number;
    right?: number;
    maxWidth?: number;
};
/**
 * Posição do popover fixo ancorado no gatilho. Cabe à direita: alinha pela
 * esquerda do gatilho. Não cabe (gatilho encostado à direita da barra ou dentro
 * de um sheet): ancora pela direita do gatilho via `right`, e o popover cresce
 * para a esquerda com a largura natural, nunca além da margem da tela.
 * Sem largura medida ainda (primeiro render), fica na esquerda.
 */
declare function anchoredPosition(rect: DOMRect, width: number, viewportWidth: number, margin?: number): AnchoredPosition;
/**
 * Largura natural do popover, independente de onde ele está agora: um elemento
 * fixed encolhe até a borda da tela, então medir na posição atual daria a
 * largura já cortada (e ela mudaria a cada reposicionamento).
 */
declare function naturalWidth(el: HTMLElement | null): number;

export { type AnchoredPosition, anchoredPosition, naturalWidth };
