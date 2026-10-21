import * as react from 'react';

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

export { ModalConfirm, type ModalConfirmProps };
