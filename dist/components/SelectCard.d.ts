import * as react from 'react';

type SelectCardOption<T extends string = string> = {
    value: T;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    /** "ai": selecionada, a opção vira um AICard (luz em espectro na borda) em vez da cor da marca. */
    tone?: "ai";
};
type SelectCardProps<T extends string = string> = {
    options: SelectCardOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    columns?: 1 | 2 | 3 | 4;
    layout?: "horizontal" | "vertical";
    className?: string;
};
declare function SelectCard<T extends string = string>({ options, value, onChange, columns, layout, className }: SelectCardProps<T>): react.JSX.Element;

export { SelectCard, type SelectCardOption, type SelectCardProps };
