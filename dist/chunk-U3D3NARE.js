import { cn } from './chunk-OLJVOECQ.js';
import { jsx } from 'react/jsx-runtime';

function SegmentedControl({ options, value, onChange, className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "tablist",
      className: cn("inline-flex items-center gap-0.5 rounded-xl bg-surface-2 p-1", className),
      children: options.map((opt) => {
        const active = opt.value === value;
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": active,
            onClick: () => onChange(opt.value),
            className: cn(
              "h-8 cursor-pointer whitespace-nowrap rounded-lg px-3.5 text-[13px] font-semibold transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/25",
              active ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
            ),
            children: opt.label
          },
          opt.value
        );
      })
    }
  );
}

export { SegmentedControl };
//# sourceMappingURL=chunk-U3D3NARE.js.map
//# sourceMappingURL=chunk-U3D3NARE.js.map