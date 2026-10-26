import * as react from 'react';
import { ReactNode } from 'react';
import { FilterStateProps } from '../lib/filter.js';

type ComboBoxOption = {
    value: string;
    label: string;
    /** Linha secundária no dropdown (ex.: CNPJ do fornecedor, CPF do cliente). */
    description?: string;
    /** Elemento à esquerda da opção (ex.: avatar, foto do produto). */
    icon?: ReactNode;
};
type ComboBoxProps = FilterStateProps & {
    options: ComboBoxOption[];
    value: ComboBoxOption | null;
    onChange: (option: ComboBoxOption | null) => void;
    label?: string;
    /** Elemento extra ao lado do label (ex.: tooltip de ajuda, botão "criar"). */
    labelExtra?: ReactNode;
    error?: string;
    placeholder?: string;
    /** Busca controlada (server-side): valor digitado no input. */
    inputValue?: string;
    onInputChange?: (value: string) => void;
    /** Quantos caracteres antes de abrir o dropdown (0 abre no focus). */
    minCharsToOpen?: number;
    /** Com busca server-side, desliga o filtro local. */
    disableLocalFilter?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    emptyText?: string;
    loadingText?: string;
    /** Esconde o texto de vazio (ex.: durante o gap do debounce). */
    showEmpty?: boolean;
    autoFocus?: boolean;
    className?: string;
};
/**
 * Campo de busca com seleção (substituto ds2 do SelectWithSearch).
 * O input continua digitável: serve pra listas grandes e busca assíncrona.
 */
declare function ComboBox({ options, value, onChange, label, labelExtra, error, placeholder, inputValue: controlledInput, onInputChange, minCharsToOpen, disableLocalFilter, isLoading, disabled, emptyText, loadingText, showEmpty, autoFocus, className, filterActive, }: ComboBoxProps): react.JSX.Element;

export { ComboBox, type ComboBoxOption, type ComboBoxProps };
