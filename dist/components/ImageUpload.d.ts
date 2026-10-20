import * as react from 'react';

type ImageUploadProps = {
    label: string;
    value: string;
    onChange: (url: string) => void;
    /** Quem sobe o arquivo é o app (S3, API própria etc.); o componente só orquestra. */
    uploadFn?: (file: File) => Promise<{
        url: string;
    }>;
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
declare function ImageUpload({ label, value, onChange, uploadFn, aspect, placeholder, accept, className }: ImageUploadProps): react.JSX.Element;

export { ImageUpload, type ImageUploadProps };
