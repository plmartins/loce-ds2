import { AICard } from './chunk-RW3WQ6LQ.js';
import { cn } from './chunk-OLJVOECQ.js';
import { AIIcon } from './chunk-ZXMPFHW5.js';
import { IconSparkle } from './chunk-D5TU3Y53.js';
import { IconArrowUp } from './chunk-WBUZ5JFP.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function AICost({ credits, state = credits === void 0 ? "pending" : "ready", className, ...props }) {
  if (state === "ready" && credits === void 0) state = "pending";
  const label = state === "pending" ? "Consultando custo" : state === "unavailable" ? "Custo indispon\xEDvel" : credits === 0 ? "Gr\xE1tis" : `${new Intl.NumberFormat("pt-BR").format(credits ?? 0)} cr\xE9ditos`;
  return /* @__PURE__ */ jsxs("span", { className: cn("ds-ai-cost", className), "aria-label": label, ...props, children: [
    /* @__PURE__ */ jsx(IconSparkle, { size: 13, "aria-hidden": "true" }),
    state === "pending" ? "\u2026" : state === "unavailable" ? "\u2014" : credits === 0 ? "Gr\xE1tis" : new Intl.NumberFormat("pt-BR").format(credits ?? 0)
  ] });
}
function AIButton({ size = "default", variant = "beam", layout = "label", icon, loading = false, loadingLabel = "Gerando\u2026", credits, costState, animated = true, children, disabled, className, wrapperClassName, type = "button", ...props }) {
  const showCost = credits !== void 0 || costState !== void 0;
  const resolvedCostState = costState === "ready" && credits === void 0 ? "pending" : costState;
  const unavailable = !!disabled || resolvedCostState === "pending";
  return /* @__PURE__ */ jsxs("span", { className: cn("ds-ai-action", wrapperClassName), "data-loading": loading, "data-disabled": unavailable && !loading, "data-size": size, "data-variant": variant, "data-layout": layout, children: [
    variant === "beam" && animated && (!unavailable || loading) && /* @__PURE__ */ jsxs("span", { className: "ds-ai-action-effects", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx(AICard, { beamType: "md", borderRadius: 12, className: "ds-ai-action-beam ds-ai-idle", surfaceClassName: "ds-ai-effect-content", children: /* @__PURE__ */ jsx("span", {}) }),
      /* @__PURE__ */ jsx(AICard, { beamType: "pulse-inner", borderRadius: 12, className: "ds-ai-action-beam ds-ai-busy", surfaceClassName: "ds-ai-effect-content", children: /* @__PURE__ */ jsx("span", {}) })
    ] }),
    /* @__PURE__ */ jsxs("button", { ...props, type, className: cn("ds-ai-button", className), disabled: unavailable || loading, "aria-busy": loading || void 0, children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn("ds-ai-action-icon", loading && "ds-ai-working"), children: icon ?? (variant === "gradient" ? /* @__PURE__ */ jsx(IconSparkle, { size: size === "compact" ? 15 : 17 }) : /* @__PURE__ */ jsx(AIIcon, { size: size === "compact" ? 15 : 17 })) }),
      /* @__PURE__ */ jsxs("span", { className: "ds-ai-action-label", children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "ds-ai-reserve", children }),
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "ds-ai-reserve", children: loadingLabel }),
        /* @__PURE__ */ jsx("span", { children: loading ? loadingLabel : children })
      ] }),
      showCost && /* @__PURE__ */ jsx("span", { className: "ds-ai-action-price", children: /* @__PURE__ */ jsx(AICost, { credits, state: resolvedCostState }) })
    ] })
  ] });
}
function AISendButton({ label = "Enviar mensagem", loadingLabel = "Enviando\u2026", ...props }) {
  return /* @__PURE__ */ jsx(AIButton, { ...props, variant: "gradient", size: "icon", icon: /* @__PURE__ */ jsx(IconArrowUp, { size: 18 }), loadingLabel, children: label });
}

export { AIButton, AICost, AISendButton };
//# sourceMappingURL=chunk-C2GM2VXI.js.map
//# sourceMappingURL=chunk-C2GM2VXI.js.map