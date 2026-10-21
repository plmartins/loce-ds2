import * as react from 'react';
import { ReactNode } from 'react';
import { ImageGenerationPreset } from 'img-fx';

type Props = {
    dark: boolean;
    animated: boolean;
    preset?: ImageGenerationPreset;
    reveal?: boolean;
    imageSrc?: string;
    /** For video, imageSrc is the poster and readyContent is the ready player. */
    readyContent?: ReactNode;
    onRevealed?: () => void;
};
/** The generator stays mounted until its real pixel reveal reaches `visible`. */
declare function AIMediaEffect({ dark, animated, preset, reveal, imageSrc, readyContent, onRevealed }: Props): react.JSX.Element;

export { AIMediaEffect };
