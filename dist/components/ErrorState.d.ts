import * as react from 'react';

type ErrorStateProps = {
    title?: string;
    description?: string;
    /** Quando presente, mostra o botão "Tentar de novo". */
    onRetry?: () => void;
    className?: string;
};
/**
 * Erro de carregamento com identidade: tile de aviso, título e orientação
 * curta, na mesma linguagem do EmptyState. Usar nos catch de telas que
 * dependem da API (dashboard, relatórios, listagens).
 */
declare function ErrorState({ title, description, onRetry, className, }: ErrorStateProps): react.JSX.Element;

export { ErrorState, type ErrorStateProps };
