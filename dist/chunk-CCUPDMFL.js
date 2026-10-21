import { fieldClass } from './chunk-66F2DMXG.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

function TimeInput({ className, label, ...props }) {
  const input = /* @__PURE__ */ jsx("input", { type: "time", className: cn(fieldClass, "cursor-pointer", className), ...props });
  if (!label) return input;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
    input
  ] });
}

export { TimeInput };
//# sourceMappingURL=chunk-CCUPDMFL.js.map
//# sourceMappingURL=chunk-CCUPDMFL.js.map