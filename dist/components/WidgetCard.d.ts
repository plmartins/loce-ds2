import * as react from 'react';
import { ReactNode } from 'react';
import { WidgetAccent } from '../lib/accents.js';

type WidgetCardProps = {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    accent?: WidgetAccent;
    /** Canto direito do cabeçalho (ex.: total do período ou um controle). */
    right?: ReactNode;
    /** Linha fina abaixo do right (ex.: "No período"). */
    rightHint?: string;
    className?: string;
    /** Classe do corpo (ex.: flex-1 pra esticar um gráfico). */
    bodyClassName?: string;
    children: ReactNode;
};
/**
 * Casca dos widgets de dashboard: tile de ícone + título compacto + conteúdo.
 * Um `right` em string vira o número do período; qualquer outro nó entra
 * como controle (SegmentedControl, botão).
 */
declare function WidgetCard({ title, subtitle, icon, accent, right, rightHint, className, bodyClassName, children }: WidgetCardProps): react.JSX.Element;

export { WidgetCard, type WidgetCardProps };
