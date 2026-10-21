import { ACCENT_TILE } from './chunk-7BH3AWEG.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function WidgetCard({ title, subtitle, icon, accent = "brand", right, rightHint, className, bodyClassName, children }) {
  return /* @__PURE__ */ jsxs("section", { className: cn("flex flex-col rounded-2xl bg-card p-4 ring-1 ring-border", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-2.5", children: [
        icon && /* @__PURE__ */ jsx("span", { className: cn("flex size-8 shrink-0 items-center justify-center rounded-lg", ACCENT_TILE[accent]), children: icon }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "truncate text-[13.5px] font-bold leading-tight text-foreground", children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "truncate text-[11.5px] leading-tight text-muted-foreground", children: subtitle })
        ] })
      ] }),
      (right || rightHint) && /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 flex-col items-end", children: [
        right && (typeof right === "string" ? /* @__PURE__ */ jsx("span", { className: "text-[14px] font-extrabold leading-tight tabular-nums text-foreground", children: right }) : right),
        rightHint && /* @__PURE__ */ jsx("span", { className: "text-[10.5px] text-muted-foreground", children: rightHint })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: cn("min-w-0", bodyClassName), children })
  ] });
}

export { WidgetCard };
//# sourceMappingURL=chunk-YRCHN33F.js.map
//# sourceMappingURL=chunk-YRCHN33F.js.map