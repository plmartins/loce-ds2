import { useCallback, useEffect, useMemo, useState, type ComponentType, type ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconChevronRight, IconPin, type IconProps } from "../icons";

export type SidebarNavSubItem = {
    label: string;
    endPoint: string;
};

export type SidebarNavGroup = {
    icon: ComponentType<IconProps>;
    label: string;
    subItems: SidebarNavSubItem[];
};

export type SidebarNavProps = {
    /** Grupos já filtrados por permissão (o filtro é responsabilidade do app). */
    items: SidebarNavGroup[];
    /** Pathname atual (o DS não conhece o router). */
    activePath: string;
    onNavigate: (endPoint: string) => void;
    /** Força aberto (overlay mobile). */
    expanded?: boolean;
    /** Slot no rodapé (acima do controle de fixar). */
    footer?: ReactNode;
    /** Chave do localStorage do pin. */
    storageKey?: string;
    className?: string;
};

const COLLAPSED_W = 68;
const EXPANDED_W = 260;

function Label({ open, children }: { open: boolean; children: ReactNode }) {
    return (
        <span
            className="ml-3 min-w-0 truncate whitespace-nowrap pointer-events-none text-[13px] font-semibold transition-opacity duration-150"
            style={{ opacity: open ? 1 : 0 }}
        >
            {children}
        </span>
    );
}

export function SidebarNav({
    items,
    activePath,
    onNavigate,
    expanded = false,
    footer,
    storageKey = "sidebar-pinned",
    className,
}: SidebarNavProps) {
    const [hoverOpen, setHoverOpen] = useState(false);
    const [pinned, setPinned] = useState(() => {
        try {
            return localStorage.getItem(storageKey) === "true";
        } catch {
            return false;
        }
    });
    const open = expanded || hoverOpen || pinned;

    const isSubActive = useCallback(
        (path: string) => {
            const current = activePath.replace(/\/+$/, "");
            const base = path.replace(/\/+$/, "");
            return current === base || current.startsWith(`${base}/`);
        },
        [activePath]
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
                /* storage indisponível (SSR/iframe): pin só não persiste */
            }
            return next;
        });
    }, [storageKey]);

    return (
        <div
            className={cn(
                "relative flex h-full select-none flex-col overflow-hidden border-r border-border bg-background transition-[width] duration-[250ms] ease-out",
                className
            )}
            style={{ width: open ? EXPANDED_W : COLLAPSED_W }}
            onMouseEnter={() => !expanded && setHoverOpen(true)}
            onMouseLeave={() => !expanded && setHoverOpen(false)}
        >
            <nav className="scrollbar-hide flex flex-1 flex-col gap-0.5 overflow-y-auto px-2 pt-3">
                {items.map((item) => {
                    const Icon = item.icon;
                    const groupActive = item.label === activeGroupLabel;
                    const groupOpen = openGroup === item.label && open;

                    return (
                        <div key={item.label}>
                            <button
                                onClick={() => {
                                    if (open) {
                                        setOpenGroup((prev) => (prev === item.label ? "" : item.label));
                                    } else if (item.subItems[0]) {
                                        onNavigate(item.subItems[0].endPoint);
                                    }
                                }}
                                className={cn(
                                    "relative flex h-10 w-full cursor-pointer items-center rounded-xl px-4 transition-colors duration-150",
                                    groupActive && [
                                        "bg-brand/[0.08] font-bold text-brand",
                                        "before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-r-full before:bg-brand",
                                    ],
                                    !groupActive && "text-foreground/75 hover:bg-foreground/[0.04] hover:text-foreground"
                                )}
                            >
                                <span className="flex size-5 shrink-0 items-center justify-center">
                                    <Icon size={20} />
                                </span>
                                <Label open={open}>{item.label}</Label>
                                <IconChevronRight
                                    size={13}
                                    className={cn(
                                        "ml-auto shrink-0 transition-all duration-200",
                                        groupOpen ? "rotate-90" : "rotate-0",
                                        groupActive ? "text-brand" : "text-foreground/40",
                                        !open && "opacity-0"
                                    )}
                                />
                            </button>

                            {groupOpen && (
                                <div className="ml-[26px] mt-0.5 mb-1">
                                    {item.subItems.map((sub, idx) => {
                                        const subActive = isSubActive(sub.endPoint);
                                        const isLast = idx === item.subItems.length - 1;

                                        return (
                                            <div key={sub.endPoint} className="relative">
                                                {isLast ? (
                                                    <span className="pointer-events-none absolute left-0 top-0 h-1/2 w-4 rounded-bl-lg border-b-2 border-l-2 border-border" />
                                                ) : (
                                                    <>
                                                        <span className="pointer-events-none absolute left-0 top-0 bottom-0 border-l-2 border-border" />
                                                        <span className="pointer-events-none absolute left-0 top-1/2 w-4 border-b-2 border-border" />
                                                    </>
                                                )}
                                                {subActive && (
                                                    <span className="absolute left-[13px] top-1/2 z-10 size-1.5 -translate-y-1/2 rounded-full bg-brand ring-2 ring-brand/20" />
                                                )}
                                                <button
                                                    onClick={() => onNavigate(sub.endPoint)}
                                                    className={cn(
                                                        "relative flex h-8 w-full cursor-pointer items-center truncate whitespace-nowrap rounded-xl pl-7 pr-4 text-[13px] transition-colors duration-150",
                                                        subActive && "font-semibold text-brand",
                                                        !subActive && "font-medium text-foreground/50 hover:bg-foreground/[0.04] hover:text-foreground"
                                                    )}
                                                >
                                                    {sub.label}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className="mx-5 h-px shrink-0 bg-border/60" />

            <div className="flex shrink-0 flex-col gap-px px-2 py-2">
                {footer}
                <button
                    onClick={togglePin}
                    className={cn(
                        "relative flex h-10 w-full cursor-pointer items-center rounded-xl px-4 transition-colors duration-150",
                        pinned ? "bg-brand/[0.06] text-brand" : "text-foreground/75 hover:bg-foreground/[0.04] hover:text-foreground"
                    )}
                >
                    <span className="flex size-5 shrink-0 items-center justify-center">
                        <IconPin size={19} weight={pinned ? "fill" : "regular"} />
                    </span>
                    <Label open={open}>{pinned ? "Menu fixado" : "Fixar menu"}</Label>
                </button>
            </div>
        </div>
    );
}
