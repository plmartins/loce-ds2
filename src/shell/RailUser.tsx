import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { FaceAvatar } from "../components/FaceAvatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
} from "../primitives/dropdown-menu";

export type RailUserProps = {
    /** Nome completo (o primeiro nome aparece no cabeçalho do menu). */
    name?: string;
    email?: string;
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
export function RailUser({ name, email, badge, children, className }: RailUserProps) {
    const seed = email || name || "?";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    aria-label="Conta"
                    className={cn(
                        "flex size-9 cursor-pointer items-center justify-center rounded-xl transition-all duration-100",
                        "hover:bg-foreground/[0.06] active:scale-[0.95]",
                        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/25",
                        "data-[state=open]:bg-foreground/[0.06]",
                        className
                    )}
                >
                    <FaceAvatar seed={seed} glyph={name?.[0]} title={name} size={28} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="end" sideOffset={10} className="w-64 p-1.5">
                <div className="flex items-center gap-3 rounded-lg bg-surface-1 p-2.5">
                    <FaceAvatar seed={seed} glyph={name?.[0]} title={name} size={40} />
                    <div className="flex min-w-0 flex-col gap-0.5">
                        <div className="flex items-center gap-1.5">
                            <span className="truncate text-[13px] font-bold">{name?.split(" ")[0]}</span>
                            {badge}
                        </div>
                        <span className="truncate text-[12px] text-muted-foreground">{email}</span>
                    </div>
                </div>

                {children && <DropdownMenuSeparator />}
                {children}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
