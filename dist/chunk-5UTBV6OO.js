import { cn } from './chunk-OLJVOECQ.js';
import { IconUpload } from './chunk-BLURD2RW.js';
import { IconTrash } from './chunk-IMSRTD5O.js';
import { IconSpinner } from './chunk-EMHJXDPZ.js';
import { IconRefresh } from './chunk-CLLGHK5D.js';
import { useRef, useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

function ImageUpload({ label, value, onChange, uploadFn, aspect = "square", placeholder, accept = "image/*", className }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const handleFile = async (file) => {
    if (!file.type.startsWith("image/") || !uploadFn) return;
    setUploading(true);
    try {
      const result = await uploadFn(file);
      onChange(result.url);
    } catch {
    } finally {
      setUploading(false);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) handleFile(file);
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-1.5", className), children: [
    /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold text-foreground/80", children: label }),
    value ? /* @__PURE__ */ jsxs("div", { className: "flex h-24 items-center gap-3 rounded-2xl bg-surface-1 p-3 ring-1 ring-border", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: value,
          alt: label,
          className: cn("rounded-xl object-cover", aspect === "square" ? "size-16" : "h-16 w-24"),
          onError: (event) => {
            event.target.style.display = "none";
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => inputRef.current?.click(),
            className: "flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground",
            children: [
              /* @__PURE__ */ jsx(IconRefresh, { size: 13 }),
              " Trocar"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => onChange(""),
            className: "flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-destructive hover:bg-destructive/10",
            children: [
              /* @__PURE__ */ jsx(IconTrash, { size: 13 }),
              " Remover"
            ]
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => inputRef.current?.click(),
        onDragOver: (event) => {
          event.preventDefault();
          setDragOver(true);
        },
        onDragLeave: () => setDragOver(false),
        onDrop: handleDrop,
        disabled: uploading,
        className: cn(
          "group flex h-24 cursor-pointer flex-row items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-4 transition-all",
          dragOver ? "border-brand bg-brand/5 scale-[1.01]" : "border-border hover:border-muted-foreground/50 hover:bg-surface-1"
        ),
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "flex size-10 items-center justify-center rounded-2xl ring-1 transition-colors",
                dragOver ? "bg-brand/10 text-brand ring-brand/20" : "bg-surface-2 text-muted-foreground ring-border group-hover:text-foreground"
              ),
              children: uploading ? /* @__PURE__ */ jsx(IconSpinner, { size: 22, className: "animate-spin" }) : /* @__PURE__ */ jsx(IconUpload, { size: 22 })
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-start gap-0.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground/80", children: uploading ? "Enviando..." : placeholder || "Clique ou arraste uma imagem" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] text-muted-foreground", children: "PNG, JPG ou SVG" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: inputRef,
        type: "file",
        accept,
        className: "hidden",
        onChange: (event) => {
          const file = event.target.files?.[0];
          if (file) handleFile(file);
          event.target.value = "";
        }
      }
    )
  ] });
}

export { ImageUpload };
//# sourceMappingURL=chunk-5UTBV6OO.js.map
//# sourceMappingURL=chunk-5UTBV6OO.js.map