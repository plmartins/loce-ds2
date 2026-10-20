import { Tooltip } from './chunk-FKV5GFB4.js';
import { IconLock } from './chunk-2EBGWPVE.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function Tabs({ tabs, value, onChange, className, size = "default" }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex w-fit items-center gap-1 rounded-xl border border-border bg-surface-2/60 p-1", className), children: tabs.map((tab) => {
    const isActive = tab.key === value;
    if (tab.disabled) {
      return /* @__PURE__ */ jsx(Tooltip, { content: tab.disabledHint ?? "Chega em breve", side: "top", wrap: true, children: /* @__PURE__ */ jsxs(
        "span",
        {
          "aria-disabled": true,
          className: cn(
            "relative inline-flex cursor-default select-none items-center justify-center gap-1.5 rounded-lg font-semibold text-muted-foreground/50",
            size === "default" ? "px-4 py-1.5 text-[13px]" : "px-3 py-1 text-xs"
          ),
          children: [
            tab.icon,
            /* @__PURE__ */ jsx("span", { children: tab.label }),
            /* @__PURE__ */ jsx(IconLock, { size: 11, className: "shrink-0 text-muted-foreground/40" })
          ]
        }
      ) }, tab.key);
    }
    return /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => onChange(tab.key),
        className: cn(
          "relative inline-flex cursor-pointer select-none items-center justify-center gap-1.5 rounded-lg font-semibold transition-all duration-150 active:scale-[0.97]",
          size === "default" ? "px-4 py-1.5 text-[13px]" : "px-3 py-1 text-xs",
          isActive ? "bg-card text-brand shadow-sm ring-1 ring-border" : "text-muted-foreground hover:text-foreground"
        ),
        children: [
          tab.icon,
          /* @__PURE__ */ jsx("span", { children: tab.label }),
          tab.count !== void 0 && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "rounded-full px-1.5 py-px text-[10px] font-bold tabular-nums",
                isActive ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
              ),
              children: tab.count
            }
          )
        ]
      },
      tab.key
    );
  }) });
}

export { Tabs };
//# sourceMappingURL=chunk-NN74GSAI.js.map
//# sourceMappingURL=chunk-NN74GSAI.js.map