import * as react from 'react';

type SegmentedControlOption = {
    value: string;
    label: string;
};
type SegmentedControlProps = {
    options: SegmentedControlOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
};
declare function SegmentedControl({ options, value, onChange, className }: SegmentedControlProps): react.JSX.Element;

export { SegmentedControl, type SegmentedControlOption, type SegmentedControlProps };
