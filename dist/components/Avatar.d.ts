import * as react from 'react';

type AvatarProps = {
    name?: string;
    /** Foto do usuário; com erro de carregamento cai nas iniciais. */
    src?: string;
    size?: number;
    className?: string;
    /** "soft": fundo pastel da cor e iniciais na própria cor (não briga com a interface). "vivid" é o gradiente cheio. */
    tone?: "vivid" | "soft";
};
declare function Avatar({ name, src, size, className, tone }: AvatarProps): react.JSX.Element;

export { Avatar, type AvatarProps };
