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
    className?: string;
};
/** Seleção múltipla em chips (ex.: responsáveis de uma tarefa). */
declare function MultiSelect({ label, options, value, onChange, placeholder, addLabel, className }: MultiSelectProps): react.JSX.Element;

export { MultiSelect, type MultiSelectOption, type MultiSelectProps };
