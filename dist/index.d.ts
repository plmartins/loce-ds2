import { ClassValue } from 'clsx';
import * as react from 'react';
import { ReactNode, ComponentType, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, HTMLAttributes, ComponentPropsWithoutRef } from 'react';
import { I as IconProps } from './create-icon-D01KeTmq.js';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as DialogPrimitive from '@radix-ui/react-dialog';
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
    /** Logo real da plataforma (imagem preenche o tile). Sem ela, cai no tile de gradiente + glifo. */
    logoSrc?: string;
};
type PlatformRailProps = {
    platforms: PlatformRailItem[];
    /** Logo compacta no topo do rail. Normalmente desnecessária: o tile ativo já é a marca. */
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

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "ghost" | "destructive" | "destructive-ghost" | null | undefined;
    size?: "md" | "sm" | "lg" | "icon" | "icon-sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    children?: ReactNode;
};
declare function Button({ className, variant, size, loading, disabled, children, type, ...props }: ButtonProps): react.JSX.Element;

declare const fieldClass: string;
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};
declare function Input({ className, label, error, id, ...props }: InputProps): react.JSX.Element;

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
    /** Mostra o chip "Limpar" e dispara ao clicar. */
    onClear?: () => void;
    showClear?: boolean;
};
declare function SearchInput({ className, onClear, showClear, ...props }: SearchInputProps): react.JSX.Element;

type SelectOption = {
    value: string | number;
    label: string;
};
type SelectProps = {
    options: SelectOption[];
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};
/** Select com dropdown estilizado do DS (não usa o popup nativo do SO). */
declare function Select({ options, value, onChange, placeholder, disabled, className }: SelectProps): react.JSX.Element;
type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    options: SelectOption[];
    placeholder?: string;
};
/** Select nativo estilizado (popup do SO): útil em mobile e formulários longos. */
declare function NativeSelect({ className, options, placeholder, ...props }: NativeSelectProps): react.JSX.Element;

type SwitchProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
};
declare function Switch({ checked, onCheckedChange, disabled, className, ...props }: SwitchProps): react.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "destructive" | "neutral" | "brand" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;
declare function Badge({ className, variant, ...props }: BadgeProps): react.JSX.Element;

type Column<T = any> = {
    header: string;
    accessor: string;
    render?: (value: any, row: T, index?: number) => ReactNode;
    sortable?: boolean;
    className?: string;
    align?: "left" | "center" | "right";
};
type Action<T = any> = {
    label: string;
    icon: ReactNode;
    onClick: (row: T) => void;
    color?: string;
    condition?: (row: T) => boolean;
    disabled?: (row: T) => boolean;
};
type DataTableProps<T = any> = {
    data: T[];
    columns: Column<T>[];
    actions?: Action<T>[];
    mainActions?: Action<T>[];
    emptyText?: string;
    rowKey?: (row: T, index: number) => string | number;
    onRowClick?: (row: T) => void;
    rowDisabled?: (row: T) => boolean;
    className?: string;
};
declare function DataTable<T extends Record<string, any>>({ data, columns, actions, mainActions, emptyText, rowKey, onRowClick, rowDisabled, className, }: DataTableProps<T>): react.JSX.Element;

type PaginationBarProps = {
    currentPage: number;
    perPage: number;
    totalResults: number;
    totalPages: number;
    action: (page: number) => void;
    className?: string;
};
declare function PaginationBar({ currentPage, perPage, totalResults, totalPages, action, className }: PaginationBarProps): react.JSX.Element | null;

declare const DropdownMenu: react.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare function DropdownMenuContent({ className, sideOffset, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>): react.JSX.Element;
declare function DropdownMenuItem({ className, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>): react.JSX.Element;
declare function DropdownMenuLabel({ className, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>): react.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>): react.JSX.Element;

declare const Dialog: react.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: react.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogClose: react.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
declare function DialogContent({ className, children, showCloseButton, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): react.JSX.Element;
declare function DialogHeader({ className, children }: {
    className?: string;
    children: ReactNode;
}): react.JSX.Element;
declare function DialogTitle({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>): react.JSX.Element;
declare function DialogDescription({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Description>): react.JSX.Element;
/** Corpo com scroll próprio quando o conteúdo estoura o teto de 85vh. */
declare function DialogBody({ className, children }: {
    className?: string;
    children: ReactNode;
}): react.JSX.Element;
declare function DialogFooter({ className, children }: {
    className?: string;
    children: ReactNode;
}): react.JSX.Element;

type TooltipProps = {
    content: ReactNode;
    children: ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    /** Envolve o filho num <span> (necessário quando o filho não aceita ref). */
    wrap?: boolean;
    className?: string;
};
declare function Tooltip({ content, children, side, wrap, className }: TooltipProps): react.JSX.Element;

export { type Action, AppShell, type AppShellProps, Badge, type BadgeProps, Button, type ButtonProps, type Column, DataTable, type DataTableProps, Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, HeaderBar, type HeaderBarProps, Input, type InputProps, NativeSelect, type NativeSelectProps, PageShell, type PageShellProps, PaginationBar, type PaginationBarProps, type PlatformId, PlatformRail, type PlatformRailItem, type PlatformRailProps, SearchInput, type SearchInputProps, Select, type SelectOption, type SelectProps, SidebarNav, type SidebarNavGroup, type SidebarNavProps, type SidebarNavSubItem, Switch, type SwitchProps, ThemeToggle, type ThemeToggleProps, Tooltip, type TooltipProps, badgeVariants, buttonVariants, cn, fieldClass, useShell };
