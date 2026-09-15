import { Ref, ComponentProps } from 'react';
import { IconWeight } from '@phosphor-icons/react';

type IconProps = {
    size?: number | string;
    className?: string;
    /** Sobrescreve o peso padrão do ícone (raro; o padrão da suíte é fill). */
    weight?: IconWeight;
    /** Ref repassada pro SVG (React 19), necessária pra Tooltip/Radix asChild. */
    ref?: Ref<SVGSVGElement>;
} & Omit<ComponentProps<"svg">, "ref">;

export type { IconProps as I };
