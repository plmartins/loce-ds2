import { cn } from './chunk-OLJVOECQ.js';
import { jsx } from 'react/jsx-runtime';

var textVariantMap = {
  default: "text-[13px] font-semibold text-foreground",
  supertitle: "text-2xl font-extrabold tracking-tight text-foreground",
  title: "text-lg font-bold text-foreground",
  subtitle: "text-[15px] font-bold text-foreground",
  description: "text-[13px] font-medium text-muted-foreground",
  subdescription: "text-xs font-medium text-muted-foreground",
  label: "text-xs font-semibold text-muted-foreground",
  code: "rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs font-medium text-foreground/80"
};
function Text({ variant = "default", className, children, as: Tag = "span" }) {
  return /* @__PURE__ */ jsx(Tag, { className: cn(textVariantMap[variant], className), children });
}

export { Text, textVariantMap };
//# sourceMappingURL=chunk-DYWBZOCN.js.map
//# sourceMappingURL=chunk-DYWBZOCN.js.map