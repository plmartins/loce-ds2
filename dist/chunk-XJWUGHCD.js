import { cn } from './chunk-OLJVOECQ.js';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { useRef } from 'react';
import { jsx } from 'react/jsx-runtime';

var DropdownMenu = ({ modal = false, ...props }) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { modal, ...props });
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
function DropdownMenuContent({
  className,
  sideOffset = 6,
  onPointerDownCapture,
  onKeyDownCapture,
  onCloseAutoFocus,
  ...props
}) {
  const pointerInteraction = useRef(false);
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      sideOffset,
      className: cn(
        "z-50 min-w-[190px] overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl shadow-black/5 dark:shadow-black/30",
        "data-[state=open]:animate-slide-up",
        className
      ),
      ...props,
      onPointerDownCapture: (event) => {
        pointerInteraction.current = true;
        onPointerDownCapture?.(event);
      },
      onKeyDownCapture: (event) => {
        pointerInteraction.current = false;
        onKeyDownCapture?.(event);
      },
      onCloseAutoFocus: (event) => {
        onCloseAutoFocus?.(event);
        if (pointerInteraction.current) event.preventDefault();
        pointerInteraction.current = false;
      }
    }
  ) });
}
function DropdownMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      className: cn(
        "flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium outline-none transition-colors",
        "focus:bg-foreground/[0.05] data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Label,
    {
      className: cn("px-2.5 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-muted-foreground", className),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, { className: cn("mx-1 my-1 h-px bg-border", className), ...props });
}

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger };
//# sourceMappingURL=chunk-XJWUGHCD.js.map
//# sourceMappingURL=chunk-XJWUGHCD.js.map