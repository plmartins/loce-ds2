import * as react from 'react';

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

export { SheetEntity, type SheetEntityProps };
