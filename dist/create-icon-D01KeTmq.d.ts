import { IconWeight } from '@phosphor-icons/react';

type IconProps = {
    size?: number | string;
    className?: string;
    /** Sobrescreve o peso padrão do ícone (raro; o padrão da suíte é fill). */
    weight?: IconWeight;
};

export type { IconProps as I };
