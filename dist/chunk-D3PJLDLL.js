import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var statusColors = {
  online: "bg-success",
  offline: "bg-muted-foreground/50",
  busy: "bg-destructive",
  away: "bg-warning"
};
var sizes = {
  sm: "size-2",
  default: "size-2.5",
  lg: "size-3"
};
function StatusDot({ status, size = "default", className, pulse = false }) {
  return /* @__PURE__ */ jsxs("span", { className: cn("relative inline-block", className), children: [
    /* @__PURE__ */ jsx("span", { className: cn("block rounded-full", statusColors[status], sizes[size]) }),
    pulse && status === "online" && /* @__PURE__ */ jsx("span", { className: cn("absolute inset-0 animate-ping rounded-full opacity-40", statusColors[status]) })
  ] });
}

export { StatusDot };
//# sourceMappingURL=chunk-D3PJLDLL.js.map
//# sourceMappingURL=chunk-D3PJLDLL.js.map