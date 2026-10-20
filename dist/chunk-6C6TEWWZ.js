import { SkeletonTable } from './chunk-Q7J24MVH.js';
import { jsx, Fragment } from 'react/jsx-runtime';

function TableLoading({ loading, rows = 10, children, className }) {
  if (loading) return /* @__PURE__ */ jsx(SkeletonTable, { rows, className });
  return className ? /* @__PURE__ */ jsx("div", { className, children }) : /* @__PURE__ */ jsx(Fragment, { children });
}

export { TableLoading };
//# sourceMappingURL=chunk-6C6TEWWZ.js.map
//# sourceMappingURL=chunk-6C6TEWWZ.js.map