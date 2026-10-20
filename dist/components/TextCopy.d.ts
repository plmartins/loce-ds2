import * as react from 'react';
import { TextVariant } from './Text.js';

type TextCopyProps = {
    text: string;
    variant?: TextVariant;
    className?: string;
    successDuration?: number;
    /** Texto exibido antes do valor copiável (não entra na cópia). */
    prefix?: string;
    /** Valor efetivamente copiado quando difere do exibido. */
    copyText?: string;
};
declare function TextCopy({ text, variant, className, successDuration, prefix, copyText }: TextCopyProps): react.JSX.Element | null;

export { TextCopy, type TextCopyProps };
