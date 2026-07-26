import { createElement } from "react";
import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react";

export type IconProps = {
    size?: number | string;
    className?: string;
    /** Sobrescreve o peso padrão do ícone (raro; o padrão da suíte é fill). */
    weight?: IconWeight;
};

/**
 * Envolve um ícone da lib com o peso padrão da suíte.
 * Glifos de traço (plus, setas, busca) usam "bold"; o resto usa "fill".
 * Este é o único ponto do DS que conhece a API da lib de ícones.
 */
export function createIcon(Base: PhosphorIcon, defaultWeight: IconWeight = "fill") {
    function Icon({ size = 20, className, weight }: IconProps) {
        return createElement(Base, { size, className, weight: weight ?? defaultWeight });
    }
    Icon.displayName = `LoceIcon(${Base.displayName ?? Base.name ?? "Icon"})`;
    return Icon;
}
