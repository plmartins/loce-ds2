import { cn } from './chunk-OLJVOECQ.js';
import { useSyncExternalStore } from 'react';
import { BorderBeam } from 'border-beam';
import { jsx } from 'react/jsx-runtime';

var reducedMotionCSS = `
@media (prefers-reduced-motion: reduce) {
  [data-beam="{id}"], [data-beam="{id}"]::before,
  [data-beam="{id}"]::after, [data-beam="{id}"] [data-beam-bloom] {
    animation: none !important;
  }
  [data-beam="{id}"]::before, [data-beam="{id}"]::after,
  [data-beam="{id}"] [data-beam-bloom] { display: none !important; }
}
`;
function subscribeTheme(onChange) {
  if (typeof document === "undefined") return () => {
  };
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
function readTheme() {
  return typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light";
}
var serverTheme = () => "light";
function AICard({ as: Tag = "article", tone = "default", animated = true, borderRadius = 24, beamColor = "colorful", beamType = "md", beamGlowSize = 1, beamTheme, children, className, surfaceClassName, style, ...props }) {
  const appTheme = useSyncExternalStore(subscribeTheme, readTheme, serverTheme);
  const resolvedBeamTheme = beamTheme ?? (tone === "dark" ? "dark" : appTheme);
  const content = /* @__PURE__ */ jsx(Tag, { ...props, className: cn("ds-ai-card-surface", surfaceClassName), children });
  return animated ? /* @__PURE__ */ jsx(BorderBeam, { "data-tone": tone, "data-beam-theme": resolvedBeamTheme, "data-beam-type": beamType, "data-animated": "true", className: cn("ds-ai-card", className), style: { borderRadius, ...style }, borderRadius, size: beamType, glowSize: beamGlowSize, colorVariant: beamColor, theme: resolvedBeamTheme, css: reducedMotionCSS, children: content }) : /* @__PURE__ */ jsx("div", { "data-tone": tone, "data-animated": "false", className: cn("ds-ai-card", className), style: { borderRadius, ...style }, children: content });
}

export { AICard };
//# sourceMappingURL=chunk-RW3WQ6LQ.js.map
//# sourceMappingURL=chunk-RW3WQ6LQ.js.map