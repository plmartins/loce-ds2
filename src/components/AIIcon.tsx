import { useId, type ComponentProps } from "react";
import { IconSparkle } from "../icons";

export type AIIconProps = ComponentProps<typeof IconSparkle> & { icon?: typeof IconSparkle };

/** Posições das nove cores do degradê; as cores vêm de --ai-icon-1..9 (ai.css), por plataforma. */
const STOPS = [0, 14, 28, 40, 52, 64, 76, 88, 100];

/**
 * Glifo decorativo de IA: a marca de "isto é IA" em toda a suíte. O degradê
 * puxa pra cor de cada plataforma (data-platform no html): ERP, Talkbia e dev
 * no espectro da Loce (rosa, violeta, azul no corpo da faísca), E-commerce do
 * índigo ao verde, Agency do laranja ao índigo. Em fundo preenchido use a
 * faísca lisa (IconSparkle), que herda a cor do texto.
 * O controle em volta fornece o nome acessível.
 */
export function AIIcon({ icon: Icon = IconSparkle, ...props }: AIIconProps) {
    const id = `ds-ai-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
    return <Icon {...props} color={`url(#${id})`} aria-hidden="true">
        <defs><linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            {STOPS.map((offset, i) => <stop key={offset} offset={`${offset}%`} stopColor={`var(--ai-icon-${i + 1})`} />)}
        </linearGradient></defs>
    </Icon>;
}
