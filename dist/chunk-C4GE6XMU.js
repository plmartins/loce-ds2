import { IconSparkle } from './chunk-D5TU3Y53.js';
import { cn } from './chunk-OLJVOECQ.js';
import { useRef, useLayoutEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

function AISpectrum({ children, iconSize = 14, hideIcon = false, className, ...props }) {
  const glyph = useRef(null);
  useLayoutEffect(() => {
    const icon = glyph.current?.querySelector("svg");
    if (!icon || !glyph.current) return;
    const svg = icon.cloneNode(true);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const url = `url("data:image/svg+xml,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}")`;
    glyph.current.style.maskImage = url;
    glyph.current.style.webkitMaskImage = url;
  }, []);
  return /* @__PURE__ */ jsxs("span", { ...props, className: cn("ds-ai-spectrum", className), children: [
    !hideIcon && /* @__PURE__ */ jsx("span", { ref: glyph, className: "ds-ai-spectrum-glyph", style: { width: iconSize, height: iconSize }, "aria-hidden": "true", children: /* @__PURE__ */ jsx(IconSparkle, { size: iconSize }) }),
    children != null && /* @__PURE__ */ jsx("span", { className: "ds-ai-spectrum-text", children })
  ] });
}

export { AISpectrum };
//# sourceMappingURL=chunk-C4GE6XMU.js.map
//# sourceMappingURL=chunk-C4GE6XMU.js.map