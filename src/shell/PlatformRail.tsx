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
};

const PLATFORM_META: Record<PlatformId, { label: string; icon: ComponentType<IconProps>; activeClass: string; hoverClass: string }> = {
    erp: {
        label: "Loce ERP",
        icon: IconApps,
        activeClass: "bg-platform-erp/12 text-platform-erp",
        hoverClass: "hover:bg-platform-erp/12 hover:text-platform-erp",
    },
    ecommerce: {
        label: "Loce Ecommerce",
        icon: IconCart,
        activeClass: "bg-platform-ecommerce/12 text-platform-ecommerce",
        hoverClass: "hover:bg-platform-ecommerce/12 hover:text-platform-ecommerce",
    },
    marketing: {
        label: "Loce Marketing",
        icon: IconMarketing,
        activeClass: "bg-platform-marketing/12 text-platform-marketing",
        hoverClass: "hover:bg-platform-marketing/12 hover:text-platform-marketing",
    },
    talkbia: {
        label: "Talkbia",
        icon: IconChat,
        activeClass: "bg-platform-talkbia/12 text-platform-talkbia",
        hoverClass: "hover:bg-platform-talkbia/12 hover:text-platform-talkbia",
    },
};

export type PlatformRailProps = {
    platforms: PlatformRailItem[];
    /** Logo compacta no topo do rail (ex.: marca Loce). */
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
                "relative flex size-10 items-center justify-center rounded-xl transition-all duration-150",
                item.active && cn(meta.activeClass, "shadow-[inset_0_0_0_1.5px_currentColor]"),
                !item.active && available && cn("text-muted-foreground hover:scale-[1.06]", meta.hoverClass),
                !available && "text-muted-foreground/40"
            )}
        >
            <Icon size={20} />
            {!available && (
                <span className="absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-surface-3 text-muted-foreground ring-2 ring-surface-1">
                    <IconLock size={9} />
                </span>
            )}
        </span>
    );

    if (available && item.href && !item.active) {
        return (
            <a href={item.href} title={meta.label} aria-label={meta.label} className="cursor-pointer">
                {tile}
            </a>
        );
    }
    return (
        <span title={available ? meta.label : `${meta.label} · em breve`} aria-label={meta.label}>
            {tile}
        </span>
    );
}

export function PlatformRail({ platforms, logo, footer, className }: PlatformRailProps) {
    return (
        <div
            className={cn(
                "flex h-full w-[56px] shrink-0 flex-col items-center gap-1 border-r border-border bg-surface-1 py-3",
                className
            )}
        >
            {logo && <div className="mb-2 flex size-10 items-center justify-center">{logo}</div>}
            <nav className="flex flex-col items-center gap-1.5" aria-label="Plataformas Loce">
                {platforms.map((p) => (
                    <RailTile key={p.id} item={p} />
                ))}
            </nav>
            <div className="mt-auto flex flex-col items-center gap-1.5">{footer}</div>
        </div>
    );
}
