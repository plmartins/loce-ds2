import type { ButtonHTMLAttributes, ReactNode } from "react";
import { AICard } from "./AICard";
import { AIIcon } from "./AIIcon";
import { IconChevronUp } from "../icons";
import { cn } from "../lib/utils";

export type AISplitButtonProps = {
    children: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    loading?: boolean;
    loadingLabel?: ReactNode;
    disabled?: boolean;
    size?: "default" | "compact";
    className?: string;
    /** Recebe o botão da seta pra envolver num gatilho de menu (ex.: DropdownMenuTrigger asChild). */
    menuTrigger: (button: ReactNode) => ReactNode;
    menuLabel?: string;
    menuIcon?: ReactNode;
    mainProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "disabled" | "className" | "type">;
};

/** Botão de IA dividido: ação principal + seta de opções no mesmo wrapper e feixe do AIButton, separados por um divisor fino. */
export function AISplitButton({ children, icon, onClick, loading = false, loadingLabel = "Gerando…", disabled = false, size = "default", className, menuTrigger, menuLabel = "Mais opções", menuIcon, mainProps }: AISplitButtonProps) {
    const unavailable = disabled && !loading;
    const menuButton = <button type="button" className="ds-ai-button ds-ai-split-menu" disabled={unavailable || loading} aria-label={menuLabel}>{menuIcon ?? <IconChevronUp size={14} />}</button>;
    return <span className={cn("ds-ai-action", className)} data-loading={loading} data-disabled={unavailable} data-size={size} data-variant="beam" data-layout="label">
        {(!unavailable || loading) && <span className="ds-ai-action-effects" aria-hidden="true">
            <AICard beamType="md" borderRadius={12} className="ds-ai-action-beam ds-ai-idle" surfaceClassName="ds-ai-effect-content"><span /></AICard>
            <AICard beamType="pulse-inner" borderRadius={12} className="ds-ai-action-beam ds-ai-busy" surfaceClassName="ds-ai-effect-content"><span /></AICard>
        </span>}
        <button {...mainProps} type="button" className="ds-ai-button" onClick={onClick} disabled={unavailable || loading} aria-busy={loading || undefined}>
            <span aria-hidden="true" className={cn("ds-ai-action-icon", loading && "ds-ai-working")}>{icon ?? <AIIcon size={size === "compact" ? 15 : 17} />}</span>
            <span className="ds-ai-action-label"><span aria-hidden="true" className="ds-ai-reserve">{children}</span><span aria-hidden="true" className="ds-ai-reserve">{loadingLabel}</span><span>{loading ? loadingLabel : children}</span></span>
        </button>
        <span aria-hidden className="ds-ai-split-divider" />
        {menuTrigger(menuButton)}
    </span>;
}
