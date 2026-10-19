import * as react from 'react';
import { HTMLAttributes } from 'react';
import { ImageGenerationPreset } from 'img-fx';

type AIMediaPreviewProps = HTMLAttributes<HTMLDivElement> & {
    state: 'generating' | 'ready' | 'failed';
    /** Image URL or video poster. Never pass the MP4 URL here. */
    src?: string;
    preset?: ImageGenerationPreset;
    label?: string;
    animated?: boolean;
    theme?: 'light' | 'dark';
    borderRadius?: number;
    onRevealed?: () => void;
};
/** Keep this component mounted through generating → ready for the real reveal. */
declare function AIMediaPreview({ state, src, preset, label, animated, theme, borderRadius, onRevealed, children, className, style, ...props }: AIMediaPreviewProps): react.JSX.Element;

export { AIMediaPreview, type AIMediaPreviewProps };
