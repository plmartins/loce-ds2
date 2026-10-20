import * as react from 'react';
import { ReactNode } from 'react';

type SwitchProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
    /** Título ao lado do toggle (o toggle fica à esquerda do texto, padrão da suíte). */
    label?: ReactNode;
    description?: ReactNode;
    className?: string;
    "aria-label"?: string;
};
declare function Switch({ checked, onCheckedChange, disabled, label, description, className, ...props }: SwitchProps): react.JSX.Element;

export { Switch, type SwitchProps };
