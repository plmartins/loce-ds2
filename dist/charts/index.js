import { cn } from '../chunk-HWAWA4NZ.js';
import { useId } from 'react';
import { ResponsiveContainer, AreaChart as AreaChart$1, CartesianGrid, XAxis, YAxis, Tooltip, Area, BarChart as BarChart$1, Bar } from 'recharts';
import { jsx, jsxs } from 'react/jsx-runtime';

function ChartTooltip({
  active,
  payload,
  label,
  valueFormatter
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-popover px-3 py-2 shadow-xl shadow-black/10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("p", { className: "text-[14px] font-bold tabular-nums", children: valueFormatter(point.value) }),
    point.sub && /* @__PURE__ */ jsx("p", { className: "text-[11px] font-medium text-muted-foreground tabular-nums", children: point.sub })
  ] });
}
var compact = (value) => new Intl.NumberFormat("pt-BR", { notation: "compact", compactDisplay: "short" }).format(value);
function AreaChart({ data, valueFormatter = compact, height = 260, minimal = false, className }) {
  const gradientId = useId();
  return /* @__PURE__ */ jsx("div", { className: cn("w-full text-brand", className), style: { height }, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(AreaChart$1, { data, margin: minimal ? { top: 2, right: 0, bottom: 0, left: 0 } : { top: 4, right: 8, bottom: 0, left: 0 }, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: gradientId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: 0.28 }),
      /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "currentColor", stopOpacity: 0.02 })
    ] }) }),
    !minimal && /* @__PURE__ */ jsx(CartesianGrid, { vertical: false, strokeDasharray: "3 5", stroke: "var(--border)" }),
    !minimal && /* @__PURE__ */ jsx(
      XAxis,
      {
        dataKey: "label",
        tickLine: false,
        axisLine: false,
        interval: "preserveStartEnd",
        minTickGap: 24,
        tick: { fill: "var(--muted-foreground)", fontSize: 11 },
        dy: 6
      }
    ),
    !minimal && /* @__PURE__ */ jsx(
      YAxis,
      {
        width: 44,
        tickLine: false,
        axisLine: false,
        tick: { fill: "var(--muted-foreground)", fontSize: 11 },
        tickFormatter: compact
      }
    ),
    !minimal && /* @__PURE__ */ jsx(
      Tooltip,
      {
        cursor: { stroke: "var(--border)", strokeWidth: 1 },
        content: /* @__PURE__ */ jsx(ChartTooltip, { valueFormatter })
      }
    ),
    /* @__PURE__ */ jsx(
      Area,
      {
        type: "monotone",
        dataKey: "value",
        stroke: "currentColor",
        strokeWidth: 2,
        fill: `url(#${gradientId})`,
        activeDot: minimal ? false : { r: 4, strokeWidth: 2, stroke: "var(--card)" },
        isAnimationActive: true,
        animationDuration: 600
      }
    )
  ] }) }) });
}
function ChartTooltip2({
  active,
  payload,
  label,
  valueFormatter
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-popover px-3 py-2 shadow-xl shadow-black/10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("p", { className: "text-[14px] font-bold tabular-nums", children: valueFormatter(point.value) }),
    point.sub && /* @__PURE__ */ jsx("p", { className: "text-[11px] font-medium text-muted-foreground tabular-nums", children: point.sub })
  ] });
}
var compact2 = (value) => new Intl.NumberFormat("pt-BR", { notation: "compact", compactDisplay: "short" }).format(value);
function BarChart({ data, valueFormatter = compact2, tickFormatter, height = 260, className }) {
  const gradientId = useId();
  return /* @__PURE__ */ jsx("div", { className: cn("w-full text-brand", className), style: { height }, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(BarChart$1, { data, margin: { top: 4, right: 8, bottom: 0, left: 0 }, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: gradientId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: 0.95 }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: 0.65 })
    ] }) }),
    /* @__PURE__ */ jsx(CartesianGrid, { vertical: false, strokeDasharray: "3 5", stroke: "var(--border)" }),
    /* @__PURE__ */ jsx(
      XAxis,
      {
        dataKey: "label",
        tickLine: false,
        axisLine: false,
        interval: 0,
        tick: { fill: "var(--muted-foreground)", fontSize: 11 },
        tickFormatter,
        dy: 6
      }
    ),
    /* @__PURE__ */ jsx(
      YAxis,
      {
        width: 44,
        tickLine: false,
        axisLine: false,
        tick: { fill: "var(--muted-foreground)", fontSize: 11 },
        tickFormatter: compact2
      }
    ),
    /* @__PURE__ */ jsx(
      Tooltip,
      {
        cursor: { fill: "var(--surface-2)", opacity: 0.5 },
        content: /* @__PURE__ */ jsx(ChartTooltip2, { valueFormatter })
      }
    ),
    /* @__PURE__ */ jsx(Bar, { dataKey: "value", fill: `url(#${gradientId})`, radius: [6, 6, 0, 0], maxBarSize: 42, isAnimationActive: true, animationDuration: 600 })
  ] }) }) });
}

export { AreaChart, BarChart };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map