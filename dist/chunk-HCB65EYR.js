import { Skeleton } from './chunk-Q7J24MVH.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconArrowRight } from './chunk-TKHJZSF4.js';
import { jsx, jsxs } from 'react/jsx-runtime';

var ACCENT_TILE = {
  brand: "bg-brand/10 text-brand",
  green: "bg-success/12 text-success",
  red: "bg-destructive/10 text-destructive",
  amber: "bg-warning/15 text-warning",
  purple: "bg-[#8b5cf6]/12 text-[#8b5cf6]",
  pink: "bg-[#ec4899]/12 text-[#ec4899]",
  teal: "bg-[#14b8a6]/12 text-[#14b8a6]"
};
var ACCENT_GLOW = {
  brand: "from-brand/[0.07]",
  green: "from-success/[0.08]",
  red: "from-destructive/[0.07]",
  amber: "from-warning/[0.1]",
  purple: "from-[#8b5cf6]/[0.08]",
  pink: "from-[#ec4899]/[0.08]",
  teal: "from-[#14b8a6]/[0.08]"
};
var DELTA_CLASS = {
  positive: "bg-success/12 text-success",
  negative: "bg-destructive/10 text-destructive",
  neutral: "bg-surface-2 text-foreground/60"
};
function MetricCard({ label, value, helper, delta, icon, accent = "brand", loading, className }) {
  if (loading) return /* @__PURE__ */ jsx(Skeleton, { className: cn("h-[104px] rounded-2xl", className) });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xs",
        "transition-all duration-150 hover:-translate-y-px hover:border-brand/25 hover:shadow-md hover:shadow-black/[0.05]",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: cn("pointer-events-none absolute -right-8 -top-10 size-32 rounded-full bg-gradient-to-b to-transparent blur-2xl", ACCENT_GLOW[accent]) }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.07em] text-muted-foreground", children: label }),
          icon && /* @__PURE__ */ jsx("span", { className: cn("flex size-8 shrink-0 items-center justify-center rounded-lg", ACCENT_TILE[accent]), children: icon })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-extrabold leading-none tracking-tight tabular-nums", children: value }),
          delta && /* @__PURE__ */ jsxs(
            "span",
            {
              className: cn(
                "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-bold tabular-nums",
                DELTA_CLASS[delta.tone]
              ),
              children: [
                delta.tone !== "neutral" && /* @__PURE__ */ jsx(IconArrowRight, { size: 10, className: delta.tone === "positive" ? "-rotate-45" : "rotate-45" }),
                delta.label
              ]
            }
          )
        ] }),
        helper && /* @__PURE__ */ jsx("span", { className: "text-[11.5px] leading-snug text-muted-foreground", children: helper })
      ]
    }
  );
}

export { MetricCard };
//# sourceMappingURL=chunk-HCB65EYR.js.map
//# sourceMappingURL=chunk-HCB65EYR.js.map