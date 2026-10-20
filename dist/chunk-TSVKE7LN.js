import { ShellContext } from './chunk-GUIY24A2.js';
import { cn } from './chunk-OLJVOECQ.js';
import { useState, useRef, useEffect } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

function AppShell({ rail, sidebar, mobileSidebar, header, children, className, scrollResetKey, fullHeight = false }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const mainRef = useRef(null);
  useEffect(() => {
    if (scrollResetKey === void 0) return;
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [scrollResetKey]);
  return /* @__PURE__ */ jsx(ShellContext.Provider, { value: { mobileSidebarOpen, setMobileSidebarOpen }, children: /* @__PURE__ */ jsxs("div", { className: cn("flex h-screen overflow-hidden bg-background text-foreground", className), children: [
    rail && /* @__PURE__ */ jsx("div", { className: "hidden md:flex shrink-0", children: rail }),
    sidebar && /* @__PURE__ */ jsx("div", { className: "hidden md:flex shrink-0 min-h-0", children: sidebar }),
    mobileSidebarOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] md:hidden",
          onClick: () => setMobileSidebarOpen(false)
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed left-0 top-0 bottom-0 z-50 flex md:hidden bg-background shadow-2xl", children: mobileSidebar ?? sidebar })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 min-w-0 flex-col min-h-0", children: [
      header,
      /* @__PURE__ */ jsxs("main", { ref: mainRef, className: cn("flex-1 min-w-0 min-h-0 flex flex-col", fullHeight ? "overflow-hidden" : "overflow-auto"), children: [
        children,
        !fullHeight && /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "h-14 shrink-0" })
      ] })
    ] })
  ] }) });
}

export { AppShell };
//# sourceMappingURL=chunk-TSVKE7LN.js.map
//# sourceMappingURL=chunk-TSVKE7LN.js.map