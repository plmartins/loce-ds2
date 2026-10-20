import * as react from 'react';

type ThemeToggleProps = {
    /** Chave do localStorage (padrão "theme", igual aos apps Loce). */
    storageKey?: string;
    className?: string;
};
/** Alterna a classe .dark no <html> e persiste. Compatível com o theme-loader dos apps. */
declare function ThemeToggle({ storageKey, className }: ThemeToggleProps): react.JSX.Element;

export { ThemeToggle, type ThemeToggleProps };
