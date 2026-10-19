import { useSyncExternalStore, type ComponentProps } from "react";
import { BorderBeam, type BorderBeamColorVariant, type BorderBeamSize, type BorderBeamTheme } from "border-beam";
import { cn } from "../lib/utils";

export type AICardProps = ComponentProps<"article"> & {
    as?: "article" | "section";
    tone?: "default" | "dark";
    animated?: boolean;
    /** Shared radius for the card surface and native effect. */
    borderRadius?: number;
    /** Native Beam palette; preserves the library glow and motion. */
    beamColor?: BorderBeamColorVariant;
    /** Native Beam effect preset; defaults to the full rotating border. */
    beamType?: BorderBeamSize;
    /** Native Beam halo size multiplier. */
    beamGlowSize?: number;
    /** Override the effect preset independently of the card background. */
    beamTheme?: BorderBeamTheme;
    /** Classes on the content surface; className styles the outer frame. */
    surfaceClassName?: string;
};

const reducedMotionCSS = `
@media (prefers-reduced-motion: reduce) {
  [data-beam="{id}"], [data-beam="{id}"]::before,
  [data-beam="{id}"]::after, [data-beam="{id}"] [data-beam-bloom] {
    animation: none !important;
  }
  [data-beam="{id}"]::before, [data-beam="{id}"]::after,
  [data-beam="{id}"] [data-beam-bloom] { display: none !important; }
}
`;

// ThemeToggle and the host tokens use the root .dark class, independently of
// the OS preference used by BorderBeam's own "auto" option.
function subscribeTheme(onChange: () => void) {
    if (typeof document === "undefined") return () => {};
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
}
function readTheme(): "dark" | "light" {
    return typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light";
}
const serverTheme = () => "light" as const;

/** A themed AI surface with Beam on the card border, independent of its content. */
export function AICard({ as: Tag = "article", tone = "default", animated = true, borderRadius = 24, beamColor = "colorful", beamType = "md", beamGlowSize = 1, beamTheme, children, className, surfaceClassName, style, ...props }: AICardProps) {
    const appTheme = useSyncExternalStore(subscribeTheme, readTheme, serverTheme);
    const resolvedBeamTheme = beamTheme ?? (tone === "dark" ? "dark" : appTheme);
    const content = <Tag {...props} className={cn("ds-ai-card-surface", surfaceClassName)}>{children}</Tag>;
    return animated
        ? <BorderBeam data-tone={tone} data-beam-theme={resolvedBeamTheme} data-beam-type={beamType} data-animated="true" className={cn("ds-ai-card", className)} style={{ borderRadius, ...style }} borderRadius={borderRadius} size={beamType} glowSize={beamGlowSize} colorVariant={beamColor} theme={resolvedBeamTheme} css={reducedMotionCSS}>{content}</BorderBeam>
        : <div data-tone={tone} data-animated="false" className={cn("ds-ai-card", className)} style={{ borderRadius, ...style }}>{content}</div>;
}
