import * as react from 'react';
import { FilterStateProps } from '../lib/filter.js';

type DatePickerProps = FilterStateProps & {
    label?: string;
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    clearable?: boolean;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
};
declare function DatePicker({ label, value, onChange, placeholder, error, disabled, clearable, className, minDate, maxDate, filterActive }: DatePickerProps): react.JSX.Element;

export { DatePicker, type DatePickerProps };
