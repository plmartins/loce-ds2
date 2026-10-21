import { Tooltip } from './chunk-FKV5GFB4.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconInfo } from './chunk-2YQJ27PL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function TableHeading({ title, hint, right, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex min-h-8 items-center justify-between gap-3 px-5", className), children: [
    /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 items-center gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "truncate text-[13.5px] font-bold text-foreground", children: title }),
      hint && /* @__PURE__ */ jsx(Tooltip, { content: hint, side: "top", wrap: true, children: /* @__PURE__ */ jsx("span", { className: "flex size-5 shrink-0 cursor-help items-center justify-center rounded-full text-muted-foreground hover:bg-surface-2 hover:text-foreground", children: /* @__PURE__ */ jsx(IconInfo, { size: 13 }) }) })
    ] }),
    right && /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-2", children: right })
  ] });
}

export { TableHeading };
//# sourceMappingURL=chunk-N727KA3A.js.map
//# sourceMappingURL=chunk-N727KA3A.js.map