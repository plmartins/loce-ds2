import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function Skeleton({ className }) {
  return /* @__PURE__ */ jsx("span", { className: cn("ds-skeleton block rounded-lg", className), "aria-hidden": true });
}
function SkeletonText({ lines = 3, className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-2", className), "aria-hidden": true, children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx(Skeleton, { className: cn("h-3.5", i === lines - 1 ? "w-2/3" : "w-full") }, i)) });
}
function SkeletonCard({ className }) {
  return /* @__PURE__ */ jsx(Skeleton, { className: cn("h-40 w-full rounded-2xl", className) });
}
function SkeletonTable({ rows = 8, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("overflow-hidden rounded-2xl border border-border bg-card shadow-xs", className), "aria-hidden": true, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex h-10 items-center gap-4 border-b border-border bg-surface-1/70 px-4", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-24" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-16" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "ml-auto h-3 w-20" })
    ] }),
    Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center gap-4 border-b border-border/60 px-4 py-3 last:border-0",
        style: { opacity: 1 - i * 0.09 },
        children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "size-[42px] shrink-0 rounded-md" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-[26%]" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-24" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20 rounded-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-16" }),
          /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-9 rounded-full" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-9 rounded-full" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "size-7 rounded-lg" })
          ] })
        ]
      },
      i
    ))
  ] });
}

export { Skeleton, SkeletonCard, SkeletonTable, SkeletonText };
//# sourceMappingURL=chunk-Q7J24MVH.js.map
//# sourceMappingURL=chunk-Q7J24MVH.js.map