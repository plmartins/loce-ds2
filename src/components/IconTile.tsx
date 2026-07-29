import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export type IconTileTone =
    | "brand"
    | "success"
    | "warning"
    | "destructive"
    | "info"
    | "neutral"
    | "ecommerce";

export type IconTileProps = {
    tone?: IconTileTone;
    /** sm 24px (linhas densas), md 32px (cards de dropdown/lista), lg 40px (modais). */
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "circle";
    className?: string;
    children: ReactNode;
};

/* Classes estáticas por causa do scan do Tailwind. */
const TONES: Record<IconTileTone, string> = {
    brand: "bg-brand/10 text-brand",
    success: "bg-success/12 text-success",
    warning: "bg-warning/15 text-warning",
    destructive: "bg-destructive/10 text-destructive",
    info: "bg-info/12 text-info",
    neutral: "bg-surface-2 text-muted-foreground",
    ecommerce: "bg-platform-ecommerce/12 text-platform-ecommerce",
};

const SIZES: Record<NonNullable<IconTileProps["size"]>, string> = {
    sm: "size-6 rounded-md",
    md: "size-8 rounded-xl",
    lg: "size-10 rounded-xl",
};

/**
 * Tile de ícone dos cards de lista e dropdown (pendências, seletor de loja,
 * opções de importação...): um só padrão de fundo suave + ícone na cor do tom,
 * em vez de cada tela inventar o seu quadradinho.
 */
export function IconTile({ tone = "neutral", size = "md", shape = "rounded", className, children }: IconTileProps) {
    return (
        <span
            className={cn(
                "flex shrink-0 items-center justify-center",
                SIZES[size],
                shape === "circle" && "rounded-full",
                TONES[tone],
                className
            )}
        >
            {children}
        </span>
    );
}
