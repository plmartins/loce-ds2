import { useAvatarImage } from './chunk-JNMHNFLW.js';
import { cn } from './chunk-OLJVOECQ.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

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
var SOFT = [
  "bg-[#3ba2ff]/15 text-[#0b5ed7] dark:bg-[#3ba2ff]/20 dark:text-[#7cc0ff]",
  "bg-[#a78bfa]/15 text-[#6d28d9] dark:bg-[#a78bfa]/20 dark:text-[#c4b5fd]",
  "bg-[#f472b6]/15 text-[#be185d] dark:bg-[#f472b6]/20 dark:text-[#f9a8d4]",
  "bg-[#fbbf24]/18 text-[#b45309] dark:bg-[#fbbf24]/20 dark:text-[#fcd34d]",
  "bg-[#2dd4bf]/15 text-[#0f766e] dark:bg-[#2dd4bf]/20 dark:text-[#5eead4]",
  "bg-[#4ade80]/15 text-[#15803d] dark:bg-[#4ade80]/20 dark:text-[#86efac]",
  "bg-[#818cf8]/15 text-[#4338ca] dark:bg-[#818cf8]/20 dark:text-[#a5b4fc]",
  "bg-[#fb7185]/15 text-[#be123c] dark:bg-[#fb7185]/20 dark:text-[#fda4af]"
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
function Avatar({ name, src, size = 32, className, tone = "vivid" }) {
  const { imgRef, imgError, ready, onLoad, onError } = useAvatarImage(src);
  const showImage = src && !imgError;
  const index = hashString(name ?? "?") % GRADIENTS.length;
  const fallback = tone === "soft" ? SOFT[index] : cn(GRADIENTS[index], "text-white");
  return /* @__PURE__ */ jsx(
    "span",
    {
      title: name,
      className: cn(
        "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full",
        "ring-1 ring-black/5 dark:ring-white/10",
        !showImage && fallback,
        className
      ),
      style: { width: size, height: size, fontSize: Math.max(10, Math.round(size * 0.36)) },
      children: showImage ? /* @__PURE__ */ jsxs(Fragment, { children: [
        !ready && /* @__PURE__ */ jsx("span", { className: "ds-avatar-loading", "aria-hidden": true }),
        /* @__PURE__ */ jsx(
          "img",
          {
            ref: imgRef,
            src,
            alt: name ?? "",
            decoding: "async",
            onLoad,
            onError,
            "data-loaded": ready,
            className: "ds-avatar-img absolute inset-0 size-full object-cover"
          }
        )
      ] }) : /* @__PURE__ */ jsx("span", { className: "font-bold leading-none tracking-wide", children: initialsOf(name) })
    }
  );
}

export { Avatar };
//# sourceMappingURL=chunk-ZCKHC6QB.js.map
//# sourceMappingURL=chunk-ZCKHC6QB.js.map