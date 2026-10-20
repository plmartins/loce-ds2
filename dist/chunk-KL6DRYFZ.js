import { IconSearch } from './chunk-4CU3ZCHH.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function RingedTile({ icon }) {
  return /* @__PURE__ */ jsxs("span", { className: "relative flex size-24 shrink-0 items-center justify-center", children: [
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/80" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/45" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute right-1 top-2 size-1.5 rounded-full bg-brand/40" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute bottom-3 left-0 size-1 rounded-full bg-brand/30" }),
    /* @__PURE__ */ jsx("span", { className: "relative z-10 flex size-12 items-center justify-center rounded-xl text-white shadow-lg shadow-brand/25 ds-btn-3d [--btn-bg:var(--accent-brand)]", children: icon ?? /* @__PURE__ */ jsx(IconSearch, { size: 21 }) })
  ] });
}
function EmptyState({
  icon,
  title = "Nenhum resultado encontrado",
  description = "Ajuste a busca ou os filtros e tente de novo.",
  action,
  variant = "horizontal",
  className
}) {
  if (variant === "centered") {
    return /* @__PURE__ */ jsxs("div", { className: cn("relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center", className), children: [
      /* @__PURE__ */ jsx(RingedTile, { icon }),
      /* @__PURE__ */ jsxs("div", { className: "z-10 mt-3 flex max-w-sm flex-col gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold", children: title }),
        description && /* @__PURE__ */ jsx("span", { className: "text-[12.5px] leading-snug text-muted-foreground", children: description })
      ] }),
      action && /* @__PURE__ */ jsx("div", { className: "z-10 mt-4", children: action })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card px-6 py-8", className), children: [
    /* @__PURE__ */ jsx(RingedTile, { icon }),
    /* @__PURE__ */ jsxs("div", { className: "z-10 flex min-w-0 flex-col gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold", children: title }),
      description && /* @__PURE__ */ jsx("span", { className: "max-w-md text-[12.5px] leading-snug text-muted-foreground", children: description }),
      action && /* @__PURE__ */ jsx("div", { className: "mt-3", children: action })
    ] })
  ] });
}

export { EmptyState };
//# sourceMappingURL=chunk-KL6DRYFZ.js.map
//# sourceMappingURL=chunk-KL6DRYFZ.js.map