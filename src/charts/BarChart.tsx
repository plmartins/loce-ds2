import { useId } from "react";
import {
    Bar,
    BarChart as RechartsBar,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { cn } from "../lib/utils";

export type BarChartPoint = {
    label: string;
    value: number;
    /** Linha extra no tooltip (ex.: "Faturou R$ 2.730,51"). */
    sub?: string;
};

export type BarChartProps = {
    data: BarChartPoint[];
    valueFormatter?: (value: number) => string;
    /** Encurta o rótulo do eixo (ex.: primeiro nome). */
    tickFormatter?: (label: string) => string;
    height?: number;
    className?: string;
};

function ChartTooltip({
    active,
    payload,
    label,
    valueFormatter,
}: {
    active?: boolean;
    payload?: { payload: BarChartPoint }[];
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

/** Barras de uma série na cor da marca (currentColor): envolva com text-brand ou outro text-*. */
export function BarChart({ data, valueFormatter = compact, tickFormatter, height = 260, className }: BarChartProps) {
    const gradientId = useId();

    return (
        <div className={cn("w-full text-brand", className)} style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsBar data={data} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity={0.95} />
                            <stop offset="100%" stopColor="currentColor" stopOpacity={0.65} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 5" stroke="var(--border)" />
                    <XAxis
                        dataKey="label"
                        tickLine={false}
                        axisLine={false}
                        interval={0}
                        tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                        tickFormatter={tickFormatter}
                        dy={6}
                    />
                    <YAxis
                        width={44}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                        tickFormatter={compact}
                    />
                    <Tooltip
                        cursor={{ fill: "var(--surface-2)", opacity: 0.5 }}
                        content={<ChartTooltip valueFormatter={valueFormatter} />}
                    />
                    <Bar dataKey="value" fill={`url(#${gradientId})`} radius={[6, 6, 0, 0]} maxBarSize={42} isAnimationActive animationDuration={600} />
                </RechartsBar>
            </ResponsiveContainer>
        </div>
    );
}
