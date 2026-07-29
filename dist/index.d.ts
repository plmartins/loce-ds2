import { ClassValue } from 'clsx';
import * as react from 'react';
import { ReactNode, ComponentType, ButtonHTMLAttributes, ComponentProps, InputHTMLAttributes, SelectHTMLAttributes, HTMLAttributes, ComponentPropsWithoutRef, Ref } from 'react';
import { I as IconProps } from './create-icon-YcAOipif.js';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DayPicker } from 'react-day-picker';
import { ToasterProps } from 'react-hot-toast';
export { Toast, ToastOptions, ToastPosition, ToasterProps, toast } from 'react-hot-toast';
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
    /** Quando muda (ex.: pathname da rota), o scroll do main volta pro topo. */
    scrollResetKey?: string;
};
declare function AppShell({ rail, sidebar, mobileSidebar, header, children, className, scrollResetKey }: AppShellProps): react.JSX.Element;

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
type InputProps = ComponentProps<"input"> & {
    label?: string;
    error?: string;
    /** Ação inline ao lado do label (ex.: "Gerar automático"). */
    labelAction?: {
        label: string;
        onClick: () => void;
    };
    /** Rótulo curto dentro do campo, à direita (ex.: "R$", "un"). */
    suffix?: ReactNode;
    /** Mostra um botão de limpar dentro do campo. */
    onClear?: () => void;
    loading?: boolean;
};
declare function Input({ className, label, error, labelAction, suffix, onClear, loading, id, ...props }: InputProps): react.JSX.Element;

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
    onClick?: (row: T) => void;
    color?: string;
    condition?: (row: T) => boolean;
    disabled?: (row: T) => boolean;
    /** Com items, a ação principal vira um dropdown (ex.: botão de imprimir com 2 formas). */
    items?: {
        label: string;
        icon?: ReactNode;
        onClick: (row: T) => void;
        disabled?: (row: T) => boolean;
    }[];
};
type SortState = {
    accessor: string;
    direction: "asc" | "desc";
} | null;
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
    /** Modo servidor: estado de ordenação controlado pelo pai (null = sem ordenação). */
    sort?: SortState;
    /** Modo servidor: recebe o próximo estado (asc -> desc -> null). Desativa o sort client-side. */
    onSortChange?: (sort: SortState) => void;
};
declare function DataTable<T extends Record<string, any>>({ data, columns, actions, mainActions, emptyText, rowKey, onRowClick, rowDisabled, className, sort, onSortChange, }: DataTableProps<T>): react.JSX.Element;

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

type AvatarProps = {
    name?: string;
    /** Foto do usuário; com erro de carregamento cai nas iniciais. */
    src?: string;
    size?: number;
    className?: string;
};
declare function Avatar({ name, src, size, className }: AvatarProps): react.JSX.Element;

type FaceAvatarProps = {
    /** Semente do desenho: mesma seed, mesma carinha (id do visitante, e-mail, nome...). */
    seed: string;
    /** Glifo central (letra/número). Sem ele, usa o primeiro caractere alfanumérico da seed. */
    glyph?: string;
    size?: number;
    className?: string;
    title?: string;
};
/**
 * Avatar "carinha" determinístico por seed: círculo pastel, olhos com
 * personalidade e um glifo pequeno como boca. Pra gente sem foto nem nome
 * forte (visitantes do Talkbia, clientes anônimos, filas), onde as iniciais
 * do Avatar ficariam repetitivas.
 */
declare function FaceAvatar({ seed, glyph, size, className, title }: FaceAvatarProps): react.JSX.Element;

type IconTileTone = "brand" | "success" | "warning" | "destructive" | "info" | "neutral" | "ecommerce";
type IconTileProps = {
    tone?: IconTileTone;
    /** sm 24px (linhas densas), md 32px (cards de dropdown/lista), lg 40px (modais). */
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "circle";
    className?: string;
    children: ReactNode;
};
/**
 * Tile de ícone dos cards de lista e dropdown (pendências, seletor de loja,
 * opções de importação...): um só padrão de fundo suave + ícone na cor do tom,
 * em vez de cada tela inventar o seu quadradinho.
 */
