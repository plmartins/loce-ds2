import * as react from 'react';
import { ReactNode } from 'react';

type IconTileTone = "brand" | "success" | "warning" | "destructive" | "info" | "neutral" | "ecommerce";
type IconTileProps = {
    tone?: IconTileTone;
    /** sm 24px (linhas densas), md 32px (cards de dropdown/lista), lg 40px (modais). */
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "circle";
    className?: string;
    children: ReactNode;
};
/**
 * Tile de ícone dos cards de lista e dropdown (pendências, seletor de loja,
 * opções de importação...): um só padrão de fundo suave + ícone na cor do tom,
 * em vez de cada tela inventar o seu quadradinho.
 */
declare function IconTile({ tone, size, shape, className, children }: IconTileProps): react.JSX.Element;

export { IconTile, type IconTileProps, type IconTileTone };
