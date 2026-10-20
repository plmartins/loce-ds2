import * as react from 'react';
import { ReactNode } from 'react';

type PlatformId = "erp" | "ecommerce" | "marketing" | "talkbia" | "dev";
type PlatformRailItem = {
    id: PlatformId;
    /** URL da plataforma (troca por navegação completa; a sessão viaja no cookie .loce.io). */
    href?: string;
    available?: boolean;
    active?: boolean;
    /** Logo real da plataforma (imagem preenche o tile). Sem ela, cai no tile de gradiente + glifo. */
    logoSrc?: string;
};
type PlatformRailProps = {
    platforms: PlatformRailItem[];
    /** Logo compacta no topo do rail. Normalmente desnecessária: o tile ativo já é a marca. */
    logo?: ReactNode;
    /** Área inferior (ThemeToggle, avatar...). */
    footer?: ReactNode;
    className?: string;
};
declare function PlatformRail({ platforms, logo, footer, className }: PlatformRailProps): react.JSX.Element;

export { type PlatformId, PlatformRail, type PlatformRailItem, type PlatformRailProps };
