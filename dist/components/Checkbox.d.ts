import * as react from 'react';
import { ComponentProps } from 'react';

type CheckboxProps = Omit<ComponentProps<"input">, "type"> & {
    label?: string;
    description?: string;
};
declare function Checkbox({ className, label, description, checked, onChange, disabled, ...props }: CheckboxProps): react.JSX.Element;

export { Checkbox, type CheckboxProps };
