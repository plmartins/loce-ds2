import { Skeleton } from './chunk-Q7J24MVH.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function SkeletonForm({ withAside = true, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("grid gap-6", withAside && "xl:grid-cols-[1.6fr_1fr]", className), "aria-hidden": true, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-40" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-full" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" })
        ] }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-24 w-full" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-32" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" })
        ] }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-full" })
      ] })
    ] }),
    withAside && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-28 rounded-2xl" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-40 rounded-2xl" })
    ] })
  ] });
}

export { SkeletonForm };
//# sourceMappingURL=chunk-F3UPTQER.js.map
//# sourceMappingURL=chunk-F3UPTQER.js.map