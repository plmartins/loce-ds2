import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { IconSparkle, IconArrowUp } from '../icons';
import { cn } from '../lib/utils';
import { AICard } from './AICard';

export type AICostProps = HTMLAttributes<HTMLSpanElement> & {
    credits?: number;
    state?: 'ready' | 'pending' | 'unavailable';
};
export function AICost({ credits, state = credits === undefined ? 'pending' : 'ready', className, ...props }: AICostProps) {
    if (state === 'ready' && credits === undefined) state = 'pending';
    const label = state === 'pending' ? 'Consultando custo' : state === 'unavailable' ? 'Custo indisponível' : credits === 0 ? 'Grátis' : `${new Intl.NumberFormat('pt-BR').format(credits ?? 0)} créditos`;
    return <span className={cn('ds-ai-cost', className)} aria-label={label} {...props}><IconSparkle size={13} aria-hidden="true" />{state === 'pending' ? '…' : state === 'unavailable' ? '—' : credits === 0 ? 'Grátis' : new Intl.NumberFormat('pt-BR').format(credits ?? 0)}</span>;
}
export type AIButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'default' | 'compact' | 'icon';
    variant?: 'beam' | 'gradient';
    layout?: 'label' | 'icon-cost';
    icon?: ReactNode;
    loading?: boolean;
    loadingLabel?: ReactNode;
    credits?: number;
    costState?: AICostProps['state'];
    animated?: boolean;
    wrapperClassName?: string;
};
/** Assisted actions use beam; the main composer action can use gradient. */
export function AIButton({ size = 'default', variant = 'beam', layout = 'label', icon, loading = false, loadingLabel = 'Gerando…', credits, costState, animated = true, children, disabled, className, wrapperClassName, type = 'button', ...props }: AIButtonProps) {
    const showCost = credits !== undefined || costState !== undefined;
    const resolvedCostState = costState === 'ready' && credits === undefined ? 'pending' : costState;
    const unavailable = !!disabled || resolvedCostState === 'pending';
    return <span className={cn('ds-ai-action', wrapperClassName)} data-loading={loading} data-disabled={unavailable && !loading} data-size={size} data-variant={variant} data-layout={layout}>
        {variant === 'beam' && animated && (!unavailable || loading) && <span className="ds-ai-action-effects" aria-hidden="true">
            <AICard beamType="md" borderRadius={12} className="ds-ai-action-beam ds-ai-idle" surfaceClassName="ds-ai-effect-content"><span /></AICard>
            <AICard beamType="pulse-inner" borderRadius={12} className="ds-ai-action-beam ds-ai-busy" surfaceClassName="ds-ai-effect-content"><span /></AICard>
        </span>}
        <button {...props} type={type} className={cn('ds-ai-button', className)} disabled={unavailable || loading} aria-busy={loading || undefined}>
            <span aria-hidden="true" className={cn('ds-ai-action-icon', loading && 'ds-ai-working')}>{icon ?? <IconSparkle size={17} />}</span>
            <span className="ds-ai-action-label"><span aria-hidden="true" className="ds-ai-reserve">{children}</span><span aria-hidden="true" className="ds-ai-reserve">{loadingLabel}</span><span>{loading ? loadingLabel : children}</span></span>
            {showCost && <span className="ds-ai-action-price"><AICost credits={credits} state={resolvedCostState} /></span>}
        </button>
    </span>;
}

export type AISendButtonProps = Omit<AIButtonProps, 'children' | 'size' | 'variant' | 'icon' | 'credits' | 'costState'> & { label?: string };
/** Compact composer send action. Billing is intentionally separate from chat submission. */
export function AISendButton({ label = 'Enviar mensagem', loadingLabel = 'Enviando…', ...props }: AISendButtonProps) {
    return <AIButton {...props} variant="gradient" size="icon" icon={<IconArrowUp size={18} />} loadingLabel={loadingLabel}>{label}</AIButton>;
}
