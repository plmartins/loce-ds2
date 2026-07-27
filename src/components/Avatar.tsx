import { useState } from "react";
import { cn } from "../lib/utils";

export type AvatarProps = {
    name?: string;
    /** Foto do usuário; com erro de carregamento cai nas iniciais. */
    src?: string;
    size?: number;
    className?: string;
};

/* Paleta curada de gradientes (classes estáticas pro Tailwind enxergar).
   O gradiente é determinístico pelo nome: o mesmo usuário tem sempre a mesma cor. */
const GRADIENTS = [
    "bg-gradient-to-br from-[#3ba2ff] to-[#0b5ed7]",
    "bg-gradient-to-br from-[#a78bfa] to-[#6d28d9]",
    "bg-gradient-to-br from-[#f472b6] to-[#db2777]",
    "bg-gradient-to-br from-[#fbbf24] to-[#d97706]",
    "bg-gradient-to-br from-[#2dd4bf] to-[#0d9488]",
    "bg-gradient-to-br from-[#4ade80] to-[#16a34a]",
    "bg-gradient-to-br from-[#818cf8] to-[#4338ca]",
    "bg-gradient-to-br from-[#fb7185] to-[#e11d48]",
];

function hashString(value: string) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) | 0;
    return Math.abs(hash);
}

function initialsOf(name?: string) {
    if (!name?.trim()) return "?";
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
    return (first + last).toUpperCase();
}

export function Avatar({ name, src, size = 32, className }: AvatarProps) {
    const [imgError, setImgError] = useState(false);
    const showImage = src && !imgError;
    const gradient = GRADIENTS[hashString(name ?? "?") % GRADIENTS.length];

    return (
        <span
            title={name}
            className={cn(
                "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full",
                "ring-1 ring-black/5 dark:ring-white/10",
                !showImage && cn(gradient, "text-white"),
                className
            )}
            style={{ width: size, height: size, fontSize: Math.max(10, Math.round(size * 0.36)) }}
        >
            {showImage ? (
                <img src={src} alt={name ?? ""} onError={() => setImgError(true)} className="size-full object-cover" />
            ) : (
                <span className="font-bold leading-none tracking-wide">{initialsOf(name)}</span>
            )}
        </span>
    );
}
