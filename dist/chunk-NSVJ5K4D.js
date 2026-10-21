import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

var clickableProps = (onClick) => onClick ? {
  role: "button",
  tabIndex: 0,
  onClick,
  onKeyDown: (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  }
} : {};
var CLICKABLE_CLASS = "cursor-pointer transition-colors hover:bg-foreground/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";
var clamp = (ratio) => Math.max(Math.min(ratio, 1), 0) * 100;
var formatShare = (share) => {
  const pct = share * 100;
  if (pct > 0 && pct < 1) return "<1%";
  return `${Math.round(pct)}%`;
};
var rankClass = (index, ratio) => cn(
  "flex size-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold tabular-nums",
  index === 0 && ratio > 0 ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
);
function RankList({ items, showRank, emptyText = "Nada por aqui no per\xEDodo.", variant = "bar", className }) {
  if (!items.length) {
    return /* @__PURE__ */ jsx("p", { className: "py-4 text-center text-[12px] text-muted-foreground", children: emptyText });
  }
  if (variant === "background") {
    return /* @__PURE__ */ jsx("ul", { className: cn("flex flex-col gap-0.5", className), children: items.map((item, index) => /* @__PURE__ */ jsxs("li", { className: cn("relative overflow-hidden rounded-lg", item.onClick && CLICKABLE_CLASS), ...clickableProps(item.onClick), children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute inset-y-0 left-0 rounded-lg bg-brand/[0.08] dark:bg-brand/[0.14]", style: { width: `${clamp(item.ratio)}%` } }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-2 px-2 py-1.5", children: [
        showRank && /* @__PURE__ */ jsx("span", { className: rankClass(index, item.ratio), children: index + 1 }),
        /* @__PURE__ */ jsx("span", { className: cn("min-w-0 flex-1 truncate text-[13px] font-semibold", item.muted && "text-muted-foreground"), children: item.label }),
        item.sub && /* @__PURE__ */ jsx("span", { className: "hidden shrink-0 text-[11px] tabular-nums text-muted-foreground sm:inline", children: item.sub }),
        /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[13px] font-bold tabular-nums", children: item.value }),
        item.share !== void 0 && /* @__PURE__ */ jsx("span", { className: "w-9 shrink-0 text-right text-[10px] font-semibold tabular-nums text-muted-foreground", children: formatShare(item.share) })
      ] })
    ] }, item.key)) });
  }
  return /* @__PURE__ */ jsx("ul", { className: cn("flex flex-col gap-1", className), children: items.map((item, index) => {
    const width = clamp(item.ratio);
    const splitTotal = item.split ? item.split.primary + item.split.secondary : 0;
    const secondaryShare = item.split && splitTotal > 0 ? item.split.secondary / splitTotal : 0;
    const primaryWidth = width * (1 - secondaryShare);
    const secondaryWidth = width * secondaryShare;
    const hasChips = Boolean(item.split && item.split.secondary > 0);
    return /* @__PURE__ */ jsxs("li", { className: cn("flex flex-col gap-[5px] rounded-lg px-2 py-1", item.onClick && CLICKABLE_CLASS), ...clickableProps(item.onClick), children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        showRank && /* @__PURE__ */ jsx("span", { className: rankClass(index, item.ratio), children: index + 1 }),
        /* @__PURE__ */ jsx("span", { className: cn("min-w-0 flex-1 truncate text-[13px] font-semibold", item.muted && "text-muted-foreground"), children: item.label }),
        item.sub && /* @__PURE__ */ jsx("span", { className: "hidden shrink-0 text-[11px] tabular-nums text-muted-foreground sm:inline", children: item.sub }),
        !hasChips && /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[13px] font-bold tabular-nums", children: item.value }),
        item.share !== void 0 && /* @__PURE__ */ jsx("span", { className: "w-9 shrink-0 text-right text-[10px] font-semibold tabular-nums text-muted-foreground", children: formatShare(item.share) })
      ] }),
      hasChips && item.split && /* @__PURE__ */ jsxs("div", { className: cn("flex flex-wrap items-center justify-end gap-x-1 gap-y-1", showRank && "pl-7"), children: [
        /* @__PURE__ */ jsx("span", { className: "rounded-full bg-brand/10 px-1.5 py-0.5 text-[10.5px] font-bold tabular-nums text-brand", children: item.split.primaryLabel }),
        /* @__PURE__ */ jsxs("span", { className: "rounded-full bg-teal-500/10 px-1.5 py-0.5 text-[10.5px] font-bold tabular-nums text-teal-600 dark:text-teal-400", children: [
          "+ ",
          item.split.secondaryLabel
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "pl-1 text-[13px] font-bold tabular-nums", children: [
          "= ",
          item.value
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: cn("h-[5px] rounded-full bg-surface-2", showRank && "ml-7"), children: /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full gap-[2px]", children: [
        primaryWidth > 0 && /* @__PURE__ */ jsx("span", { className: "h-full rounded-full bg-brand transition-[width] duration-500", style: { width: `${primaryWidth}%` } }),
        secondaryWidth > 0 && /* @__PURE__ */ jsx("span", { className: "h-full rounded-full bg-teal-500 dark:bg-teal-400", style: { width: `${secondaryWidth}%`, minWidth: 4 } })
      ] }) })
    ] }, item.key);
  }) });
}

export { RankList, formatShare };
//# sourceMappingURL=chunk-NSVJ5K4D.js.map
//# sourceMappingURL=chunk-NSVJ5K4D.js.map