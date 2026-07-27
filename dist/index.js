import { IconChevronRight, IconPin, IconMenu, IconMoon, IconSun, IconArrowLeft, IconSpinner, IconSearch, IconClose, IconChevronDown, IconCheck, IconChevronUp, IconSort, IconChevronLeft, IconArrowRight, IconMore, IconChat, IconMarketing, IconCart, IconApps, IconLock } from './chunk-Z3LI6GYJ.js';
import { cn } from './chunk-HWAWA4NZ.js';
export { cn } from './chunk-HWAWA4NZ.js';
import { createContext, useContext, useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

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
      /* @__PURE__ */ jsx("main", { className: "flex-1 min-w-0 min-h-0 flex flex-col overflow-auto pb-10", children })
    ] })
  ] }) });
}
var PLATFORM_META = {
  erp: {
    label: "Loce ERP",
    icon: IconApps,
    tileClass: "bg-gradient-to-br from-[#3ba2ff] to-[#0864d8]",
    glowClass: "shadow-[0_2px_14px_rgba(8,130,255,0.5)]"
  },
  ecommerce: {
    label: "Loce Ecommerce",
    icon: IconCart,
    tileClass: "bg-gradient-to-br from-[#12d68d] to-[#079457]",
    glowClass: "shadow-[0_2px_14px_rgba(8,174,105,0.5)]"
  },
  marketing: {
    label: "Loce Marketing",
    icon: IconMarketing,
    tileClass: "bg-gradient-to-br from-[#ff64a5] to-[#d61668]",
    glowClass: "shadow-[0_2px_14px_rgba(238,42,123,0.5)]"
  },
  talkbia: {
    label: "Talkbia",
    icon: IconChat,
    tileClass: "bg-gradient-to-br from-[#a78bfa] to-[#6d28d9]",
    glowClass: "shadow-[0_2px_14px_rgba(124,58,237,0.5)]"
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
        "relative flex size-10 items-center justify-center overflow-visible rounded-[12px] transition-all duration-150 ease-out",
        !item.logoSrc && available && cn(meta.tileClass, "text-white"),
        !item.logoSrc && !available && "bg-surface-2 text-muted-foreground/50",
        item.active && cn(meta.glowClass, "ring-2 ring-white/25"),
        !item.active && available && "opacity-80 saturate-[0.9] group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-[1.07] group-hover:-translate-y-px group-active:scale-95"
      ),
      children: [
        item.logoSrc ? /* @__PURE__ */ jsx(
          "img",
          {
            src: item.logoSrc,
            alt: "",
            className: cn(
              "size-10 rounded-[12px] object-cover",
              !available && "opacity-45 grayscale"
            )
          }
        ) : /* @__PURE__ */ jsx(Icon, { size: 19 }),
        !available && /* @__PURE__ */ jsx("span", { className: "absolute -right-1 -bottom-1 flex size-4 items-center justify-center rounded-full bg-surface-3 text-muted-foreground ring-2 ring-surface-0", children: /* @__PURE__ */ jsx(IconLock, { size: 9 }) })
      ]
    }
  );
  const wrapped = /* @__PURE__ */ jsxs("span", { className: "relative flex w-full justify-center py-0.5", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-foreground transition-all duration-200",
          item.active ? "h-6 opacity-100" : "h-2 opacity-0"
        )
      }
    ),
    tile
  ] });
  if (available && item.href && !item.active) {
    return /* @__PURE__ */ jsx("a", { href: item.href, title: meta.label, "aria-label": meta.label, className: "group block w-full cursor-pointer", children: wrapped });
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      title: available ? meta.label : `${meta.label} \xB7 em breve`,
      "aria-label": meta.label,
      className: "group block w-full",
      children: wrapped
    }
  );
}
function PlatformRail({ platforms, logo, footer, className }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex h-full w-[60px] shrink-0 flex-col items-center gap-1 border-r border-border bg-surface-0 py-3",
        className
      ),
      children: [
        logo && /* @__PURE__ */ jsx("div", { className: "mb-2 flex size-10 items-center justify-center", children: logo }),
        /* @__PURE__ */ jsx("nav", { className: "flex w-full flex-col items-center gap-1.5", "aria-label": "Plataformas Loce", children: platforms.map((p) => /* @__PURE__ */ jsx(RailTile, { item: p }, p.id)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto flex flex-col items-center gap-1.5", children: footer })
      ]
    }
  );
}
var COLLAPSED_W = 68;
var EXPANDED_W = 260;
var HOVER_CLOSE_DELAY = 220;
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
  const closeTimer = useRef(null);
  const [pinned, setPinned] = useState(() => {
    try {
      return localStorage.getItem(storageKey) === "true";
    } catch {
      return false;
    }
  });
  const open = expanded || hoverOpen || pinned;
  const handleEnter = () => {
    if (expanded) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoverOpen(true);
  };
  const handleLeave = () => {
    if (expanded) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHoverOpen(false), HOVER_CLOSE_DELAY);
  };
  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);
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
        "relative flex h-full select-none flex-col overflow-hidden bg-surface-1 transition-[width] duration-[250ms] ease-out",
        "border-r border-border",
        className
      ),
      style: { width: open ? EXPANDED_W : COLLAPSED_W },
      onMouseEnter: handleEnter,
      onMouseLeave: handleLeave,
      children: [
        /* @__PURE__ */ jsx("nav", { className: "scrollbar-hide flex flex-1 flex-col gap-0.5 overflow-y-auto px-2 pt-3", children: items.map((item) => {
          const Icon = item.icon;
          const groupActive = item.label === activeGroupLabel;
          const groupOpen = openGroup === item.label && open;
          const singleChild = item.subItems.length === 1;
          return /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  if (singleChild && item.subItems[0]) {
                    onNavigate(item.subItems[0].endPoint);
                    return;
                  }
                  if (open) {
                    setOpenGroup((prev) => prev === item.label ? "" : item.label);
                  } else if (item.subItems[0]) {
                    onNavigate(item.subItems[0].endPoint);
                  }
                },
                title: !open ? item.label : void 0,
                className: cn(
                  "relative flex h-10 w-full cursor-pointer items-center rounded-xl px-4 transition-colors duration-150",
                  groupActive && [
                    "bg-brand/[0.08] font-bold text-brand",
                    "before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-r-full before:bg-brand"
                  ],
                  !groupActive && "text-foreground/70 hover:bg-foreground/[0.045] hover:text-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "flex size-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
                  /* @__PURE__ */ jsx(Label, { open, children: item.label }),
                  !singleChild && /* @__PURE__ */ jsx(
                    IconChevronRight,
                    {
                      size: 12,
                      className: cn(
                        "ml-auto shrink-0 transition-all duration-200 ease-out",
                        groupOpen ? "rotate-90" : "rotate-0",
                        groupActive ? "text-brand/70" : "text-foreground/35",
                        !open && "opacity-0"
                      )
                    }
                  )
                ]
              }
            ),
            !singleChild && /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                  groupOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "relative ml-[30px] mt-0.5 mb-1 flex flex-col gap-px border-l border-border pl-2", children: item.subItems.map((sub) => {
                  const subActive = isSubActive(sub.endPoint);
                  return /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => onNavigate(sub.endPoint),
                      tabIndex: groupOpen ? 0 : -1,
                      className: cn(
                        "relative flex h-8 w-full cursor-pointer items-center truncate whitespace-nowrap rounded-lg px-3 text-[13px]",
                        "transition-[color,background-color,transform] duration-150",
                        subActive && [
                          "bg-brand/[0.07] font-semibold text-brand",
                          "before:absolute before:-left-[9px] before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-brand"
                        ],
                        !subActive && "font-medium text-foreground/55 hover:translate-x-[2px] hover:bg-foreground/[0.04] hover:text-foreground"
                      ),
                      children: sub.label
                    },
                    sub.endPoint
                  );
                }) }) })
              }
            )
          ] }, item.label);
        }) }),
        /* @__PURE__ */ jsx("div", { className: "mx-5 h-px shrink-0 bg-border/60" }),
        /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 flex-col gap-px px-2 py-2", children: [
          footer,
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: togglePin,
              title: !open ? pinned ? "Menu fixado" : "Fixar menu" : void 0,
              className: cn(
                "relative flex h-10 w-full cursor-pointer items-center rounded-xl px-4 transition-colors duration-150",
                pinned ? "bg-brand/[0.06] text-brand" : "text-foreground/70 hover:bg-foreground/[0.045] hover:text-foreground"
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
var buttonVariants = cva(
  [
    "inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-xl text-[13px] font-semibold",
    "transition-all duration-150 select-none",
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]"
  ],
  {
    variants: {
      variant: {
        primary: "bg-brand text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_2px_rgba(0,0,0,0.18)] hover:brightness-[1.07]",
        secondary: "border border-border bg-card text-foreground shadow-xs hover:bg-surface-2/60 hover:border-ring/40",
        ghost: "text-foreground/70 hover:bg-foreground/[0.05] hover:text-foreground",
        destructive: "bg-destructive text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:brightness-[1.07]",
        "destructive-ghost": "text-destructive hover:bg-destructive/10"
      },
      size: {
        md: "h-9 px-4",
        sm: "h-8 px-3 text-[12.5px]",
        lg: "h-10 px-5",
        icon: "size-9",
        "icon-sm": "size-8 rounded-lg"
      }
    },
    defaultVariants: { variant: "primary", size: "md" }
  }
);
function Button({ className, variant, size, loading, disabled, children, type = "button", ...props }) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type,
      "aria-busy": loading || void 0,
      disabled: disabled || loading,
      className: cn(buttonVariants({ variant, size }), className),
      ...props,
      children: [
        loading && /* @__PURE__ */ jsx(IconSpinner, { size: 15, className: "animate-spin" }),
        children
      ]
    }
  );
}
var fieldClass = cn(
  "h-9 w-full rounded-xl border border-border bg-card px-3 text-[13px] font-medium text-foreground",
  "shadow-xs transition-all duration-150",
  "placeholder:font-normal placeholder:text-muted-foreground/80",
  "hover:border-ring/50",
  "focus:border-brand focus:outline-none focus:ring-[3px] focus:ring-brand/20",
  "disabled:pointer-events-none disabled:opacity-50"
);
function Input({ className, label, error, id, ...props }) {
  const input = /* @__PURE__ */ jsx(
    "input",
    {
      id,
      className: cn(fieldClass, error && "border-destructive focus:border-destructive focus:ring-destructive/20", className),
      ...props
    }
  );
  if (!label && !error) return input;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: "text-[12px] font-semibold text-foreground/80", children: label }),
    input,
    error && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-destructive", children: error })
  ] });
}
function SearchInput({ className, onClear, showClear, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative flex w-full items-center", className), children: [
    /* @__PURE__ */ jsx(IconSearch, { size: 14, className: "pointer-events-none absolute left-3 text-muted-foreground" }),
    /* @__PURE__ */ jsx("input", { type: "search", className: cn(fieldClass, "pl-8.5 pr-2 [&::-webkit-search-cancel-button]:hidden"), ...props }),
    showClear && onClear && /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: onClear,
        className: "absolute right-2 flex cursor-pointer items-center gap-1 rounded-lg bg-surface-2 px-2 py-1 text-[11px] font-semibold text-foreground/70 transition-colors duration-100 hover:bg-surface-3 hover:text-foreground active:scale-[0.97]",
        children: [
          "Limpar",
          /* @__PURE__ */ jsx(IconClose, { size: 10, className: "text-destructive" })
        ]
      }
    )
  ] });
}
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
function DropdownMenuContent({
  className,
  sideOffset = 6,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      sideOffset,
      className: cn(
        "z-50 min-w-[190px] overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl shadow-black/5 dark:shadow-black/30",
        "data-[state=open]:animate-slide-up",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      className: cn(
        "flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium outline-none transition-colors",
        "focus:bg-foreground/[0.05] data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Label,
    {
      className: cn("px-2.5 pb-1 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-muted-foreground", className),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, { className: cn("mx-1 my-1 h-px bg-border", className), ...props });
}
function Select({ options, value, onChange, placeholder = "Selecionar", disabled, className }) {
  const selected = options.find((opt) => String(opt.value) === String(value ?? ""));
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, disabled, children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: cn(
          fieldClass,
          "flex cursor-pointer items-center justify-between gap-2 text-left",
          "data-[state=open]:border-brand data-[state=open]:ring-[3px] data-[state=open]:ring-brand/20",
          !selected && "text-muted-foreground/80",
          className
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: "truncate", children: selected?.label ?? placeholder }),
          /* @__PURE__ */ jsx(IconChevronDown, { size: 12, className: "shrink-0 text-muted-foreground" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      DropdownMenuContent,
      {
        align: "start",
        style: { minWidth: "var(--radix-dropdown-menu-trigger-width)" },
        children: options.map((opt) => {
          const isSelected = String(opt.value) === String(value ?? "");
          return /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onClick: () => onChange?.(String(opt.value)),
              className: cn("justify-between", isSelected && "font-semibold text-brand"),
              children: [
                /* @__PURE__ */ jsx("span", { className: "truncate", children: opt.label }),
                isSelected && /* @__PURE__ */ jsx(IconCheck, { size: 13, className: "shrink-0 text-brand" })
              ]
            },
            opt.value
          );
        })
      }
    )
  ] });
}
function NativeSelect({ className, options, placeholder, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("relative flex items-center", className), children: [
    /* @__PURE__ */ jsxs("select", { className: cn(fieldClass, "cursor-pointer appearance-none pr-8"), ...props, children: [
      placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
      options.map((opt) => /* @__PURE__ */ jsx("option", { value: opt.value, children: opt.label }, opt.value))
    ] }),
    /* @__PURE__ */ jsx(IconChevronDown, { size: 12, className: "pointer-events-none absolute right-3 text-muted-foreground" })
  ] });
}
function Switch({ checked, onCheckedChange, disabled, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      disabled,
      onClick: () => onCheckedChange(!checked),
      className: cn(
        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-brand" : "bg-surface-3",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(
            "pointer-events-none block size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out",
            checked ? "translate-x-[18px]" : "translate-x-[2px]"
          )
        }
      )
    }
  );
}
var badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap",
  {
    variants: {
      variant: {
        neutral: "bg-surface-2 text-foreground/70",
        brand: "bg-brand/12 text-brand",
        success: "bg-success/12 text-success",
        warning: "bg-warning/15 text-warning",
        destructive: "bg-destructive/12 text-destructive",
        info: "bg-info/12 text-info"
      }
    },
    defaultVariants: { variant: "neutral" }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("span", { className: cn(badgeVariants({ variant }), className), ...props });
}
var ALIGN_CLASS = { left: "text-left", center: "text-center", right: "text-right" };
function DataTable({
  data,
  columns,
  actions = [],
  mainActions = [],
  emptyText = "Nenhum item encontrado",
  rowKey,
  onRowClick,
  rowDisabled,
  className
}) {
  const [sortConfig, setSortConfig] = useState(null);
  const handleSort = (accessor) => {
    setSortConfig((prev) => {
      if (prev?.accessor === accessor) return { accessor, direction: prev.direction === "asc" ? "desc" : "asc" };
      return { accessor, direction: "asc" };
    });
  };
  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortConfig.accessor];
      const bVal = b[sortConfig.accessor];
      if (aVal === bVal) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      if (typeof aVal === "string" && typeof bVal === "string")
        return sortConfig.direction === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      return sortConfig.direction === "asc" ? aVal < bVal ? -1 : 1 : aVal > bVal ? -1 : 1;
    });
  }, [data, sortConfig]);
  const hasActions = actions.length > 0 || mainActions.length > 0;
  const getKey = (row, idx) => rowKey ? rowKey(row, idx) : idx;
  const renderActions = (row) => {
    const visibleMain = mainActions.filter((a) => a.condition?.(row) ?? true);
    const visibleMore = actions.filter((a) => a.condition?.(row) ?? true);
    if (!visibleMain.length && !visibleMore.length) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-0.5", children: [
      visibleMain.map((action) => {
        const isDisabled = action.disabled?.(row);
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            title: action.label,
            disabled: isDisabled,
            onClick: (e) => {
              e.stopPropagation();
              if (!isDisabled) action.onClick(row);
            },
            className: "flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors duration-100 hover:bg-foreground/[0.06] hover:text-foreground disabled:pointer-events-none disabled:opacity-35",
            children: action.icon
          },
          action.label
        );
      }),
      visibleMore.length > 0 && /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Mais a\xE7\xF5es",
            onClick: (e) => e.stopPropagation(),
            className: "flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors duration-100 hover:bg-foreground/[0.06] hover:text-foreground data-[state=open]:bg-foreground/[0.06] data-[state=open]:text-foreground",
            children: /* @__PURE__ */ jsx(IconMore, { size: 16 })
          }
        ) }),
        /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", onClick: (e) => e.stopPropagation(), children: visibleMore.map((action) => {
          const isDisabled = action.disabled?.(row);
          return /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              disabled: isDisabled,
              onClick: (e) => {
                e.stopPropagation();
                if (!isDisabled) action.onClick(row);
              },
              className: action.color,
              children: [
                action.icon,
                /* @__PURE__ */ jsx("span", { children: action.label })
              ]
            },
            action.label
          );
        }) })
      ] })
    ] });
  };
  if (!data.length)
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-12 text-sm text-muted-foreground", children: emptyText });
  return /* @__PURE__ */ jsxs("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 md:hidden", children: sortedData.map((row, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => onRowClick?.(row),
        className: cn(
          "rounded-2xl border border-border bg-card p-4",
          rowDisabled?.(row) && "opacity-50",
          onRowClick && "cursor-pointer active:scale-[0.99] duration-75"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2.5", children: columns.map((col) => /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: col.header }),
            /* @__PURE__ */ jsx("div", { className: "text-right text-sm font-semibold", children: col.render ? col.render(row[col.accessor] ?? "-", row, idx) : String(row[col.accessor] ?? "-") })
          ] }, col.accessor)) }),
          hasActions && /* @__PURE__ */ jsx("div", { className: "mt-3 border-t border-border pt-2", children: renderActions(row) })
        ]
      },
      getKey(row, idx)
    )) }),
    /* @__PURE__ */ jsx("div", { className: "hidden overflow-x-auto rounded-2xl border border-border bg-card shadow-xs md:block", children: /* @__PURE__ */ jsxs("table", { className: "w-full caption-bottom text-sm", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border bg-surface-1/70", children: [
        columns.map((col) => {
          const sortable = col.sortable !== false;
          const isSorted = sortConfig?.accessor === col.accessor;
          return /* @__PURE__ */ jsx(
            "th",
            {
              onClick: () => sortable && handleSort(col.accessor),
              "aria-sort": isSorted ? sortConfig.direction === "asc" ? "ascending" : "descending" : void 0,
              className: cn(
                "group/th h-10 px-4 text-left text-[11px] font-semibold uppercase tracking-[0.07em] text-muted-foreground",
                sortable && "cursor-pointer select-none",
                isSorted && "text-foreground",
                col.align && ALIGN_CLASS[col.align],
                col.className
              ),
              children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                col.header,
                sortable && (isSorted ? sortConfig.direction === "asc" ? /* @__PURE__ */ jsx(IconChevronUp, { size: 11, className: "text-brand" }) : /* @__PURE__ */ jsx(IconChevronDown, { size: 11, className: "text-brand" }) : /* @__PURE__ */ jsx(IconSort, { size: 11, className: "opacity-0 transition-opacity group-hover/th:opacity-50" }))
              ] })
            },
            col.accessor
          );
        }),
        hasActions && /* @__PURE__ */ jsx("th", { className: "w-[1%] whitespace-nowrap" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: sortedData.map((row, idx) => /* @__PURE__ */ jsxs(
        "tr",
        {
          onClick: () => onRowClick?.(row),
          className: cn(
            "border-b border-border/60 transition-colors duration-100 last:border-0",
            "hover:bg-foreground/[0.025]",
            rowDisabled?.(row) && "opacity-50",
            onRowClick && "cursor-pointer"
          ),
          children: [
            columns.map((col) => /* @__PURE__ */ jsx("td", { className: cn("px-4 py-2.5", col.align && ALIGN_CLASS[col.align], col.className), children: col.render ? col.render(row[col.accessor] ?? "-", row, idx) : String(row[col.accessor] ?? "-") }, col.accessor)),
            hasActions && /* @__PURE__ */ jsx("td", { className: "w-[1%] whitespace-nowrap px-2 py-2.5", children: renderActions(row) })
          ]
        },
        getKey(row, idx)
      )) })
    ] }) })
  ] });
}
function pageWindow(current, total) {
  const max = 5;
  if (total <= max) return Array.from({ length: total }, (_, i) => i + 1);
  const start = Math.max(1, Math.min(current - 2, total - max + 1));
  return Array.from({ length: max }, (_, i) => start + i);
}
function PaginationBar({ currentPage, perPage, totalResults, totalPages, action, className }) {
  if (totalPages <= 0) return null;
  const from = (currentPage - 1) * perPage + 1;
  const to = Math.min(currentPage * perPage, totalResults);
  const navBtn = "flex size-8 cursor-pointer items-center justify-center rounded-lg text-[12.5px] font-semibold text-foreground/70 transition-colors duration-100 hover:bg-foreground/[0.05] hover:text-foreground disabled:pointer-events-none disabled:opacity-35";
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-wrap items-center justify-between gap-3", className), children: [
    /* @__PURE__ */ jsxs("span", { className: "text-[12px] font-medium text-muted-foreground tabular-nums", children: [
      "Mostrando ",
      from.toLocaleString("pt-BR"),
      " a ",
      to.toLocaleString("pt-BR"),
      " de ",
      totalResults.toLocaleString("pt-BR")
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("button", { type: "button", className: navBtn, disabled: currentPage <= 1, onClick: () => action(currentPage - 1), "aria-label": "P\xE1gina anterior", children: /* @__PURE__ */ jsx(IconChevronLeft, { size: 13 }) }),
      pageWindow(currentPage, totalPages).map((page) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => action(page),
          "aria-current": page === currentPage ? "page" : void 0,
          className: cn(
            navBtn,
            "tabular-nums",
            page === currentPage && "bg-brand text-white hover:bg-brand hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
          ),
          children: page
        },
        page
      )),
      /* @__PURE__ */ jsx("button", { type: "button", className: navBtn, disabled: currentPage >= totalPages, onClick: () => action(currentPage + 1), "aria-label": "Pr\xF3xima p\xE1gina", children: /* @__PURE__ */ jsx(IconChevronRight, { size: 13 }) })
    ] })
  ] });
}
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogClose = DialogPrimitive.Close;
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
    /* @__PURE__ */ jsx(DialogPrimitive.Overlay, { className: "ds-dialog-overlay fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px]" }),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        className: cn(
          "ds-dialog-content fixed left-1/2 top-1/2 z-50 flex max-h-[85vh] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-4",
          "rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-2xl shadow-black/20 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx(
            DialogPrimitive.Close,
            {
              className: "absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
              "aria-label": "Fechar",
              children: /* @__PURE__ */ jsx(IconClose, { size: 15 })
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, children }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-1 pr-8", className), children });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Title, { className: cn("text-lg font-bold leading-tight", className), ...props });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Description, { className: cn("text-[13px] text-muted-foreground", className), ...props });
}
function DialogBody({ className, children }) {
  return /* @__PURE__ */ jsx("div", { className: cn("-mx-6 min-h-0 flex-1 space-y-2 overflow-y-auto px-6 pb-1", className), children });
}
function DialogFooter({ className, children }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center justify-end gap-2 pt-1", className), children });
}
function Tooltip({ content, children, side = "top", wrap, className }) {
  if (content == null || content === "") return /* @__PURE__ */ jsx(Fragment, { children });
  return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, { delayDuration: 250, children: /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [
    /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { asChild: true, children: wrap ? /* @__PURE__ */ jsx("span", { className: "min-w-0", children }) : children }),
    /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
      TooltipPrimitive.Content,
      {
        side,
        sideOffset: 6,
        className: cn(
          "z-50 max-w-xs rounded-lg bg-foreground px-2.5 py-1.5 text-[12px] font-medium text-background shadow-md animate-slide-up",
          className
        ),
        children: content
      }
    ) })
  ] }) });
}
var GRADIENTS = [
  "bg-gradient-to-br from-[#3ba2ff] to-[#0b5ed7]",
  "bg-gradient-to-br from-[#a78bfa] to-[#6d28d9]",
  "bg-gradient-to-br from-[#f472b6] to-[#db2777]",
  "bg-gradient-to-br from-[#fbbf24] to-[#d97706]",
  "bg-gradient-to-br from-[#2dd4bf] to-[#0d9488]",
  "bg-gradient-to-br from-[#4ade80] to-[#16a34a]",
  "bg-gradient-to-br from-[#818cf8] to-[#4338ca]",
  "bg-gradient-to-br from-[#fb7185] to-[#e11d48]"
];
function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = hash * 31 + value.charCodeAt(i) | 0;
  return Math.abs(hash);
}
function initialsOf(name) {
  if (!name?.trim()) return "?";
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}
function Avatar({ name, src, size = 32, className }) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;
  const gradient = GRADIENTS[hashString(name ?? "?") % GRADIENTS.length];
  return /* @__PURE__ */ jsx(
    "span",
    {
      title: name,
      className: cn(
        "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full",
        "ring-1 ring-black/5 dark:ring-white/10",
        !showImage && cn(gradient, "text-white"),
        className
      ),
      style: { width: size, height: size, fontSize: Math.max(10, Math.round(size * 0.36)) },
      children: showImage ? /* @__PURE__ */ jsx("img", { src, alt: name ?? "", onError: () => setImgError(true), className: "size-full object-cover" }) : /* @__PURE__ */ jsx("span", { className: "font-bold leading-none tracking-wide", children: initialsOf(name) })
    }
  );
}
function Skeleton({ className }) {
  return /* @__PURE__ */ jsx("span", { className: cn("ds-skeleton block rounded-lg", className), "aria-hidden": true });
}
function SkeletonText({ lines = 3, className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-2", className), "aria-hidden": true, children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx(Skeleton, { className: cn("h-3.5", i === lines - 1 ? "w-2/3" : "w-full") }, i)) });
}
function SkeletonTable({ rows = 8, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("overflow-hidden rounded-2xl border border-border bg-card shadow-xs", className), "aria-hidden": true, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex h-10 items-center gap-4 border-b border-border bg-surface-1/70 px-4", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-24" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-16" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "ml-auto h-3 w-20" })
    ] }),
    Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center gap-4 border-b border-border/60 px-4 py-3 last:border-0",
        style: { opacity: 1 - i * 0.09 },
        children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "size-[42px] shrink-0 rounded-md" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-[26%]" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-24" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20 rounded-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-3.5 w-16" }),
          /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-9 rounded-full" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-9 rounded-full" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "size-7 rounded-lg" })
          ] })
        ]
      },
      i
    ))
  ] });
}
var DELTA_CLASS = {
  positive: "bg-success/12 text-success",
  negative: "bg-destructive/10 text-destructive",
  neutral: "bg-surface-2 text-foreground/60"
};
function MetricCard({ label, value, helper, delta, icon, className }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-4 shadow-xs",
        "transition-all duration-150 hover:-translate-y-px hover:shadow-md hover:shadow-black/[0.04]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[12.5px] font-semibold text-muted-foreground", children: label }),
          icon && /* @__PURE__ */ jsx("span", { className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-foreground/55 transition-colors duration-150 group-hover:bg-brand/10 group-hover:text-brand", children: icon })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[22px] font-extrabold leading-none tracking-tight tabular-nums", children: value }),
          delta && /* @__PURE__ */ jsxs(
            "span",
            {
              className: cn(
                "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-bold tabular-nums",
                DELTA_CLASS[delta.tone]
              ),
              children: [
                delta.tone !== "neutral" && /* @__PURE__ */ jsx(IconArrowRight, { size: 10, className: delta.tone === "positive" ? "-rotate-45" : "rotate-45" }),
                delta.label
              ]
            }
          )
        ] }),
        helper && /* @__PURE__ */ jsx("span", { className: "text-[12px] leading-snug text-muted-foreground", children: helper })
      ]
    }
  );
}
function SegmentedControl({ options, value, onChange, className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "tablist",
      className: cn("inline-flex items-center gap-0.5 rounded-xl bg-surface-2 p-1", className),
      children: options.map((opt) => {
        const active = opt.value === value;
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": active,
            onClick: () => onChange(opt.value),
            className: cn(
              "h-8 cursor-pointer whitespace-nowrap rounded-lg px-3.5 text-[13px] font-semibold transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/25",
              active ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
            ),
            children: opt.label
          },
          opt.value
        );
      })
    }
  );
}
function BarList({ items, emptyText = "Nada no per\xEDodo.", className }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  if (!items.length) {
    return /* @__PURE__ */ jsx("p", { className: cn("py-2 text-[13px] text-muted-foreground", className), children: emptyText });
  }
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-3.5", className), children: items.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "group flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-3", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(
            "truncate text-[13px] font-semibold",
            item.muted && "font-medium text-muted-foreground"
          ),
          children: item.label
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[13px] font-bold tabular-nums", children: item.value })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-1.5 overflow-hidden rounded-full bg-surface-2", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-full rounded-full bg-brand transition-[width] duration-700 ease-out group-hover:brightness-110",
        style: { width: mounted ? `${Math.max(item.ratio * 100, 2)}%` : "0%" }
      }
    ) }),
    item.sub && /* @__PURE__ */ jsx("span", { className: "text-[11px] text-muted-foreground tabular-nums", children: item.sub })
  ] }, item.key ?? idx)) });
}

export { AppShell, Avatar, Badge, BarList, Button, DataTable, Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, HeaderBar, Input, MetricCard, NativeSelect, PageShell, PaginationBar, PlatformRail, SearchInput, SegmentedControl, Select, SidebarNav, Skeleton, SkeletonTable, SkeletonText, Switch, ThemeToggle, Tooltip, badgeVariants, buttonVariants, fieldClass, useShell };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map