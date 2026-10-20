import * as react from 'react';
import { ComponentProps } from 'react';
import { IconSparkle } from '../icons/defs/IconSparkle.js';
import '@phosphor-icons/react';
import '../create-icon-YcAOipif.js';

type AIIconProps = ComponentProps<typeof IconSparkle> & {
    icon?: typeof IconSparkle;
};
/**
 * Glifo decorativo de IA, SEMPRE no espectro da Loce (as oito cores de
 * ai-palette.css, de ponta a ponta). É a marca de "isto é IA" em toda a suíte.
 * O controle em volta fornece o nome acessível.
 */
declare function AIIcon({ icon: Icon, ...props }: AIIconProps): react.JSX.Element;

export { AIIcon, type AIIconProps };