declare function IconTile({ tone, size, shape, className, children }: IconTileProps): react.JSX.Element;

type SkeletonProps = {
    className?: string;
};
declare function Skeleton({ className }: SkeletonProps): react.JSX.Element;
declare function SkeletonText({ lines, className }: {
    lines?: number;
    className?: string;
}): react.JSX.Element;
/** Skeleton de listagem no formato do DataTable: header + linhas com thumb, textos e pills. */
declare function SkeletonTable({ rows, className }: {
    rows?: number;
    className?: string;
}): react.JSX.Element;

/** Skeleton de formulário: blocos de label+campo em grid, com coluna lateral opcional. */
declare function SkeletonForm({ withAside, className }: {
    withAside?: boolean;
    className?: string;
}): react.JSX.Element;

type TagsInputProps = {
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};
/**
 * Lista de valores curtos como chips na horizontal (palavras-chave, apelidos).
 * Enter ou vírgula adiciona; Backspace com o campo vazio remove o último;
 * colar texto com vírgulas divide em várias tags.
 */
declare function TagsInput({ value, onChange, placeholder, disabled, className }: TagsInputProps): react.JSX.Element;

type MetricDeltaTone = "positive" | "negative" | "neutral";
type MetricAccent = "brand" | "green" | "red" | "amber" | "purple" | "pink" | "teal";
type MetricCardProps = {
    label: ReactNode;
    value: ReactNode;
    helper?: ReactNode;
    delta?: {
        label: string;
        tone: MetricDeltaTone;
    };
    icon?: ReactNode;
    /** Cor do chip do ícone e do brilho do card. */
    accent?: MetricAccent;
    className?: string;
};
declare function MetricCard({ label, value, helper, delta, icon, accent, className }: MetricCardProps): react.JSX.Element;

type SegmentedControlOption = {
    value: string;
    label: string;
};
type SegmentedControlProps = {
    options: SegmentedControlOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
};
declare function SegmentedControl({ options, value, onChange, className }: SegmentedControlProps): react.JSX.Element;

type BarListItem = {
    key?: string;
    label: ReactNode;
    /** Valor já formatado (ex.: "R$ 581,28"). */
    value: string;
    /** Proporção da barra em relação ao maior item (0 a 1). */
    ratio: number;
    /** Participação no total (0 a 1): vira o "42%" ao lado do valor. */
    share?: number;
    /** Linha auxiliar (ex.: "5 vendas · ticket R$ 116,26"). */
    sub?: ReactNode;
    /** Estatísticas em chips (ex.: ["5 vendas", "ticket R$ 116,26"]); tem precedência sobre sub. */
    stats?: string[];
    /** Item apagado (ex.: "Sem vendedor"). */
    muted?: boolean;
};
type BarListProps = {
    items: BarListItem[];
    /** Numera as posições (1, 2, 3...) com o líder destacado. */
    showRank?: boolean;
    emptyText?: string;
    className?: string;
};
/** Ranking com barras na cor da marca; a largura anima na montagem. */
declare function BarList({ items, showRank, emptyText, className }: BarListProps): react.JSX.Element;

type EmptyStateProps = {
    icon?: ReactNode;
    title?: string;
    description?: string;
    /** Ação de saída (ex.: botão "Criar produto"). */
    action?: ReactNode;
    /** horizontal (padrão): tile à esquerda, texto ao lado. centered: tudo centralizado. */
    variant?: "horizontal" | "centered";
    className?: string;
};
/** Vazio com presença: tile da marca com anéis, texto orientando a saída e ação. */
declare function EmptyState({ icon, title, description, action, variant, className, }: EmptyStateProps): react.JSX.Element;

