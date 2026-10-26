import * as react from 'react';
import { ComponentProps } from 'react';
import { IconSparkle } from '../icons/defs/IconSparkle.js';
import '@phosphor-icons/react';
import '../create-icon-YcAOipif.js';

type AIIconProps = ComponentProps<typeof IconSparkle> & {
    icon?: typeof IconSparkle;
};
/**
 * Glifo decorativo de IA: a marca de "isto é IA" em toda a suíte. O degradê
 * puxa pra cor de cada plataforma (data-platform no html): ERP, Talkbia e dev
 * no espectro da Loce (rosa, violeta, azul no corpo da faísca), E-commerce do
 * índigo ao verde, Agency do laranja ao índigo. Em fundo preenchido use a
 * faísca lisa (IconSparkle), que herda a cor do texto.
 * O controle em volta fornece o nome acessível.
 */
declare function AIIcon({ icon: Icon, ...props }: AIIconProps): react.JSX.Element;

export { AIIcon, type AIIconProps };
