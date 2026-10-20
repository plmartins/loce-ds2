import { cn } from './chunk-OLJVOECQ.js';
import { useState, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

function BarList({ items, showRank = false, emptyText = "Nada no per\xEDodo.", className }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  if (!items.length) {
    return /* @__PURE__ */ jsx("p", { className: cn("py-2 text-[13px] text-muted-foreground", className), children: emptyText });
  }
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-4", className), children: items.map((item, idx) => {
    const isZero = item.ratio <= 0;
    const isLeader = showRank && idx === 0 && !isZero;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "group flex items-start gap-2.5 rounded-xl px-2 py-1.5 -mx-2 transition-colors duration-100 hover:bg-foreground/[0.025]",
          isZero && "opacity-55"
        ),
        children: [
          showRank && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold tabular-nums",
                isLeader ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
              ),
              children: idx + 1
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "truncate text-[13px] font-semibold",
                    item.muted && "font-medium text-muted-foreground"
                  ),
                  children: item.label
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "flex shrink-0 items-center gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[13.5px] font-bold tabular-nums", children: item.value }),
                item.share !== void 0 && /* @__PURE__ */ jsxs("span", { className: "rounded-md bg-surface-2 px-1.5 py-0.5 text-[10.5px] font-bold text-muted-foreground tabular-nums", children: [
                  Math.round(item.share * 100),
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-2 overflow-hidden rounded-full bg-surface-2", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "h-full rounded-full transition-[width] duration-700 ease-out group-hover:brightness-110",
                  isLeader || !showRank ? "bg-gradient-to-r from-brand to-brand-sec" : "bg-brand/70"
                ),
                style: { width: mounted && !isZero ? `${Math.max(item.ratio * 100, 1.5)}%` : "0%" }
              }
            ) }),
            item.stats?.length ? /* @__PURE__ */ jsx("span", { className: "flex flex-wrap items-center gap-1", children: item.stats.map((stat) => /* @__PURE__ */ jsx("span", { className: "rounded-md bg-surface-1 px-1.5 py-0.5 text-[10.5px] font-medium text-muted-foreground tabular-nums ring-1 ring-border/60", children: stat }, stat)) }) : item.sub ? /* @__PURE__ */ jsx("span", { className: "text-[11px] text-muted-foreground tabular-nums", children: item.sub }) : null
          ] })
        ]
      },
      item.key ?? idx
    );
  }) });
}

export { BarList };
//# sourceMappingURL=chunk-OYGNGFLI.js.map
//# sourceMappingURL=chunk-OYGNGFLI.js.map