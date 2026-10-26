import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function Timeline({ items, className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col", className), children: items.map((item, i) => {
    const isLast = i === items.length - 1;
    return /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: cn("grid size-8 shrink-0 place-items-center rounded-xl", item.color || "bg-surface-2 text-muted-foreground"), children: item.icon }),
        !isLast && /* @__PURE__ */ jsx("div", { className: "min-h-6 w-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: cn("flex min-h-8 min-w-0 flex-1 flex-col justify-center pb-6", isLast && "pb-0"), children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[13px] font-semibold text-foreground", children: item.title }),
          item.time && /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[11px] font-medium text-muted-foreground", children: item.time })
        ] }),
        item.description && /* @__PURE__ */ jsx("span", { className: "block text-xs font-medium text-muted-foreground", children: item.description })
      ] })
    ] }, i);
  }) });
}

export { Timeline };
//# sourceMappingURL=chunk-77EPZ4GZ.js.map
//# sourceMappingURL=chunk-77EPZ4GZ.js.map