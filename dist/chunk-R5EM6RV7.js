import { Button } from './chunk-M4AAQCYD.js';
import { Checkbox } from './chunk-FEVHBLAL.js';
import { Input } from './chunk-WCQNENN4.js';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './chunk-UWMLXJUB.js';
import { IconTrash } from './chunk-IMSRTD5O.js';
import { useState, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

function ModalDelete(props) {
  const {
    open,
    onClose,
    onConfirm,
    title = "Confirma exclus\xE3o?",
    description = "Esta a\xE7\xE3o n\xE3o pode ser desfeita.",
    confirmLabel = "Excluir",
    cancelLabel = "Cancelar",
    isLoading = false,
    icon = /* @__PURE__ */ jsx(IconTrash, { size: 15 })
  } = props;
  const mode = "mode" in props ? props.mode : "simple";
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (!open) {
      setChecked(false);
      setInputValue("");
    }
  }, [open]);
  const isConfirmed = (() => {
    if (!mode || mode === "simple") return true;
    if (mode === "checkbox") return checked;
    if (mode === "input") {
      const confirmText = "confirmText" in props ? props.confirmText : "";
      return inputValue === confirmText;
    }
    return true;
  })();
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx(DialogDescription, { children: description })
    ] }),
    mode === "checkbox" && /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(
      Checkbox,
      {
        label: "checkboxLabel" in props && props.checkboxLabel ? props.checkboxLabel : "Entendi que esta a\xE7\xE3o n\xE3o pode ser desfeita",
        checked,
        onChange: (e) => setChecked(e.target.checked)
      }
    ) }),
    mode === "input" && /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(
      Input,
      {
        label: `Digite "${"confirmText" in props ? props.confirmText : ""}" para confirmar`,
        placeholder: "inputPlaceholder" in props ? props.inputPlaceholder : "",
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value)
      }
    ) }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      !isLoading && /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "px-6", onClick: onClose, children: cancelLabel }),
      /* @__PURE__ */ jsxs(Button, { variant: "destructive", className: "px-8", onClick: onConfirm, loading: isLoading, disabled: !isConfirmed, children: [
        !isLoading && icon,
        isLoading ? "Processando..." : confirmLabel
      ] })
    ] })
  ] }) });
}

export { ModalDelete };
//# sourceMappingURL=chunk-R5EM6RV7.js.map
//# sourceMappingURL=chunk-R5EM6RV7.js.map