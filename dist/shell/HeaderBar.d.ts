import * as react from 'react';
import { ReactNode } from 'react';

type HeaderBarProps = {
    /** Lado esquerdo (logo, seletor de loja, breadcrumb...). */
    left?: ReactNode;
    /** Lado direito (alertas, ajuda, menu do usuário...). */
    right?: ReactNode;
    className?: string;
};
declare function HeaderBar({ left, right, className }: HeaderBarProps): react.JSX.Element;

export { HeaderBar, type HeaderBarProps };
