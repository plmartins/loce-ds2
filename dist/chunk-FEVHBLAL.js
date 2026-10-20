import { cn } from './chunk-OLJVOECQ.js';
import { IconCheck } from './chunk-7S2JGUKL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function Checkbox({ className, label, description, checked, onChange, disabled, ...props }) {
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: cn(
        "inline-flex cursor-pointer select-none gap-3",
        description ? "items-start" : "items-center",
        disabled && "cursor-not-allowed opacity-50",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: cn("relative shrink-0", description && "mt-0.5"), children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked, onChange, disabled, className: "peer sr-only", ...props }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "flex size-5 items-center justify-center rounded-md border transition-all duration-100",
                "peer-focus-visible:ring-[3px] peer-focus-visible:ring-brand/30",
                checked ? "border-brand bg-brand text-white shadow-xs" : "border-border bg-card shadow-xs hover:border-ring/60"
              ),
              children: checked && /* @__PURE__ */ jsx(IconCheck, { size: 13 })
            }
          )
        ] }),
        (label || description) && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5", children: [
          label && /* @__PURE__ */ jsx("span", { className: "text-[13px] font-semibold leading-tight text-foreground", children: label }),
          description && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium leading-tight text-muted-foreground", children: description })
        ] })
      ]
    }
  );
}

export { Checkbox };
//# sourceMappingURL=chunk-FEVHBLAL.js.map
//# sourceMappingURL=chunk-FEVHBLAL.js.map