import { ACCENT_GLOW, ACCENT_TILE } from './chunk-7BH3AWEG.js';
import { Skeleton } from './chunk-Q7J24MVH.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconChevronRight } from './chunk-RGEIMOMI.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

var COLS = {
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6"
};
var DELTA_TONE = {
  positive: "bg-success/12 text-success",
  negative: "bg-destructive/10 text-destructive",
  neutral: "bg-surface-2 text-muted-foreground"
};
var CELL_CLASS = "group/cell relative flex min-w-0 flex-col justify-between gap-1.5 overflow-hidden border-l border-t border-border/60 bg-card p-3.5 text-left";
function StatStrip({ items, columns = 6, loading, className }) {
  return /* @__PURE__ */ jsx("section", { className: cn("overflow-hidden rounded-2xl bg-card ring-1 ring-border", className), children: /* @__PURE__ */ jsx("div", { className: cn("-ml-px -mt-px grid grid-cols-2 sm:grid-cols-3", COLS[columns]), children: items.map((item) => {
    const accent = item.accent ?? "brand";
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": true,
          className: cn(
            "pointer-events-none absolute -right-6 -top-10 size-24 rounded-full bg-gradient-to-b to-transparent blur-2xl",
            ACCENT_GLOW[accent],
            !item.emphasis && "opacity-70"
          )
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "relative flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "truncate text-[10.5px] font-bold uppercase tracking-[0.07em] text-muted-foreground", children: item.label }),
        item.icon && /* @__PURE__ */ jsx("span", { className: cn("flex size-7 shrink-0 items-center justify-center rounded-lg", ACCENT_TILE[accent]), children: item.icon })
      ] }),
      loading ? /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20" }) : /* @__PURE__ */ jsxs("span", { className: "relative flex min-w-0 flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "truncate font-extrabold leading-none tabular-nums tracking-tight",
              item.emphasis ? "text-[23px]" : "text-[19px]",
              item.valueClassName
            ),
            children: item.value
          }
        ),
        item.delta && /* @__PURE__ */ jsx("span", { className: cn("shrink-0 rounded-full px-1.5 py-0.5 text-[10.5px] font-bold tabular-nums", DELTA_TONE[item.delta.tone]), children: item.delta.label })
      ] }),
      item.helper && /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-0.5 truncate text-[11px] leading-tight text-muted-foreground", title: item.helper, children: [
        /* @__PURE__ */ jsx("span", { className: "truncate", children: item.helper }),
        item.onClick && /* @__PURE__ */ jsx(IconChevronRight, { size: 11, className: "shrink-0 opacity-70 transition-transform group-hover/cell:translate-x-0.5" })
      ] })
    ] });
    return item.onClick ? /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: item.onClick,
        className: cn(CELL_CLASS, "cursor-pointer transition-colors duration-75 hover:bg-surface-1 active:scale-[0.99]"),
        children: content
      },
      item.key
    ) : /* @__PURE__ */ jsx("div", { className: CELL_CLASS, children: content }, item.key);
  }) }) });
}

export { StatStrip };
//# sourceMappingURL=chunk-4KR3FYQ6.js.map
//# sourceMappingURL=chunk-4KR3FYQ6.js.map