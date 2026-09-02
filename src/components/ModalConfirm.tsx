import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../primitives/dialog";
import { Button } from "./Button";

export type ModalConfirmProps = {
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

export function ModalConfirm({
    open,
    onClose,
    onConfirm,
    title,
    description,
    children,
    confirmLabel = "Confirmar",
    cancelLabel = "Cancelar",
    confirmIcon,
    variant = "primary",
    isLoading = false,
}: ModalConfirmProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                {children && <div className="-mx-6 min-h-0 flex-1 overflow-y-auto px-6 py-1">{children}</div>}
                <DialogFooter>
                    {!isLoading && (
                        <Button variant="secondary" className="px-6" onClick={onClose}>
                            {cancelLabel}
                        </Button>
                    )}
                    <Button variant={variant} className="px-8" onClick={onConfirm} loading={isLoading}>
                        {!isLoading && confirmIcon}
                        {isLoading ? "Processando..." : confirmLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
