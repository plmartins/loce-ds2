import { fieldClass } from './chunk-WCQNENN4.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconSpinner } from './chunk-EMHJXDPZ.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { IconChevronDown } from './chunk-YFGE474N.js';
import { useState, useRef, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

function ComboBox({
  options,
  value,
  onChange,
  label,
  labelExtra,
  error,
  placeholder = "Buscar...",
  inputValue: controlledInput,
  onInputChange,
  minCharsToOpen = 0,
  disableLocalFilter = false,
  isLoading = false,
  disabled = false,
  emptyText = "Nenhum resultado encontrado",
  loadingText = "Buscando...",
  showEmpty = true,
  autoFocus,
  className,
  filterActive
}) {
  const [uncontrolledInput, setUncontrolledInput] = useState(value?.label ?? "");
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const [dropUp, setDropUp] = useState(false);
  const inputValue = controlledInput ?? uncontrolledInput;
  const setInputValue = (next) => {
    onInputChange?.(next);
    if (controlledInput === void 0) setUncontrolledInput(next);
  };
  const wrapperRef = useRef(null);
  const listRef = useRef(null);
  const filtered = disableLocalFilter ? options : options.filter((opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase()));
  useEffect(() => {
    if (controlledInput === void 0) setUncontrolledInput(value?.label ?? "");
  }, [value]);
  useEffect(() => setHighlighted(0), [inputValue, options.length]);
  useEffect(() => {
    if (!open) return;
    const handleOutside = (event) => {
      if (wrapperRef.current?.contains(event.target)) return;
      setOpen(false);
      const match = options.find((opt) => opt.label.toLowerCase() === inputValue.toLowerCase());
      if (match) onChange(match);
      else {
        setInputValue("");
        onChange(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open, inputValue, options, onChange]);
  useEffect(() => {
    if (!open || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom;
    const height = listRef.current?.offsetHeight ?? 280;
    setDropUp(below < height && rect.top > below);
  }, [open, filtered.length, isLoading]);
  const pick = (option) => {
    setInputValue(option.label);
    setOpen(false);
    onChange(option);
  };
  const clear = () => {
    setInputValue("");
    onChange(null);
  };
  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((prev) => (prev + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((prev) => prev === 0 ? Math.max(filtered.length - 1, 0) : prev - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = filtered[highlighted];
      if (opt) pick(opt);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };
  const field = /* @__PURE__ */ jsxs("div", { ref: wrapperRef, className: "relative w-full min-w-0", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        "data-filter-active": filterActive || void 0,
        "aria-invalid": !!error || void 0,
        "aria-label": filterActive ? `${label ?? placeholder} \u2014 filtro ativo` : void 0,
        title: filterActive ? `Filtro ativo: ${value?.label ?? "Selecionado"}` : void 0,
        disabled,
        placeholder,
        value: inputValue,
        autoFocus,
        className: cn(
          fieldClass,
          "pr-14",
          error && "border-destructive focus:border-destructive focus:ring-destructive/20",
          className
        ),
        onChange: (e) => {
          setInputValue(e.target.value);
          setOpen(e.target.value.length >= minCharsToOpen);
        },
        onFocus: () => setOpen(inputValue.length >= minCharsToOpen),
        onBlur: () => setTimeout(() => setOpen(false), 120),
        onKeyDown: handleKeyDown
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 right-2 flex items-center gap-1", children: [
      isLoading && /* @__PURE__ */ jsx(IconSpinner, { size: 14, className: "animate-spin text-muted-foreground" }),
      !isLoading && inputValue && !disabled && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onMouseDown: (e) => {
            e.preventDefault();
            clear();
          },
          className: "flex size-5 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
          children: /* @__PURE__ */ jsx(IconClose, { size: 12 })
        }
      ),
      /* @__PURE__ */ jsx(IconChevronDown, { size: 12, className: cn("text-muted-foreground transition-transform duration-150", open && "rotate-180") })
    ] }),
    open && /* @__PURE__ */ jsxs(
      "div",
      {
        ref: listRef,
        className: cn(
          "absolute z-50 flex w-full flex-col overflow-auto rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
          "max-h-72",
          dropUp ? "bottom-full mb-1.5" : "top-full mt-1.5"
        ),
        children: [
          isLoading && /* @__PURE__ */ jsx("span", { className: "select-none py-4 text-center text-[12.5px] font-medium text-muted-foreground", children: loadingText }),
          !isLoading && filtered.map((option, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              onMouseDown: (e) => {
                e.preventDefault();
                pick(option);
              },
              onMouseEnter: () => setHighlighted(index),
              className: cn(
                "flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors",
                index === highlighted && "bg-foreground/[0.05]"
              ),
              children: [
                option.icon,
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "block truncate text-[13px] font-medium leading-tight",
                        option.value === value?.value && "font-semibold text-brand"
                      ),
                      children: option.label
                    }
                  ),
                  option.description && /* @__PURE__ */ jsx("span", { className: "mt-0.5 block truncate text-[11.5px] leading-tight text-muted-foreground", children: option.description })
                ] })
              ]
            },
            option.value
          )),
          !isLoading && filtered.length === 0 && showEmpty && /* @__PURE__ */ jsx("span", { className: "select-none py-4 text-center text-[12.5px] font-medium text-muted-foreground", children: emptyText })
        ]
      }
    )
  ] });
  if (!label && !error) return field;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full min-w-0 flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
      labelExtra
    ] }),
    field,
    error && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-destructive", children: error })
  ] });
}

export { ComboBox };
//# sourceMappingURL=chunk-3C6MUM4Z.js.map
//# sourceMappingURL=chunk-3C6MUM4Z.js.map