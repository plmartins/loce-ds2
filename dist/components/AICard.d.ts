import * as react from 'react';
import { ComponentProps } from 'react';
import { BorderBeamColorVariant, BorderBeamSize, BorderBeamTheme } from 'border-beam';

type AICardProps = ComponentProps<"article"> & {
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
/** A themed AI surface with Beam on the card border, independent of its content. */
declare function AICard({ as: Tag, tone, animated, borderRadius, beamColor, beamType, beamGlowSize, beamTheme, children, className, surfaceClassName, style, ...props }: AICardProps): react.JSX.Element;

export { AICard, type AICardProps };
