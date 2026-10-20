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

type BarChartPoint = {
    label: string;
    value: number;
    /** Linha extra no tooltip (ex.: "Faturou R$ 2.730,51"). */
    sub?: string;
};
type BarChartProps = {
    data: BarChartPoint[];
    valueFormatter?: (value: number) => string;
    /** Encurta o rótulo do eixo (ex.: primeiro nome). */
    tickFormatter?: (label: string) => string;
    height?: number;
    className?: string;
};
/** Barras de uma série na cor da marca (currentColor): envolva com text-brand ou outro text-*. */
declare function BarChart({ data, valueFormatter, tickFormatter, height, className }: BarChartProps): react.JSX.Element;

export { AreaChart, type AreaChartPoint, type AreaChartProps, BarChart, type BarChartPoint, type BarChartProps };
