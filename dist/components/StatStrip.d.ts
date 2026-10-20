import * as react from 'react';
import { ReactNode } from 'react';
import { WidgetAccent } from '../lib/accents.js';
import { MetricDeltaTone } from './MetricCard.js';

type StatStripItem = {
    key: string;
    label: string;
    value: string;
    helper?: string;
    icon?: ReactNode;
    accent?: WidgetAccent;
    delta?: {
        label: string;
        tone: MetricDeltaTone;
    };
    onClick?: () => void;
    /** Métrica principal da faixa: valor maior e glow mais presente. */
    emphasis?: boolean;
    /** Realce do valor (ex.: text-destructive num contador de ruptura). */
    valueClassName?: string;
};
type StatStripProps = {
    items: StatStripItem[];
    /** Colunas no desktop (xl); abaixo disso a grade degrada sozinha. */
    columns?: 3 | 4 | 5 | 6;
    /** Troca os valores por skeleton mantendo o layout da faixa. */
    loading?: boolean;
    className?: string;
};
/**
 * Faixa de indicadores num card só: identidade do MetricCard (tile de ícone
 * com acento + glow no canto) com metade da altura de uma grade de cards.
 * Células clicáveis viram CTA com seta. É o padrão de KPIs dos dashboards
 * da suíte.
 */
declare function StatStrip({ items, columns, loading, className }: StatStripProps): react.JSX.Element;

export { StatStrip, type StatStripItem, type StatStripProps };
