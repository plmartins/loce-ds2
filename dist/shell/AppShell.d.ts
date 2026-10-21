import * as react from 'react';
import { ReactNode } from 'react';

type AppShellProps = {
    /** PlatformRail (coluna de plataformas). Escondido no mobile. */
    rail?: ReactNode;
    /** SidebarNav. No mobile vira overlay controlado pelo botão do HeaderBar. */
    sidebar?: ReactNode;
    /** Versão do sidebar renderizada no overlay mobile (normalmente com expanded). */
    mobileSidebar?: ReactNode;
    header?: ReactNode;
    children: ReactNode;
    className?: string;
    /** Quando muda (ex.: pathname da rota), o scroll do main volta pro topo. */
    scrollResetKey?: string;
    /**
     * Conteúdo "app" de altura fixa (inbox, kanban): o main não rola nem ganha
     * o respiro inferior; a página controla o próprio scroll com h-full.
     */
    fullHeight?: boolean;
};
declare function AppShell({ rail, sidebar, mobileSidebar, header, children, className, scrollResetKey, fullHeight }: AppShellProps): react.JSX.Element;

export { AppShell, type AppShellProps };
