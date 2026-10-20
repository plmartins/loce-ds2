import { Button } from './chunk-BQOHXGWU.js';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './chunk-4OVSWOCL.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function ModalConfirm({
  open,
  onClose,
  onConfirm,
  title,
  description,
  children,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  confirmIcon,
  variant = "primary",
  isLoading = false
}) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: title }),
      description && /* @__PURE__ */ jsx(DialogDescription, { children: description })
    ] }),
    children && /* @__PURE__ */ jsx("div", { className: "-mx-6 min-h-0 flex-1 overflow-y-auto px-6 py-1", children }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      !isLoading && /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "px-6", onClick: onClose, children: cancelLabel }),
      /* @__PURE__ */ jsxs(Button, { variant, className: "px-8", onClick: onConfirm, loading: isLoading, children: [
        !isLoading && confirmIcon,
        isLoading ? "Processando..." : confirmLabel
      ] })
    ] })
  ] }) });
}

export { ModalConfirm };
//# sourceMappingURL=chunk-76NQS23J.js.map
//# sourceMappingURL=chunk-76NQS23J.js.map