type ComboBoxOption = {
    value: string;
    label: string;
    /** Linha secundária no dropdown (ex.: CNPJ do fornecedor, CPF do cliente). */
    description?: string;
    /** Elemento à esquerda da opção (ex.: avatar, foto do produto). */
    icon?: ReactNode;
};
type ComboBoxProps = {
    options: ComboBoxOption[];
    value: ComboBoxOption | null;
    onChange: (option: ComboBoxOption | null) => void;
    label?: string;
    /** Elemento extra ao lado do label (ex.: tooltip de ajuda, botão "criar"). */
    labelExtra?: ReactNode;
    error?: string;
    placeholder?: string;
    /** Busca controlada (server-side): valor digitado no input. */
    inputValue?: string;
    onInputChange?: (value: string) => void;
    /** Quantos caracteres antes de abrir o dropdown (0 abre no focus). */
    minCharsToOpen?: number;
    /** Com busca server-side, desliga o filtro local. */
    disableLocalFilter?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    emptyText?: string;
    loadingText?: string;
    /** Esconde o texto de vazio (ex.: durante o gap do debounce). */
    showEmpty?: boolean;
    autoFocus?: boolean;
    className?: string;
};
/**
 * Campo de busca com seleção (substituto ds2 do SelectWithSearch).
 * O input continua digitável: serve pra listas grandes e busca assíncrona.
 */
declare function ComboBox({ options, value, onChange, label, labelExtra, error, placeholder, inputValue: controlledInput, onInputChange, minCharsToOpen, disableLocalFilter, isLoading, disabled, emptyText, loadingText, showEmpty, autoFocus, className, }: ComboBoxProps): react.JSX.Element;

declare const textVariantMap: {
    readonly default: "text-[13px] font-semibold text-foreground";
    readonly supertitle: "text-2xl font-extrabold tracking-tight text-foreground";
    readonly title: "text-lg font-bold text-foreground";
    readonly subtitle: "text-[15px] font-bold text-foreground";
    readonly description: "text-[13px] font-medium text-muted-foreground";
    readonly subdescription: "text-xs font-medium text-muted-foreground";
    readonly label: "text-xs font-semibold text-muted-foreground";
    readonly code: "rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs font-medium text-foreground/80";
};
type TextVariant = keyof typeof textVariantMap;
type TextProps = {
    variant?: TextVariant;
    className?: string;
    children: React.ReactNode;
    as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "label" | "div";
};
declare function Text({ variant, className, children, as: Tag }: TextProps): react.JSX.Element;

type Tab<T extends string = string> = {
    key: T;
    label: string;
    icon?: React.ReactNode;
    count?: number;
    /** Tab visível mas indisponível: cadeado + tooltip, sem troca. */
    disabled?: boolean;
    /** Texto do tooltip da tab desabilitada (default: "Chega em breve"). */
    disabledHint?: string;
};
type TabsProps<T extends string = string> = {
    tabs: Tab<T>[];
    value: T;
    onChange: (value: T) => void;
    className?: string;
    size?: "default" | "sm";
};
declare function Tabs<T extends string = string>({ tabs, value, onChange, className, size }: TabsProps<T>): react.JSX.Element;

type StatusDotProps = {
    status: "online" | "offline" | "busy" | "away";
    size?: "sm" | "default" | "lg";
    className?: string;
    pulse?: boolean;
};
declare function StatusDot({ status, size, className, pulse }: StatusDotProps): react.JSX.Element;

type CheckboxProps = Omit<ComponentProps<"input">, "type"> & {
    label?: string;
    description?: string;
};
declare function Checkbox({ className, label, description, checked, onChange, disabled, ...props }: CheckboxProps): react.JSX.Element;

type TextareaProps = Omit<ComponentProps<"textarea">, "onChange"> & {
    label?: string;
    loading?: boolean;
    error?: string;
    autoResize?: boolean;
    onSubmit?: () => void;
    /** Recebe o valor direto (não o evento), como no ds1. */
    onChange?: (value: string) => void;
    ref?: Ref<HTMLTextAreaElement>;
};
declare function Textarea({ className, label, loading, error, autoResize, onSubmit, onChange, ref, ...props }: TextareaProps): react.JSX.Element;

type TimelineItem = {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    time?: string;
    /** Classes do tile do ícone (ex.: "bg-success/10 text-success"). */
    color?: string;
};
type TimelineProps = {
    items: TimelineItem[];
    className?: string;
};
declare function Timeline({ items, className }: TimelineProps): react.JSX.Element;

