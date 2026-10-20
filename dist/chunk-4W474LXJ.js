import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function Switch({ checked, onCheckedChange, disabled, label, description, className, ...props }) {
  const control = /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      disabled,
      onClick: () => onCheckedChange(!checked),
      className: cn(
        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-brand" : "bg-surface-3",
        !label && !description && className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(
            "pointer-events-none block size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out",
            checked ? "translate-x-[18px]" : "translate-x-[2px]"
          )
        }
      )
    }
  );
  if (!label && !description) return control;
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-start gap-3", className), children: [
    /* @__PURE__ */ jsx("span", { className: "mt-0.5 flex shrink-0", children: control }),
    /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 flex-col gap-0.5", children: [
      label && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: label }),
      description && /* @__PURE__ */ jsx("span", { className: "text-xs leading-snug text-muted-foreground", children: description })
    ] })
  ] });
}

export { Switch };
//# sourceMappingURL=chunk-4W474LXJ.js.map
//# sourceMappingURL=chunk-4W474LXJ.js.map