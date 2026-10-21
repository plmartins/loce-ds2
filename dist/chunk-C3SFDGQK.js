import { FaceAvatar } from './chunk-RYW6O3O6.js';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from './chunk-4D3N52P7.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsxs, jsx } from 'react/jsx-runtime';

function RailUser({ name, email, avatarUrl, loading, badge, children, className }) {
  const seed = email || name || "?";
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": "Conta",
        className: cn(
          "flex size-9 cursor-pointer items-center justify-center rounded-xl transition-all duration-100",
          "hover:bg-foreground/[0.06] active:scale-[0.95]",
          "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/25",
          "data-[state=open]:bg-foreground/[0.06]",
          className
        ),
        children: /* @__PURE__ */ jsx(FaceAvatar, { seed, glyph: name?.[0], src: avatarUrl, loading, title: name, size: 28 })
      }
    ) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { side: "right", align: "end", sideOffset: 10, className: "w-64 p-1.5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg bg-surface-1 p-2.5", children: [
        /* @__PURE__ */ jsx(FaceAvatar, { seed, glyph: name?.[0], src: avatarUrl, loading, title: name, size: 40 }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-col gap-0.5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate text-[13px] font-bold", children: name?.split(" ")[0] }),
            badge
          ] }),
          /* @__PURE__ */ jsx("span", { className: "truncate text-[12px] text-muted-foreground", children: email })
        ] })
      ] }),
      children && /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      children
    ] })
  ] });
}

export { RailUser };
//# sourceMappingURL=chunk-C3SFDGQK.js.map
//# sourceMappingURL=chunk-C3SFDGQK.js.map