import * as react from 'react';

type MultiSelectOption = {
    value: string;
    label: string;
    image?: string;
    description?: string;
};
type MultiSelectProps = {
    label?: string;
    options: MultiSelectOption[];
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    addLabel?: string;
    /** Campo de busca no menu. Padrão: aparece a partir de 8 opções. */
    searchable?: boolean;
    searchPlaceholder?: string;
    className?: string;
};
/**
 * Seleção múltipla em chips (ex.: responsáveis de uma tarefa). O menu abre
 * pra cima quando falta espaço embaixo e nunca passa da borda da tela; com
 * muitas opções ganha busca.
 */
declare function MultiSelect({ label, options, value, onChange, placeholder, addLabel, searchable, searchPlaceholder, className }: MultiSelectProps): react.JSX.Element;

export { MultiSelect, type MultiSelectOption, type MultiSelectProps };
