import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './chunk-4D3N52P7.js';
import { IconSort } from './chunk-MEPTWY7C.js';
import { IconMore } from './chunk-XN7C3OO5.js';
import { IconChevronDown } from './chunk-YFGE474N.js';
import { IconChevronUp } from './chunk-YI6FNLUZ.js';
import { cn } from './chunk-OLJVOECQ.js';
import { useState, useMemo } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

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
            /* @__PURE__ */ jsx("div", { className: "min-w-0 overflow-hidden text-right text-sm font-semibold [overflow-wrap:anywhere]", children: col.render ? col.render(row[col.accessor] ?? "-", row, idx) : String(row[col.accessor] ?? "-") })
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

export { DataTable };
//# sourceMappingURL=chunk-Y3QRDHWK.js.map
//# sourceMappingURL=chunk-Y3QRDHWK.js.map