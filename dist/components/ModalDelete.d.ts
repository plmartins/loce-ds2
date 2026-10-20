import * as react from 'react';

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

export { ModalDelete, type ModalDeleteProps };
