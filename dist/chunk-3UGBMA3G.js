import { cn } from './chunk-OLJVOECQ.js';
import { jsx } from 'react/jsx-runtime';

var TONES = {
  brand: "bg-brand/10 text-brand",
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  destructive: "bg-destructive/10 text-destructive",
  info: "bg-info/12 text-info",
  neutral: "bg-surface-2 text-muted-foreground",
  ecommerce: "bg-platform-ecommerce/12 text-platform-ecommerce"
};
var SIZES = {
  sm: "size-6 rounded-md",
  md: "size-8 rounded-xl",
  lg: "size-10 rounded-xl"
};
function IconTile({ tone = "neutral", size = "md", shape = "rounded", className, children }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "flex shrink-0 items-center justify-center",
        SIZES[size],
        shape === "circle" && "rounded-full",
        TONES[tone],
        className
      ),
      children
    }
  );
}

export { IconTile };
//# sourceMappingURL=chunk-3UGBMA3G.js.map
//# sourceMappingURL=chunk-3UGBMA3G.js.map