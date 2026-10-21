import * as react from 'react';
import { ReactNode } from 'react';

type BarListItem = {
    key?: string;
    label: ReactNode;
    /** Valor já formatado (ex.: "R$ 581,28"). */
    value: string;
    /** Proporção da barra em relação ao maior item (0 a 1). */
    ratio: number;
    /** Participação no total (0 a 1): vira o "42%" ao lado do valor. */
    share?: number;
    /** Linha auxiliar (ex.: "5 vendas · ticket R$ 116,26"). */
    sub?: ReactNode;
    /** Estatísticas em chips (ex.: ["5 vendas", "ticket R$ 116,26"]); tem precedência sobre sub. */
    stats?: string[];
    /** Item apagado (ex.: "Sem vendedor"). */
    muted?: boolean;
};
type BarListProps = {
    items: BarListItem[];
    /** Numera as posições (1, 2, 3...) com o líder destacado. */
    showRank?: boolean;
    emptyText?: string;
    className?: string;
};
/** Ranking com barras na cor da marca; a largura anima na montagem. */
declare function BarList({ items, showRank, emptyText, className }: BarListProps): react.JSX.Element;

export { BarList, type BarListItem, type BarListProps };
