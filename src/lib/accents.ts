// Acentos dos widgets de dashboard (StatStrip, WidgetCard): tile translúcido
// pro ícone, glow no canto e cor de texto. Mesma linguagem do MetricCard,
// com mais tons pra dashboards densos.

export type WidgetAccent = "brand" | "green" | "purple" | "amber" | "red" | "teal" | "pink" | "blue";

export const ACCENT_TILE: Record<WidgetAccent, string> = {
    brand: "bg-brand/10 text-brand",
    green: "bg-success/12 text-success",
    purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    amber: "bg-warning/12 text-warning",
    red: "bg-destructive/10 text-destructive",
    teal: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    blue: "bg-info/10 text-info",
};

export const ACCENT_GLOW: Record<WidgetAccent, string> = {
    brand: "from-brand/15",
    green: "from-success/15",
    purple: "from-purple-500/15",
    amber: "from-warning/20",
    red: "from-destructive/15",
    teal: "from-teal-500/15",
    pink: "from-pink-500/15",
    blue: "from-info/15",
};

export const ACCENT_TEXT: Record<WidgetAccent, string> = {
    brand: "text-brand",
    green: "text-success",
    purple: "text-purple-600 dark:text-purple-400",
    amber: "text-warning",
    red: "text-destructive",
    teal: "text-teal-600 dark:text-teal-400",
    pink: "text-pink-600 dark:text-pink-400",
    blue: "text-info",
};
