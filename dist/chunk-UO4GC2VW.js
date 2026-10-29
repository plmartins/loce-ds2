import { cn } from './chunk-OLJVOECQ.js';
import { IconWhatsapp } from './chunk-V2NNXVOB.js';
import { IconMarketing } from './chunk-5VGKQUXU.js';
import { IconLock } from './chunk-2EBGWPVE.js';
import { IconCode } from './chunk-CGFPG6MC.js';
import { IconCart } from './chunk-ACI2ZD6M.js';
import { IconChat } from './chunk-RIFMXT72.js';
import { IconApps } from './chunk-I6TTTNJ4.js';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { jsxs, jsx } from 'react/jsx-runtime';

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
  },
  grupos: {
    label: "Loce Grupos",
    description: "Ofertas, reposi\xE7\xF5es e novidades da sua loja postadas automaticamente nos seus grupos de WhatsApp.",
    icon: IconWhatsapp,
    tileClass: "bg-gradient-to-br from-[#fb923c] to-[#ea580c]",
    glowClass: "shadow-[0_2px_14px_rgba(249,115,22,0.5)]"
  },
  // Interna: só entra no rail quando o app confirma que o usuário é dev.
  dev: {
    label: "Loce Dev",
    description: "Painel interno da equipe Loce: empresas, planos, assinaturas, usu\xE1rios e suporte.",
    icon: IconCode,
    tileClass: "bg-gradient-to-br from-[#ef4444] to-[#b91c1c]",
    glowClass: "shadow-[0_2px_14px_rgba(220,38,38,0.5)]"
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
      available && item.href && !item.active && /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-brand", children: "Abre em nova aba" }),
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
  const trigger = available && item.href && !item.active ? /* @__PURE__ */ jsx(
    "a",
    {
      href: item.href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": meta.label,
      className: "group block w-full cursor-pointer",
      children: wrapped
    }
  ) : /* @__PURE__ */ jsx(
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

export { PlatformRail };
//# sourceMappingURL=chunk-UO4GC2VW.js.map
//# sourceMappingURL=chunk-UO4GC2VW.js.map