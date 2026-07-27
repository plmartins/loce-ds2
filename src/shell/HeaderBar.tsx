import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { useShell } from "./shell-context";
import { IconMenu } from "../icons";

export type HeaderBarProps = {
    /** Lado esquerdo (logo, seletor de loja, breadcrumb...). */
    left?: ReactNode;
    /** Lado direito (alertas, ajuda, menu do usuário...). */
    right?: ReactNode;
    className?: string;
};

export function HeaderBar({ left, right, className }: HeaderBarProps) {
    const { setMobileSidebarOpen } = useShell();

    return (
        <header
            className={cn(
                "flex h-12 shrink-0 items-center justify-between gap-2 border-b border-border/70 bg-background/75 pl-3 pr-2 backdrop-blur-md md:gap-3 md:pl-5 md:pr-4",
                className
            )}
        >
            <div className="flex min-w-0 items-center gap-3 md:gap-4">
                <button
                    onClick={() => setMobileSidebarOpen(true)}
                    className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-foreground/75 hover:bg-foreground/[0.05] md:hidden"
                    aria-label="Abrir menu"
                >
                    <IconMenu size={18} />
                </button>
                {left}
            </div>
            <div className="flex min-w-0 items-center gap-1 md:gap-2">{right}</div>
        </header>
    );
}
