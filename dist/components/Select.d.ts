import * as react from 'react';
import { SelectHTMLAttributes, ReactNode } from 'react';
import { FilterStateProps } from '../lib/filter.js';

type SelectOption = {
    value: string | number;
    label: string;
    icon?: ReactNode;
};
type SelectProps = FilterStateProps & {
    /** Optional clear action for filters whose neutral value is not empty/all. */
    onClearFilter?: () => void;
    options: SelectOption[];
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    /** Leading icon when the selected option does not provide its own. */
    icon?: ReactNode;
    label?: string;
    /** Ação inline ao lado do label (ex.: "Criar novo"). */
    labelAction?: {
        label: string;
        onClick: () => void;
    };
    error?: string;
    /** Desabilita o campo e troca o chevron por spinner (opções carregando). */
    loading?: boolean;
    disabled?: boolean;
    className?: string;
};
/** Select com dropdown estilizado do DS (não usa o popup nativo do SO). */
declare function Select({ options, value, onChange, placeholder, icon, label, labelAction, error, loading, disabled, className, filterActive, onClearFilter }: SelectProps): react.JSX.Element;
type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement> & FilterStateProps & {
    options: SelectOption[];
    placeholder?: string;
};
/** Select nativo estilizado (popup do SO): útil em mobile e formulários longos. */
declare function NativeSelect({ className, options, placeholder, filterActive, ...props }: NativeSelectProps): react.JSX.Element;

export { NativeSelect, type NativeSelectProps, Select, type SelectOption, type SelectProps };
