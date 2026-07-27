import type { ComponentType, ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconApps, IconCart, IconChat, IconLock, IconMarketing, type IconProps } from "../icons";

export type PlatformId = "erp" | "ecommerce" | "marketing" | "talkbia";

export type PlatformRailItem = {
    id: PlatformId;
    /** URL da plataforma (troca por navegação completa; a sessão viaja no cookie .loce.io). */
    href?: string;
    available?: boolean;
    active?: boolean;
    /** Logo real da plataforma (imagem preenche o tile). Sem ela, cai no tile de gradiente + glifo. */
    logoSrc?: string;
};

/*
 * Cada plataforma é um tile-logo (gradiente na cor da marca + glifo branco),
 * como um dock de apps. Classes 100% estáticas por causa do scan do Tailwind.
 */
const PLATFORM_META: Record<
    PlatformId,
    { label: string; icon: ComponentType<IconProps>; tileClass: string; glowClass: string }
> = {
    erp: {
        label: "Loce ERP",
        icon: IconApps,
        tileClass: "bg-gradient-to-br from-[#3ba2ff] to-[#0864d8]",
        glowClass: "shadow-[0_2px_14px_rgba(8,130,255,0.5)]",
    },
    ecommerce: {
        label: "Loce Ecommerce",
        icon: IconCart,
        tileClass: "bg-gradient-to-br from-[#12d68d] to-[#079457]",
        glowClass: "shadow-[0_2px_14px_rgba(8,174,105,0.5)]",
    },
    marketing: {
        label: "Loce Marketing",
        icon: IconMarketing,
        tileClass: "bg-gradient-to-br from-[#ff64a5] to-[#d61668]",
        glowClass: "shadow-[0_2px_14px_rgba(238,42,123,0.5)]",
    },
    talkbia: {
        label: "Talkbia",
        icon: IconChat,
        tileClass: "bg-gradient-to-br from-[#a78bfa] to-[#6d28d9]",
        glowClass: "shadow-[0_2px_14px_rgba(124,58,237,0.5)]",
    },
};

export type PlatformRailProps = {
    platforms: PlatformRailItem[];
    /** Logo compacta no topo do rail. Normalmente desnecessária: o tile ativo já é a marca. */
    logo?: ReactNode;
    /** Área inferior (ThemeToggle, avatar...). */
    footer?: ReactNode;
    className?: string;
};

function RailTile({ item }: { item: PlatformRailItem }) {
    const meta = PLATFORM_META[item.id];
    const Icon = meta.icon;
    const available = item.available ?? false;

    const tile = (
        <span
            className={cn(
                "relative flex size-9 items-center justify-center overflow-visible rounded-[10px] transition-all duration-150 ease-out",
                !item.logoSrc && available && cn(meta.tileClass, "text-white"),
                !item.logoSrc && !available && "bg-surface-2 text-muted-foreground/50",
                item.active && cn(meta.glowClass, "ring-2 ring-white/25"),
                !item.active && available && "opacity-80 saturate-[0.9] group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-[1.07] group-hover:-translate-y-px group-active:scale-95"
            )}
        >
            {item.logoSrc ? (
                <img
                    src={item.logoSrc}
                    alt=""
                    className={cn(
                        "size-9 rounded-[10px] object-cover",
                        !available && "opacity-45 grayscale"
                    )}
                />
            ) : (
                <Icon size={17} />
            )}
            {!available && (
                <span className="absolute -right-1 -bottom-1 flex size-4 items-center justify-center rounded-full bg-surface-3 text-muted-foreground ring-2 ring-surface-0">
                    <IconLock size={9} />
                </span>
            )}
        </span>
    );

    // Barrinha de ativo na borda do rail, estilo dock
    const wrapped = (
        <span className="relative flex w-full justify-center py-0.5">
            <span
                className={cn(
                    "absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-foreground transition-all duration-200",
                    item.active ? "h-6 opacity-100" : "h-2 opacity-0"
                )}
            />
            {tile}
        </span>
    );

    if (available && item.href && !item.active) {
        return (
            <a href={item.href} title={meta.label} aria-label={meta.label} className="group block w-full cursor-pointer">
                {wrapped}
            </a>
        );
    }
    return (
        <span
            title={available ? meta.label : `${meta.label} · em breve`}
            aria-label={meta.label}
            className="group block w-full"
        >
            {wrapped}
        </span>
    );
}

export function PlatformRail({ platforms, logo, footer, className }: PlatformRailProps) {
    return (
        <div
            className={cn(
                "flex h-full w-[60px] shrink-0 flex-col items-center gap-1 border-r border-border bg-surface-0 py-3",
                className
            )}
        >
            {logo && <div className="mb-2 flex size-10 items-center justify-center">{logo}</div>}
            <nav className="flex w-full flex-col items-center gap-1.5" aria-label="Plataformas Loce">
                {platforms.map((p) => (
                    <RailTile key={p.id} item={p} />
                ))}
            </nav>
            <div className="mt-auto flex flex-col items-center gap-1.5">{footer}</div>
        </div>
    );
}
