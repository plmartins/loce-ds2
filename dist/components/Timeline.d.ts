import * as react from 'react';

type TimelineItem = {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    time?: string;
    /** Classes do tile do ícone (ex.: "bg-success/10 text-success"). */
    color?: string;
};
type TimelineProps = {
    items: TimelineItem[];
    className?: string;
};
declare function Timeline({ items, className }: TimelineProps): react.JSX.Element;

export { Timeline, type TimelineItem, type TimelineProps };
