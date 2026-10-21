import { Dialog, DialogContent, DialogTitle, DialogDescription } from './chunk-UWMLXJUB.js';
import { AISurface } from './chunk-LM3FCKQ3.js';
import { AIIcon } from './chunk-UDHVI3DS.js';
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
//# sourceMappingURL=chunk-C6ZJX5IM.js.map
//# sourceMappingURL=chunk-C6ZJX5IM.js.map