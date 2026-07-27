import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../primitives/dialog";
import { IconTrash } from "../icons";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";

type ConfirmationMode =
    | { mode?: "simple" }
    | { mode: "checkbox"; checkboxLabel?: string }
    | { mode: "input"; inputPlaceholder?: string; confirmText: string };

export type ModalDeleteProps = {
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

export function ModalDelete(props: ModalDeleteProps) {
    const {
        open,
        onClose,
        onConfirm,
        title = "Confirma exclusão?",
        description = "Esta ação não pode ser desfeita.",
        confirmLabel = "Excluir",
        cancelLabel = "Cancelar",
        isLoading = false,
        icon = <IconTrash size={15} />,
    } = props;
    const mode = "mode" in props ? props.mode : "simple";
    const [checked, setChecked] = useState(false);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (!open) {
            setChecked(false);
            setInputValue("");
        }
    }, [open]);

    const isConfirmed = (() => {
        if (!mode || mode === "simple") return true;
        if (mode === "checkbox") return checked;
        if (mode === "input") {
            const confirmText = "confirmText" in props ? props.confirmText : "";
            return inputValue === confirmText;
        }
        return true;
    })();

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {mode === "checkbox" && (
                    <div className="py-1">
                        <Checkbox
                            label={"checkboxLabel" in props && props.checkboxLabel ? props.checkboxLabel : "Entendi que esta ação não pode ser desfeita"}
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                        />
                    </div>
                )}
                {mode === "input" && (
                    <div className="py-1">
                        <Input
                            label={`Digite "${"confirmText" in props ? props.confirmText : ""}" para confirmar`}
                            placeholder={"inputPlaceholder" in props ? props.inputPlaceholder : ""}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                )}
                <DialogFooter>
                    {!isLoading && (
                        <Button variant="secondary" className="px-6" onClick={onClose}>
                            {cancelLabel}
                        </Button>
                    )}
                    <Button variant="destructive" className="px-8" onClick={onConfirm} loading={isLoading} disabled={!isConfirmed}>
                        {!isLoading && icon}
                        {isLoading ? "Processando..." : confirmLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
