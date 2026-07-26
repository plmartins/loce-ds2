import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { IconMoon, IconSun } from "../icons";

export type ThemeToggleProps = {
    /** Chave do localStorage (padrão "theme", igual aos apps Loce). */
    storageKey?: string;
    className?: string;
};

/** Alterna a classe .dark no <html> e persiste. Compatível com o theme-loader dos apps. */
export function ThemeToggle({ storageKey = "theme", className }: ThemeToggleProps) {
    const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        try {
            localStorage.setItem(storageKey, dark ? "dark" : "light");
        } catch {
            /* storage indisponível: tema só não persiste */
        }
    }, [dark, storageKey]);

    return (
        <button
            onClick={() => setDark((prev) => !prev)}
            className={cn(
                "flex size-9 cursor-pointer items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
                className
            )}
            aria-label={dark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            title={dark ? "Modo claro" : "Modo escuro"}
        >
            {dark ? <IconMoon size={18} /> : <IconSun size={18} />}
        </button>
    );
}
