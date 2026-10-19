import * as react from 'react';

declare const textVariantMap: {
    readonly default: "text-[13px] font-semibold text-foreground";
    readonly supertitle: "text-2xl font-extrabold tracking-tight text-foreground";
    readonly title: "text-lg font-bold text-foreground";
    readonly subtitle: "text-[15px] font-bold text-foreground";
    readonly description: "text-[13px] font-medium text-muted-foreground";
    readonly subdescription: "text-xs font-medium text-muted-foreground";
    readonly label: "text-xs font-semibold text-muted-foreground";
    readonly code: "rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs font-medium text-foreground/80";
};
type TextVariant = keyof typeof textVariantMap;
type TextProps = {
    variant?: TextVariant;
    className?: string;
    children: React.ReactNode;
    as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "label" | "div";
};
declare function Text({ variant, className, children, as: Tag }: TextProps): react.JSX.Element;

export { Text, type TextProps, type TextVariant, textVariantMap };
