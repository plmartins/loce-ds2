import { SearchInput } from './chunk-H46SCW6L.js';
import { Skeleton } from './chunk-Q7J24MVH.js';
import { cn } from './chunk-OLJVOECQ.js';
import { IconSmiley } from './chunk-Y65VDN7U.js';
import { IconPaw } from './chunk-QZUAW5YY.js';
import { IconPlane } from './chunk-GP25EMLK.js';
import { IconLightbulb } from './chunk-OSYHMKKY.js';
import { IconHash } from './chunk-CCNX66QH.js';
import { IconHistory } from './chunk-ESNOUWAP.js';
import { IconFood } from './chunk-MQ7APEQE.js';
import { IconHand } from './chunk-WGZ373X4.js';
import { IconFlag } from './chunk-FVC6DDLW.js';
import { IconBall } from './chunk-NHNAC23Z.js';
import { useState, useRef, useEffect, useMemo } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

var CATEGORY_ICONS = { 0: IconSmiley, 1: IconHand, 3: IconPaw, 4: IconFood, 5: IconPlane, 6: IconBall, 7: IconLightbulb, 8: IconHash, 9: IconFlag };
var RECENT_MAX = 24;
var norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
var cache = null;
var pending = null;
var loadData = () => {
  if (cache) return Promise.resolve(cache);
  pending ??= import('./components/emoji-data.js').then((m) => cache = { rows: m.EMOJI_DATA, groups: m.EMOJI_GROUPS });
  return pending;
};
var readRecent = (key) => {
  try {
    const raw = localStorage.getItem(key);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list.filter((e) => typeof e === "string").slice(0, RECENT_MAX) : [];
  } catch {
    return [];
  }
};
var writeRecent = (key, list) => {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch {
  }
};
function EmojiPicker({ onSelect, onEscape, autoFocus = true, recentKey = "loce:emoji-recent", className }) {
  const [data, setData] = useState(cache);
  const [query, setQuery] = useState("");
  const [recent] = useState(() => readRecent(recentKey));
  const [active, setActive] = useState("recent");
  const scrollRef = useRef(null);
  const sectionRefs = useRef({});
  const spyLocked = useRef(false);
  useEffect(() => {
    let alive = true;
    if (!data) loadData().then((d) => alive && setData(d));
    return () => {
      alive = false;
    };
  }, [data]);
  const byEmoji = useMemo(() => new Map((data?.rows ?? []).map((r) => [r[0], r])), [data]);
  const sections = useMemo(() => {
    if (!data) return [];
    const q = norm(query);
    if (q) {
      const terms = q.split(/\s+/).filter(Boolean);
      const rows = data.rows.filter((r) => {
        const hay = ` ${r[3]} `;
        return terms.every((t) => hay.includes(` ${t}`));
      });
      return [{ key: "results", title: rows.length ? "Resultados" : "", rows }];
    }
    const out = [];
    const recentRows = recent.map((e) => byEmoji.get(e)).filter((r) => !!r);
    if (recentRows.length) out.push({ key: "recent", title: "Recentes", rows: recentRows });
    const grouped = /* @__PURE__ */ new Map();
    for (const r of data.rows) {
      const list = grouped.get(r[1]);
      if (list) list.push(r);
      else grouped.set(r[1], [r]);
    }
    for (const [g, rows] of grouped) out.push({ key: String(g), title: data.groups[g] ?? "", rows });
    return out;
  }, [data, query, recent, byEmoji]);
  const tabs = useMemo(() => {
    const list = [];
    if (recent.length) list.push({ key: "recent", title: "Recentes", Icon: IconHistory });
    for (const g of Object.keys(CATEGORY_ICONS).map(Number)) list.push({ key: String(g), title: data?.groups[g] ?? "", Icon: CATEGORY_ICONS[g] });
    return list;
  }, [recent.length, data]);
  useEffect(() => {
    if (!tabs.some((t) => t.key === active)) setActive(tabs[0]?.key ?? "0");
  }, [tabs, active]);
  const persistedRecent = useRef(recent);
  const pick = (emoji) => {
    const next = [emoji, ...persistedRecent.current.filter((e) => e !== emoji)].slice(0, RECENT_MAX);
    persistedRecent.current = next;
    writeRecent(recentKey, next);
    onSelect(emoji);
  };
  const jumpTo = (key) => {
    setActive(key);
    const el = sectionRefs.current[key];
    const scroller = scrollRef.current;
    if (!el || !scroller) return;
    spyLocked.current = true;
    scroller.scrollTo({ top: el.offsetTop - scroller.offsetTop, behavior: "smooth" });
    window.setTimeout(() => {
      spyLocked.current = false;
    }, 450);
  };
  const onScroll = () => {
    if (spyLocked.current || query) return;
    const scroller = scrollRef.current;
    if (!scroller) return;
    const top = scroller.scrollTop + 12;
    let current = sections[0]?.key;
    for (const s of sections) {
      const el = sectionRefs.current[s.key];
      if (el && el.offsetTop - scroller.offsetTop <= top) current = s.key;
    }
    if (current && current !== active) setActive(current);
  };
  const onSearchKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      if (query) setQuery("");
      else onEscape?.();
    }
    if (e.key === "Enter" && query) {
      const first = sections[0]?.rows[0];
      if (first) {
        e.preventDefault();
        pick(first[0]);
      }
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "dialog",
      "aria-label": "Escolher emoji",
      onKeyDown: (e) => {
        if (e.key === "Escape" && e.target === e.currentTarget) onEscape?.();
      },
      className: cn("flex h-[380px] w-[328px] max-w-[calc(100vw-16px)] flex-col overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-lg", className),
      children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 pb-1.5", children: /* @__PURE__ */ jsx(
          SearchInput,
          {
            autoFocus,
            placeholder: "Buscar emoji",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            onClear: () => setQuery(""),
            onKeyDown: onSearchKeyDown,
            autoComplete: "off"
          }
        ) }),
        !query && /* @__PURE__ */ jsx("div", { role: "tablist", "aria-label": "Categorias", className: "flex items-center justify-between px-2 pb-1", children: tabs.map(({ key, title, Icon }) => /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": active === key,
            "aria-label": title,
            title,
            onClick: () => jumpTo(key),
            className: cn(
              "relative flex size-7 cursor-pointer items-center justify-center rounded-lg transition-colors duration-150",
              active === key ? "text-brand" : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ jsx(Icon, { size: 16 }),
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: cn("absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand transition-[opacity,transform] duration-150", active === key ? "scale-x-100 opacity-100" : "scale-x-50 opacity-0") })
            ]
          },
          key
        )) }),
        /* @__PURE__ */ jsxs("div", { ref: scrollRef, onScroll, className: "ds-emoji-fade min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 pb-2", children: [
          !data && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-8 gap-0.5 pt-1", children: Array.from({ length: 48 }).map((_, i) => /* @__PURE__ */ jsx(Skeleton, { className: "m-1 size-7 rounded-full" }, i)) }),
          data && sections.length === 1 && sections[0].rows.length === 0 && /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-1 text-center", children: [
            /* @__PURE__ */ jsx(IconSmiley, { size: 22, className: "text-muted-foreground/60" }),
            /* @__PURE__ */ jsxs("span", { className: "text-[13px] font-semibold text-foreground/80", children: [
              "Nenhum emoji para \u201C",
              query.trim(),
              "\u201D"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[12px] font-medium text-muted-foreground", children: "Tente outra palavra, em portugu\xEAs ou ingl\xEAs." })
          ] }),
          sections.map((s) => /* @__PURE__ */ jsxs(
            "section",
            {
              ref: (el) => {
                sectionRefs.current[s.key] = el;
              },
              "aria-label": s.title || void 0,
              className: "[content-visibility:auto] [contain-intrinsic-size:auto_200px]",
              children: [
                s.title && /* @__PURE__ */ jsx("h4", { className: "sticky top-0 z-10 bg-card/95 px-1 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-sm", children: s.title }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-8", children: s.rows.map((r) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    title: r[2],
                    "aria-label": r[2],
                    onClick: () => pick(r[0]),
                    className: "ds-emoji-glyph flex size-9 cursor-pointer items-center justify-center rounded-lg text-[22px] leading-none transition-[background-color,transform] duration-150 ease-out hover:bg-surface-2 hover:scale-110 active:scale-95",
                    children: r[0]
                  },
                  r[0]
                )) })
              ]
            },
            s.key
          ))
        ] }, query ? "search" : "browse")
      ]
    }
  );
}

export { EmojiPicker };
//# sourceMappingURL=chunk-MRKJJFWV.js.map
//# sourceMappingURL=chunk-MRKJJFWV.js.map