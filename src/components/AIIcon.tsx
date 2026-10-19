import { useId, type ComponentProps } from "react";
import { IconSparkle } from "../icons";

export type AIIconProps = ComponentProps<typeof IconSparkle> & { icon?: typeof IconSparkle };

/** Decorative AI glyph. The surrounding control supplies its accessible name. */
export function AIIcon({ icon: Icon = IconSparkle, ...props }: AIIconProps) {
    const id = `ds-ai-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
    return <Icon {...props} color={`url(#${id})`} aria-hidden="true">
        <defs><linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--ai-color-start, var(--accent-brand-sec))" />
            <stop offset="50%" stopColor="var(--ai-color-mid, var(--accent-brand))" />
            <stop offset="100%" stopColor="var(--ai-color-end, var(--accent-brand))" />
        </linearGradient></defs>
    </Icon>;
}
