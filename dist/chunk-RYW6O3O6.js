import { useAvatarImage } from './chunk-JNMHNFLW.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs } from 'react/jsx-runtime';

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
function hashString(value) {
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
function FaceAvatar({ seed, glyph, src, loading, size = 32, className, title }) {
  const { imgRef, imgError, ready, onLoad, onError } = useAvatarImage(src);
  const hash = hashString(seed || "?");
  const face = FACES[hash % FACES.length];
  const eyes = (hash >> 4) % 5;
  const centerGlyph = (glyph ?? seed.replace(/[^a-zA-Z0-9]/g, "").charAt(0) ?? "?").toUpperCase() || "?";
  const wrapperClass = cn(
    "relative inline-flex shrink-0 select-none overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/10",
    className
  );
  if (loading) {
    return /* @__PURE__ */ jsx("span", { className: wrapperClass, style: { width: size, height: size }, "aria-busy": true, children: /* @__PURE__ */ jsx("span", { className: "ds-avatar-loading", "aria-hidden": true }) });
  }
  if (src && !imgError) {
    return /* @__PURE__ */ jsxs(
      "span",
      {
        title,
        className: wrapperClass,
        style: { width: size, height: size },
        children: [
          !ready && /* @__PURE__ */ jsx(
            "span",
            {
              className: "ds-avatar-loading",
              style: { "--ds-avatar-tint": face.bg },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              ref: imgRef,
              src,
              alt: title ?? "",
              width: size,
              height: size,
              decoding: "async",
              onLoad,
              onError,
              "data-loaded": ready,
              className: "ds-avatar-img absolute inset-0 size-full object-cover"
            }
          )
        ]
      }
    );
  }
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

export { FaceAvatar };
//# sourceMappingURL=chunk-RYW6O3O6.js.map
//# sourceMappingURL=chunk-RYW6O3O6.js.map