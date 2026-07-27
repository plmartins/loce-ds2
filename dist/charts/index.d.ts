import * as react from 'react';

type AreaChartPoint = {
    label: string;
    value: number;
    /** Linha extra no tooltip (ex.: "3 vendas"). */
    sub?: string;
};
type AreaChartProps = {
    data: AreaChartPoint[];
    valueFormatter?: (value: number) => string;
    height?: number;
    /** Modo sparkline: sem eixos, sem grid, sem tooltip. */
    minimal?: boolean;
    className?: string;
};
/**
 * Área com uma série na cor da marca. A cor vem de `currentColor`:
 * envolva com `text-brand` (padrão) ou qualquer text-*.
 */
declare function AreaChart({ data, valueFormatter, height, minimal, className }: AreaChartProps): react.JSX.Element;

export { AreaChart, type AreaChartPoint, type AreaChartProps };
