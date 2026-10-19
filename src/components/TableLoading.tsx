import type { ReactNode } from "react";
import { SkeletonTable } from "./Skeleton";

export type TableLoadingProps = {
    /**
     * Primeira carga ou recarga com a lista anterior em cache: `isLoading ||
     * isPlaceholderData` da consulta (busca, filtro, ordenação, página). Não
     * passe `isFetching`: recarga em segundo plano (foco na janela,
     * invalidação após mutação) não deve trocar a tabela pelo esqueleto.
     */
    loading: boolean;
    /** Linhas do esqueleto (padrão 10, o tamanho de página das listagens). */
    rows?: number;
    children: ReactNode;
    className?: string;
};

/**
 * Padrão de carregamento das listagens da suíte: sempre o esqueleto da
 * tabela, na primeira carga e em cada recarga por busca, filtro ou página.
 * Sem barra de progresso, sem linhas esmaecidas, sem spinner no campo de
 * busca.
 */
export function TableLoading({ loading, rows = 10, children, className }: TableLoadingProps) {
    if (loading) return <SkeletonTable rows={rows} className={className} />;
    return className ? <div className={className}>{children}</div> : <>{children}</>;
}
