import { useShell } from './chunk-GUIY24A2.js';
import { IconMenu } from './chunk-QW5HUJEJ.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function HeaderBar({ left, right, className }) {
  const { setMobileSidebarOpen } = useShell();
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "flex h-12 shrink-0 items-center justify-between gap-2 border-b border-border/70 bg-background/75 pl-3 pr-2 backdrop-blur-md md:gap-3 md:pl-5 md:pr-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-3 md:gap-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileSidebarOpen(true),
              className: "flex size-8 cursor-pointer items-center justify-center rounded-lg text-foreground/75 hover:bg-foreground/[0.05] md:hidden",
              "aria-label": "Abrir menu",
              children: /* @__PURE__ */ jsx(IconMenu, { size: 18 })
            }
          ),
          left
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex min-w-0 items-center gap-1 md:gap-2", children: right })
      ]
    }
  );
}

export { HeaderBar };
//# sourceMappingURL=chunk-7QDAE57X.js.map
//# sourceMappingURL=chunk-7QDAE57X.js.map