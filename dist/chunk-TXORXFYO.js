import { fieldClass } from './chunk-66F2DMXG.js';
import { IconSearch } from './chunk-4CU3ZCHH.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function SearchInput({ className, onClear, showClear, filterActive, ...props }) {
  const hasValue = props.value != null && String(props.value).length > 0;
  const clearVisible = (showClear ?? hasValue) && !!onClear;
  return /* @__PURE__ */ jsxs("div", { className: cn("relative flex w-full items-center", className), children: [
    /* @__PURE__ */ jsx(IconSearch, { size: 14, className: cn("pointer-events-none absolute left-3", filterActive ? "text-brand" : "text-muted-foreground") }),
    /* @__PURE__ */ jsx(
      "input",
      {
        "data-filter-active": filterActive || void 0,
        title: filterActive ? "Busca aplicada. Use o X para limpar" : props.title,
        "aria-label": props["aria-label"] ?? (filterActive ? `${props.placeholder ?? "Busca"} \u2014 filtro ativo` : props.placeholder),
        type: "search",
        className: cn(fieldClass, "pl-8.5 pr-2 [&::-webkit-search-cancel-button]:hidden", clearVisible && "pr-10"),
        ...props
      }
    ),
    clearVisible && /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: onClear,
        "aria-label": "Limpar busca",
        title: "Limpar busca",
        className: "absolute right-2 flex size-7 cursor-pointer items-center justify-center rounded-full text-foreground/70 transition-colors duration-100 hover:bg-surface-2 hover:text-foreground active:scale-[0.97]",
        children: /* @__PURE__ */ jsx(IconClose, { size: 15 })
      }
    )
  ] });
}

export { SearchInput };
//# sourceMappingURL=chunk-TXORXFYO.js.map
//# sourceMappingURL=chunk-TXORXFYO.js.map