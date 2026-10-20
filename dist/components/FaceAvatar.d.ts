import * as react from 'react';

type FaceAvatarProps = {
    /** Semente do desenho: mesma seed, mesma carinha (id do visitante, e-mail, nome...). */
    seed: string;
    /** Glifo central (letra/número). Sem ele, usa o primeiro caractere alfanumérico da seed. */
    glyph?: string;
    /** Foto da pessoa; com erro de carregamento (ou sem src) cai na carinha. */
    src?: string | null;
    /** Pessoa ainda desconhecida (query carregando): placeholder animado em vez da carinha. */
    loading?: boolean;
    size?: number;
    className?: string;
    title?: string;
};
/**
 * Avatar "carinha" determinístico por seed: círculo pastel, olhos com
 * personalidade e um glifo pequeno como boca. Pra gente sem foto nem nome
 * forte (visitantes do Talkbia, clientes anônimos, filas), onde as iniciais
 * do Avatar ficariam repetitivas.
 */
declare function FaceAvatar({ seed, glyph, src, loading, size, className, title }: FaceAvatarProps): react.JSX.Element;

export { FaceAvatar, type FaceAvatarProps };
