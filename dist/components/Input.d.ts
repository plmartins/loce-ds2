import * as react from 'react';
import { ComponentProps, ReactNode } from 'react';
import { FilterStateProps } from '../lib/filter.js';

declare const fieldClass: string;
type InputProps = ComponentProps<"input"> & FilterStateProps & {
    label?: string;
    error?: string;
    /** Texto de apoio abaixo do campo; quando há `error`, o erro o substitui. */
    hint?: ReactNode;
    /** Ação inline ao lado do label (ex.: "Gerar automático"). */
    labelAction?: {
        label: string;
        onClick: () => void;
    };
    /** Rótulo curto dentro do campo, à direita (ex.: "R$", "un"). */
    suffix?: ReactNode;
    /** Mostra um botão de limpar dentro do campo. */
    onClear?: () => void;
    loading?: boolean;
};
declare function Input({ className, label, error, hint, labelAction, suffix, onClear, loading, id, filterActive, ...props }: InputProps): react.JSX.Element;

export { Input, type InputProps, fieldClass };
