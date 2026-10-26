import { cn } from './chunk-OLJVOECQ.js';
import { IconSpinner } from './chunk-EMHJXDPZ.js';
import { cva } from 'class-variance-authority';
import { jsxs, jsx } from 'react/jsx-runtime';

var buttonVariants = cva(
  [
    "inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-xl text-[13px] font-semibold",
    "transition-all duration-150 select-none",
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]"
  ],
  {
    variants: {
      variant: {
        primary: "ds-btn-3d [--btn-bg:var(--accent-brand)] text-white",
        secondary: "border border-border bg-card text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.3)] hover:bg-surface-2/60 hover:border-ring/40 active:shadow-none",
        ghost: "text-foreground/70 hover:bg-foreground/[0.05] hover:text-foreground",
        destructive: "ds-btn-3d [--btn-bg:var(--destructive)] text-white",
        "destructive-ghost": "text-destructive hover:bg-destructive/10"
      },
      size: {
        md: "h-9 px-4",
        sm: "h-8 px-3 text-[12.5px]",
        lg: "h-10 px-5",
        icon: "size-9",
        "icon-sm": "size-8 rounded-lg"
      }
    },
    defaultVariants: { variant: "primary", size: "md" }
  }
);
function Button({ className, variant, size, loading, disabled, children, type = "button", ...props }) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      "aria-busy": loading || void 0,
      disabled: disabled || loading,
      className: cn(buttonVariants({ variant, size }), className),
      ...props,
      children: [
        loading && /* @__PURE__ */ jsx(IconSpinner, { size: 15, className: "animate-spin" }),
        children
      ]
    }
  );
}

export { Button, buttonVariants };
//# sourceMappingURL=chunk-M4AAQCYD.js.map
//# sourceMappingURL=chunk-M4AAQCYD.js.map