import * as react from 'react';
import { ReactNode } from 'react';

type RankListSplit = {
    /** Parcela principal (absoluta), desenhada na cor da marca. */
    primary: number;
    /** Parcela secundária (absoluta), desenhada em teal. Já está dentro do total da linha. */
    secondary: number;
    /** Texto do chip da parcela principal, já formatado (ex.: "Produtos R$ 900"). */
    primaryLabel: string;
    /** Texto do chip da parcela secundária, já formatado (ex.: "Frete R$ 100"). */
    secondaryLabel: string;
};
type RankListItem = {
    key: string;
    label: ReactNode;
    /** Valor principal, já formatado. */
    value: string;
    /** Secundário à direita (ex.: "37 vendas · Ticket R$ 80"). Some no celular. */
    sub?: string;
    /** Largura do preenchimento (0 a 1, relativo ao maior item). */
    ratio: number;
    /** Participação no total (0 a 1), vira o "42%". */
    share?: number;
    /**
     * Divide a barra em duas parcelas (ex.: produtos x frete). Só na variante
     * "bar"; a conta aparece em chips numa linha própria.
     */
    split?: RankListSplit;
    muted?: boolean;
    /** Linha clicável (ex.: abre a listagem já filtrada). */
    onClick?: () => void;
};
type RankListProps = {
    items: RankListItem[];
    showRank?: boolean;
    emptyText?: string;
    /**
     * "bar" (default): barra fina sob o texto.
     * "background": preenchimento atrás da própria linha (preferido nos
     * rankings densos, como os de produtos); ignora `split`.
     */
    variant?: "bar" | "background";
    className?: string;
};
declare const formatShare: (share: number) => string;
/**
 * Ranking compacto: uma linha de texto por item e uma barra fina e sólida
 * logo abaixo, ou o preenchimento atrás da linha. Metade da altura do
 * BarList, pensado pra dashboards densos.
 */
declare function RankList({ items, showRank, emptyText, variant, className }: RankListProps): react.JSX.Element;

export { RankList, type RankListItem, type RankListProps, type RankListSplit, formatShare };
