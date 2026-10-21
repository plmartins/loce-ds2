import * as react from 'react';
import { TextareaHTMLAttributes, Ref, ReactNode } from 'react';
import { AISurfaceProps } from './AISurface.js';

declare function AIComposerRegion({ children, className }: {
    children: ReactNode;
    className?: string;
}): react.JSX.Element;
type AIComposerInputProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> & {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: () => void;
    canSubmit?: boolean;
    maxTextHeight?: number;
    minTextHeight?: number;
    ref?: Ref<HTMLTextAreaElement>;
};
declare function AIComposerInput({ value, onChange, onSubmit, canSubmit, maxTextHeight, minTextHeight, className, style, ref, onKeyDown, onTransitionEnd, ...props }: AIComposerInputProps): react.JSX.Element;
type AIComposerProps = AIComposerInputProps & {
    topSlot?: ReactNode;
    controls?: ReactNode;
    action?: ReactNode;
    effect?: boolean;
    loading?: boolean;
    animated?: boolean;
    surfaceProps?: AISurfaceProps;
};
declare function AIComposer({ topSlot, controls, action, effect, loading, animated, surfaceProps, className, disabled, ...input }: AIComposerProps): react.JSX.Element;

export { AIComposer, AIComposerInput, type AIComposerInputProps, type AIComposerProps, AIComposerRegion };
