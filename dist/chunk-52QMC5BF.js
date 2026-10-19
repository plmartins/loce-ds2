// src/lib/popover.ts
function anchoredPosition(rect, width, viewportWidth, margin = 8) {
  const top = rect.bottom + 4;
  if (!width || rect.left + width <= viewportWidth - margin) return { top, left: rect.left };
  const right = Math.max(margin, viewportWidth - rect.right);
  return { top, right, maxWidth: viewportWidth - right - margin };
}
function naturalWidth(el) {
  if (!el) return 0;
  const prev = el.style.cssText;
  el.style.left = "0px";
  el.style.right = "auto";
  el.style.maxWidth = "none";
  const width = el.offsetWidth;
  el.style.cssText = prev;
  return width;
}

export { anchoredPosition, naturalWidth };
//# sourceMappingURL=chunk-52QMC5BF.js.map
//# sourceMappingURL=chunk-52QMC5BF.js.map