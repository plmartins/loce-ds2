import { AICard } from './chunk-RW3WQ6LQ.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function SelectCard({ options, value, onChange, columns = 2, layout = "horizontal", className }) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4"
  };
  return /* @__PURE__ */ jsx("div", { className: cn("grid gap-3", gridCols[columns], className), children: options.map((option) => {
    const isSelected = option.value === value;
    const aiSelected = isSelected && option.tone === "ai";
    const tile = option.icon && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors",
          aiSelected ? "bg-card text-foreground shadow-xs ring-1 ring-border/60" : isSelected ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
        ),
        children: option.icon
      }
    );
    const button = /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => onChange?.(option.value),
        className: cn(
          "cursor-pointer rounded-2xl border p-4 transition-all duration-150 active:scale-[0.98]",
          layout === "vertical" ? "flex flex-col items-center gap-2 text-center" : "flex items-center gap-3 text-left",
          aiSelected ? "w-full border-transparent bg-transparent" : isSelected ? "border-brand/50 bg-brand/5 ring-2 ring-brand/15" : "border-border bg-card shadow-xs hover:border-ring/50"
        ),
        children: [
          tile,
          /* @__PURE__ */ jsxs("div", { className: cn("min-w-0", layout === "vertical" ? "flex flex-col items-center gap-0.5" : "flex-1"), children: [
            /* @__PURE__ */ jsx("span", { className: "block text-[13px] font-semibold text-foreground", children: option.label }),
            option.description && /* @__PURE__ */ jsx("span", { className: cn("block text-xs font-medium", isSelected && !aiSelected ? "text-brand/80" : "text-muted-foreground"), children: option.description })
          ] })
        ]
      },
      option.value
    );
    if (!aiSelected) return button;
    return /* @__PURE__ */ jsx(AICard, { as: "section", animated: true, borderRadius: 16, className: "ds-ai-card-outline min-w-0", surfaceClassName: "p-0", children: button }, option.value);
  }) });
}

export { SelectCard };
//# sourceMappingURL=chunk-DFZ3IJ74.js.map
//# sourceMappingURL=chunk-DFZ3IJ74.js.map