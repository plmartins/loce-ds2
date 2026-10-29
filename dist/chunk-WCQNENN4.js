import { cn } from './chunk-OLJVOECQ.js';
import { IconSpinner } from './chunk-EMHJXDPZ.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { jsx, jsxs } from 'react/jsx-runtime';

var fieldClass = cn(
  "h-9 w-full rounded-xl border border-border bg-card px-3 text-[13px] font-semibold text-foreground",
  "shadow-xs transition-all duration-150",
  "placeholder:font-medium placeholder:text-muted-foreground/70",
  "hover:border-ring/50",
  "focus-visible:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/25",
  "disabled:pointer-events-none disabled:opacity-50"
);
function Input({ className, label, error, hint, labelAction, suffix, onClear, loading, id, filterActive, ...props }) {
  const hasAdornment = suffix || onClear || loading;
  const input = /* @__PURE__ */ jsx(
    "input",
    {
      id,
      "data-filter-active": filterActive || void 0,
      "aria-invalid": !!error || void 0,
      title: filterActive ? "Filtro ativo" : props.title,
      className: cn(
        fieldClass,
        hasAdornment && "pr-12",
        error && "border-destructive focus:border-destructive focus:ring-destructive/20",
        className
      ),
      ...props
    }
  );
  const field = hasAdornment ? /* @__PURE__ */ jsxs("div", { className: "relative flex w-full min-w-0 items-center", children: [
    input,
    /* @__PURE__ */ jsxs("div", { className: "absolute right-2 flex items-center gap-1", children: [
      loading && /* @__PURE__ */ jsx(IconSpinner, { size: 14, className: "animate-spin text-muted-foreground" }),
      !loading && onClear && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: onClear,
          className: "flex size-5 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
          children: /* @__PURE__ */ jsx(IconClose, { size: 12 })
        }
      ),
      suffix && /* @__PURE__ */ jsx("span", { className: "rounded-md bg-surface-2 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground", children: suffix })
    ] })
  ] }) : input;
  if (!label && !error && !hint) return field;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full min-w-0 flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: id, className: "text-[12px] font-semibold text-foreground/80", children: label }),
      labelAction && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: labelAction.onClick,
          className: "cursor-pointer text-[12px] font-semibold text-brand transition-opacity hover:opacity-80",
          children: labelAction.label
        }
      )
    ] }),
    field,
    error ? /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-destructive", children: error }) : hint ? /* @__PURE__ */ jsx("span", { className: "text-[12px] text-muted-foreground", children: hint }) : null
  ] });
}

export { Input, fieldClass };
//# sourceMappingURL=chunk-WCQNENN4.js.map
//# sourceMappingURL=chunk-WCQNENN4.js.map