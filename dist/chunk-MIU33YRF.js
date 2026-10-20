import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function Separator({ className, orientation = "horizontal", label }) {
  if (label) {
    return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-3", className), children: [
      /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
      /* @__PURE__ */ jsx("span", { className: "select-none text-xs font-medium text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
    ] });
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx("div", { className: cn("h-full w-px bg-border", className) });
  }
  return /* @__PURE__ */ jsx("div", { className: cn("h-px w-full bg-border", className) });
}

export { Separator };
//# sourceMappingURL=chunk-MIU33YRF.js.map
//# sourceMappingURL=chunk-MIU33YRF.js.map