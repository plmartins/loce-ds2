import { AIIcon } from './chunk-UDHVI3DS.js';
import { AICard } from './chunk-RW3WQ6LQ.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function AISurface({ loading = false, effect = true, animated = true, borderRadius = 20, contentClassName, className, style, children, ...props }) {
  return /* @__PURE__ */ jsxs("div", { ...props, className: cn("ds-ai-surface", className), "data-loading": loading, style: { "--ds-ai-radius": `${borderRadius}px`, ...style }, children: [
    effect && animated && /* @__PURE__ */ jsxs("div", { className: "ds-ai-surface-effects", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx(AICard, { beamType: "md", borderRadius, className: "ds-ai-surface-beam ds-ai-idle", surfaceClassName: "ds-ai-effect-content", children: /* @__PURE__ */ jsx("span", {}) }),
      /* @__PURE__ */ jsx(AICard, { beamType: "pulse-inner", borderRadius, className: "ds-ai-surface-beam ds-ai-busy", surfaceClassName: "ds-ai-effect-content", children: /* @__PURE__ */ jsx("span", {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: cn("ds-ai-surface-content", contentClassName), children })
  ] });
}
function AIWidget({ title, description, icon = /* @__PURE__ */ jsx(AIIcon, { size: 28 }), actions, children, ...props }) {
  return /* @__PURE__ */ jsxs(AISurface, { ...props, children: [
    title && /* @__PURE__ */ jsxs("header", { className: "ds-ai-widget-header", children: [
      icon,
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { children: title }),
        description && /* @__PURE__ */ jsx("p", { children: description })
      ] })
    ] }),
    children,
    actions && /* @__PURE__ */ jsx("div", { className: "ds-ai-widget-actions", children: actions })
  ] });
}

export { AISurface, AIWidget };
//# sourceMappingURL=chunk-7WXOLEN7.js.map
//# sourceMappingURL=chunk-7WXOLEN7.js.map