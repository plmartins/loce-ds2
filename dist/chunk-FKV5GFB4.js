import { cn } from './chunk-OLJVOECQ.js';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';

function Tooltip({ content, children, side = "top", wrap, className }) {
  if (content == null || content === "") return /* @__PURE__ */ jsx(Fragment, { children });
  return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, { delayDuration: 250, children: /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [
    /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { asChild: true, children: wrap ? /* @__PURE__ */ jsx("span", { className: "min-w-0", children }) : children }),
    /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
      TooltipPrimitive.Content,
      {
        side,
        sideOffset: 6,
        className: cn(
          "z-50 max-w-xs rounded-lg bg-foreground px-2.5 py-1.5 text-[12px] font-medium text-background shadow-md animate-slide-up",
          className
        ),
        children: content
      }
    ) })
  ] }) });
}

export { Tooltip };
//# sourceMappingURL=chunk-FKV5GFB4.js.map
//# sourceMappingURL=chunk-FKV5GFB4.js.map