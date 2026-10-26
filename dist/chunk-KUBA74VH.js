import { cn } from './chunk-OLJVOECQ.js';
import { jsx } from 'react/jsx-runtime';

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("rounded-2xl border border-border bg-card shadow-xs", className), ...props });
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-1 px-5 pb-3 pt-5", className), ...props });
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("h3", { className: cn("text-[15px] font-bold text-foreground", className), ...props });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("p", { className: cn("text-[13px] font-medium text-muted-foreground", className), ...props });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("px-5 py-3", className), ...props });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-2 border-t border-border px-5 pb-5 pt-3", className), ...props });
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
//# sourceMappingURL=chunk-KUBA74VH.js.map
//# sourceMappingURL=chunk-KUBA74VH.js.map