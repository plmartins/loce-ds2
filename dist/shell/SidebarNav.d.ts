import * as react from 'react';
import { ComponentType, ReactNode } from 'react';
import { I as IconProps } from '../create-icon-YcAOipif.js';
import '@phosphor-icons/react';

type SidebarNavSubItem = {
    label: string;
    endPoint: string;
    /** Contador/selo à direita do item (ex.: conversas não lidas). Com a sidebar recolhida vira um ponto no ícone do grupo. */
    badge?: ReactNode;
    /** Item visível mas indisponível: cadeado + tooltip, sem navegação. */
    locked?: boolean;
    /** Texto do tooltip do item travado (default: "Chega em breve"). */
    lockedHint?: string;
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
    /** false: todos os grupos ficam abertos de uma vez, sem sanfona (menus curtos). */
    accordion?: boolean;
    /** Slot no rodapé (acima do controle de fixar). */
    footer?: ReactNode;
    /** Chave do localStorage do pin. */
    storageKey?: string;
    className?: string;
};
declare function SidebarNav({ items, activePath, onNavigate, expanded, accordion, footer, storageKey, className, }: SidebarNavProps): react.JSX.Element;

export { SidebarNav, type SidebarNavGroup, type SidebarNavProps, type SidebarNavSubItem };
