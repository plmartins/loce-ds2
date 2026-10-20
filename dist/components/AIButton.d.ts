import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, HTMLAttributes } from 'react';

type AICostProps = HTMLAttributes<HTMLSpanElement> & {
    credits?: number;
    state?: 'ready' | 'pending' | 'unavailable';
};
declare function AICost({ credits, state, className, ...props }: AICostProps): react.JSX.Element;
type AIButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
declare function AIButton({ size, variant, layout, icon, loading, loadingLabel, credits, costState, animated, children, disabled, className, wrapperClassName, type, ...props }: AIButtonProps): react.JSX.Element;
type AISendButtonProps = Omit<AIButtonProps, 'children' | 'size' | 'variant' | 'icon' | 'credits' | 'costState'> & {
    label?: string;
};
/** Compact composer send action. Billing is intentionally separate from chat submission. */
declare function AISendButton({ label, loadingLabel, ...props }: AISendButtonProps): react.JSX.Element;

export { AIButton, type AIButtonProps, AICost, type AICostProps, AISendButton, type AISendButtonProps };
