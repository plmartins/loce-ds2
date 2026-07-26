import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { IconArrowLeft } from "../icons";

export type PageShellProps = {
    title: ReactNode;
    description?: ReactNode;
    /** Ações do topo (botões primários da página). */
    actions?: ReactNode;
    onBack?: () => void;
    children: ReactNode;
    /** Largura máxima do conteúdo. */
    size?: "default" | "wide" | "full";
    className?: string;
};

const SIZE_CLASS = {
    default: "max-w-6xl",
    wide: "max-w-[1600px]",
    full: "max-w-none",
} as const;

export function PageShell({ title, description, actions, onBack, children, size = "default", className }: PageShellProps) {
    return (
        <div className={cn("mx-auto flex w-full flex-1 flex-col gap-5 p-4 md:p-6", SIZE_CLASS[size], className)}>
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                    {onBack && (
                        <button
                            onClick={onBack}
                            className="mt-0.5 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
                            aria-label="Voltar"
                        >
                            <IconArrowLeft size={17} />
                        </button>
                    )}
                    <div className="min-w-0">
                        <h1 className="truncate text-lg font-bold leading-tight md:text-xl">{title}</h1>
                        {description && <p className="mt-0.5 text-[13px] text-muted-foreground">{description}</p>}
                    </div>
                </div>
                {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
            </div>
            {children}
        </div>
    );
}
