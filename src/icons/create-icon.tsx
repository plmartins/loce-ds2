import { createElement, type ComponentProps, type Ref } from "react";
import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react";

export type IconProps = {
    size?: number | string;
    className?: string;
    /** Sobrescreve o peso padrão do ícone (raro; o padrão da suíte é fill). */
    weight?: IconWeight;
    /** Ref repassada pro SVG (React 19), necessária pra Tooltip/Radix asChild. */
    ref?: Ref<SVGSVGElement>;
} & Omit<ComponentProps<"svg">, "ref">;

/**
 * Envolve um ícone da lib com o peso padrão da suíte.
 * Glifos de traço (plus, setas, busca) usam "bold"; o resto usa "fill".
 * Repassa ref e demais props (handlers, aria-*) pro SVG, então o ícone
 * funciona como filho direto de Tooltip/Radix asChild.
 * Este é o único ponto do DS que conhece a API da lib de ícones.
 */
export function createIcon(Base: PhosphorIcon, defaultWeight: IconWeight = "fill") {
    function Icon({ size = 20, weight, ref, ...rest }: IconProps) {
        return createElement(Base, { size, weight: weight ?? defaultWeight, ref, ...rest });
    }
    Icon.displayName = `LoceIcon(${Base.displayName ?? Base.name ?? "Icon"})`;
    return Icon;
}
