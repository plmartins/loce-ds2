import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './chunk-XJWUGHCD.js';
import { fieldClass } from './chunk-WCQNENN4.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconSpinner } from './chunk-EMHJXDPZ.js';
import { IconFilters } from './chunk-5ZNDVXJB.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { IconCheck } from './chunk-7S2JGUKL.js';
import { IconChevronDown } from './chunk-YFGE474N.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function Select({ options, value, onChange, placeholder = "Selecionar", icon, label, labelAction, error, loading, disabled, className, filterActive, onClearFilter }) {
  const neutralOption = options.find((opt) => opt.value === "" || opt.value === "all");
  const clearFilter = onClearFilter ?? (neutralOption && onChange ? () => onChange(String(neutralOption.value)) : void 0);
  const selected = options.find((opt) => String(opt.value) === String(value ?? ""));
  const leadingIcon = selected?.icon ?? icon ?? (filterActive ? /* @__PURE__ */ jsx(IconFilters, { size: 14 }) : null);
  const control = /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, disabled: disabled || loading, children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        "data-filter-active": filterActive || void 0,
        "aria-invalid": !!error || void 0,
        "aria-label": filterActive ? `${label ?? "Filtro"}: ${selected?.label ?? placeholder} \u2014 aplicado` : void 0,
        title: filterActive ? `Filtro ativo: ${selected?.label ?? placeholder}` : void 0,
        className: cn(
          fieldClass,
          "select-none",
          "flex cursor-pointer items-center justify-between gap-2 text-left",
          "data-[state=open]:border-brand data-[state=open]:ring-2 data-[state=open]:ring-brand/25",
          !selected && "text-muted-foreground/80",
          error && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
          className
        ),
        children: [
          leadingIcon && /* @__PURE__ */ jsx("span", { className: "inline-flex shrink-0 items-center", "aria-hidden": "true", children: leadingIcon }),
          /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate", children: selected?.label ?? placeholder }),
          loading ? /* @__PURE__ */ jsx(IconSpinner, { size: 13, className: "shrink-0 animate-spin text-muted-foreground" }) : /* @__PURE__ */ jsx(IconChevronDown, { size: 12, className: "shrink-0 text-muted-foreground" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        align: "start",
        style: { minWidth: "var(--radix-dropdown-menu-trigger-width)" },
        children: [
          filterActive && clearFilter && /* @__PURE__ */ jsxs(DropdownMenuItem, { onSelect: clearFilter, className: "mb-1 gap-2 border-b border-border pb-2 font-semibold text-brand", children: [
            /* @__PURE__ */ jsx(IconClose, { size: 13 }),
            " Limpar filtro"
          ] }),
          options.map((opt) => {
            const isSelected = String(opt.value) === String(value ?? "");
            return /* @__PURE__ */ jsxs(
              DropdownMenuItem,
              {
                onClick: () => onChange?.(String(opt.value)),
                className: cn("justify-between", isSelected && "font-semibold text-brand"),
                children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 items-center gap-2", children: [
                    opt.icon && /* @__PURE__ */ jsx("span", { className: "inline-flex shrink-0 items-center", "aria-hidden": "true", children: opt.icon }),
                    /* @__PURE__ */ jsx("span", { className: "truncate", children: opt.label })
                  ] }),
                  isSelected && /* @__PURE__ */ jsx(IconCheck, { size: 13, className: "shrink-0 text-brand" })
                ]
              },
              opt.value
            );
          })
        ]
      }
    )
  ] });
  if (!label && !error) return control;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full min-w-0 flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
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
    control,
    error && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-destructive", children: error })
  ] });
}
function NativeSelect({ className, options, placeholder, filterActive, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative flex items-center", className), children: [
    /* @__PURE__ */ jsxs("select", { "data-filter-active": filterActive || void 0, title: filterActive ? "Filtro ativo" : props.title, className: cn(fieldClass, "select-none", "cursor-pointer appearance-none pr-8"), ...props, children: [
      placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
      options.map((opt) => /* @__PURE__ */ jsx("option", { value: opt.value, children: opt.label }, opt.value))
    ] }),
    /* @__PURE__ */ jsx(IconChevronDown, { size: 12, className: "pointer-events-none absolute right-3 text-muted-foreground" })
  ] });
}

export { NativeSelect, Select };
//# sourceMappingURL=chunk-SBACURAG.js.map
//# sourceMappingURL=chunk-SBACURAG.js.map