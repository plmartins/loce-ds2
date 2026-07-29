import { useRef, useState, type DragEvent } from "react";
import { cn } from "../lib/utils";
import { IconRefresh, IconSpinner, IconTrash, IconUpload } from "../icons";

export type ImageUploadProps = {
    label: string;
    value: string;
    onChange: (url: string) => void;
    /** Quem sobe o arquivo é o app (S3, API própria etc.); o componente só orquestra. */
    uploadFn?: (file: File) => Promise<{ url: string }>;
    aspect?: "square" | "wide";
    placeholder?: string;
    accept?: string;
    className?: string;
};

/**
 * Campo de upload de imagem com preview, troca e remoção.
 * Erros do uploadFn são engolidos DE PROPÓSITO: o helper de upload do app é
 * quem valida e emite os toasts; aqui só encerra o spinner.
 */
export function ImageUpload({ label, value, onChange, uploadFn, aspect = "square", placeholder, accept = "image/*", className }: ImageUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [dragOver, setDragOver] = useState(false);

    const handleFile = async (file: File) => {
        if (!file.type.startsWith("image/") || !uploadFn) return;
        setUploading(true);
        try {
            const result = await uploadFn(file);
            onChange(result.url);
        } catch {
            // o helper de upload do app já avisou o usuário
        } finally {
            setUploading(false);
        }
    };

    const handleDrop = (event: DragEvent) => {
        event.preventDefault();
        setDragOver(false);
        const file = event.dataTransfer.files[0];
        if (file) handleFile(file);
    };

    return (
        <div className={cn("flex flex-col gap-1.5", className)}>
            <span className="text-[12px] font-semibold text-foreground/80">{label}</span>

            {value ? (
                <div className="flex h-24 items-center gap-3 rounded-2xl bg-surface-1 p-3 ring-1 ring-border">
                    <img
                        src={value}
                        alt={label}
                        className={cn("rounded-xl object-cover", aspect === "square" ? "size-16" : "h-16 w-24")}
                        onError={(event) => { (event.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="flex flex-col">
                        <button
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground"
                        >
                            <IconRefresh size={13} /> Trocar
                        </button>
                        <button
                            type="button"
                            onClick={() => onChange("")}
                            className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-destructive hover:bg-destructive/10"
                        >
                            <IconTrash size={13} /> Remover
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    onDragOver={(event) => { event.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    disabled={uploading}
                    className={cn(
                        "group flex h-24 cursor-pointer flex-row items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-4 transition-all",
                        dragOver
                            ? "border-brand bg-brand/5 scale-[1.01]"
                            : "border-border hover:border-muted-foreground/50 hover:bg-surface-1"
                    )}
                >
                    <span
                        className={cn(
                            "flex size-10 items-center justify-center rounded-2xl ring-1 transition-colors",
                            dragOver
                                ? "bg-brand/10 text-brand ring-brand/20"
                                : "bg-surface-2 text-muted-foreground ring-border group-hover:text-foreground"
                        )}
                    >
                        {uploading ? <IconSpinner size={22} className="animate-spin" /> : <IconUpload size={22} />}
                    </span>
                    <span className="flex flex-col items-start gap-0.5">
                        <span className="text-sm font-semibold text-foreground/80">
                            {uploading ? "Enviando..." : placeholder || "Clique ou arraste uma imagem"}
                        </span>
                        <span className="text-[11px] text-muted-foreground">PNG, JPG ou SVG</span>
                    </span>
                </button>
            )}

            <input
                ref={inputRef}
                type="file"
                accept={accept}
                className="hidden"
                onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) handleFile(file);
                    event.target.value = "";
                }}
            />
        </div>
    );
}