declare function Card({ className, ...props }: ComponentProps<"div">): react.JSX.Element;
declare function CardHeader({ className, ...props }: ComponentProps<"div">): react.JSX.Element;
declare function CardTitle({ className, ...props }: ComponentProps<"h3">): react.JSX.Element;
declare function CardDescription({ className, ...props }: ComponentProps<"p">): react.JSX.Element;
declare function CardContent({ className, ...props }: ComponentProps<"div">): react.JSX.Element;
declare function CardFooter({ className, ...props }: ComponentProps<"div">): react.JSX.Element;

type SeparatorProps = {
    className?: string;
    orientation?: "horizontal" | "vertical";
    label?: string;
};
declare function Separator({ className, orientation, label }: SeparatorProps): react.JSX.Element;

type TextCopyProps = {
    text: string;
    variant?: TextVariant;
    className?: string;
    successDuration?: number;
    /** Texto exibido antes do valor copiável (não entra na cópia). */
    prefix?: string;
    /** Valor efetivamente copiado quando difere do exibido. */
    copyText?: string;
};
declare function TextCopy({ text, variant, className, successDuration, prefix, copyText }: TextCopyProps): react.JSX.Element | null;

type DropdownAction = {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    variant?: "destructive";
    disabled?: boolean;
};
type DropdownActionsProps = {
    actions: DropdownAction[];
    trigger?: React.ReactNode;
    align?: "start" | "center" | "end";
    className?: string;
};
declare function DropdownActions({ actions, trigger, align, className }: DropdownActionsProps): react.JSX.Element | null;

type SelectCardOption<T extends string = string> = {
    value: T;
    label: string;
    description?: string;
    icon?: React.ReactNode;
};
type SelectCardProps<T extends string = string> = {
    options: SelectCardOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    columns?: 1 | 2 | 3 | 4;
    layout?: "horizontal" | "vertical";
    className?: string;
};
declare function SelectCard<T extends string = string>({ options, value, onChange, columns, layout, className }: SelectCardProps<T>): react.JSX.Element;

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

type ModalConfirmProps = {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description?: string;
    children?: React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmIcon?: React.ReactNode;
    variant?: "primary" | "destructive";
    isLoading?: boolean;
};
declare function ModalConfirm({ open, onClose, onConfirm, title, description, children, confirmLabel, cancelLabel, confirmIcon, variant, isLoading, }: ModalConfirmProps): react.JSX.Element;

type ConfirmationMode = {
    mode?: "simple";
} | {
    mode: "checkbox";
    checkboxLabel?: string;
} | {
    mode: "input";
    inputPlaceholder?: string;
    confirmText: string;
};
type ModalDeleteProps = {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    isLoading?: boolean;
    icon?: React.ReactNode;
} & ConfirmationMode;
declare function ModalDelete(props: ModalDeleteProps): react.JSX.Element;

type SheetEntityProps = {
    open: boolean;
    onClose: () => void;
    title: React.ReactNode;
    description?: React.ReactNode;
    /** Conteúdo extra no header, abaixo do título/descrição (ex.: tags). */
    headerExtra?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
    submitLabel?: string;
    cancelLabel?: string;
    onSubmit?: () => void;
    isLoading?: boolean;
    /** "wide" para telas de detalhe densas (ex.: venda, NF-e). */
    size?: "default" | "wide";
    /** Classes do contêiner rolável do corpo (padding/fundo). */
    contentClassName?: string;
};
/** Painel lateral direito para criar/editar/detalhar entidades. */
declare function SheetEntity({ open, onClose, title, description, headerExtra, children, footer, submitLabel, cancelLabel, onSubmit, isLoading, size, contentClassName, }: SheetEntityProps): react.ReactPortal | null;

type ScrollFadeProps = {
    children: React.ReactNode;
    className?: string;
    fadeHeight?: number;
    position?: "bottom" | "top" | "both";
};
/** Contêiner rolável com fade nas bordas indicando conteúdo além da dobra. */
declare function ScrollFade({ children, className, fadeHeight, position }: ScrollFadeProps): react.JSX.Element;

