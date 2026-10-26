import { IconSparkle } from './chunk-D5TU3Y53.js';
import { useId } from 'react';
import { jsx } from 'react/jsx-runtime';

var STOPS = [0, 14, 28, 40, 52, 64, 76, 88, 100];
function AIIcon({ icon: Icon = IconSparkle, ...props }) {
  const id = `ds-ai-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return /* @__PURE__ */ jsx(Icon, { ...props, color: `url(#${id})`, "aria-hidden": "true", children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("linearGradient", { id, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: STOPS.map((offset, i) => /* @__PURE__ */ jsx("stop", { offset: `${offset}%`, stopColor: `var(--ai-icon-${i + 1})` }, offset)) }) }) });
}

export { AIIcon };
//# sourceMappingURL=chunk-CG2SIKB3.js.map
//# sourceMappingURL=chunk-CG2SIKB3.js.map