import { Avatar } from './chunk-ZCKHC6QB.js';
import { IconPlus } from './chunk-7IZNE42S.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { IconCheck } from './chunk-7S2JGUKL.js';
import { cn } from './chunk-OLJVOECQ.js';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { jsxs, jsx } from 'react/jsx-runtime';

function MultiSelect({ label, options, value, onChange, placeholder, addLabel = "Adicionar", className }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const toggle = (val) => onChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val]);
  const remove = (val) => onChange(value.filter((v) => v !== val));
  const updateCoords = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCoords({ top: rect.bottom + 4, left: rect.left, width: rect.width });
  };
  useEffect(() => {
    if (!open) return;
    updateCoords();
    const handleClick = (e) => {
      const t = e.target;
      if (!triggerRef.current?.contains(t) && !listRef.current?.contains(t)) setOpen(false);
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    window.addEventListener("scroll", updateCoords, true);
    window.addEventListener("resize", updateCoords);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
      window.removeEventListener("scroll", updateCoords, true);
      window.removeEventListener("resize", updateCoords);
    };
  }, [open]);
  const selectedOptions = value.map((v) => options.find((o) => o.value === v)).filter(Boolean);
  const getContainer = () => {
    const radix = triggerRef.current?.closest("[data-radix-portal]");
    return radix || document.body;
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
    /* @__PURE__ */ jsxs("div", { ref: triggerRef, className: "flex flex-wrap items-center gap-1.5", children: [
      selectedOptions.map((opt) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 rounded-full border border-border bg-card py-1 pl-1 pr-2 shadow-xs", children: [
        /* @__PURE__ */ jsx(Avatar, { src: opt.image, name: opt.label, size: 20 }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-foreground", children: opt.label }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => remove(opt.value),
            className: "flex size-4 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive",
            children: /* @__PURE__ */ jsx(IconClose, { size: 10 })
          }
        )
      ] }, opt.value)),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            updateCoords();
            setOpen((p) => !p);
          },
          className: "flex cursor-pointer items-center gap-1 rounded-full border border-dashed border-border px-2.5 py-1 text-muted-foreground transition-colors hover:border-ring/60 hover:text-foreground",
          children: [
            /* @__PURE__ */ jsx(IconPlus, { size: 11 }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold", children: addLabel })
          ]
        }
      )
    ] }),
    value.length === 0 && placeholder && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-muted-foreground/80", children: placeholder }),
    open && createPortal(
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: listRef,
          "data-ds-portal": "multiselect",
          style: { top: coords.top, left: coords.left, width: Math.max(coords.width, 230) },
          className: "fixed z-[100] max-h-60 overflow-y-auto rounded-xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
          children: [
            options.map((opt) => {
              const selected = value.includes(opt.value);
              return /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => toggle(opt.value),
                  className: "flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-foreground/[0.05]",
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: cn(
                          "flex size-4 shrink-0 items-center justify-center rounded-[5px] border transition-all",
                          selected ? "border-brand bg-brand text-white" : "border-border bg-card"
                        ),
                        children: selected && /* @__PURE__ */ jsx(IconCheck, { size: 10 })
                      }
                    ),
                    /* @__PURE__ */ jsx(Avatar, { src: opt.image, name: opt.label, size: 24 }),
                    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "block truncate text-[13px] font-semibold text-foreground", children: opt.label }),
                      opt.description && /* @__PURE__ */ jsx("span", { className: "block truncate text-xs font-medium text-muted-foreground", children: opt.description })
                    ] })
                  ]
                },
                opt.value
              );
            }),
            options.length === 0 && /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center text-[13px] text-muted-foreground", children: "Nenhuma op\xE7\xE3o" })
          ]
        }
      ),
      getContainer()
    )
  ] });
}

export { MultiSelect };
//# sourceMappingURL=chunk-I3IBVHXK.js.map
//# sourceMappingURL=chunk-I3IBVHXK.js.map