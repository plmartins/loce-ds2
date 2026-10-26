import { IconClose } from './chunk-7KC4L5MT.js';
import { cn } from './chunk-OLJVOECQ.js';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { jsxs, jsx } from 'react/jsx-runtime';

var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogClose = DialogPrimitive.Close;
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
    /* @__PURE__ */ jsx(DialogPrimitive.Overlay, { className: "ds-dialog-overlay fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px]" }),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        className: cn(
          "ds-dialog-content fixed left-1/2 top-1/2 z-50 flex max-h-[85vh] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-4",
          "rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-2xl shadow-black/20 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx(
            DialogPrimitive.Close,
            {
              className: "absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
              "aria-label": "Fechar",
              children: /* @__PURE__ */ jsx(IconClose, { size: 15 })
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, children }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-1 pr-8", className), children });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Title, { className: cn("text-lg font-bold leading-tight", className), ...props });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Description, { className: cn("text-[13px] text-muted-foreground", className), ...props });
}
function DialogBody({ className, children }) {
  return /* @__PURE__ */ jsx("div", { className: cn("-mx-6 min-h-0 flex-1 space-y-2 overflow-y-auto px-6 pb-1", className), children });
}
function DialogFooter({ className, children }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center justify-end gap-2 pt-1", className), children });
}

export { Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger };
//# sourceMappingURL=chunk-4OVSWOCL.js.map
//# sourceMappingURL=chunk-4OVSWOCL.js.map