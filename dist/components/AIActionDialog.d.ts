import * as react from 'react';
import { ReactNode } from 'react';

type AIActionDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: ReactNode;
    description?: ReactNode;
    children: ReactNode;
    loading?: boolean;
    className?: string;
};
declare function AIActionDialog({ open, onOpenChange, title, description, loading, children, className }: AIActionDialogProps): react.JSX.Element;

export { AIActionDialog, type AIActionDialogProps };
