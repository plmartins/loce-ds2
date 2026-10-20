import * as react from 'react';
import { ReactNode } from 'react';

type TableHeadingProps = {
    title: string;
    /** Explicação curta; vai pro tooltip do ícone, não pra tela. */
    hint?: string;
    /** Controle à direita (ordenação, filtro, contador). */
    right?: ReactNode;
    className?: string;
};
/**
 * Linha de título de uma tabela ou lista fora de card: título compacto com
 * o ícone de informação (hint no tooltip) e um controle alinhado à direita.
 * Substitui o par título + frase solta acima das tabelas. O px-5 alinha o
 * título com o texto da primeira coluna da DataTable.
 */
declare function TableHeading({ title, hint, right, className }: TableHeadingProps): react.JSX.Element;

export { TableHeading, type TableHeadingProps };
