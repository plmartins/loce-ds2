import { AICard } from './chunk-RW3WQ6LQ.js';
import { AIIcon } from './chunk-UDHVI3DS.js';
import { cn } from './chunk-OLJVOECQ.js';
import { lazy, useSyncExternalStore, useState, useEffect, Suspense } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

var Effect = lazy(() => import('./components/AIMediaEffect.js').then((module) => ({ default: module.AIMediaEffect })));
var readTheme = () => typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light";
function subscribeTheme(update) {
  const observer = new MutationObserver(update);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
function AIMediaPreview({ state, src, preset, label = "Gerando m\xEDdia\u2026", animated = true, theme, borderRadius = 0, onRevealed, children, className, style, ...props }) {
  const appTheme = useSyncExternalStore(subscribeTheme, readTheme, () => "light");
  const [pendingReveal, setPendingReveal] = useState(state === "generating");
  useEffect(() => {
    if (state === "generating") setPendingReveal(true);
  }, [state]);
  const active = state === "generating" || state === "ready" && pendingReveal;
  const [fadingBeam, setFadingBeam] = useState(false);
  useEffect(() => {
    if (active) {
      setFadingBeam(true);
      return;
    }
    const timer = setTimeout(() => setFadingBeam(false), 500);
    return () => clearTimeout(timer);
  }, [active]);
  return /* @__PURE__ */ jsxs("div", { ...props, className: cn("ds-ai-media-preview", className), style: { borderRadius, ...style }, "data-state": state, "aria-busy": active || void 0, children: [
    /* @__PURE__ */ jsx("div", { className: "ds-ai-media-result", style: { visibility: active ? "hidden" : void 0 }, children }),
    active && /* @__PURE__ */ jsxs("div", { className: "ds-ai-media-overlay", role: "status", "aria-label": state === "generating" ? label : "Revelando resultado", children: [
      /* @__PURE__ */ jsx("div", { className: "ds-ai-effect-base", "aria-hidden": "true", children: /* @__PURE__ */ jsx(AIIcon, { size: 30 }) }),
      /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Effect, { preset, dark: (theme ?? appTheme) === "dark", animated, imageSrc: src, reveal: state === "ready", onRevealed: () => {
        setPendingReveal(false);
        onRevealed?.();
      } }) })
    ] }),
    (active || fadingBeam) && /* @__PURE__ */ jsx(AICard, { "aria-hidden": "true", animated, beamType: "pulse-inner", borderRadius, className: "ds-ai-media-beam", style: { opacity: active ? 1 : 0 }, surfaceClassName: "ds-ai-effect-content", children: /* @__PURE__ */ jsx("span", {}) })
  ] });
}

export { AIMediaPreview };
//# sourceMappingURL=chunk-M5COOFA5.js.map
//# sourceMappingURL=chunk-M5COOFA5.js.map