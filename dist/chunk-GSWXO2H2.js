import { IconArrowLeft } from './chunk-A3A7AIHB.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SIZE_CLASS = {
  default: "max-w-6xl",
  wide: "max-w-[1600px]",
  full: "max-w-none"
};
function PageShell({ title, description, actions, onBack, children, size = "default", className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("mx-auto flex w-full flex-1 flex-col gap-5 p-4 md:p-6", SIZE_CLASS[size], className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
        onBack && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onBack,
            className: "mt-0.5 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
            "aria-label": "Voltar",
            children: /* @__PURE__ */ jsx(IconArrowLeft, { size: 17 })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h1", { className: "truncate text-lg font-bold leading-tight md:text-xl", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-[13px] text-muted-foreground", children: description })
        ] })
      ] }),
      actions && /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-2", children: actions })
    ] }),
    children
  ] });
}

export { PageShell };
//# sourceMappingURL=chunk-GSWXO2H2.js.map
//# sourceMappingURL=chunk-GSWXO2H2.js.map