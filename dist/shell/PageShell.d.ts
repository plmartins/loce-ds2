import * as react from 'react';
import { ReactNode } from 'react';

type PageShellProps = {
    title: ReactNode;
    description?: ReactNode;
    /** Ações do topo (botões primários da página). */
    actions?: ReactNode;
    onBack?: () => void;
    children: ReactNode;
    /** Largura máxima do conteúdo. */
    size?: "default" | "wide" | "full";
    className?: string;
};
declare function PageShell({ title, description, actions, onBack, children, size, className }: PageShellProps): react.JSX.Element;

export { PageShell, type PageShellProps };
