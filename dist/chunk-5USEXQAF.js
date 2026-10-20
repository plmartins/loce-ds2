import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function ConfigCard({ icon: Icon, title, description, children, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("rounded-2xl border border-border bg-card p-6 shadow-xs", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-start gap-3", children: [
      Icon && /* @__PURE__ */ jsx("div", { className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10", children: /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-brand" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5 pt-0.5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold text-foreground", children: title }),
        description && /* @__PURE__ */ jsx("span", { className: "text-[13px] font-medium text-muted-foreground", children: description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children })
  ] });
}

export { ConfigCard };
//# sourceMappingURL=chunk-5USEXQAF.js.map
//# sourceMappingURL=chunk-5USEXQAF.js.map