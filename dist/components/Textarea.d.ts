import * as react from 'react';
import { ComponentProps, Ref } from 'react';

type TextareaProps = Omit<ComponentProps<"textarea">, "onChange"> & {
    label?: string;
    loading?: boolean;
    error?: string;
    autoResize?: boolean;
    /** Alça vertical própria do DS. Disponível quando autoResize=false. */
    resizable?: boolean;
    onSubmit?: () => void;
    /** Recebe o valor direto (não o evento), como no ds1. */
    onChange?: (value: string) => void;
    ref?: Ref<HTMLTextAreaElement>;
};
declare function Textarea({ className, label, loading, error, autoResize, resizable, onSubmit, onChange, ref, id, ...props }: TextareaProps): react.JSX.Element;

export { Textarea, type TextareaProps };
