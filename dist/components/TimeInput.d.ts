import * as react from 'react';
import { ComponentProps } from 'react';

type TimeInputProps = Omit<ComponentProps<"input">, "type"> & {
    label?: string;
};
declare function TimeInput({ className, label, ...props }: TimeInputProps): react.JSX.Element;

export { TimeInput, type TimeInputProps };
