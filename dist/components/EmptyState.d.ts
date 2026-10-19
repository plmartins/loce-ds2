import * as react from 'react';
import { ReactNode } from 'react';

type EmptyStateProps = {
    icon?: ReactNode;
    title?: string;
    description?: string;
    /** Ação de saída (ex.: botão "Criar produto"). */
    action?: ReactNode;
    /** horizontal (padrão): tile à esquerda, texto ao lado. centered: tudo centralizado. */
    variant?: "horizontal" | "centered";
    className?: string;
};
/** Vazio com presença: tile da marca com anéis, texto orientando a saída e ação. */
declare function EmptyState({ icon, title, description, action, variant, className, }: EmptyStateProps): react.JSX.Element;

export { EmptyState, type EmptyStateProps };
