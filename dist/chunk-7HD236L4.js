import { Avatar } from './chunk-FQ5BKF24.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconSearch } from './chunk-4CU3ZCHH.js';
import { IconPlus } from './chunk-7IZNE42S.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { IconCheck } from './chunk-7S2JGUKL.js';
import { useState, useRef, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { jsxs, jsx } from 'react/jsx-runtime';

var MENU_MAX_HEIGHT = 288;
var MENU_GAP = 4;
var VIEWPORT_PADDING = 8;
var SEARCH_FROM = 8;
function MultiSelect({ label, options, value, onChange, placeholder, addLabel = "Adicionar", searchable, searchPlaceholder = "Buscar", className }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0, maxHeight: MENU_MAX_HEIGHT });
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const searchRef = useRef(null);
  const hasSearch = searchable ?? options.length >= SEARCH_FROM;
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return options;
    return options.filter((o) => o.label.toLowerCase().includes(term) || o.description?.toLowerCase().includes(term));
  }, [options, query]);
  const toggle = (val) => onChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val]);
  const remove = (val) => onChange(value.filter((v) => v !== val));
  const updateCoords = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom - MENU_GAP - VIEWPORT_PADDING;
    const above = rect.top - MENU_GAP - VIEWPORT_PADDING;
    const dropUp = below < Math.min(MENU_MAX_HEIGHT, 180) && above > below;
    const maxHeight = Math.max(120, Math.min(MENU_MAX_HEIGHT, dropUp ? above : below));
    const height = Math.min(maxHeight, listRef.current?.offsetHeight ?? maxHeight);
    setCoords({ top: dropUp ? rect.top - MENU_GAP - height : rect.bottom + MENU_GAP, left: rect.left, width: rect.width, maxHeight });
  };
  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    updateCoords();
    const raf = requestAnimationFrame(updateCoords);
    searchRef.current?.focus();
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
      cancelAnimationFrame(raf);
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
          style: { top: coords.top, left: coords.left, width: Math.max(coords.width, 230), maxHeight: coords.maxHeight },
          className: "fixed z-[100] flex flex-col overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
          children: [
            hasSearch && /* @__PURE__ */ jsxs("label", { className: "mb-1 flex shrink-0 items-center gap-2 rounded-lg bg-surface-1 px-2.5 py-1.5 text-muted-foreground ring-1 ring-border focus-within:ring-ring/60", children: [
              /* @__PURE__ */ jsx(IconSearch, { size: 13 }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: searchRef,
                  value: query,
                  onChange: (e) => setQuery(e.target.value),
                  placeholder: searchPlaceholder,
                  className: "min-w-0 flex-1 bg-transparent text-[13px] font-medium text-foreground outline-none placeholder:text-muted-foreground/70"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto", children: [
              filtered.map((opt) => {
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
              filtered.length === 0 && /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center text-[13px] text-muted-foreground", children: options.length === 0 ? "Nenhuma op\xE7\xE3o" : "Nada com esse nome" })
            ] })
          ]
        }
      ),
      getContainer()
    )
  ] });
}

export { MultiSelect };
//# sourceMappingURL=chunk-7HD236L4.js.map
//# sourceMappingURL=chunk-7HD236L4.js.map