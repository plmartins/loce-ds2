import { cn } from "../lib/utils";

/* Tipografia utilitária: mantém a API do ds1 (variant/as) com a escala do ds2.
   Números/valores secundários pedem "description"; entidades pedem "default". */
export const textVariantMap = {
    default: "text-[13px] font-semibold text-foreground",
    supertitle: "text-2xl font-extrabold tracking-tight text-foreground",
    title: "text-lg font-bold text-foreground",
    subtitle: "text-[15px] font-bold text-foreground",
    description: "text-[13px] font-medium text-muted-foreground",
    subdescription: "text-xs font-medium text-muted-foreground",
    label: "text-xs font-semibold text-muted-foreground",
    code: "rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs font-medium text-foreground/80",
} as const;

export type TextVariant = keyof typeof textVariantMap;

export type TextProps = {
    variant?: TextVariant;
    className?: string;
    children: React.ReactNode;
    as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "label" | "div";
};

export function Text({ variant = "default", className, children, as: Tag = "span" }: TextProps) {
    return <Tag className={cn(textVariantMap[variant], className)}>{children}</Tag>;
}
