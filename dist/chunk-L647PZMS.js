import { anchoredPosition, naturalWidth } from './chunk-52QMC5BF.js';
import { Calendar } from './chunk-I4B2NFHG.js';
import { fieldClass } from './chunk-WCQNENN4.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { IconCalendar } from './chunk-UKMFPZ6W.js';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { jsxs, jsx } from 'react/jsx-runtime';

function getPortalContainer(trigger) {
  if (!trigger) return document.body;
  const radixPortal = trigger.closest("[data-radix-portal]");
  if (radixPortal) return radixPortal;
  return document.body;
}
var fmt = (date) => date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
function DateRangePicker({
  label,
  value,
  onChange,
  placeholder = "Selecione um per\xEDodo",
  error,
  disabled,
  clearable = true,
  className,
  filterActive,
  minDate,
  maxDate,
  numberOfMonths = 2,
  defaultOpen = false,
  presets,
  activePresetKey,
  displayLabel,
  onPresetSelect
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [pending, setPending] = useState(void 0);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const calRef = useRef(null);
  const formatted = value?.from ? value.to && value.to.getTime() !== value.from.getTime() ? `${fmt(value.from)} at\xE9 ${fmt(value.to)}` : fmt(value.from) : "";
  const triggerText = displayLabel || formatted || placeholder;
  const updateCoords = () => {
    const el = triggerRef.current;
    if (!el) return;
    setCoords(anchoredPosition(el.getBoundingClientRect(), naturalWidth(calRef.current), document.documentElement.clientWidth));
  };
  const openPicker = () => {
    setPending(void 0);
    updateCoords();
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
    setPending(void 0);
  };
  const showCurrent = !pending?.from && !!value?.from && !!value?.to;
  useLayoutEffect(() => {
    if (open) updateCoords();
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      const t = e.target;
      if (!triggerRef.current?.contains(t) && !calRef.current?.contains(t)) close();
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") close();
    };
    const handleScroll = () => updateCoords();
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [open]);
  return /* @__PURE__ */ jsxs("div", { className: cn("flex w-full flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        ref: triggerRef,
        type: "button",
        "data-filter-active": filterActive || void 0,
        "aria-invalid": !!error || void 0,
        "aria-label": filterActive ? `Per\xEDodo: ${triggerText} \u2014 filtro ativo` : void 0,
        disabled,
        onClick: () => open ? close() : openPicker(),
        className: cn(
          fieldClass,
          "select-none",
          "flex cursor-pointer items-center gap-2 text-left",
          open && "border-brand ring-2 ring-brand/25",
          error && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
          !value?.from && "text-muted-foreground/80"
        ),
        children: [
          /* @__PURE__ */ jsx(IconCalendar, { size: 15, className: "shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ jsx("span", { className: cn("flex-1 truncate", displayLabel && "text-foreground"), children: triggerText }),
          filterActive && /* @__PURE__ */ jsx("span", { className: "ds-filter-label", "aria-hidden": "true", children: "Filtrado" }),
          value?.from && clearable && /* @__PURE__ */ jsx(
            "span",
            {
              role: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange?.(void 0);
              },
              className: "shrink-0 text-muted-foreground transition-colors hover:text-foreground",
              children: /* @__PURE__ */ jsx(IconClose, { size: 13 })
            }
          )
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-destructive", children: error }),
    open && createPortal(
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: calRef,
          "data-ds-portal": "daterangepicker",
          style: coords,
          className: "fixed z-[100] overflow-hidden rounded-2xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
          children: [
            presets && presets.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-1 border-b border-border px-2 pb-2 pt-1.5", children: presets.map((preset) => /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  onPresetSelect?.(preset);
                  close();
                },
                className: cn(
                  "h-6 cursor-pointer select-none rounded-full px-2.5 text-[11px] font-semibold transition-colors",
                  preset.key === activePresetKey ? "bg-brand text-white" : "bg-surface-2 text-muted-foreground hover:bg-foreground/[0.08] hover:text-foreground"
                ),
                children: filterActive && preset.key === "all" ? "Limpar filtro \xB7 Todo per\xEDodo" : preset.label
              },
              preset.key
            )) }),
            /* @__PURE__ */ jsx(
              Calendar,
              {
                mode: "range",
                numberOfMonths,
                defaultMonth: value?.from,
                modifiers: showCurrent ? {
                  current_range: { from: value.from, to: value.to },
                  current_edge: [value.from, value.to]
                } : void 0,
                modifiersClassNames: {
                  current_range: "bg-brand/10",
                  current_edge: "rounded-lg bg-brand/25"
                },
                selected: pending,
                onSelect: (range) => {
                  if (!pending?.from && range?.from && range.to && range.from.getTime() === range.to.getTime()) {
                    setPending({ from: range.from, to: void 0 });
                    return;
                  }
                  setPending(range);
                  if (range?.from && range.to) {
                    onChange?.(range);
                    close();
                  }
                },
                disabled: (date) => {
                  if (minDate && date < minDate) return true;
                  if (maxDate && date > maxDate) return true;
                  return false;
                }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-3 px-3 pb-2 pt-1 text-[11px] font-medium text-muted-foreground", children: /* @__PURE__ */ jsx("span", { children: pending?.from && !pending.to ? `In\xEDcio: ${fmt(pending.from)}. Agora clique no fim.` : showCurrent ? "Per\xEDodo atual destacado. Clique no in\xEDcio do novo per\xEDodo." : "Clique no in\xEDcio e depois no fim do per\xEDodo" }) })
          ]
        }
      ),
      getPortalContainer(triggerRef.current)
    )
  ] });
}

export { DateRangePicker };
//# sourceMappingURL=chunk-L647PZMS.js.map
//# sourceMappingURL=chunk-L647PZMS.js.map