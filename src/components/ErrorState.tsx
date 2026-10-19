import { cn } from "../lib/utils";
import { IconRefresh, IconWarning } from "../icons";
import { Button } from "./Button";

export type ErrorStateProps = {
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
export function ErrorState({
    title = "Algo deu errado",
    description = "Não conseguimos carregar os dados. Verifique a conexão e tente de novo.",
    onRetry,
    className,
}: ErrorStateProps) {
    return (
        <div className={cn("relative flex w-full items-center gap-5 overflow-hidden rounded-2xl bg-card px-6 py-8 ring-1 ring-border", className)}>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-warning/10 text-warning ring-1 ring-warning/20">
                <IconWarning size={26} />
            </span>
            <div className="flex min-w-0 flex-col gap-1">
                <span className="text-[15px] font-bold text-foreground">{title}</span>
                <span className="max-w-md text-[12.5px] leading-snug text-muted-foreground">{description}</span>
                {onRetry && (
                    <div className="mt-3">
                        <Button variant="secondary" size="sm" onClick={onRetry}>
                            <IconRefresh size={14} />
                            Tentar de novo
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
