import { Button } from './chunk-BQOHXGWU.js';
import { IconWarning } from './chunk-MWJL44IO.js';
import { IconRefresh } from './chunk-CLLGHK5D.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function ErrorState({
  title = "Algo deu errado",
  description = "N\xE3o conseguimos carregar os dados. Verifique a conex\xE3o e tente de novo.",
  onRetry,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative flex w-full items-center gap-5 overflow-hidden rounded-2xl bg-card px-6 py-8 ring-1 ring-border", className), children: [
    /* @__PURE__ */ jsx("span", { className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-warning/10 text-warning ring-1 ring-warning/20", children: /* @__PURE__ */ jsx(IconWarning, { size: 26 }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-col gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold text-foreground", children: title }),
      /* @__PURE__ */ jsx("span", { className: "max-w-md text-[12.5px] leading-snug text-muted-foreground", children: description }),
      onRetry && /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", onClick: onRetry, children: [
        /* @__PURE__ */ jsx(IconRefresh, { size: 14 }),
        "Tentar de novo"
      ] }) })
    ] })
  ] });
}

export { ErrorState };
//# sourceMappingURL=chunk-KVYQL4X4.js.map
//# sourceMappingURL=chunk-KVYQL4X4.js.map