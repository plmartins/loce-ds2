import { useState } from "react";
import { cn } from "../lib/utils";
import { IconCheck, IconCopy } from "../icons";
import { Text, type TextVariant } from "./Text";

export type TextCopyProps = {
    text: string;
    variant?: TextVariant;
    className?: string;
    successDuration?: number;
    /** Texto exibido antes do valor copiável (não entra na cópia). */
    prefix?: string;
    /** Valor efetivamente copiado quando difere do exibido. */
    copyText?: string;
};

export function TextCopy({ text, variant = "default", className, successDuration = 1500, prefix, copyText }: TextCopyProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(copyText ?? text);
        setCopied(true);
        setTimeout(() => setCopied(false), successDuration);
    };

    if (!text) return null;

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={cn("group inline-flex min-w-0 cursor-pointer items-center gap-1 transition-all duration-75 active:scale-95", className)}
        >
            {prefix && <Text variant={variant}>{prefix}</Text>}
            <Text variant={variant} className="min-w-0 truncate group-hover:underline">{text}</Text>
            {copied ? (
                <IconCheck size={12} className="shrink-0 text-success" />
            ) : (
                <IconCopy size={12} className="shrink-0 text-muted-foreground opacity-0 transition-opacity duration-150 group-hover:opacity-70" />
            )}
        </button>
    );
}
