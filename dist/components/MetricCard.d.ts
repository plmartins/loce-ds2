import * as react from 'react';
import { ReactNode } from 'react';

type MetricDeltaTone = "positive" | "negative" | "neutral";
type MetricAccent = "brand" | "green" | "red" | "amber" | "purple" | "pink" | "teal";
type MetricCardProps = {
    label: ReactNode;
    value: ReactNode;
    helper?: ReactNode;
    delta?: {
        label: string;
        tone: MetricDeltaTone;
    };
    icon?: ReactNode;
    /** Cor do chip do ícone e do brilho do card. */
    accent?: MetricAccent;
    /** Troca o card inteiro por um skeleton do mesmo tamanho. */
    loading?: boolean;
    className?: string;
};
declare function MetricCard({ label, value, helper, delta, icon, accent, loading, className }: MetricCardProps): react.JSX.Element;

export { type MetricAccent, MetricCard, type MetricCardProps, type MetricDeltaTone };
