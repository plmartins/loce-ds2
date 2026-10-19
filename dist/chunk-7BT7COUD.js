import { Text } from './chunk-DYWBZOCN.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconCopy } from './chunk-IIXN2W2O.js';
import { IconCheck } from './chunk-7S2JGUKL.js';
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

function TextCopy({ text, variant = "default", className, successDuration = 1500, prefix, copyText }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText ?? text);
    setCopied(true);
    setTimeout(() => setCopied(false), successDuration);
  };
  if (!text) return null;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: handleCopy,
      className: cn("group inline-flex min-w-0 cursor-pointer items-center gap-1 transition-all duration-75 active:scale-95", className),
      children: [
        prefix && /* @__PURE__ */ jsx(Text, { variant, children: prefix }),
        /* @__PURE__ */ jsx(Text, { variant, className: "min-w-0 truncate group-hover:underline", children: text }),
        copied ? /* @__PURE__ */ jsx(IconCheck, { size: 12, className: "shrink-0 text-success" }) : /* @__PURE__ */ jsx(IconCopy, { size: 12, className: "shrink-0 text-muted-foreground opacity-0 transition-opacity duration-150 group-hover:opacity-70" })
      ]
    }
  );
}

export { TextCopy };
//# sourceMappingURL=chunk-7BT7COUD.js.map
//# sourceMappingURL=chunk-7BT7COUD.js.map