import { IconSparkle } from './chunk-ZX55D3U4.js';
import { useId } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

function AIIcon({ icon: Icon = IconSparkle, ...props }) {
  const id = `ds-ai-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return /* @__PURE__ */ jsx(Icon, { ...props, color: `url(#${id})`, "aria-hidden": "true", children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "var(--ai-spectrum-orange)" }),
    /* @__PURE__ */ jsx("stop", { offset: "14%", stopColor: "var(--ai-spectrum-red)" }),
    /* @__PURE__ */ jsx("stop", { offset: "28%", stopColor: "var(--ai-spectrum-pink)" }),
    /* @__PURE__ */ jsx("stop", { offset: "40%", stopColor: "var(--ai-spectrum-violet)" }),
    /* @__PURE__ */ jsx("stop", { offset: "52%", stopColor: "var(--ai-spectrum-indigo)" }),
    /* @__PURE__ */ jsx("stop", { offset: "64%", stopColor: "var(--ai-spectrum-blue)" }),
    /* @__PURE__ */ jsx("stop", { offset: "76%", stopColor: "var(--ai-spectrum-teal)" }),
    /* @__PURE__ */ jsx("stop", { offset: "88%", stopColor: "var(--ai-spectrum-green)" }),
    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "var(--ai-spectrum-orange)" })
  ] }) }) });
}

export { AIIcon };
//# sourceMappingURL=chunk-2VBCAYSW.js.map
//# sourceMappingURL=chunk-2VBCAYSW.js.map