import * as react from 'react';

type SplashScreenProps = {
    className?: string;
};
/**
 * Fallback de rota/boot da suíte: canvas uniforme (sem corte de tela) e
 * spinner da marca com fade-in atrasado (~250ms). Carregamento rápido não
 * chega a piscar loader nenhum.
 */
declare function SplashScreen({ className }: SplashScreenProps): react.JSX.Element;

export { SplashScreen, type SplashScreenProps };
