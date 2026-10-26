import { Dialog, DialogContent, DialogTitle, DialogDescription } from './chunk-4OVSWOCL.js';
import { AISurface } from './chunk-XJNA3FXQ.js';
import { AIIcon } from './chunk-CG2SIKB3.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function AIActionDialog({ open, onOpenChange, title, description, loading, children, className }) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsx(DialogContent, { className: `ds-ai-dialog ${className ?? ""}`, children: /* @__PURE__ */ jsxs(AISurface, { loading, borderRadius: 24, children: [
    /* @__PURE__ */ jsxs("header", { className: "ds-ai-dialog-header", children: [
      /* @__PURE__ */ jsx(AIIcon, { size: 28 }),
      /* @__PURE__ */ jsx(DialogTitle, { children: title }),
      description && /* @__PURE__ */ jsx(DialogDescription, { children: description })
    ] }),
    children
  ] }) }) });
}

export { AIActionDialog };
//# sourceMappingURL=chunk-HVTX2ZZ3.js.map
//# sourceMappingURL=chunk-HVTX2ZZ3.js.map