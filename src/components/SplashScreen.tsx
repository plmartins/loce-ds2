import { cn } from "../lib/utils";
import { IconSpinner } from "../icons";

export type SplashScreenProps = {
    className?: string;
};

/**
 * Fallback de rota/boot da suíte: canvas uniforme (sem corte de tela) e
 * spinner da marca com fade-in atrasado (~250ms). Carregamento rápido não
 * chega a piscar loader nenhum.
 */
export function SplashScreen({ className }: SplashScreenProps) {
    return (
        <main className={cn("flex min-h-dvh w-full flex-1 items-center justify-center bg-background", className)}>
            <span className="opacity-0 animate-[ds-overlay-in_0.2s_ease-out_0.25s_forwards]">
                <IconSpinner size={22} className="animate-spin text-brand" />
            </span>
        </main>
    );
}
