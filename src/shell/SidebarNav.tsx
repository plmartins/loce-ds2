import { useCallback, useEffect, useMemo, useRef, useState, type ComponentType, type ReactNode } from "react";
import { cn } from "../lib/utils";
import { Tooltip } from "../components/Tooltip";
import { IconChevronRight, IconLock, IconPin, type IconProps } from "../icons";

export type SidebarNavSubItem = {
    label: string;
    endPoint: string;
    /** Item visível mas indisponível: cadeado + tooltip, sem navegação. */
    locked?: boolean;
    /** Texto do tooltip do item travado (default: "Chega em breve"). */
    lockedHint?: string;
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
    /** false: todos os grupos ficam abertos de uma vez, sem sanfona (menus curtos). */
    accordion?: boolean;
    /** Slot no rodapé (acima do controle de fixar). */
    footer?: ReactNode;
    /** Chave do localStorage do pin. */
    storageKey?: string;
    className?: string;
};

const COLLAPSED_W = 68;
const EXPANDED_W = 260;
/* Tolerância antes de recolher no mouseleave: mata o flicker de passagem. */
const HOVER_CLOSE_DELAY = 220;

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
    accordion = true,
    footer,
    storageKey = "sidebar-pinned",
    className,
}: SidebarNavProps) {
    const [hoverOpen, setHoverOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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

    /* O ativo é o MELHOR match, não qualquer prefixo: um hub "/x" não pode
       acender junto do filho "/x/cupons". */
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
        (path: string) => path.replace(/\/+$/, "") === activeEndPoint && activeEndPoint !== "",
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
                /* storage indisponível: pin só não persiste */
            }
            return next;
        });
    }, [storageKey]);

    return (
        <div
            className={cn(
                "relative flex h-full select-none flex-col overflow-hidden bg-surface-1 transition-[width] duration-[250ms] ease-out",
                "border-r border-border",
                className
            )}
            style={{ width: open ? EXPANDED_W : COLLAPSED_W }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            <nav className="scrollbar-hide flex flex-1 flex-col gap-0.5 overflow-y-auto px-2 pt-3">
                {items.map((item) => {
                    const Icon = item.icon;
                    const groupActive = item.label === activeGroupLabel;
                    const groupOpen = (!accordion || openGroup === item.label) && open;
                    const singleChild = item.subItems.length === 1;

                    return (
                        <div key={item.label}>
                            <button
                                onClick={() => {
                                    // Navegação direta pula itens travados
                                    const firstNavigable = item.subItems.find((sub) => !sub.locked);
                                    // Grupo de item único navega direto: accordion de 1 filho é fricção
                                    if (singleChild && firstNavigable) {
                                        onNavigate(firstNavigable.endPoint);
                                        return;
                                    }
                                    if (open && accordion) {
                                        setOpenGroup((prev) => (prev === item.label ? "" : item.label));
                                    } else if (firstNavigable) {
                                        onNavigate(firstNavigable.endPoint);
                                    }
                                }}
                                title={!open ? item.label : undefined}
                                className={cn(
                                    "relative flex h-10 w-full cursor-pointer items-center rounded-xl px-4 transition-colors duration-150",
                                    groupActive && [
                                        "bg-brand/[0.08] font-bold text-brand",
                                        "before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-r-full before:bg-brand",
                                    ],
                                    !groupActive && "text-foreground/70 hover:bg-foreground/[0.045] hover:text-foreground"
                                )}
                            >
                                <span className="flex size-5 shrink-0 items-center justify-center">
                                    <Icon size={20} />
                                </span>
                                <Label open={open}>{item.label}</Label>
                                {!singleChild && accordion && (
                                    <IconChevronRight
                                        size={12}
                                        className={cn(
                                            "ml-auto shrink-0 transition-all duration-200 ease-out",
                                            groupOpen ? "rotate-90" : "rotate-0",
                                            groupActive ? "text-brand/70" : "text-foreground/35",
                                            !open && "opacity-0"
                                        )}
                                    />
                                )}
                            </button>

                            {/* Accordion com animação de altura via grid-rows */}
                            {!singleChild && (
                                <div
                                    className={cn(
                                        "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                                        groupOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <div className="relative ml-[30px] mt-0.5 mb-1 flex flex-col gap-px border-l border-border pl-2">
                                            {item.subItems.map((sub) => {
                                                const subActive = isSubActive(sub.endPoint);
                                                if (sub.locked) {
                                                    return (
                                                        <span
                                                            key={sub.endPoint}
                                                            tabIndex={-1}
                                                            aria-disabled
                                                            className="relative flex h-8 w-full cursor-default items-center whitespace-nowrap rounded-lg px-3 text-[13px] font-medium text-foreground/35"
                                                        >
                                                            {/* Tooltip ancorado no conteúdo: na linha inteira ele nasceria na borda da sidebar, longe do texto */}
                                                            <Tooltip content={sub.lockedHint ?? "Chega em breve"} side="right" wrap>
                                                                <span className="inline-flex min-w-0 items-center gap-1.5">
                                                                    <span className="min-w-0 truncate">{sub.label}</span>
                                                                    <IconLock size={11} className="shrink-0 text-foreground/30" />
                                                                </span>
                                                            </Tooltip>
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <button
                                                        key={sub.endPoint}
                                                        onClick={() => onNavigate(sub.endPoint)}
                                                        tabIndex={groupOpen ? 0 : -1}
                                                        className={cn(
                                                            "relative flex h-8 w-full cursor-pointer items-center truncate whitespace-nowrap rounded-lg px-3 text-[13px]",
                                                            "transition-[color,background-color,transform] duration-150",
                                                            subActive && [
                                                                "bg-brand/[0.07] font-semibold text-brand",
                                                                "before:absolute before:-left-[9px] before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-brand",
                                                            ],
                                                            !subActive &&
                                                                "font-medium text-foreground/55 hover:translate-x-[2px] hover:bg-foreground/[0.04] hover:text-foreground"
                                                        )}
                                                    >
                                                        {sub.label}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            <div className="mx-5 h-px shrink-0 bg-border/60" />

            <div className="flex shrink-0 flex-col gap-px px-2 py-2">
                {footer}
                {/* Sidebar forçada aberta (expanded) não tem o que fixar */}
                {!expanded && <button
                    onClick={togglePin}
                    title={!open ? (pinned ? "Menu fixado" : "Fixar menu") : undefined}
                    className={cn(
                        "relative flex h-10 w-full cursor-pointer items-center rounded-xl px-4 transition-colors duration-150",
                        pinned ? "bg-brand/[0.06] text-brand" : "text-foreground/70 hover:bg-foreground/[0.045] hover:text-foreground"
                    )}
                >
                    <span className="flex size-5 shrink-0 items-center justify-center">
                        <IconPin size={19} weight={pinned ? "fill" : "regular"} />
                    </span>
                    <Label open={open}>{pinned ? "Menu fixado" : "Fixar menu"}</Label>
                </button>}
            </div>
        </div>
    );
}
