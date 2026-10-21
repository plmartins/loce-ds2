import { cn } from './chunk-OLJVOECQ.js';
import { IconSparkle } from './chunk-D5TU3Y53.js';
import { useRef, useLayoutEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

function AIActivity({ children = "Pensando\u2026", loading = true, animated = true, size = "default", className, ...props }) {
  const host = useRef(null);
  const glyph = useRef(null);
  useLayoutEffect(() => {
    const element = host.current;
    const icon = glyph.current?.querySelector("svg");
    if (!element || !icon) return;
    const svg = icon.cloneNode(true);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    glyph.current.style.maskImage = `url("data:image/svg+xml,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}")`;
    const measure = () => element.style.setProperty("--activity-width", `${element.getBoundingClientRect().width}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("span", { ...props, ref: host, className: cn("ds-ai-activity", className), role: "status", "aria-live": "polite", "data-loading": loading && animated, "data-size": size, children: [
    /* @__PURE__ */ jsx("span", { ref: glyph, className: "ds-ai-activity-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(IconSparkle, { size: 20 }) }),
    /* @__PURE__ */ jsx("span", { className: "ds-ai-activity-text", children })
  ] });
}

export { AIActivity };
//# sourceMappingURL=chunk-EEZ6J6J2.js.map
//# sourceMappingURL=chunk-EEZ6J6J2.js.map