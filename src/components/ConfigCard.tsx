import type { ComponentType } from "react";
import { cn } from "../lib/utils";

export type ConfigCardProps = {
    /** Componente de ícone (ds2 icons ou equivalente). */
    icon?: ComponentType<{ size?: number | string; className?: string }>;
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
};

/** Card de seção de configurações: header com tile de ícone + corpo empilhado. */
export function ConfigCard({ icon: Icon, title, description, children, className }: ConfigCardProps) {
    return (
        <div className={cn("rounded-2xl border border-border bg-card p-6 shadow-xs", className)}>
            <div className="mb-5 flex items-start gap-3">
                {Icon && (
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                        <Icon size={20} className="text-brand" />
                    </div>
                )}
                <div className="flex flex-col gap-0.5 pt-0.5">
                    <span className="text-[15px] font-bold text-foreground">{title}</span>
                    {description && <span className="text-[13px] font-medium text-muted-foreground">{description}</span>}
                </div>
            </div>
            <div className="flex flex-col gap-4">{children}</div>
        </div>
    );
}
