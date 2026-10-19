import { AIIcon } from './chunk-2VBCAYSW.js';
import './chunk-ZX55D3U4.js';
import { useRef, useState, useEffect, Component } from 'react';
import { ImageGeneration } from 'img-fx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

var EffectBoundary = class extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
};
function EffectFallback({ reveal, onComplete, children }) {
  const callback = useRef(onComplete);
  callback.current = onComplete;
  useEffect(() => {
    if (reveal) callback.current();
  }, [reveal]);
  return /* @__PURE__ */ jsx(Fragment, { children });
}
function AIMediaEffect({ dark, animated, preset = "pixels-organic", reveal = false, imageSrc, readyContent, onRevealed }) {
  const host = useRef(null);
  const effect = useRef(null);
  const callback = useRef(onRevealed);
  callback.current = onRevealed;
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(typeof document !== "undefined" && document.hidden);
  const [reduced, setReduced] = useState(() => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [loadedSrc, setLoadedSrc] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [complete, setComplete] = useState(false);
  const ready = !!imageSrc && loadedSrc === imageSrc;
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReduced(preference.matches);
    const onVisibility = () => setHidden(document.hidden);
    const observer = new IntersectionObserver((entries) => setVisible(entries[0].isIntersecting));
    if (host.current) observer.observe(host.current);
    preference.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  useEffect(() => {
    let cancelled = false;
    setLoadedSrc(null);
    setLoadError(false);
    setComplete(false);
    if (!imageSrc) return;
    const image = new Image();
    image.onload = async () => {
      try {
        await image.decode();
      } catch {
      }
      if (!cancelled) setLoadedSrc(imageSrc);
    };
    image.onerror = () => {
      if (!cancelled) setLoadError(true);
    };
    image.src = imageSrc;
    return () => {
      cancelled = true;
      image.onload = null;
      image.onerror = null;
    };
  }, [imageSrc]);
  useEffect(() => {
    if (!reveal) {
      setComplete(false);
      if (effect.current?.isImageActive()) effect.current.triggerRegenerate({ autoReveal: false });
      return;
    }
    if (loadError || !imageSrc) {
      setComplete(true);
      callback.current?.();
      return;
    }
    if (!ready) return;
    if (!animated || reduced) {
      setComplete(true);
      callback.current?.();
      return;
    }
    if (!visible || hidden) return;
    const frame = requestAnimationFrame(() => effect.current?.triggerReveal({ hold: "manual" }));
    const timeout = setTimeout(() => {
      setComplete(true);
      callback.current?.();
    }, 1e4);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [reveal, ready, animated, reduced, loadError, imageSrc, visible, hidden]);
  const finalContent = readyContent ?? /* @__PURE__ */ jsx("img", { src: imageSrc, alt: "Resultado da gera\xE7\xE3o", className: "ds-ai-revealed-image" });
  return /* @__PURE__ */ jsxs("div", { ref: host, className: "ds-ai-media-effect", "data-reveal": complete && reveal ? "complete" : reveal ? "revealing" : "generating", "aria-label": complete && reveal ? "M\xEDdia gerada" : "Efeito de gera\xE7\xE3o de imagem", role: "group", children: [
    /* @__PURE__ */ jsx("div", { className: "ds-ai-effect-base", "aria-hidden": "true", children: /* @__PURE__ */ jsx(AIIcon, { size: 30 }) }),
    !reduced && /* @__PURE__ */ jsx(EffectBoundary, { fallback: /* @__PURE__ */ jsx(EffectFallback, { reveal, onComplete: () => callback.current?.(), children: ready && reveal ? finalContent : null }), children: /* @__PURE__ */ jsx(ImageGeneration, { ref: effect, images: ready ? imageSrc : void 0, preset, theme: dark ? "dark" : "light", autoReveal: false, revealInitialDelay: 0, paused: !animated || hidden || !visible || complete && reveal, borderRadius: 0, onCycle: (event) => {
      if (event.phase === "visible") {
        setComplete(true);
        callback.current?.();
      }
    }, "aria-hidden": "true", style: { position: "absolute", inset: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ jsx("div", { style: { height: "100%", width: "100%" } }) }) }),
    complete && reveal && ready && /* @__PURE__ */ jsx("div", { className: "ds-ai-revealed-content", children: finalContent }),
    loadError && /* @__PURE__ */ jsx("span", { className: "ds-ai-effect-fallback", children: "N\xE3o foi poss\xEDvel carregar o resultado." }),
    reduced && !reveal && /* @__PURE__ */ jsx("span", { className: "ds-ai-effect-fallback", children: "Movimento reduzido ativado" })
  ] });
}

export { AIMediaEffect };
//# sourceMappingURL=AIMediaEffect-HKLRVJJI.js.map
//# sourceMappingURL=AIMediaEffect-HKLRVJJI.js.map