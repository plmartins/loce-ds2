import * as react from 'react';
import { ReactNode, ComponentPropsWithoutRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

declare const Dialog: react.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: react.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogClose: react.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
declare function DialogContent({ className, children, showCloseButton, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): react.JSX.Element;
declare function DialogHeader({ className, children }: {
    className?: string;
    children: ReactNode;
}): react.JSX.Element;
declare function DialogTitle({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>): react.JSX.Element;
declare function DialogDescription({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Description>): react.JSX.Element;
/** Corpo com scroll próprio quando o conteúdo estoura o teto de 85vh. */
declare function DialogBody({ className, children }: {
    className?: string;
    children: ReactNode;
}): react.JSX.Element;
declare function DialogFooter({ className, children }: {
    className?: string;
    children: ReactNode;
}): react.JSX.Element;

export { Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger };
