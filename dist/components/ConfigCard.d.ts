import * as react from 'react';
import { ComponentType } from 'react';

type ConfigCardProps = {
    /** Componente de ícone (ds2 icons ou equivalente). */
    icon?: ComponentType<{
        size?: number | string;
        className?: string;
    }>;
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
};
/** Card de seção de configurações: header com tile de ícone + corpo empilhado. */
declare function ConfigCard({ icon: Icon, title, description, children, className }: ConfigCardProps): react.JSX.Element;

export { ConfigCard, type ConfigCardProps };
