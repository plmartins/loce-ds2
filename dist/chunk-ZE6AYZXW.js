import { anchoredPosition, naturalWidth } from './chunk-52QMC5BF.js';
import { Calendar } from './chunk-ZCUTVQJ3.js';
import { fieldClass } from './chunk-66F2DMXG.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { IconCalendar } from './chunk-UKMFPZ6W.js';
import { cn } from './chunk-OLJVOECQ.js';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { jsxs, jsx } from 'react/jsx-runtime';

function getPortalContainer(trigger) {
  if (!trigger) return document.body;
  const radixPortal = trigger.closest("[data-radix-portal]");
  if (radixPortal) return radixPortal;
  return document.body;
}
function DatePicker({ label, value, onChange, placeholder = "Selecione uma data", error, disabled, clearable = true, className, minDate, maxDate, filterActive }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const calRef = useRef(null);
  const formatted = value ? value.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" }) : "";
  const updateCoords = () => {
    const el = triggerRef.current;
    if (!el) return;
    setCoords(anchoredPosition(el.getBoundingClientRect(), naturalWidth(calRef.current), document.documentElement.clientWidth));
  };
  useLayoutEffect(() => {
    if (open) updateCoords();
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      const t = e.target;
      if (!triggerRef.current?.contains(t) && !calRef.current?.contains(t)) setOpen(false);
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
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
        "aria-label": filterActive ? `Per\xEDodo: ${formatted || placeholder} \u2014 filtro ativo` : void 0,
        disabled,
        onClick: () => {
          updateCoords();
          setOpen((p) => !p);
        },
        className: cn(
          fieldClass,
          "select-none",
          "flex cursor-pointer items-center gap-2 text-left",
          open && "border-brand ring-2 ring-brand/25",
          error && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
          !value && "text-muted-foreground/80"
        ),
        children: [
          /* @__PURE__ */ jsx(IconCalendar, { size: 15, className: "shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children: formatted || placeholder }),
          filterActive && /* @__PURE__ */ jsx("span", { className: "ds-filter-label", "aria-hidden": "true", children: "Filtrado" }),
          value && clearable && /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: calRef,
          "data-ds-portal": "datepicker",
          style: coords,
          className: "fixed z-[100] overflow-hidden rounded-2xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
          children: /* @__PURE__ */ jsx(
            Calendar,
            {
              mode: "single",
              selected: value,
              onSelect: (date) => {
                onChange?.(date);
                setOpen(false);
              },
              disabled: (date) => {
                if (minDate && date < minDate) return true;
                if (maxDate && date > maxDate) return true;
                return false;
              }
            }
          )
        }
      ),
      getPortalContainer(triggerRef.current)
    )
  ] });
}

export { DatePicker };
//# sourceMappingURL=chunk-ZE6AYZXW.js.map
//# sourceMappingURL=chunk-ZE6AYZXW.js.map