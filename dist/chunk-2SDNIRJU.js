import { Tooltip } from './chunk-FKV5GFB4.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconPin } from './chunk-FZDTFBIK.js';
import { IconLock } from './chunk-2EBGWPVE.js';
import { IconChevronRight } from './chunk-RGEIMOMI.js';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

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
  accordion = true,
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
          const groupLocked = item.subItems.length > 0 && item.subItems.every((sub) => sub.locked);
          const groupOpen = (!accordion || openGroup === item.label) && open && !groupLocked;
          const singleChild = item.subItems.length === 1;
          if (groupLocked) {
            return /* @__PURE__ */ jsx(
              "span",
              {
                "aria-disabled": true,
                className: "relative flex h-10 w-full cursor-default items-center rounded-xl px-4 text-foreground/35",
                children: /* @__PURE__ */ jsx(Tooltip, { content: item.subItems[0]?.lockedHint ?? "Chega em breve", side: "right", wrap: true, children: /* @__PURE__ */ jsxs("span", { className: "inline-flex min-w-0 items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "flex size-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
                  /* @__PURE__ */ jsx(Label, { open, children: item.label }),
                  open && /* @__PURE__ */ jsx(IconLock, { size: 12, className: "ml-2 shrink-0 text-foreground/30" })
                ] }) })
              },
              item.label
            );
          }
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
                  if (open && accordion) {
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
                  /* @__PURE__ */ jsxs("span", { className: "relative flex size-5 shrink-0 items-center justify-center", children: [
                    /* @__PURE__ */ jsx(Icon, { size: 20 }),
                    !open && (() => {
                      const badge = item.subItems.find((sub) => sub.badge)?.badge;
                      return badge ? /* @__PURE__ */ jsx("span", { className: "absolute -top-2 -right-2.5 origin-top-right scale-[0.72]", children: badge }) : null;
                    })()
                  ] }),
                  /* @__PURE__ */ jsx(Label, { open, children: item.label }),
                  singleChild && item.subItems[0]?.badge && /* @__PURE__ */ jsx("span", { className: cn("ml-auto shrink-0 transition-opacity duration-150", !open && "opacity-0"), children: item.subItems[0].badge }),
                  !singleChild && accordion && /* @__PURE__ */ jsx(
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
                    return /* @__PURE__ */ jsx(
                      "span",
                      {
                        tabIndex: -1,
                        "aria-disabled": true,
                        className: "relative flex h-8 w-full cursor-default items-center whitespace-nowrap rounded-lg px-3 text-[13px] font-medium text-foreground/35",
                        children: /* @__PURE__ */ jsx(Tooltip, { content: sub.lockedHint ?? "Chega em breve", side: "right", wrap: true, children: /* @__PURE__ */ jsxs("span", { className: "inline-flex min-w-0 items-center gap-1.5", children: [
                          /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate", children: sub.label }),
                          /* @__PURE__ */ jsx(IconLock, { size: 11, className: "shrink-0 text-foreground/30" })
                        ] }) })
                      },
                      sub.endPoint
                    );
                  }
                  return /* @__PURE__ */ jsxs(
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
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate", children: sub.label }),
                        sub.badge && /* @__PURE__ */ jsx("span", { className: "ml-auto shrink-0 pl-2", children: sub.badge })
                      ]
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
          !expanded && /* @__PURE__ */ jsxs(
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

export { SidebarNav };
//# sourceMappingURL=chunk-2SDNIRJU.js.map
//# sourceMappingURL=chunk-2SDNIRJU.js.map