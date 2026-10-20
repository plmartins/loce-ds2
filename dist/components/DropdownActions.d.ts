import * as react from 'react';

type DropdownAction = {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    variant?: "destructive";
    disabled?: boolean;
};
type DropdownActionsProps = {
    actions: DropdownAction[];
    trigger?: React.ReactNode;
    align?: "start" | "center" | "end";
    className?: string;
};
declare function DropdownActions({ actions, trigger, align, className }: DropdownActionsProps): react.JSX.Element | null;

export { type DropdownAction, DropdownActions, type DropdownActionsProps };
