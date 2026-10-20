import { cn } from './chunk-OLJVOECQ.js';
import { useRef, useState, useCallback, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

function ScrollFade({ children, className, fadeHeight = 60, position = "bottom" }) {
  const ref = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    setShowTop(scrollTop > 10);
    setShowBottom(scrollHeight - scrollTop - clientHeight > 10);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check, { passive: true });
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", check);
      observer.disconnect();
    };
  }, [check]);
  const showTopFade = (position === "top" || position === "both") && showTop;
  const showBottomFade = (position === "bottom" || position === "both") && showBottom;
  const fadeStyle = (direction) => ({
    height: fadeHeight,
    background: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, var(--card), transparent)`,
    mask: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, black, transparent)`,
    WebkitMask: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, black, transparent)`
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-0 flex-1", children: [
    showTopFade && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-0 right-0 top-0 z-10", style: fadeStyle("top") }),
    /* @__PURE__ */ jsx("div", { ref, className: cn("h-full overflow-y-auto", className), children }),
    showBottomFade && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 right-0 z-10", style: fadeStyle("bottom") })
  ] });
}

export { ScrollFade };
//# sourceMappingURL=chunk-AUZEB7CT.js.map
//# sourceMappingURL=chunk-AUZEB7CT.js.map