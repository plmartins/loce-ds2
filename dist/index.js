import { IconChevronRight, IconLock, IconPin, IconMenu, IconMoon, IconSun, IconArrowLeft, IconSpinner, IconClose, IconSearch, IconChevronDown, IconCheck, IconChevronUp, IconSort, IconChevronLeft, IconArrowRight, IconCopy, IconMore, IconTrash, IconPlus, IconCursorClick, IconMouse, IconHandGrab, IconCalendar, IconChat, IconMarketing, IconCart, IconApps } from './chunk-7XTCSYCP.js';
import { cn } from './chunk-HWAWA4NZ.js';
export { cn } from './chunk-HWAWA4NZ.js';
import { createContext, useContext, useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { createPortal } from 'react-dom';
import { getDefaultClassNames, DayPicker } from 'react-day-picker';
import { ptBR } from 'react-day-picker/locale';
import { Toaster as Toaster$1 } from 'react-hot-toast';
export { toast } from 'react-hot-toast';

var ShellContext = createContext({
  mobileSidebarOpen: false,
  setMobileSidebarOpen: () => {
  }
});
var useShell = () => useContext(ShellContext);
function AppShell({ rail, sidebar, mobileSidebar, header, children, className, scrollResetKey }) {
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
      /* @__PURE__ */ jsxs("main", { ref: mainRef, className: "flex-1 min-w-0 min-h-0 flex flex-col overflow-auto", children: [
        children,
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "h-14 shrink-0" })
      ] })
    ] })
  ] }) });
}
var PLATFORM_META = {
  erp: {
    label: "Loce ERP",
    description: "Vendas, estoque, fiscal, caixa e entregas da opera\xE7\xE3o inteira num s\xF3 painel.",
    icon: IconApps,
    tileClass: "bg-gradient-to-br from-[#3ba2ff] to-[#0864d8]",
    glowClass: "shadow-[0_2px_14px_rgba(8,130,255,0.5)]"
  },
  ecommerce: {
    label: "Loce Ecommerce",
    description: "Sua loja online integrada em tempo real ao estoque e \xE0s vendas do ERP.",
    icon: IconCart,
    tileClass: "bg-gradient-to-br from-[#12d68d] to-[#079457]",
    glowClass: "shadow-[0_2px_14px_rgba(8,174,105,0.5)]"
  },
  marketing: {
    label: "Loce Agency",
    description: "IA que aprende a sua marca e cria posts profissionais para o Instagram, prontos no melhor hor\xE1rio.",
    icon: IconMarketing,
    tileClass: "bg-gradient-to-br from-[#ff64a5] to-[#d61668]",
    glowClass: "shadow-[0_2px_14px_rgba(238,42,123,0.5)]"
  },
  talkbia: {
    label: "Talkbia",
    description: "CRM com IA para vender mais no WhatsApp e Instagram, com atendimento e disparos integrados.",
    icon: IconChat,
    tileClass: "bg-gradient-to-br from-[#a78bfa] to-[#6d28d9]",
    glowClass: "shadow-[0_2px_14px_rgba(124,58,237,0.5)]"
  }
};
function PlatformPreview({ item, children }) {
  const meta = PLATFORM_META[item.id];
  const Icon = meta.icon;
  const available = item.available ?? false;
  const status = item.active ? { label: "Voc\xEA est\xE1 aqui", className: "bg-brand/10 text-brand" } : available ? { label: "Dispon\xEDvel", className: "bg-success/12 text-success" } : { label: "Em breve", className: "bg-surface-2 text-muted-foreground" };
  return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, { delayDuration: 350, children: /* @__PURE__ */ jsxs(TooltipPrimitive.Root, { children: [
    /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Content, { side: "right", align: "start", sideOffset: 12, className: "z-50 animate-rail-preview", children: /* @__PURE__ */ jsxs("div", { className: "flex w-64 flex-col gap-2.5 rounded-2xl border border-border bg-popover p-3.5 text-popover-foreground shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
        item.logoSrc ? /* @__PURE__ */ jsx(
          "img",
          {
            src: item.logoSrc,
            alt: "",
            className: cn("size-9 rounded-[10px] object-cover", !available && "opacity-60 grayscale")
          }
        ) : /* @__PURE__ */ jsx("span", { className: cn("flex size-9 items-center justify-center rounded-[10px] text-white", meta.tileClass), children: /* @__PURE__ */ jsx(Icon, { size: 17 }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[13px] font-bold leading-tight", children: meta.label }),
          /* @__PURE__ */ jsx("span", { className: cn("mt-0.5 self-start rounded-full px-1.5 py-px text-[10px] font-bold", status.className), children: status.label })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[12px] leading-relaxed text-muted-foreground", children: meta.description }),
      available && item.href && !item.active && /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-brand", children: "Clique para abrir" }),
      !available && /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium text-muted-foreground", children: "Ser\xE1 liberada em breve, integrada ao ecossistema Loce." })
    ] }) }) })
  ] }) });
}
function RailTile({ item }) {
  const meta = PLATFORM_META[item.id];
  const Icon = meta.icon;
  const available = item.available ?? false;
  const tile = /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "relative flex size-9 items-center justify-center overflow-visible rounded-[10px] transition-all duration-150 ease-out",
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
              "size-9 rounded-[10px] object-cover",
              !available && "opacity-45 grayscale"
            )
          }
        ) : /* @__PURE__ */ jsx(Icon, { size: 17 }),
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
  const trigger = available && item.href && !item.active ? /* @__PURE__ */ jsx("a", { href: item.href, "aria-label": meta.label, className: "group block w-full cursor-pointer", children: wrapped }) : /* @__PURE__ */ jsx(
    "span",
    {
      "aria-label": available ? meta.label : `${meta.label} (em breve)`,
      className: cn("group block w-full", !available && "cursor-default"),
      children: wrapped
    }
  );
  return /* @__PURE__ */ jsx(PlatformPreview, { item, children: trigger });
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
  const activeEndPoint = useMemo(() => {
    const current = activePath.replace(/\/+$/, "");
    let best = "";
    for (const item of items) {
      for (const sub of item.subItems) {
        const base = sub.endPoint.replace(/\/+$/, "");
        if ((current === base || current.startsWith(`${base}/`)) && base.length > best.length) {
          best = base;
        }
      }
    }
    return best;
  }, [items, activePath]);
  const isSubActive = useCallback(
    (path) => path.replace(/\/+$/, "") === activeEndPoint && activeEndPoint !== "",
    [activeEndPoint]
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
                  const firstNavigable = item.subItems.find((sub) => !sub.locked);
                  if (singleChild && firstNavigable) {
                    onNavigate(firstNavigable.endPoint);
                    return;
                  }
                  if (open) {
                    setOpenGroup((prev) => prev === item.label ? "" : item.label);
                  } else if (firstNavigable) {
                    onNavigate(firstNavigable.endPoint);
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
                  if (sub.locked) {
                    return /* @__PURE__ */ jsx(Tooltip, { content: sub.lockedHint ?? "Chega em breve", side: "right", wrap: true, children: /* @__PURE__ */ jsxs(
                      "span",
                      {
                        tabIndex: -1,
                        "aria-disabled": true,
                        className: "relative flex h-8 w-full cursor-default items-center gap-1.5 truncate whitespace-nowrap rounded-lg px-3 text-[13px] font-medium text-foreground/35",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate", children: sub.label }),
                          /* @__PURE__ */ jsx(IconLock, { size: 11, className: "shrink-0 text-foreground/30" })
                        ]
                      }
                    ) }, sub.endPoint);
                  }
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
        primary: "ds-btn-3d [--btn-bg:var(--accent-brand)] text-white",
        secondary: "border border-border bg-card text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.3)] hover:bg-surface-2/60 hover:border-ring/40 active:shadow-none",
        ghost: "text-foreground/70 hover:bg-foreground/[0.05] hover:text-foreground",
        destructive: "ds-btn-3d [--btn-bg:var(--destructive)] text-white",
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
  "h-9 w-full rounded-xl border border-border bg-card px-3 text-[13px] font-semibold text-foreground",
  "shadow-xs transition-all duration-150",
  "placeholder:font-medium placeholder:text-muted-foreground/70",
  "hover:border-ring/50",
  "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25",
  "disabled:pointer-events-none disabled:opacity-50"
);
function Input({ className, label, error, labelAction, suffix, onClear, loading, id, ...props }) {
  const hasAdornment = suffix || onClear || loading;
  const input = /* @__PURE__ */ jsx(
    "input",
    {
      id,
      className: cn(
        fieldClass,
        hasAdornment && "pr-12",
        error && "border-destructive focus:border-destructive focus:ring-destructive/20",
        className
      ),
      ...props
    }
  );
  const field = hasAdornment ? /* @__PURE__ */ jsxs("div", { className: "relative flex w-full min-w-0 items-center", children: [
    input,
    /* @__PURE__ */ jsxs("div", { className: "absolute right-2 flex items-center gap-1", children: [
      loading && /* @__PURE__ */ jsx(IconSpinner, { size: 14, className: "animate-spin text-muted-foreground" }),
      !loading && onClear && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: onClear,
          className: "flex size-5 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
          children: /* @__PURE__ */ jsx(IconClose, { size: 12 })
        }
      ),
      suffix && /* @__PURE__ */ jsx("span", { className: "rounded-md bg-surface-2 px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground", children: suffix })
    ] })
  ] }) : input;
  if (!label && !error) return field;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full min-w-0 flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: id, className: "text-[12px] font-semibold text-foreground/80", children: label }),
      labelAction && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: labelAction.onClick,
          className: "cursor-pointer text-[12px] font-semibold text-brand transition-opacity hover:opacity-80",
          children: labelAction.label
        }
      )
    ] }),
    field,
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
          "data-[state=open]:border-brand data-[state=open]:ring-2 data-[state=open]:ring-brand/25",
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
  className,
  sort,
  onSortChange
}) {
  const [internalSort, setInternalSort] = useState(null);
  const isServerSort = onSortChange !== void 0;
  const sortConfig = isServerSort ? sort ?? null : internalSort;
  const handleSort = (accessor) => {
    const next = sortConfig?.accessor !== accessor ? { accessor, direction: "asc" } : sortConfig.direction === "asc" ? { accessor, direction: "desc" } : null;
    if (isServerSort) onSortChange(next);
    else setInternalSort(next);
  };
  const sortedData = useMemo(() => {
    if (isServerSort || !sortConfig) return data;
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
  }, [data, sortConfig, isServerSort]);
  const hasActions = actions.length > 0 || mainActions.length > 0;
  const getKey = (row, idx) => rowKey ? rowKey(row, idx) : idx;
  const renderActions = (row) => {
    const visibleMain = mainActions.filter((a) => a.condition?.(row) ?? true);
    const visibleMore = actions.filter((a) => a.condition?.(row) ?? true);
    if (!visibleMain.length && !visibleMore.length) return null;
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-0.5", children: [
      visibleMain.map((action) => {
        const isDisabled = action.disabled?.(row);
        const btnClass = "flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors duration-100 hover:bg-foreground/[0.06] hover:text-foreground disabled:pointer-events-none disabled:opacity-35 data-[state=open]:bg-foreground/[0.06] data-[state=open]:text-foreground";
        if (action.items?.length) {
          return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { type: "button", title: action.label, disabled: isDisabled, onClick: (e) => e.stopPropagation(), className: btnClass, children: action.icon }) }),
            /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", onClick: (e) => e.stopPropagation(), children: action.items.map((item) => {
              const itemDisabled = item.disabled?.(row);
              return /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  disabled: itemDisabled,
                  onClick: (e) => {
                    e.stopPropagation();
                    if (!itemDisabled) item.onClick(row);
                  },
                  children: [
                    item.icon,
                    /* @__PURE__ */ jsx("span", { children: item.label })
                  ]
                },
                item.label
              );
            }) })
          ] }, action.label);
        }
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            title: action.label,
            disabled: isDisabled,
            onClick: (e) => {
              e.stopPropagation();
              if (!isDisabled) action.onClick?.(row);
            },
            className: btnClass,
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
                if (!isDisabled) action.onClick?.(row);
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
var FACES = [
  { bg: "#f0a35e", fg: "#6b3a10" },
  // laranja
  { bg: "#f2b8c6", fg: "#833450" },
  // rosa
  { bg: "#b7a6f6", fg: "#43318f" },
  // lilás
  { bg: "#a5d8cd", fg: "#265f54" },
  // menta
  { bg: "#9fb6cd", fg: "#2e4a63" },
  // azul bruma
  { bg: "#c9cf9f", fg: "#535c2b" },
  // oliva
  { bg: "#e5b39a", fg: "#74452a" },
  // terracota
  { bg: "#cdb2e6", fg: "#553380" },
  // uva
  { bg: "#a9c8f0", fg: "#2b4d7e" },
  // azul céu
  { bg: "#e8b9b0", fg: "#7c3a30" }
  // salmão queimado
];
function hashString2(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = hash * 31 + value.charCodeAt(i) | 0;
  return Math.abs(hash);
}
function Eyes({ variant, fg }) {
  switch (variant) {
    case 0:
      return /* @__PURE__ */ jsxs("g", { fill: fg, children: [
        /* @__PURE__ */ jsx("circle", { cx: "8.4", cy: "9.6", r: "1.1" }),
        /* @__PURE__ */ jsx("circle", { cx: "15.6", cy: "9.6", r: "1.1" })
      ] });
    case 1:
      return /* @__PURE__ */ jsx("g", { stroke: fg, strokeWidth: "1.2", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M8.4 8.2v2.8M7 9.6h2.8M15.6 8.2v2.8M14.2 9.6h2.8" }) });
    case 2:
      return /* @__PURE__ */ jsx("g", { stroke: fg, strokeWidth: "1.3", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M7 9.6h2.8M14.2 9.6h2.8" }) });
    case 3:
      return /* @__PURE__ */ jsx("g", { stroke: fg, strokeWidth: "1.3", strokeLinecap: "round", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M7 10.2c.7-1.3 2.1-1.3 2.8 0M14.2 10.2c.7-1.3 2.1-1.3 2.8 0" }) });
    default:
      return /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("g", { stroke: fg, strokeWidth: "1.3", strokeLinecap: "round", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M7 9.6c.7 1 2.1 1 2.8 0" }) }),
        /* @__PURE__ */ jsx("circle", { cx: "15.6", cy: "9.6", r: "1.1", fill: fg })
      ] });
  }
}
function FaceAvatar({ seed, glyph, size = 32, className, title }) {
  const hash = hashString2(seed || "?");
  const face = FACES[hash % FACES.length];
  const eyes = (hash >> 4) % 5;
  const centerGlyph = (glyph ?? seed.replace(/[^a-zA-Z0-9]/g, "").charAt(0) ?? "?").toUpperCase() || "?";
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": title ?? seed,
      className: cn("shrink-0 select-none", className),
      children: [
        title && /* @__PURE__ */ jsx("title", { children: title }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "11.4", fill: face.bg }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10.9", fill: "none", stroke: face.fg, strokeOpacity: "0.28", strokeWidth: "1" }),
        /* @__PURE__ */ jsx(Eyes, { variant: eyes, fg: face.fg }),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: "12",
            y: "17.6",
            textAnchor: "middle",
            fontSize: "6",
            fontWeight: "800",
            fontFamily: "inherit",
            fill: face.fg,
            children: centerGlyph
          }
        )
      ]
    }
  );
}
var TONES = {
  brand: "bg-brand/10 text-brand",
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  destructive: "bg-destructive/10 text-destructive",
  info: "bg-info/12 text-info",
  neutral: "bg-surface-2 text-muted-foreground",
  ecommerce: "bg-platform-ecommerce/12 text-platform-ecommerce"
};
var SIZES = {
  sm: "size-6 rounded-md",
  md: "size-8 rounded-xl",
  lg: "size-10 rounded-xl"
};
function IconTile({ tone = "neutral", size = "md", shape = "rounded", className, children }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "flex shrink-0 items-center justify-center",
        SIZES[size],
        shape === "circle" && "rounded-full",
        TONES[tone],
        className
      ),
      children
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
function SkeletonForm({ withAside = true, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("grid gap-6", withAside && "xl:grid-cols-[1.6fr_1fr]", className), "aria-hidden": true, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-40" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-full" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" })
        ] }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-24 w-full" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-32" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-9" })
        ] }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-9 w-full" })
      ] })
    ] }),
    withAside && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-28 rounded-2xl" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-40 rounded-2xl" })
    ] })
  ] });
}
function TagsInput({ value, onChange, placeholder = "Digite e aperte Enter", disabled, className }) {
  const [draft, setDraft] = useState("");
  const inputRef = useRef(null);
  const commit = (raw) => {
    const parts = raw.split(",").map((part) => part.trim()).filter(Boolean).filter((part) => !value.includes(part));
    if (parts.length) onChange([...value, ...parts]);
    setDraft("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit(draft);
    } else if (e.key === "Backspace" && !draft && value.length) {
      onChange(value.slice(0, -1));
    }
  };
  const handlePaste = (e) => {
    const text = e.clipboardData.getData("text");
    if (text.includes(",")) {
      e.preventDefault();
      commit(draft ? `${draft},${text}` : text);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: () => inputRef.current?.focus(),
      className: cn(
        "flex min-h-9 w-full cursor-text flex-wrap items-center gap-1 rounded-xl border border-border bg-card px-2 py-1.5",
        "shadow-xs transition-all duration-150 hover:border-ring/50",
        "focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/25",
        disabled && "pointer-events-none opacity-50",
        className
      ),
      children: [
        value.map((tag) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: "flex items-center gap-1 rounded-lg bg-surface-2 py-0.5 pl-2 pr-1 text-[12px] font-semibold",
            children: [
              tag,
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  "aria-label": `Remover ${tag}`,
                  onClick: (e) => {
                    e.stopPropagation();
                    onChange(value.filter((item) => item !== tag));
                  },
                  className: "flex size-4 cursor-pointer items-center justify-center rounded text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive",
                  children: /* @__PURE__ */ jsx(IconClose, { size: 9 })
                }
              )
            ]
          },
          tag
        )),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            type: "text",
            disabled,
            value: draft,
            placeholder: value.length ? "" : placeholder,
            onChange: (e) => setDraft(e.target.value),
            onKeyDown: handleKeyDown,
            onPaste: handlePaste,
            onBlur: () => draft && commit(draft),
            className: "min-w-28 flex-1 bg-transparent text-[13px] font-semibold outline-none placeholder:font-medium placeholder:text-muted-foreground/70"
          }
        )
      ]
    }
  );
}
var ACCENT_TILE = {
  brand: "bg-brand/10 text-brand",
  green: "bg-success/12 text-success",
  red: "bg-destructive/10 text-destructive",
  amber: "bg-warning/15 text-warning",
  purple: "bg-[#8b5cf6]/12 text-[#8b5cf6]",
  pink: "bg-[#ec4899]/12 text-[#ec4899]",
  teal: "bg-[#14b8a6]/12 text-[#14b8a6]"
};
var ACCENT_GLOW = {
  brand: "from-brand/[0.07]",
  green: "from-success/[0.08]",
  red: "from-destructive/[0.07]",
  amber: "from-warning/[0.1]",
  purple: "from-[#8b5cf6]/[0.08]",
  pink: "from-[#ec4899]/[0.08]",
  teal: "from-[#14b8a6]/[0.08]"
};
var DELTA_CLASS = {
  positive: "bg-success/12 text-success",
  negative: "bg-destructive/10 text-destructive",
  neutral: "bg-surface-2 text-foreground/60"
};
function MetricCard({ label, value, helper, delta, icon, accent = "brand", className }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xs",
        "transition-all duration-150 hover:-translate-y-px hover:border-brand/25 hover:shadow-md hover:shadow-black/[0.05]",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: cn("pointer-events-none absolute -right-8 -top-10 size-32 rounded-full bg-gradient-to-b to-transparent blur-2xl", ACCENT_GLOW[accent]) }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.07em] text-muted-foreground", children: label }),
          icon && /* @__PURE__ */ jsx("span", { className: cn("flex size-8 shrink-0 items-center justify-center rounded-lg", ACCENT_TILE[accent]), children: icon })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-extrabold leading-none tracking-tight tabular-nums", children: value }),
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
        helper && /* @__PURE__ */ jsx("span", { className: "text-[11.5px] leading-snug text-muted-foreground", children: helper })
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
function BarList({ items, showRank = false, emptyText = "Nada no per\xEDodo.", className }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  if (!items.length) {
    return /* @__PURE__ */ jsx("p", { className: cn("py-2 text-[13px] text-muted-foreground", className), children: emptyText });
  }
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-4", className), children: items.map((item, idx) => {
    const isZero = item.ratio <= 0;
    const isLeader = showRank && idx === 0 && !isZero;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "group flex items-start gap-2.5 rounded-xl px-2 py-1.5 -mx-2 transition-colors duration-100 hover:bg-foreground/[0.025]",
          isZero && "opacity-55"
        ),
        children: [
          showRank && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold tabular-nums",
                isLeader ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
              ),
              children: idx + 1
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-1.5", children: [
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
              /* @__PURE__ */ jsxs("span", { className: "flex shrink-0 items-center gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[13.5px] font-bold tabular-nums", children: item.value }),
                item.share !== void 0 && /* @__PURE__ */ jsxs("span", { className: "rounded-md bg-surface-2 px-1.5 py-0.5 text-[10.5px] font-bold text-muted-foreground tabular-nums", children: [
                  Math.round(item.share * 100),
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-2 overflow-hidden rounded-full bg-surface-2", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "h-full rounded-full transition-[width] duration-700 ease-out group-hover:brightness-110",
                  isLeader || !showRank ? "bg-gradient-to-r from-brand to-brand-sec" : "bg-brand/70"
                ),
                style: { width: mounted && !isZero ? `${Math.max(item.ratio * 100, 1.5)}%` : "0%" }
              }
            ) }),
            item.stats?.length ? /* @__PURE__ */ jsx("span", { className: "flex flex-wrap items-center gap-1", children: item.stats.map((stat) => /* @__PURE__ */ jsx("span", { className: "rounded-md bg-surface-1 px-1.5 py-0.5 text-[10.5px] font-medium text-muted-foreground tabular-nums ring-1 ring-border/60", children: stat }, stat)) }) : item.sub ? /* @__PURE__ */ jsx("span", { className: "text-[11px] text-muted-foreground tabular-nums", children: item.sub }) : null
          ] })
        ]
      },
      item.key ?? idx
    );
  }) });
}
function RingedTile({ icon }) {
  return /* @__PURE__ */ jsxs("span", { className: "relative flex size-24 shrink-0 items-center justify-center", children: [
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/80" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/45" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute right-1 top-2 size-1.5 rounded-full bg-brand/40" }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute bottom-3 left-0 size-1 rounded-full bg-brand/30" }),
    /* @__PURE__ */ jsx("span", { className: "relative z-10 flex size-12 items-center justify-center rounded-xl text-white shadow-lg shadow-brand/25 ds-btn-3d [--btn-bg:var(--accent-brand)]", children: icon ?? /* @__PURE__ */ jsx(IconSearch, { size: 21 }) })
  ] });
}
function EmptyState({
  icon,
  title = "Nenhum resultado encontrado",
  description = "Ajuste a busca ou os filtros e tente de novo.",
  action,
  variant = "horizontal",
  className
}) {
  if (variant === "centered") {
    return /* @__PURE__ */ jsxs("div", { className: cn("relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center", className), children: [
      /* @__PURE__ */ jsx(RingedTile, { icon }),
      /* @__PURE__ */ jsxs("div", { className: "z-10 mt-3 flex max-w-sm flex-col gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold", children: title }),
        description && /* @__PURE__ */ jsx("span", { className: "text-[12.5px] leading-snug text-muted-foreground", children: description })
      ] }),
      action && /* @__PURE__ */ jsx("div", { className: "z-10 mt-4", children: action })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card px-6 py-8", className), children: [
    /* @__PURE__ */ jsx(RingedTile, { icon }),
    /* @__PURE__ */ jsxs("div", { className: "z-10 flex min-w-0 flex-col gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold", children: title }),
      description && /* @__PURE__ */ jsx("span", { className: "max-w-md text-[12.5px] leading-snug text-muted-foreground", children: description }),
      action && /* @__PURE__ */ jsx("div", { className: "mt-3", children: action })
    ] })
  ] });
}
function ComboBox({
  options,
  value,
  onChange,
  label,
  labelExtra,
  error,
  placeholder = "Buscar...",
  inputValue: controlledInput,
  onInputChange,
  minCharsToOpen = 0,
  disableLocalFilter = false,
  isLoading = false,
  disabled = false,
  emptyText = "Nenhum resultado encontrado",
  loadingText = "Buscando...",
  showEmpty = true,
  autoFocus,
  className
}) {
  const [uncontrolledInput, setUncontrolledInput] = useState(value?.label ?? "");
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const [dropUp, setDropUp] = useState(false);
  const inputValue = controlledInput ?? uncontrolledInput;
  const setInputValue = (next) => {
    onInputChange?.(next);
    if (controlledInput === void 0) setUncontrolledInput(next);
  };
  const wrapperRef = useRef(null);
  const listRef = useRef(null);
  const filtered = disableLocalFilter ? options : options.filter((opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase()));
  useEffect(() => {
    if (controlledInput === void 0) setUncontrolledInput(value?.label ?? "");
  }, [value]);
  useEffect(() => setHighlighted(0), [inputValue, options.length]);
  useEffect(() => {
    if (!open) return;
    const handleOutside = (event) => {
      if (wrapperRef.current?.contains(event.target)) return;
      setOpen(false);
      const match = options.find((opt) => opt.label.toLowerCase() === inputValue.toLowerCase());
      if (match) onChange(match);
      else {
        setInputValue("");
        onChange(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open, inputValue, options, onChange]);
  useEffect(() => {
    if (!open || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom;
    const height = listRef.current?.offsetHeight ?? 280;
    setDropUp(below < height && rect.top > below);
  }, [open, filtered.length, isLoading]);
  const pick = (option) => {
    setInputValue(option.label);
    setOpen(false);
    onChange(option);
  };
  const clear = () => {
    setInputValue("");
    onChange(null);
  };
  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((prev) => (prev + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((prev) => prev === 0 ? Math.max(filtered.length - 1, 0) : prev - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = filtered[highlighted];
      if (opt) pick(opt);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };
  const field = /* @__PURE__ */ jsxs("div", { ref: wrapperRef, className: "relative w-full min-w-0", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        disabled,
        placeholder,
        value: inputValue,
        autoFocus,
        className: cn(
          fieldClass,
          "pr-14",
          error && "border-destructive focus:border-destructive focus:ring-destructive/20",
          className
        ),
        onChange: (e) => {
          setInputValue(e.target.value);
          setOpen(e.target.value.length >= minCharsToOpen);
        },
        onFocus: () => setOpen(inputValue.length >= minCharsToOpen),
        onBlur: () => setTimeout(() => setOpen(false), 120),
        onKeyDown: handleKeyDown
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 right-2 flex items-center gap-1", children: [
      isLoading && /* @__PURE__ */ jsx(IconSpinner, { size: 14, className: "animate-spin text-muted-foreground" }),
      !isLoading && inputValue && !disabled && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onMouseDown: (e) => {
            e.preventDefault();
            clear();
          },
          className: "flex size-5 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
          children: /* @__PURE__ */ jsx(IconClose, { size: 12 })
        }
      ),
      /* @__PURE__ */ jsx(IconChevronDown, { size: 12, className: cn("text-muted-foreground transition-transform duration-150", open && "rotate-180") })
    ] }),
    open && /* @__PURE__ */ jsxs(
      "div",
      {
        ref: listRef,
        className: cn(
          "absolute z-50 flex w-full flex-col overflow-auto rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
          "max-h-72",
          dropUp ? "bottom-full mb-1.5" : "top-full mt-1.5"
        ),
        children: [
          isLoading && /* @__PURE__ */ jsx("span", { className: "select-none py-4 text-center text-[12.5px] font-medium text-muted-foreground", children: loadingText }),
          !isLoading && filtered.map((option, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              onMouseDown: (e) => {
                e.preventDefault();
                pick(option);
              },
              onMouseEnter: () => setHighlighted(index),
              className: cn(
                "flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors",
                index === highlighted && "bg-foreground/[0.05]"
              ),
              children: [
                option.icon,
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "block truncate text-[13px] font-medium leading-tight",
                        option.value === value?.value && "font-semibold text-brand"
                      ),
                      children: option.label
                    }
                  ),
                  option.description && /* @__PURE__ */ jsx("span", { className: "mt-0.5 block truncate text-[11.5px] leading-tight text-muted-foreground", children: option.description })
                ] })
              ]
            },
            option.value
          )),
          !isLoading && filtered.length === 0 && showEmpty && /* @__PURE__ */ jsx("span", { className: "select-none py-4 text-center text-[12.5px] font-medium text-muted-foreground", children: emptyText })
        ]
      }
    )
  ] });
  if (!label && !error) return field;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full min-w-0 flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
      labelExtra
    ] }),
    field,
    error && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-destructive", children: error })
  ] });
}
var textVariantMap = {
  default: "text-[13px] font-semibold text-foreground",
  supertitle: "text-2xl font-extrabold tracking-tight text-foreground",
  title: "text-lg font-bold text-foreground",
  subtitle: "text-[15px] font-bold text-foreground",
  description: "text-[13px] font-medium text-muted-foreground",
  subdescription: "text-xs font-medium text-muted-foreground",
  label: "text-xs font-semibold text-muted-foreground",
  code: "rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs font-medium text-foreground/80"
};
function Text({ variant = "default", className, children, as: Tag = "span" }) {
  return /* @__PURE__ */ jsx(Tag, { className: cn(textVariantMap[variant], className), children });
}
function Tabs({ tabs, value, onChange, className, size = "default" }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex w-fit items-center gap-1 rounded-xl border border-border bg-surface-2/60 p-1", className), children: tabs.map((tab) => {
    const isActive = tab.key === value;
    return /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => onChange(tab.key),
        className: cn(
          "relative inline-flex cursor-pointer select-none items-center justify-center gap-1.5 rounded-lg font-semibold transition-all duration-150 active:scale-[0.97]",
          size === "default" ? "px-4 py-1.5 text-[13px]" : "px-3 py-1 text-xs",
          isActive ? "bg-card text-brand shadow-sm ring-1 ring-border" : "text-muted-foreground hover:text-foreground"
        ),
        children: [
          tab.icon,
          /* @__PURE__ */ jsx("span", { children: tab.label }),
          tab.count !== void 0 && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "rounded-full px-1.5 py-px text-[10px] font-bold tabular-nums",
                isActive ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
              ),
              children: tab.count
            }
          )
        ]
      },
      tab.key
    );
  }) });
}
var statusColors = {
  online: "bg-success",
  offline: "bg-muted-foreground/50",
  busy: "bg-destructive",
  away: "bg-warning"
};
var sizes = {
  sm: "size-2",
  default: "size-2.5",
  lg: "size-3"
};
function StatusDot({ status, size = "default", className, pulse = false }) {
  return /* @__PURE__ */ jsxs("span", { className: cn("relative inline-block", className), children: [
    /* @__PURE__ */ jsx("span", { className: cn("block rounded-full", statusColors[status], sizes[size]) }),
    pulse && status === "online" && /* @__PURE__ */ jsx("span", { className: cn("absolute inset-0 animate-ping rounded-full opacity-40", statusColors[status]) })
  ] });
}
function Checkbox({ className, label, description, checked, onChange, disabled, ...props }) {
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: cn(
        "inline-flex cursor-pointer select-none gap-3",
        description ? "items-start" : "items-center",
        disabled && "cursor-not-allowed opacity-50",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: cn("relative shrink-0", description && "mt-0.5"), children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked, onChange, disabled, className: "peer sr-only", ...props }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "flex size-5 items-center justify-center rounded-md border transition-all duration-100",
                "peer-focus-visible:ring-[3px] peer-focus-visible:ring-brand/30",
                checked ? "border-brand bg-brand text-white shadow-xs" : "border-border bg-card shadow-xs hover:border-ring/60"
              ),
              children: checked && /* @__PURE__ */ jsx(IconCheck, { size: 13 })
            }
          )
        ] }),
        (label || description) && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5", children: [
          label && /* @__PURE__ */ jsx("span", { className: "text-[13px] font-semibold leading-tight text-foreground", children: label }),
          description && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium leading-tight text-muted-foreground", children: description })
        ] })
      ]
    }
  );
}
function Textarea({ className, label, loading, error, autoResize = true, onSubmit, onChange, ref, ...props }) {
  const internalRef = useRef(null);
  const setRefs = (el) => {
    internalRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) ref.current = el;
  };
  const resize = () => {
    const el = internalRef.current;
    if (!el || !autoResize) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };
  const handleInput = (e) => {
    onChange?.(e.target.value);
    resize();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && onSubmit) {
      e.preventDefault();
      onSubmit();
      setTimeout(resize, 50);
    }
  };
  useEffect(() => {
    resize();
  }, [props.value]);
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
    label && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex w-full items-center", children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref: setRefs,
          rows: 2,
          className: cn(
            "w-full resize-none rounded-xl border border-border bg-card px-3 py-2 text-[13px] font-semibold text-foreground",
            "shadow-xs transition-all duration-150",
            "placeholder:font-medium placeholder:text-muted-foreground/70",
            "hover:border-ring/50",
            "focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25",
            "disabled:pointer-events-none disabled:opacity-50",
            autoResize && "max-h-40",
            error && "border-destructive focus:border-destructive focus:ring-destructive/20",
            className
          ),
          onChange: handleInput,
          onKeyDown: handleKeyDown,
          ...props
        }
      ),
      loading && /* @__PURE__ */ jsx(IconSpinner, { size: 14, className: "absolute right-3 animate-spin text-muted-foreground" })
    ] }),
    error && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-destructive", children: error })
  ] });
}
function Timeline({ items, className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col", className), children: items.map((item, i) => {
    const isLast = i === items.length - 1;
    return /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: cn("grid size-8 shrink-0 place-items-center rounded-xl", item.color || "bg-surface-2 text-muted-foreground"), children: item.icon }),
        !isLast && /* @__PURE__ */ jsx("div", { className: "min-h-6 w-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: cn("flex min-h-8 min-w-0 flex-1 flex-col justify-center pb-6", isLast && "pb-0"), children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[13px] font-semibold text-foreground", children: item.title }),
          item.time && /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[11px] font-medium text-muted-foreground", children: item.time })
        ] }),
        item.description && /* @__PURE__ */ jsx("span", { className: "block text-xs font-medium text-muted-foreground", children: item.description })
      ] })
    ] }, i);
  }) });
}
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("rounded-2xl border border-border bg-card shadow-xs", className), ...props });
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-1 px-5 pb-3 pt-5", className), ...props });
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("h3", { className: cn("text-[15px] font-bold text-foreground", className), ...props });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("p", { className: cn("text-[13px] font-medium text-muted-foreground", className), ...props });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("px-5 py-3", className), ...props });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-2 border-t border-border px-5 pb-5 pt-3", className), ...props });
}
function Separator2({ className, orientation = "horizontal", label }) {
  if (label) {
    return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-3", className), children: [
      /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
      /* @__PURE__ */ jsx("span", { className: "select-none text-xs font-medium text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
    ] });
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx("div", { className: cn("h-full w-px bg-border", className) });
  }
  return /* @__PURE__ */ jsx("div", { className: cn("h-px w-full bg-border", className) });
}
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
function DropdownActions({ actions, trigger, align = "end", className }) {
  if (!actions.length) return null;
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: trigger || /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon-sm", className: cn(className), children: /* @__PURE__ */ jsx(IconMore, { size: 16 }) }) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align, onClick: (e) => e.stopPropagation(), children: actions.map((action, i) => {
      const showSep = action.variant === "destructive" && i > 0;
      return /* @__PURE__ */ jsxs("div", { children: [
        showSep && /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxs(
          DropdownMenuItem,
          {
            onClick: action.onClick,
            disabled: action.disabled,
            className: cn("flex items-center gap-2", action.variant === "destructive" && "text-destructive focus:bg-destructive/10"),
            children: [
              action.icon,
              /* @__PURE__ */ jsx("span", { children: action.label })
            ]
          }
        )
      ] }, action.label);
    }) })
  ] });
}
function SelectCard({ options, value, onChange, columns = 2, layout = "horizontal", className }) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4"
  };
  return /* @__PURE__ */ jsx("div", { className: cn("grid gap-3", gridCols[columns], className), children: options.map((option) => {
    const isSelected = option.value === value;
    const tile = option.icon && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors",
          isSelected ? "bg-brand/12 text-brand" : "bg-surface-2 text-muted-foreground"
        ),
        children: option.icon
      }
    );
    return /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => onChange?.(option.value),
        className: cn(
          "cursor-pointer rounded-2xl border p-4 transition-all duration-150 active:scale-[0.98]",
          layout === "vertical" ? "flex flex-col items-center gap-2 text-center" : "flex items-center gap-3 text-left",
          isSelected ? "border-brand/50 bg-brand/5 ring-2 ring-brand/15" : "border-border bg-card shadow-xs hover:border-ring/50"
        ),
        children: [
          tile,
          /* @__PURE__ */ jsxs("div", { className: cn("min-w-0", layout === "vertical" ? "flex flex-col items-center gap-0.5" : "flex-1"), children: [
            /* @__PURE__ */ jsx("span", { className: "block text-[13px] font-semibold text-foreground", children: option.label }),
            option.description && /* @__PURE__ */ jsx("span", { className: cn("block text-xs font-medium", isSelected ? "text-brand/80" : "text-muted-foreground"), children: option.description })
          ] })
        ]
      },
      option.value
    );
  }) });
}
function ConfigCard({ icon: Icon, title, description, children, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("rounded-2xl border border-border bg-card p-6 shadow-xs", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-start gap-3", children: [
      Icon && /* @__PURE__ */ jsx("div", { className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10", children: /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-brand" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5 pt-0.5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[15px] font-bold text-foreground", children: title }),
        description && /* @__PURE__ */ jsx("span", { className: "text-[13px] font-medium text-muted-foreground", children: description })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children })
  ] });
}
function ModalConfirm({
  open,
  onClose,
  onConfirm,
  title,
  description,
  children,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  confirmIcon,
  variant = "primary",
  isLoading = false
}) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: title }),
      description && /* @__PURE__ */ jsx(DialogDescription, { children: description })
    ] }),
    children && /* @__PURE__ */ jsx("div", { className: "py-1", children }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      !isLoading && /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "px-6", onClick: onClose, children: cancelLabel }),
      /* @__PURE__ */ jsxs(Button, { variant, className: "px-8", onClick: onConfirm, loading: isLoading, children: [
        !isLoading && confirmIcon,
        isLoading ? "Processando..." : confirmLabel
      ] })
    ] })
  ] }) });
}
function ModalDelete(props) {
  const {
    open,
    onClose,
    onConfirm,
    title = "Confirma exclus\xE3o?",
    description = "Esta a\xE7\xE3o n\xE3o pode ser desfeita.",
    confirmLabel = "Excluir",
    cancelLabel = "Cancelar",
    isLoading = false,
    icon = /* @__PURE__ */ jsx(IconTrash, { size: 15 })
  } = props;
  const mode = "mode" in props ? props.mode : "simple";
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (!open) {
      setChecked(false);
      setInputValue("");
    }
  }, [open]);
  const isConfirmed = (() => {
    if (!mode || mode === "simple") return true;
    if (mode === "checkbox") return checked;
    if (mode === "input") {
      const confirmText = "confirmText" in props ? props.confirmText : "";
      return inputValue === confirmText;
    }
    return true;
  })();
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx(DialogDescription, { children: description })
    ] }),
    mode === "checkbox" && /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(
      Checkbox,
      {
        label: "checkboxLabel" in props && props.checkboxLabel ? props.checkboxLabel : "Entendi que esta a\xE7\xE3o n\xE3o pode ser desfeita",
        checked,
        onChange: (e) => setChecked(e.target.checked)
      }
    ) }),
    mode === "input" && /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(
      Input,
      {
        label: `Digite "${"confirmText" in props ? props.confirmText : ""}" para confirmar`,
        placeholder: "inputPlaceholder" in props ? props.inputPlaceholder : "",
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value)
      }
    ) }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      !isLoading && /* @__PURE__ */ jsx(Button, { variant: "secondary", className: "px-6", onClick: onClose, children: cancelLabel }),
      /* @__PURE__ */ jsxs(Button, { variant: "destructive", className: "px-8", onClick: onConfirm, loading: isLoading, disabled: !isConfirmed, children: [
        !isLoading && icon,
        isLoading ? "Processando..." : confirmLabel
      ] })
    ] })
  ] }) });
}
function ScrollFade({ children, className, fadeHeight = 60, position = "bottom" }) {
  const ref = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    setShowTop(scrollTop > 10);
    setShowBottom(scrollHeight - scrollTop - clientHeight > 10);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check, { passive: true });
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", check);
      observer.disconnect();
    };
  }, [check]);
  const showTopFade = (position === "top" || position === "both") && showTop;
  const showBottomFade = (position === "bottom" || position === "both") && showBottom;
  const fadeStyle = (direction) => ({
    height: fadeHeight,
    background: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, var(--card), transparent)`,
    mask: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, black, transparent)`,
    WebkitMask: `linear-gradient(to ${direction === "top" ? "bottom" : "top"}, black, transparent)`
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-0 flex-1", children: [
    showTopFade && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-0 right-0 top-0 z-10", style: fadeStyle("top") }),
    /* @__PURE__ */ jsx("div", { ref, className: cn("h-full overflow-y-auto", className), children }),
    showBottomFade && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 right-0 z-10", style: fadeStyle("bottom") })
  ] });
}
function SheetEntity({
  open,
  onClose,
  title,
  description,
  headerExtra,
  children,
  footer,
  submitLabel = "Salvar",
  cancelLabel = "Cancelar",
  onSubmit,
  isLoading,
  size = "default",
  contentClassName
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 200);
      return () => clearTimeout(timer);
    }
  }, [open]);
  useEffect(() => {
    if (!mounted || !open) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [mounted, open]);
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);
  if (!mounted) return null;
  return createPortal(
    // stopPropagation: aberto de dentro de uma row clicável, cliques no
    // painel não podem vazar pro onClick da linha (portal preserva bubbling
    // na árvore React).
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity duration-200", visible ? "opacity-100" : "opacity-0"),
          onClick: onClose
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "absolute bottom-0 right-0 top-0 flex w-full flex-col border-l border-border bg-card shadow-2xl shadow-black/25",
            "transition-transform duration-200 ease-out",
            size === "wide" ? "sm:max-w-3xl" : "sm:max-w-md",
            visible ? "translate-x-0" : "translate-x-full"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative shrink-0 border-b border-border px-6 pb-4 pr-14 pt-6", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold leading-tight text-foreground", children: title }),
              description && /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-[13px] font-medium leading-snug text-muted-foreground", children: description }),
              headerExtra && /* @__PURE__ */ jsx("div", { className: "mt-3", children: headerExtra }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  "aria-label": "Fechar",
                  className: "absolute right-4 top-4 flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
                  children: /* @__PURE__ */ jsx(IconClose, { size: 15 })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(ScrollFade, { position: "both", className: cn("px-6 py-6", contentClassName), children }),
            (footer || onSubmit) && /* @__PURE__ */ jsx("div", { className: "shrink-0 border-t border-border px-6 py-4", children: footer || /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              !isLoading && /* @__PURE__ */ jsx(Button, { onClick: onClose, variant: "secondary", className: "flex-1", children: cancelLabel }),
              /* @__PURE__ */ jsx(Button, { onClick: onSubmit, variant: "primary", className: "flex-1", loading: isLoading, children: isLoading ? "Salvando..." : submitLabel })
            ] }) })
          ]
        }
      )
    ] }),
    document.body
  );
}
function MultiSelect({ label, options, value, onChange, placeholder, addLabel = "Adicionar", className }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const toggle = (val) => onChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val]);
  const remove = (val) => onChange(value.filter((v) => v !== val));
  const updateCoords = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCoords({ top: rect.bottom + 4, left: rect.left, width: rect.width });
  };
  useEffect(() => {
    if (!open) return;
    updateCoords();
    const handleClick = (e) => {
      const t = e.target;
      if (!triggerRef.current?.contains(t) && !listRef.current?.contains(t)) setOpen(false);
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    window.addEventListener("scroll", updateCoords, true);
    window.addEventListener("resize", updateCoords);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
      window.removeEventListener("scroll", updateCoords, true);
      window.removeEventListener("resize", updateCoords);
    };
  }, [open]);
  const selectedOptions = value.map((v) => options.find((o) => o.value === v)).filter(Boolean);
  const getContainer = () => {
    const radix = triggerRef.current?.closest("[data-radix-portal]");
    return radix || document.body;
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
    /* @__PURE__ */ jsxs("div", { ref: triggerRef, className: "flex flex-wrap items-center gap-1.5", children: [
      selectedOptions.map((opt) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 rounded-full border border-border bg-card py-1 pl-1 pr-2 shadow-xs", children: [
        /* @__PURE__ */ jsx(Avatar, { src: opt.image, name: opt.label, size: 20 }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-foreground", children: opt.label }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => remove(opt.value),
            className: "flex size-4 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive",
            children: /* @__PURE__ */ jsx(IconClose, { size: 10 })
          }
        )
      ] }, opt.value)),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            updateCoords();
            setOpen((p) => !p);
          },
          className: "flex cursor-pointer items-center gap-1 rounded-full border border-dashed border-border px-2.5 py-1 text-muted-foreground transition-colors hover:border-ring/60 hover:text-foreground",
          children: [
            /* @__PURE__ */ jsx(IconPlus, { size: 11 }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold", children: addLabel })
          ]
        }
      )
    ] }),
    value.length === 0 && placeholder && /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-muted-foreground/80", children: placeholder }),
    open && createPortal(
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref: listRef,
          "data-ds-portal": "multiselect",
          style: { top: coords.top, left: coords.left, width: Math.max(coords.width, 230) },
          className: "fixed z-[100] max-h-60 overflow-y-auto rounded-xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
          children: [
            options.map((opt) => {
              const selected = value.includes(opt.value);
              return /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => toggle(opt.value),
                  className: "flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-foreground/[0.05]",
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: cn(
                          "flex size-4 shrink-0 items-center justify-center rounded-[5px] border transition-all",
                          selected ? "border-brand bg-brand text-white" : "border-border bg-card"
                        ),
                        children: selected && /* @__PURE__ */ jsx(IconCheck, { size: 10 })
                      }
                    ),
                    /* @__PURE__ */ jsx(Avatar, { src: opt.image, name: opt.label, size: 24 }),
                    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "block truncate text-[13px] font-semibold text-foreground", children: opt.label }),
                      opt.description && /* @__PURE__ */ jsx("span", { className: "block truncate text-xs font-medium text-muted-foreground", children: opt.description })
                    ] })
                  ]
                },
                opt.value
              );
            }),
            options.length === 0 && /* @__PURE__ */ jsx("div", { className: "px-4 py-3 text-center text-[13px] text-muted-foreground", children: "Nenhuma op\xE7\xE3o" })
          ]
        }
      ),
      getContainer()
    )
  ] });
}
function TimeInput({ className, label, ...props }) {
  const input = /* @__PURE__ */ jsx("input", { type: "time", className: cn(fieldClass, "cursor-pointer", className), ...props });
  if (!label) return input;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
    input
  ] });
}
function ImageWithZoom({ src, fallbackSrc, fallbackClassName, width, height, className, onLoad, onError, isDisabled }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isFallback, setIsFallback] = useState(false);
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const portalContainer = useMemo(() => {
    const el = document.createElement("div");
    el.className = "image-zoom-portal";
    return el;
  }, []);
  useEffect(() => {
    document.body.appendChild(portalContainer);
    return () => {
      document.body.removeChild(portalContainer);
    };
  }, [portalContainer]);
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  useEffect(() => {
    setCurrentSrc(src);
    setIsFallback(false);
  }, [src]);
  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setIsFallback(true);
    }
    onError?.();
  };
  if (isDisabled) {
    return /* @__PURE__ */ jsx("img", { src: currentSrc, alt: "Imagem", width, height, className: cn(className, isFallback && fallbackClassName), onLoad, onError: handleError });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: currentSrc,
        alt: "Imagem",
        width,
        height,
        className: cn("cursor-zoom-in", className, isFallback && fallbackClassName),
        onLoad,
        onError: handleError,
        onClick: () => {
          setOpen(true);
          setScale(1);
          setTranslate({ x: 0, y: 0 });
        }
      }
    ),
    open && createPortal(
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm",
          onWheel: (e) => e.preventDefault(),
          onMouseUp: () => setDragging(false),
          onMouseLeave: () => setDragging(false),
          onClick: () => {
            setOpen(false);
            setScale(1);
            setTranslate({ x: 0, y: 0 });
          },
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: currentSrc,
                alt: "Imagem ampliada",
                onError: handleError,
                className: "max-h-[90vh] max-w-[90vw] select-none rounded-xl",
                onClick: (e) => e.stopPropagation(),
                onWheel: (e) => {
                  e.preventDefault();
                  const delta = -e.deltaY * 15e-4;
                  setScale((prev) => {
                    const next = Math.min(4, Math.max(1, prev + delta));
                    if (next === 1) setTranslate({ x: 0, y: 0 });
                    return Number(next.toFixed(3));
                  });
                },
                onMouseDown: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragging(true);
                  dragStart.current = { x: e.clientX, y: e.clientY };
                  translateStart.current = { ...translate };
                },
                onMouseMove: (e) => {
                  if (!dragging || scale === 1) return;
                  const dx = e.clientX - dragStart.current.x;
                  const dy = e.clientY - dragStart.current.y;
                  setTranslate({ x: translateStart.current.x + dx, y: translateStart.current.y + dy });
                },
                onDoubleClick: (e) => {
                  e.stopPropagation();
                  if (scale > 1) {
                    setScale(1);
                    setTranslate({ x: 0, y: 0 });
                  } else {
                    setScale(2);
                  }
                },
                style: {
                  transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`,
                  transformOrigin: "center",
                  cursor: scale > 1 ? dragging ? "grabbing" : "grab" : "zoom-in",
                  transition: dragging ? "none" : "transform 120ms ease-out"
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute bottom-6 left-6 flex w-max select-none flex-col gap-2 rounded-2xl bg-black/50 px-3 py-3 text-[11px] font-medium text-neutral-300 shadow-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(IconCursorClick, { size: 15 }),
                /* @__PURE__ */ jsx("span", { children: "Duplo clique para aproximar ou resetar" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(IconMouse, { size: 15 }),
                /* @__PURE__ */ jsx("span", { children: "Use o scroll para zoom suave" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(IconHandGrab, { size: 15 }),
                /* @__PURE__ */ jsx("span", { children: "Arraste a imagem para mover" })
              ] })
            ] })
          ]
        }
      ),
      portalContainer
    )
  ] });
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      locale: ptBR,
      className: cn("group/calendar p-3 [--cell-size:--spacing(8)]", className),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("pt-BR", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
        button_previous: cn(
          "flex size-(--cell-size) cursor-pointer select-none items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          "flex size-(--cell-size) cursor-pointer select-none items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
        dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
        dropdown_root: cn("relative rounded-md border border-border shadow-xs has-focus:ring-2 has-focus:ring-brand/25", defaultClassNames.dropdown_root),
        dropdown: cn("absolute inset-0 bg-popover opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-semibold text-foreground",
          captionLayout === "label" ? "text-[13px]" : "flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-[13px] [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn("flex-1 select-none rounded-md text-[0.8rem] font-medium text-muted-foreground", defaultClassNames.weekday),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        today: cn("rounded-lg bg-surface-2 text-foreground data-[selected=true]:rounded-lg", defaultClassNames.today),
        outside: cn("text-muted-foreground/50 aria-selected:text-muted-foreground", defaultClassNames.outside),
        disabled: cn("text-muted-foreground opacity-40", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center", defaultClassNames.day),
        ...classNames
      },
      components: {
        Root: ({ className: rootClassName, rootRef, ...rootProps }) => /* @__PURE__ */ jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn(rootClassName), ...rootProps }),
        Chevron: ({ className: chevronClassName, orientation, ...chevronProps }) => {
          if (orientation === "left") return /* @__PURE__ */ jsx(IconChevronLeft, { className: cn("size-3.5", chevronClassName), ...chevronProps });
          if (orientation === "right") return /* @__PURE__ */ jsx(IconChevronRight, { className: cn("size-3.5", chevronClassName), ...chevronProps });
          return /* @__PURE__ */ jsx(IconChevronDown, { className: cn("size-3.5", chevronClassName), ...chevronProps });
        },
        DayButton: CalendarDayButton,
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: "button",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      className: cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) cursor-pointer select-none flex-col items-center justify-center gap-1 rounded-lg text-[13px] font-medium leading-none text-foreground transition-colors",
        "hover:bg-foreground/[0.06]",
        "data-[selected-single=true]:bg-brand data-[selected-single=true]:font-semibold data-[selected-single=true]:text-white",
        className
      ),
      ...props
    }
  );
}
function getPortalContainer(trigger) {
  if (!trigger) return document.body;
  const radixPortal = trigger.closest("[data-radix-portal]");
  if (radixPortal) return radixPortal;
  return document.body;
}
function DatePicker({ label, value, onChange, placeholder = "Selecione uma data", error, disabled, clearable = true, className, minDate, maxDate }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const calRef = useRef(null);
  const formatted = value ? value.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" }) : "";
  const updateCoords = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCoords({ top: rect.bottom + 4, left: rect.left });
  };
  useEffect(() => {
    if (!open) return;
    updateCoords();
    const handleClick = (e) => {
      const t = e.target;
      if (!triggerRef.current?.contains(t) && !calRef.current?.contains(t)) setOpen(false);
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleScroll = () => updateCoords();
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [open]);
  return /* @__PURE__ */ jsxs("div", { className: cn("flex w-full flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        ref: triggerRef,
        type: "button",
        disabled,
        onClick: () => {
          updateCoords();
          setOpen((p) => !p);
        },
        className: cn(
          fieldClass,
          "flex cursor-pointer items-center gap-2 text-left",
          open && "border-brand ring-2 ring-brand/25",
          error && "border-destructive focus:border-destructive focus:ring-destructive/20",
          !value && "text-muted-foreground/80"
        ),
        children: [
          /* @__PURE__ */ jsx(IconCalendar, { size: 15, className: "shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children: formatted || placeholder }),
          value && clearable && /* @__PURE__ */ jsx(
            "span",
            {
              role: "button",
              onClick: (e) => {
                e.stopPropagation();
                onChange?.(void 0);
              },
              className: "shrink-0 text-muted-foreground transition-colors hover:text-foreground",
              children: /* @__PURE__ */ jsx(IconClose, { size: 13 })
            }
          )
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-destructive", children: error }),
    open && createPortal(
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: calRef,
          "data-ds-portal": "datepicker",
          style: { top: coords.top, left: coords.left },
          className: "fixed z-[100] overflow-hidden rounded-2xl border border-border bg-popover p-1 shadow-xl shadow-black/5 animate-slide-up dark:shadow-black/30",
          children: /* @__PURE__ */ jsx(
            Calendar,
            {
              mode: "single",
              selected: value,
              onSelect: (date) => {
                onChange?.(date);
                setOpen(false);
              },
              disabled: (date) => {
                if (minDate && date < minDate) return true;
                if (maxDate && date > maxDate) return true;
                return false;
              }
            }
          )
        }
      ),
      getPortalContainer(triggerRef.current)
    )
  ] });
}
function Toaster(props) {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      position: "bottom-center",
      gutter: 8,
      toastOptions: {
        duration: 3500,
        style: {
          background: "var(--card)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          boxShadow: "0 12px 32px -8px rgb(0 0 0 / 0.18)",
          fontSize: "13px",
          fontWeight: 600,
          padding: "10px 14px"
        },
        success: {
          iconTheme: { primary: "var(--success)", secondary: "white" }
        },
        error: {
          iconTheme: { primary: "var(--destructive)", secondary: "white" }
        }
      },
      ...props
    }
  );
}

export { AppShell, Avatar, Badge, BarList, Button, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, ComboBox, ConfigCard, DataTable, DatePicker, Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownActions, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, EmptyState, FaceAvatar, HeaderBar, IconTile, ImageWithZoom, Input, MetricCard, ModalConfirm, ModalDelete, MultiSelect, NativeSelect, PageShell, PaginationBar, PlatformRail, ScrollFade, SearchInput, SegmentedControl, Select, SelectCard, Separator2 as Separator, SheetEntity, SidebarNav, Skeleton, SkeletonForm, SkeletonTable, SkeletonText, StatusDot, Switch, Tabs, TagsInput, Text, TextCopy, Textarea, ThemeToggle, TimeInput, Timeline, Toaster, Tooltip, badgeVariants, buttonVariants, fieldClass, textVariantMap, useShell };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map