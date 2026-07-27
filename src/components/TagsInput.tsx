import { useRef, useState, type KeyboardEvent, type ClipboardEvent } from "react";
import { cn } from "../lib/utils";
import { IconClose } from "../icons";

export type TagsInputProps = {
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
export function TagsInput({ value, onChange, placeholder = "Digite e aperte Enter", disabled, className }: TagsInputProps) {
    const [draft, setDraft] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const commit = (raw: string) => {
        const parts = raw
            .split(",")
            .map((part) => part.trim())
            .filter(Boolean)
            .filter((part) => !value.includes(part));
        if (parts.length) onChange([...value, ...parts]);
        setDraft("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            commit(draft);
        } else if (e.key === "Backspace" && !draft && value.length) {
            onChange(value.slice(0, -1));
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        const text = e.clipboardData.getData("text");
        if (text.includes(",")) {
            e.preventDefault();
            commit(draft ? `${draft},${text}` : text);
        }
    };

    return (
        <div
            onClick={() => inputRef.current?.focus()}
            className={cn(
                "flex min-h-9 w-full cursor-text flex-wrap items-center gap-1 rounded-xl border border-border bg-card px-2 py-1.5",
                "shadow-xs transition-all duration-150 hover:border-ring/50",
                "focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/25",
                disabled && "pointer-events-none opacity-50",
                className
            )}
        >
            {value.map((tag) => (
                <span
                    key={tag}
                    className="flex items-center gap-1 rounded-lg bg-surface-2 py-0.5 pl-2 pr-1 text-[12px] font-semibold"
                >
                    {tag}
                    <button
                        type="button"
                        aria-label={`Remover ${tag}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange(value.filter((item) => item !== tag));
                        }}
                        className="flex size-4 cursor-pointer items-center justify-center rounded text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive"
                    >
                        <IconClose size={9} />
                    </button>
                </span>
            ))}
            <input
                ref={inputRef}
                type="text"
                disabled={disabled}
                value={draft}
                placeholder={value.length ? "" : placeholder}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                onBlur={() => draft && commit(draft)}
                className="min-w-28 flex-1 bg-transparent text-[13px] font-semibold outline-none placeholder:font-medium placeholder:text-muted-foreground/70"
            />
        </div>
    );
}
