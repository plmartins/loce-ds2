import { Button } from './chunk-M4AAQCYD.js';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from './chunk-4D3N52P7.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconMore } from './chunk-XN7C3OO5.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function DropdownActions({ actions, trigger, align = "end", className }) {
  if (!actions.length) return null;
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: trigger || /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon-sm", className: cn(className), children: /* @__PURE__ */ jsx(IconMore, { size: 16 }) }) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align, onClick: (e) => e.stopPropagation(), children: actions.map((action, i) => {
      const showSep = action.variant === "destructive" && i > 0;
      return /* @__PURE__ */ jsxs("div", { children: [
        showSep && /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxs(
          DropdownMenuItem,
          {
            onClick: action.onClick,
            disabled: action.disabled,
            className: cn("flex items-center gap-2", action.variant === "destructive" && "text-destructive focus:bg-destructive/10"),
            children: [
              action.icon,
              /* @__PURE__ */ jsx("span", { children: action.label })
            ]
          }
        )
      ] }, action.label);
    }) })
  ] });
}

export { DropdownActions };
//# sourceMappingURL=chunk-OYI5XTBZ.js.map
//# sourceMappingURL=chunk-OYI5XTBZ.js.map