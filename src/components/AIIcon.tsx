import { useId, type ComponentProps } from "react";
import { IconSparkle } from "../icons";

export type AIIconProps = ComponentProps<typeof IconSparkle> & { icon?: typeof IconSparkle };

/**
 * Glifo decorativo de IA, SEMPRE no espectro da Loce (as oito cores de
 * ai-palette.css, de ponta a ponta). É a marca de "isto é IA" em toda a suíte.
 * O controle em volta fornece o nome acessível.
 */
export function AIIcon({ icon: Icon = IconSparkle, ...props }: AIIconProps) {
    const id = `ds-ai-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
    return <Icon {...props} color={`url(#${id})`} aria-hidden="true">
        <defs><linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--ai-spectrum-orange)" />
            <stop offset="14%" stopColor="var(--ai-spectrum-red)" />
            <stop offset="28%" stopColor="var(--ai-spectrum-pink)" />
            <stop offset="40%" stopColor="var(--ai-spectrum-violet)" />
            <stop offset="52%" stopColor="var(--ai-spectrum-indigo)" />
            <stop offset="64%" stopColor="var(--ai-spectrum-blue)" />
            <stop offset="76%" stopColor="var(--ai-spectrum-teal)" />
            <stop offset="88%" stopColor="var(--ai-spectrum-green)" />
            <stop offset="100%" stopColor="var(--ai-spectrum-orange)" />
        </linearGradient></defs>
    </Icon>;
}
