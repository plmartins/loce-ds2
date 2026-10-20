type WidgetAccent = "brand" | "green" | "purple" | "amber" | "red" | "teal" | "pink" | "blue";
declare const ACCENT_TILE: Record<WidgetAccent, string>;
declare const ACCENT_GLOW: Record<WidgetAccent, string>;
declare const ACCENT_TEXT: Record<WidgetAccent, string>;

export { ACCENT_GLOW, ACCENT_TEXT, ACCENT_TILE, type WidgetAccent };
