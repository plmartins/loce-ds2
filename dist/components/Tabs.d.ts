import * as react from 'react';

type Tab<T extends string = string> = {
    key: T;
    label: string;
    icon?: React.ReactNode;
    count?: number;
    /** Tab visível mas indisponível: cadeado + tooltip, sem troca. */
    disabled?: boolean;
    /** Texto do tooltip da tab desabilitada (default: "Chega em breve"). */
    disabledHint?: string;
};
type TabsProps<T extends string = string> = {
    tabs: Tab<T>[];
    value: T;
    onChange: (value: T) => void;
    className?: string;
    size?: "default" | "sm";
};
declare function Tabs<T extends string = string>({ tabs, value, onChange, className, size }: TabsProps<T>): react.JSX.Element;

export { type Tab, Tabs, type TabsProps };
