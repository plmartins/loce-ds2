import * as react from 'react';
import { ReactNode } from 'react';

type RailUserProps = {
    /** Nome completo (o primeiro nome aparece no cabeçalho do menu). */
    name?: string;
    email?: string;
    /** Foto de perfil; sem ela (ou com erro) mostra a carinha determinística. */
    avatarUrl?: string | null;
    /** Conta ainda carregando: avatares mostram placeholder animado. */
    loading?: boolean;
    /** Chip extra ao lado do nome (ex.: Badge com o cargo). */
    badge?: ReactNode;
    /** Itens do menu (DropdownMenuItem's do app: perfil, sair...). */
    children?: ReactNode;
    className?: string;
};
/**
 * Conta da suíte no rodapé do PlatformRail. Com o SSO a conta é uma só para
 * todas as plataformas, então ela mora no rail (elemento da suíte), não no
 * header de cada app. O menu abre pra direita, colado no canto inferior.
 */
declare function RailUser({ name, email, avatarUrl, loading, badge, children, className }: RailUserProps): react.JSX.Element;

export { RailUser, type RailUserProps };
