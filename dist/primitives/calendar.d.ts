import * as react from 'react';
import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

/** Calendário base (react-day-picker) tematizado com os tokens do ds2. */
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, formatters, components, ...props }: ComponentProps<typeof DayPicker>): react.JSX.Element;

export { Calendar };
