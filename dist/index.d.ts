import { ClassValue } from 'clsx';
import * as react from 'react';
import { ReactNode, ComponentType } from 'react';
import { I as IconProps } from './create-icon-D01KeTmq.js';
import '@phosphor-icons/react';

declare function cn(...inputs: ClassValue[]): string;

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
};
declare function AppShell({ rail, sidebar, mobileSidebar, header, children, className }: AppShellProps): react.JSX.Element;

type PlatformId = "erp" | "ecommerce" | "marketing" | "talkbia";
type PlatformRailItem = {
    id: PlatformId;
    /** URL da plataforma (troca por navegação completa; a sessão viaja no cookie .loce.io). */
    href?: string;
    available?: boolean;
    active?: boolean;
};
type PlatformRailProps = {
    platforms: PlatformRailItem[];
    /** Logo compacta no topo do rail (ex.: marca Loce). */
    logo?: ReactNode;
    /** Área inferior (ThemeToggle, avatar...). */
    footer?: ReactNode;
    className?: string;
};
declare function PlatformRail({ platforms, logo, footer, className }: PlatformRailProps): react.JSX.Element;

type SidebarNavSubItem = {
    label: string;
    endPoint: string;
};
type SidebarNavGroup = {
    icon: ComponentType<IconProps>;
    label: string;
    subItems: SidebarNavSubItem[];
};
type SidebarNavProps = {
    /** Grupos já filtrados por permissão (o filtro é responsabilidade do app). */
    items: SidebarNavGroup[];
    /** Pathname atual (o DS não conhece o router). */
    activePath: string;
    onNavigate: (endPoint: string) => void;
    /** Força aberto (overlay mobile). */
    expanded?: boolean;
    /** Slot no rodapé (acima do controle de fixar). */
    footer?: ReactNode;
    /** Chave do localStorage do pin. */
    storageKey?: string;
    className?: string;
};
declare function SidebarNav({ items, activePath, onNavigate, expanded, footer, storageKey, className, }: SidebarNavProps): react.JSX.Element;

type HeaderBarProps = {
    /** Lado esquerdo (logo, seletor de loja, breadcrumb...). */
    left?: ReactNode;
    /** Lado direito (alertas, ajuda, menu do usuário...). */
    right?: ReactNode;
    className?: string;
};
declare function HeaderBar({ left, right, className }: HeaderBarProps): react.JSX.Element;

type ThemeToggleProps = {
    /** Chave do localStorage (padrão "theme", igual aos apps Loce). */
    storageKey?: string;
    className?: string;
};
/** Alterna a classe .dark no <html> e persiste. Compatível com o theme-loader dos apps. */
declare function ThemeToggle({ storageKey, className }: ThemeToggleProps): react.JSX.Element;

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

type ShellContextValue = {
    mobileSidebarOpen: boolean;
    setMobileSidebarOpen: (open: boolean) => void;
};
declare const useShell: () => ShellContextValue;

export { AppShell, type AppShellProps, HeaderBar, type HeaderBarProps, PageShell, type PageShellProps, type PlatformId, PlatformRail, type PlatformRailItem, type PlatformRailProps, SidebarNav, type SidebarNavGroup, type SidebarNavProps, type SidebarNavSubItem, ThemeToggle, type ThemeToggleProps, cn, useShell };
