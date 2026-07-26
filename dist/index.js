import { IconChevronRight, IconPin, IconMenu, IconMoon, IconSun, IconArrowLeft, IconChat, IconMarketing, IconCart, IconApps, IconLock } from './chunk-GNY7SLET.js';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var ShellContext = createContext({
  mobileSidebarOpen: false,
  setMobileSidebarOpen: () => {
  }
});
var useShell = () => useContext(ShellContext);
function AppShell({ rail, sidebar, mobileSidebar, header, children, className }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
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
      /* @__PURE__ */ jsx("main", { className: "flex-1 min-w-0 min-h-0 flex flex-col overflow-auto", children })
    ] })
  ] }) });
}
var PLATFORM_META = {
  erp: {
    label: "Loce ERP",
    icon: IconApps,
    activeClass: "bg-platform-erp/12 text-platform-erp",
    hoverClass: "hover:bg-platform-erp/12 hover:text-platform-erp"
  },
  ecommerce: {
    label: "Loce Ecommerce",
    icon: IconCart,
    activeClass: "bg-platform-ecommerce/12 text-platform-ecommerce",
    hoverClass: "hover:bg-platform-ecommerce/12 hover:text-platform-ecommerce"
  },
  marketing: {
    label: "Loce Marketing",
    icon: IconMarketing,
    activeClass: "bg-platform-marketing/12 text-platform-marketing",
    hoverClass: "hover:bg-platform-marketing/12 hover:text-platform-marketing"
  },
  talkbia: {
    label: "Talkbia",
    icon: IconChat,
    activeClass: "bg-platform-talkbia/12 text-platform-talkbia",
    hoverClass: "hover:bg-platform-talkbia/12 hover:text-platform-talkbia"
  }
};
function RailTile({ item }) {
  const meta = PLATFORM_META[item.id];
  const Icon = meta.icon;
  const available = item.available ?? false;
  const tile = /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "relative flex size-10 items-center justify-center rounded-xl transition-all duration-150",
        item.active && cn(meta.activeClass, "shadow-[inset_0_0_0_1.5px_currentColor]"),
        !item.active && available && cn("text-muted-foreground hover:scale-[1.06]", meta.hoverClass),
        !available && "text-muted-foreground/40"
      ),
      children: [
        /* @__PURE__ */ jsx(Icon, { size: 20 }),
        !available && /* @__PURE__ */ jsx("span", { className: "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-surface-3 text-muted-foreground ring-2 ring-surface-1", children: /* @__PURE__ */ jsx(IconLock, { size: 9 }) })
      ]
    }
  );
  if (available && item.href && !item.active) {
    return /* @__PURE__ */ jsx("a", { href: item.href, title: meta.label, "aria-label": meta.label, className: "cursor-pointer", children: tile });
  }
  return /* @__PURE__ */ jsx("span", { title: available ? meta.label : `${meta.label} \xB7 em breve`, "aria-label": meta.label, children: tile });
}
function PlatformRail({ platforms, logo, footer, className }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex h-full w-[56px] shrink-0 flex-col items-center gap-1 border-r border-border bg-surface-1 py-3",
        className
      ),
      children: [
        logo && /* @__PURE__ */ jsx("div", { className: "mb-2 flex size-10 items-center justify-center", children: logo }),
        /* @__PURE__ */ jsx("nav", { className: "flex flex-col items-center gap-1.5", "aria-label": "Plataformas Loce", children: platforms.map((p) => /* @__PURE__ */ jsx(RailTile, { item: p }, p.id)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto flex flex-col items-center gap-1.5", children: footer })
      ]
    }
  );
}
var COLLAPSED_W = 68;
var EXPANDED_W = 260;
function Label({ open, children }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "ml-3 min-w-0 truncate whitespace-nowrap pointer-events-none text-[13px] font-semibold transition-opacity duration-150",
      style: { opacity: open ? 1 : 0 },
      children
    }
  );
}
function SidebarNav({
  items,
  activePath,
  onNavigate,
  expanded = false,
  footer,
  storageKey = "sidebar-pinned",
  className
}) {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [pinned, setPinned] = useState(() => {
    try {
      return localStorage.getItem(storageKey) === "true";
    } catch {
      return false;
    }
  });
  const open = expanded || hoverOpen || pinned;
  const isSubActive = useCallback(
    (path) => {
      const current = activePath.replace(/\/+$/, "");
      const base = path.replace(/\/+$/, "");
      return current === base || current.startsWith(`${base}/`);
    },
    [activePath]
  );
  const activeGroupLabel = useMemo(
    () => items.find((item) => item.subItems.some((sub) => isSubActive(sub.endPoint)))?.label ?? items[0]?.label ?? "",
    [items, isSubActive]
  );
  const [openGroup, setOpenGroup] = useState(activeGroupLabel);
  useEffect(() => setOpenGroup(activeGroupLabel), [activeGroupLabel]);
  const togglePin = useCallback(() => {
    setPinned((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(storageKey, String(next));
      } catch {
      }
      return next;
    });
  }, [storageKey]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative flex h-full select-none flex-col overflow-hidden border-r border-border bg-background transition-[width] duration-[250ms] ease-out",
        className
      ),
      style: { width: open ? EXPANDED_W : COLLAPSED_W },
      onMouseEnter: () => !expanded && setHoverOpen(true),
      onMouseLeave: () => !expanded && setHoverOpen(false),
      children: [
        /* @__PURE__ */ jsx("nav", { className: "scrollbar-hide flex flex-1 flex-col gap-0.5 overflow-y-auto px-2 pt-3", children: items.map((item) => {
          const Icon = item.icon;
          const groupActive = item.label === activeGroupLabel;
          const groupOpen = openGroup === item.label && open;
          return /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  if (open) {
                    setOpenGroup((prev) => prev === item.label ? "" : item.label);
                  } else if (item.subItems[0]) {
                    onNavigate(item.subItems[0].endPoint);
                  }
                },
                className: cn(
                  "relative flex h-10 w-full cursor-pointer items-center rounded-xl px-4 transition-colors duration-150",
                  groupActive && [
                    "bg-brand/[0.08] font-bold text-brand",
                    "before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-r-full before:bg-brand"
                  ],
                  !groupActive && "text-foreground/75 hover:bg-foreground/[0.04] hover:text-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "flex size-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
                  /* @__PURE__ */ jsx(Label, { open, children: item.label }),
                  /* @__PURE__ */ jsx(
                    IconChevronRight,
                    {
                      size: 13,
                      className: cn(
                        "ml-auto shrink-0 transition-all duration-200",
                        groupOpen ? "rotate-90" : "rotate-0",
                        groupActive ? "text-brand" : "text-foreground/40",
                        !open && "opacity-0"
                      )
                    }
                  )
                ]
              }
            ),
            groupOpen && /* @__PURE__ */ jsx("div", { className: "ml-[26px] mt-0.5 mb-1", children: item.subItems.map((sub, idx) => {
              const subActive = isSubActive(sub.endPoint);
              const isLast = idx === item.subItems.length - 1;
              return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                isLast ? /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-0 top-0 h-1/2 w-4 rounded-bl-lg border-b-2 border-l-2 border-border" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-0 top-0 bottom-0 border-l-2 border-border" }),
                  /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-0 top-1/2 w-4 border-b-2 border-border" })
                ] }),
                subActive && /* @__PURE__ */ jsx("span", { className: "absolute left-[13px] top-1/2 z-10 size-1.5 -translate-y-1/2 rounded-full bg-brand ring-2 ring-brand/20" }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => onNavigate(sub.endPoint),
                    className: cn(
                      "relative flex h-8 w-full cursor-pointer items-center truncate whitespace-nowrap rounded-xl pl-7 pr-4 text-[13px] transition-colors duration-150",
                      subActive && "font-semibold text-brand",
                      !subActive && "font-medium text-foreground/50 hover:bg-foreground/[0.04] hover:text-foreground"
                    ),
                    children: sub.label
                  }
                )
              ] }, sub.endPoint);
            }) })
          ] }, item.label);
        }) }),
        /* @__PURE__ */ jsx("div", { className: "mx-5 h-px shrink-0 bg-border/60" }),
        /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 flex-col gap-px px-2 py-2", children: [
          footer,
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: togglePin,
              className: cn(
                "relative flex h-10 w-full cursor-pointer items-center rounded-xl px-4 transition-colors duration-150",
                pinned ? "bg-brand/[0.06] text-brand" : "text-foreground/75 hover:bg-foreground/[0.04] hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ jsx("span", { className: "flex size-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ jsx(IconPin, { size: 19, weight: pinned ? "fill" : "regular" }) }),
                /* @__PURE__ */ jsx(Label, { open, children: pinned ? "Menu fixado" : "Fixar menu" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function HeaderBar({ left, right, className }) {
  const { setMobileSidebarOpen } = useShell();
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "flex h-12 shrink-0 items-center justify-between gap-2 border-b border-border bg-background/80 pl-3 pr-2 backdrop-blur-sm md:gap-3 md:pl-5 md:pr-4",
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
function ThemeToggle({ storageKey = "theme", className }) {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(storageKey, dark ? "dark" : "light");
    } catch {
    }
  }, [dark, storageKey]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setDark((prev) => !prev),
      className: cn(
        "flex size-9 cursor-pointer items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
        className
      ),
      "aria-label": dark ? "Mudar para modo claro" : "Mudar para modo escuro",
      title: dark ? "Modo claro" : "Modo escuro",
      children: dark ? /* @__PURE__ */ jsx(IconMoon, { size: 18 }) : /* @__PURE__ */ jsx(IconSun, { size: 18 })
    }
  );
}
var SIZE_CLASS = {
  default: "max-w-6xl",
  wide: "max-w-[1600px]",
  full: "max-w-none"
};
function PageShell({ title, description, actions, onBack, children, size = "default", className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("mx-auto flex w-full flex-1 flex-col gap-5 p-4 md:p-6", SIZE_CLASS[size], className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
        onBack && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onBack,
            className: "mt-0.5 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
            "aria-label": "Voltar",
            children: /* @__PURE__ */ jsx(IconArrowLeft, { size: 17 })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("h1", { className: "truncate text-lg font-bold leading-tight md:text-xl", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-[13px] text-muted-foreground", children: description })
        ] })
      ] }),
      actions && /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-2", children: actions })
    ] }),
    children
  ] });
}

export { AppShell, HeaderBar, PageShell, PlatformRail, SidebarNav, ThemeToggle, cn, useShell };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map