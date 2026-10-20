import { IconMouse } from './chunk-UAQFEFN4.js';
import { IconHandGrab } from './chunk-56UI4LHW.js';
import { IconCursorClick } from './chunk-ELVVJUCT.js';
import { cn } from './chunk-OLJVOECQ.js';
import { useState, useRef, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

function ImageWithZoom({ src, fallbackSrc, fallbackClassName, width, height, className, onLoad, onError, isDisabled }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isFallback, setIsFallback] = useState(false);
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const portalContainer = useMemo(() => {
    const el = document.createElement("div");
    el.className = "image-zoom-portal";
    return el;
  }, []);
  useEffect(() => {
    document.body.appendChild(portalContainer);
    return () => {
      document.body.removeChild(portalContainer);
    };
  }, [portalContainer]);
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  useEffect(() => {
    setCurrentSrc(src);
    setIsFallback(false);
  }, [src]);
  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setIsFallback(true);
    }
    onError?.();
  };
  if (isDisabled) {
    return /* @__PURE__ */ jsx("img", { src: currentSrc, alt: "Imagem", width, height, className: cn(className, isFallback && fallbackClassName), onLoad, onError: handleError });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: currentSrc,
        alt: "Imagem",
        width,
        height,
        className: cn("cursor-zoom-in", className, isFallback && fallbackClassName),
        onLoad,
        onError: handleError,
        onClick: () => {
          setOpen(true);
          setScale(1);
          setTranslate({ x: 0, y: 0 });
        }
      }
    ),
    open && createPortal(
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm",
          onWheel: (e) => e.preventDefault(),
          onMouseUp: () => setDragging(false),
          onMouseLeave: () => setDragging(false),
          onClick: () => {
            setOpen(false);
            setScale(1);
            setTranslate({ x: 0, y: 0 });
          },
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: currentSrc,
                alt: "Imagem ampliada",
                onError: handleError,
                className: "max-h-[90vh] max-w-[90vw] select-none rounded-xl",
                onClick: (e) => e.stopPropagation(),
                onWheel: (e) => {
                  e.preventDefault();
                  const delta = -e.deltaY * 15e-4;
                  setScale((prev) => {
                    const next = Math.min(4, Math.max(1, prev + delta));
                    if (next === 1) setTranslate({ x: 0, y: 0 });
                    return Number(next.toFixed(3));
                  });
                },
                onMouseDown: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragging(true);
                  dragStart.current = { x: e.clientX, y: e.clientY };
                  translateStart.current = { ...translate };
                },
                onMouseMove: (e) => {
                  if (!dragging || scale === 1) return;
                  const dx = e.clientX - dragStart.current.x;
                  const dy = e.clientY - dragStart.current.y;
                  setTranslate({ x: translateStart.current.x + dx, y: translateStart.current.y + dy });
                },
                onDoubleClick: (e) => {
                  e.stopPropagation();
                  if (scale > 1) {
                    setScale(1);
                    setTranslate({ x: 0, y: 0 });
                  } else {
                    setScale(2);
                  }
                },
                style: {
                  transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`,
                  transformOrigin: "center",
                  cursor: scale > 1 ? dragging ? "grabbing" : "grab" : "zoom-in",
                  transition: dragging ? "none" : "transform 120ms ease-out"
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute bottom-6 left-6 flex w-max select-none flex-col gap-2 rounded-2xl bg-black/50 px-3 py-3 text-[11px] font-medium text-neutral-300 shadow-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(IconCursorClick, { size: 15 }),
                /* @__PURE__ */ jsx("span", { children: "Duplo clique para aproximar ou resetar" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(IconMouse, { size: 15 }),
                /* @__PURE__ */ jsx("span", { children: "Use o scroll para zoom suave" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(IconHandGrab, { size: 15 }),
                /* @__PURE__ */ jsx("span", { children: "Arraste a imagem para mover" })
              ] })
            ] })
          ]
        }
      ),
      portalContainer
    )
  ] });
}

export { ImageWithZoom };
//# sourceMappingURL=chunk-KZT6ESW3.js.map
//# sourceMappingURL=chunk-KZT6ESW3.js.map