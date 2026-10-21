import { ScrollFade } from './chunk-AUZEB7CT.js';
import { Button } from './chunk-M4AAQCYD.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconClose } from './chunk-7KC4L5MT.js';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { jsxs, jsx } from 'react/jsx-runtime';

function SheetEntity({
  open,
  onClose,
  title,
  description,
  headerExtra,
  children,
  footer,
  submitLabel = "Salvar",
  cancelLabel = "Cancelar",
  onSubmit,
  isLoading,
  size = "default",
  contentClassName
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(timer);
    }
  }, [open]);
  useEffect(() => {
    if (!mounted || !open) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [mounted, open]);
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);
  if (!mounted) return null;
  return createPortal(
    // stopPropagation: aberto de dentro de uma row clicável, cliques no
    // painel não podem vazar pro onClick da linha (portal preserva bubbling
    // na árvore React).
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity duration-200", visible ? "opacity-100" : "opacity-0"),
          onClick: onClose
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "absolute bottom-0 right-0 top-0 flex w-full flex-col border-l border-border bg-card shadow-2xl shadow-black/25",
            "transition-transform duration-200 ease-out",
            size === "wide" ? "sm:max-w-3xl" : "sm:max-w-md",
            visible ? "translate-x-0" : "translate-x-full"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative shrink-0 border-b border-border px-6 pb-4 pr-14 pt-6", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold leading-tight text-foreground", children: title }),
              description && /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-[13px] font-medium leading-snug text-muted-foreground", children: description }),
              headerExtra && /* @__PURE__ */ jsx("div", { className: "mt-3", children: headerExtra }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  "aria-label": "Fechar",
                  className: "absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
                  children: /* @__PURE__ */ jsx(IconClose, { size: 15 })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(ScrollFade, { position: "both", className: cn("px-6 py-6", contentClassName), children }),
            (footer || onSubmit) && /* @__PURE__ */ jsx("div", { className: "shrink-0 border-t border-border px-6 py-4", children: footer || /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              !isLoading && /* @__PURE__ */ jsx(Button, { onClick: onClose, variant: "secondary", className: "flex-1", children: cancelLabel }),
              /* @__PURE__ */ jsx(Button, { onClick: onSubmit, variant: "primary", className: "flex-1", loading: isLoading, children: isLoading ? "Salvando..." : submitLabel })
            ] }) })
          ]
        }
      )
    ] }),
    document.body
  );
}

export { SheetEntity };
//# sourceMappingURL=chunk-QMFPLY63.js.map
//# sourceMappingURL=chunk-QMFPLY63.js.map