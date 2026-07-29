import { cn } from "../lib/utils";

export type FaceAvatarProps = {
    /** Semente do desenho: mesma seed, mesma carinha (id do visitante, e-mail, nome...). */
    seed: string;
    /** Glifo central (letra/número). Sem ele, usa o primeiro caractere alfanumérico da seed. */
    glyph?: string;
    size?: number;
    className?: string;
    title?: string;
};

/* Paleta curada (fundo pastel + traço escuro da mesma família), estática e
   determinística: a mesma pessoa tem sempre a mesma cor em toda a suíte. */
const FACES = [
    { bg: "#f0a35e", fg: "#6b3a10" }, // laranja
    { bg: "#f2b8c6", fg: "#833450" }, // rosa
    { bg: "#b7a6f6", fg: "#43318f" }, // lilás
    { bg: "#a5d8cd", fg: "#265f54" }, // menta
    { bg: "#9fb6cd", fg: "#2e4a63" }, // azul bruma
    { bg: "#c9cf9f", fg: "#535c2b" }, // oliva
    { bg: "#e5b39a", fg: "#74452a" }, // terracota
    { bg: "#cdb2e6", fg: "#553380" }, // uva
    { bg: "#a9c8f0", fg: "#2b4d7e" }, // azul céu
    { bg: "#e8b9b0", fg: "#7c3a30" }, // salmão queimado
];

function hashString(value: string) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) | 0;
    return Math.abs(hash);
}

/* Olhos desenhados como paths estáticos: variar o par pela seed é o que dá a
   "personalidade" de cada carinha. */
function Eyes({ variant, fg }: { variant: number; fg: string }) {
    switch (variant) {
        case 0: // pontinhos
            return (
                <g fill={fg}>
                    <circle cx="8.4" cy="9.6" r="1.1" />
                    <circle cx="15.6" cy="9.6" r="1.1" />
                </g>
            );
        case 1: // cruzinhas
            return (
                <g stroke={fg} strokeWidth="1.2" strokeLinecap="round">
                    <path d="M8.4 8.2v2.8M7 9.6h2.8M15.6 8.2v2.8M14.2 9.6h2.8" />
                </g>
            );
        case 2: // tracinhos
            return (
                <g stroke={fg} strokeWidth="1.3" strokeLinecap="round">
                    <path d="M7 9.6h2.8M14.2 9.6h2.8" />
                </g>
            );
        case 3: // fechados felizes
            return (
                <g stroke={fg} strokeWidth="1.3" strokeLinecap="round" fill="none">
                    <path d="M7 10.2c.7-1.3 2.1-1.3 2.8 0M14.2 10.2c.7-1.3 2.1-1.3 2.8 0" />
                </g>
            );
        default: // piscadinha
            return (
                <g>
                    <g stroke={fg} strokeWidth="1.3" strokeLinecap="round" fill="none">
                        <path d="M7 9.6c.7 1 2.1 1 2.8 0" />
                    </g>
                    <circle cx="15.6" cy="9.6" r="1.1" fill={fg} />
                </g>
            );
    }
}

/**
 * Avatar "carinha" determinístico por seed: círculo pastel, olhos com
 * personalidade e um glifo pequeno como boca. Pra gente sem foto nem nome
 * forte (visitantes do Talkbia, clientes anônimos, filas), onde as iniciais
 * do Avatar ficariam repetitivas.
 */
export function FaceAvatar({ seed, glyph, size = 32, className, title }: FaceAvatarProps) {
    const hash = hashString(seed || "?");
    const face = FACES[hash % FACES.length];
    const eyes = (hash >> 4) % 5;
    const centerGlyph = (glyph ?? seed.replace(/[^a-zA-Z0-9]/g, "").charAt(0) ?? "?").toUpperCase() || "?";

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            role="img"
            aria-label={title ?? seed}
            className={cn("shrink-0 select-none", className)}
        >
            {title && <title>{title}</title>}
            <circle cx="12" cy="12" r="11.4" fill={face.bg} />
            <circle cx="12" cy="12" r="10.9" fill="none" stroke={face.fg} strokeOpacity="0.28" strokeWidth="1" />
            <Eyes variant={eyes} fg={face.fg} />
            <text
                x="12"
                y="17.6"
                textAnchor="middle"
                fontSize="6"
                fontWeight="800"
                fontFamily="inherit"
                fill={face.fg}
            >
                {centerGlyph}
            </text>
        </svg>
    );
}
