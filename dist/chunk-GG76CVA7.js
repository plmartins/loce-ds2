import { IconChevronLeft } from './chunk-XYWTH6PG.js';
import { IconChevronRight } from './chunk-RGEIMOMI.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function pageWindow(current, total) {
  const max = 5;
  if (total <= max) return Array.from({ length: total }, (_, i) => i + 1);
  const start = Math.max(1, Math.min(current - 2, total - max + 1));
  return Array.from({ length: max }, (_, i) => start + i);
}
function PaginationBar({ currentPage, perPage, totalResults, totalPages, action, className }) {
  if (totalPages <= 0) return null;
  const from = (currentPage - 1) * perPage + 1;
  const to = Math.min(currentPage * perPage, totalResults);
  const navBtn = "flex size-8 cursor-pointer items-center justify-center rounded-lg text-[12.5px] font-semibold text-foreground/70 transition-colors duration-100 hover:bg-foreground/[0.05] hover:text-foreground disabled:pointer-events-none disabled:opacity-35";
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-wrap items-center justify-between gap-3", className), children: [
    /* @__PURE__ */ jsxs("span", { className: "text-[12px] font-medium text-muted-foreground tabular-nums", children: [
      "Mostrando ",
      from.toLocaleString("pt-BR"),
      " a ",
      to.toLocaleString("pt-BR"),
      " de ",
      totalResults.toLocaleString("pt-BR")
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("button", { type: "button", className: navBtn, disabled: currentPage <= 1, onClick: () => action(currentPage - 1), "aria-label": "P\xE1gina anterior", children: /* @__PURE__ */ jsx(IconChevronLeft, { size: 13 }) }),
      pageWindow(currentPage, totalPages).map((page) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => action(page),
          "aria-current": page === currentPage ? "page" : void 0,
          className: cn(
            navBtn,
            "tabular-nums",
            page === currentPage && "bg-brand text-white hover:bg-brand hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
          ),
          children: page
        },
        page
      )),
      /* @__PURE__ */ jsx("button", { type: "button", className: navBtn, disabled: currentPage >= totalPages, onClick: () => action(currentPage + 1), "aria-label": "Pr\xF3xima p\xE1gina", children: /* @__PURE__ */ jsx(IconChevronRight, { size: 13 }) })
    ] })
  ] });
}

export { PaginationBar };
//# sourceMappingURL=chunk-GG76CVA7.js.map
//# sourceMappingURL=chunk-GG76CVA7.js.map