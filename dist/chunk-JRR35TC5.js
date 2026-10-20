import { AISurface } from './chunk-7WXOLEN7.js';
import { cn } from './chunk-OLJVOECQ.js';
import { useRef, useState, useLayoutEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

function AIComposerRegion({ children, className }) {
  const content = useRef(null);
  const [height, setHeight] = useState();
  useLayoutEffect(() => {
    const element = content.current;
    if (!element) return;
    const measure = () => setHeight(element.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: cn("ds-ai-composer-region", className), style: { height }, children: /* @__PURE__ */ jsx("div", { ref: content, children }) });
}
function AIComposerInput({ value, onChange, onSubmit, canSubmit = true, maxTextHeight = 112, minTextHeight = 48, className, style, ref, onKeyDown, onTransitionEnd, ...props }) {
  const input = useRef(null);
  const measurement = useRef(null);
  const [height, setHeight] = useState(minTextHeight);
  useLayoutEffect(() => {
    const measure = () => {
      if (measurement.current) setHeight(Math.max(minTextHeight, Math.min(measurement.current.scrollHeight, maxTextHeight)));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (measurement.current) observer.observe(measurement.current);
    return () => observer.disconnect();
  }, [value, minTextHeight, maxTextHeight]);
  const keepCaretVisible = () => {
    const element = input.current;
    if (element && document.activeElement === element && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) element.scrollTop = element.scrollHeight;
  };
  return /* @__PURE__ */ jsxs("div", { className: "ds-ai-composer-input", children: [
    /* @__PURE__ */ jsx("textarea", { ...props, ref: (element) => {
      input.current = element;
      if (typeof ref === "function") ref(element);
      else if (ref) ref.current = element;
    }, value, onChange: (e) => {
      onChange(e.target.value);
      requestAnimationFrame(keepCaretVisible);
    }, rows: 1, className: cn("ds-ai-prompt", className), style: { ...style, height }, onTransitionEnd: (e) => {
      keepCaretVisible();
      onTransitionEnd?.(e);
    }, onKeyDown: (e) => {
      onKeyDown?.(e);
      if (!e.defaultPrevented && e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && onSubmit) {
        e.preventDefault();
        if (canSubmit && !props.disabled) onSubmit();
      }
    } }),
    /* @__PURE__ */ jsx("textarea", { className: cn("ds-ai-prompt ds-ai-prompt-measure", className), style, ref: measurement, value, readOnly: true, "aria-hidden": "true", tabIndex: -1, inert: true, rows: 1 })
  ] });
}
function AIComposer({ topSlot, controls, action, effect, loading, animated, surfaceProps, className, disabled, ...input }) {
  return /* @__PURE__ */ jsxs(AISurface, { ...surfaceProps, className: cn("ds-ai-composer", className, surfaceProps?.className), effect, loading, animated, contentClassName: "ds-ai-composer-content", children: [
    /* @__PURE__ */ jsx(AIComposerRegion, { children: topSlot }),
    /* @__PURE__ */ jsx(AIComposerInput, { ...input, disabled: disabled || loading }),
    /* @__PURE__ */ jsx(AIComposerRegion, { children: /* @__PURE__ */ jsxs("div", { className: "ds-ai-composer-toolbar", children: [
      /* @__PURE__ */ jsx("div", { className: "ds-ai-composer-controls", children: controls }),
      action
    ] }) })
  ] });
}

export { AIComposer, AIComposerInput, AIComposerRegion };
//# sourceMappingURL=chunk-JRR35TC5.js.map
//# sourceMappingURL=chunk-JRR35TC5.js.map