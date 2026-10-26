import { AICard } from './chunk-RW3WQ6LQ.js';
import { cn } from './chunk-OLJVOECQ.js';
import { AIIcon } from './chunk-ZXMPFHW5.js';
import { IconChevronUp } from './chunk-YI6FNLUZ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function AISplitButton({ children, icon, onClick, loading = false, loadingLabel = "Gerando\u2026", disabled = false, size = "default", className, menuTrigger, menuLabel = "Mais op\xE7\xF5es", menuIcon, mainProps }) {
  const unavailable = disabled && !loading;
  const menuButton = /* @__PURE__ */ jsx("button", { type: "button", className: "ds-ai-button ds-ai-split-menu", disabled: unavailable || loading, "aria-label": menuLabel, children: menuIcon ?? /* @__PURE__ */ jsx(IconChevronUp, { size: 14 }) });
  return /* @__PURE__ */ jsxs("span", { className: cn("ds-ai-action", className), "data-loading": loading, "data-disabled": unavailable, "data-size": size, "data-variant": "beam", "data-layout": "label", children: [
    (!unavailable || loading) && /* @__PURE__ */ jsxs("span", { className: "ds-ai-action-effects", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx(AICard, { beamType: "md", borderRadius: 12, className: "ds-ai-action-beam ds-ai-idle", surfaceClassName: "ds-ai-effect-content", children: /* @__PURE__ */ jsx("span", {}) }),
      /* @__PURE__ */ jsx(AICard, { beamType: "pulse-inner", borderRadius: 12, className: "ds-ai-action-beam ds-ai-busy", surfaceClassName: "ds-ai-effect-content", children: /* @__PURE__ */ jsx("span", {}) })
    ] }),
    /* @__PURE__ */ jsxs("button", { ...mainProps, type: "button", className: "ds-ai-button", onClick, disabled: unavailable || loading, "aria-busy": loading || void 0, children: [
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn("ds-ai-action-icon", loading && "ds-ai-working"), children: icon ?? /* @__PURE__ */ jsx(AIIcon, { size: size === "compact" ? 15 : 17 }) }),
      /* @__PURE__ */ jsxs("span", { className: "ds-ai-action-label", children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "ds-ai-reserve", children }),
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "ds-ai-reserve", children: loadingLabel }),
        /* @__PURE__ */ jsx("span", { children: loading ? loadingLabel : children })
      ] })
    ] }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "ds-ai-split-divider" }),
    menuTrigger(menuButton)
  ] });
}

export { AISplitButton };
//# sourceMappingURL=chunk-5NZTUXJA.js.map
//# sourceMappingURL=chunk-5NZTUXJA.js.map