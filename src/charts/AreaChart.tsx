import { useId } from "react";
import {
    Area,
    AreaChart as RechartsArea,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { cn } from "../lib/utils";

export type AreaChartPoint = {
    label: string;
    value: number;
    /** Linha extra no tooltip (ex.: "3 vendas"). */
    sub?: string;
};

export type AreaChartProps = {
    data: AreaChartPoint[];
    valueFormatter?: (value: number) => string;
    height?: number;
    /** Modo sparkline: sem eixos, sem grid, sem tooltip. */
    minimal?: boolean;
    className?: string;
};

function ChartTooltip({
    active,
    payload,
    label,
    valueFormatter,
}: {
    active?: boolean;
    payload?: { payload: AreaChartPoint }[];
    label?: string;
    valueFormatter: (value: number) => string;
}) {
    if (!active || !payload?.length) return null;
    const point = payload[0].payload;
    return (
        <div className="rounded-xl border border-border bg-popover px-3 py-2 shadow-xl shadow-black/10">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
            <p className="text-[14px] font-bold tabular-nums">{valueFormatter(point.value)}</p>
            {point.sub && <p className="text-[11px] font-medium text-muted-foreground tabular-nums">{point.sub}</p>}
        </div>
    );
}

const compact = (value: number) =>
    new Intl.NumberFormat("pt-BR", { notation: "compact", compactDisplay: "short" }).format(value);

/**
 * Área com uma série na cor da marca. A cor vem de `currentColor`:
 * envolva com `text-brand` (padrão) ou qualquer text-*.
 */
export function AreaChart({ data, valueFormatter = compact, height = 260, minimal = false, className }: AreaChartProps) {
    const gradientId = useId();

    return (
        <div className={cn("w-full text-brand", className)} style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsArea data={data} margin={minimal ? { top: 2, right: 0, bottom: 0, left: 0 } : { top: 4, right: 8, bottom: 0, left: 0 }}>
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity={0.28} />
                            <stop offset="95%" stopColor="currentColor" stopOpacity={0.02} />
                        </linearGradient>
                    </defs>
                    {!minimal && (
                        <CartesianGrid vertical={false} strokeDasharray="3 5" stroke="var(--border)" />
                    )}
                    {!minimal && (
                        <XAxis
                            dataKey="label"
                            tickLine={false}
                            axisLine={false}
                            interval="preserveStartEnd"
                            minTickGap={24}
                            tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                            dy={6}
                        />
                    )}
                    {!minimal && (
                        <YAxis
                            width={44}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                            tickFormatter={compact}
                        />
                    )}
                    {!minimal && (
                        <Tooltip
                            cursor={{ stroke: "var(--border)", strokeWidth: 1 }}
                            content={<ChartTooltip valueFormatter={valueFormatter} />}
                        />
                    )}
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill={`url(#${gradientId})`}
                        activeDot={minimal ? false : { r: 4, strokeWidth: 2, stroke: "var(--card)" }}
                        isAnimationActive
                        animationDuration={600}
                    />
                </RechartsArea>
            </ResponsiveContainer>
        </div>
    );
}