type MultiSelectOption = {
    value: string;
    label: string;
    image?: string;
    description?: string;
};
type MultiSelectProps = {
    label?: string;
    options: MultiSelectOption[];
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    addLabel?: string;
    className?: string;
};
/** Seleção múltipla em chips (ex.: responsáveis de uma tarefa). */
declare function MultiSelect({ label, options, value, onChange, placeholder, addLabel, className }: MultiSelectProps): react.JSX.Element;

type TimeInputProps = Omit<ComponentProps<"input">, "type"> & {
    label?: string;
};
declare function TimeInput({ className, label, ...props }: TimeInputProps): react.JSX.Element;

type ImageWithZoomProps = {
    src: string;
    fallbackSrc?: string;
    fallbackClassName?: string;
    width: number;
    height: number;
    className?: string;
    onLoad?: () => void;
    onError?: () => void;
    isDisabled?: boolean;
};
/** Imagem clicável que abre em lightbox com zoom por scroll e arraste. */
declare function ImageWithZoom({ src, fallbackSrc, fallbackClassName, width, height, className, onLoad, onError, isDisabled }: ImageWithZoomProps): react.JSX.Element;

type DatePickerProps = {
    label?: string;
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    clearable?: boolean;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
};
declare function DatePicker({ label, value, onChange, placeholder, error, disabled, clearable, className, minDate, maxDate }: DatePickerProps): react.JSX.Element;

/** Calendário base (react-day-picker) tematizado com os tokens do ds2. */
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, formatters, components, ...props }: ComponentProps<typeof DayPicker>): react.JSX.Element;

/**
 * Toaster da suíte: react-hot-toast com a superfície do ds2.
 * Montar uma vez no root do app; disparar com `toast` (re-export do índice).
 */
declare function Toaster(props: ToasterProps): react.JSX.Element;

export { type Action, AppShell, type AppShellProps, Avatar, type AvatarProps, Badge, type BadgeProps, BarList, type BarListItem, type BarListProps, Button, type ButtonProps, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, type CheckboxProps, type Column, ComboBox, type ComboBoxOption, type ComboBoxProps, ConfigCard, type ConfigCardProps, DataTable, type DataTableProps, DatePicker, type DatePickerProps, Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, type DropdownAction, DropdownActions, type DropdownActionsProps, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, EmptyState, type EmptyStateProps, FaceAvatar, type FaceAvatarProps, HeaderBar, type HeaderBarProps, IconTile, type IconTileProps, type IconTileTone, ImageWithZoom, type ImageWithZoomProps, Input, type InputProps, type MetricAccent, MetricCard, type MetricCardProps, type MetricDeltaTone, ModalConfirm, type ModalConfirmProps, ModalDelete, type ModalDeleteProps, MultiSelect, type MultiSelectOption, type MultiSelectProps, NativeSelect, type NativeSelectProps, PageShell, type PageShellProps, PaginationBar, type PaginationBarProps, type PlatformId, PlatformRail, type PlatformRailItem, type PlatformRailProps, ScrollFade, type ScrollFadeProps, SearchInput, type SearchInputProps, SegmentedControl, type SegmentedControlOption, type SegmentedControlProps, Select, SelectCard, type SelectCardOption, type SelectCardProps, type SelectOption, type SelectProps, Separator, type SeparatorProps, SheetEntity, type SheetEntityProps, SidebarNav, type SidebarNavGroup, type SidebarNavProps, type SidebarNavSubItem, Skeleton, SkeletonForm, type SkeletonProps, SkeletonTable, SkeletonText, type SortState, StatusDot, type StatusDotProps, Switch, type SwitchProps, type Tab, Tabs, type TabsProps, TagsInput, type TagsInputProps, Text, TextCopy, type TextCopyProps, type TextProps, type TextVariant, Textarea, type TextareaProps, ThemeToggle, type ThemeToggleProps, TimeInput, type TimeInputProps, Timeline, type TimelineItem, type TimelineProps, Toaster, Tooltip, type TooltipProps, badgeVariants, buttonVariants, cn, fieldClass, textVariantMap, useShell };
