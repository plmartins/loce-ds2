import { cn } from "../lib/utils";
import { IconMore } from "../icons";
import { Button } from "./Button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../primitives/dropdown-menu";

export type DropdownAction = {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    variant?: "destructive";
    disabled?: boolean;
};

export type DropdownActionsProps = {
    actions: DropdownAction[];
    trigger?: React.ReactNode;
    align?: "start" | "center" | "end";
    className?: string;
};

export function DropdownActions({ actions, trigger, align = "end", className }: DropdownActionsProps) {
    if (!actions.length) return null;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {trigger || (
                    <Button variant="ghost" size="icon-sm" className={cn(className)}>
                        <IconMore size={16} />
                    </Button>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align={align} onClick={(e) => e.stopPropagation()}>
                {actions.map((action, i) => {
                    const showSep = action.variant === "destructive" && i > 0;
                    return (
                        <div key={action.label}>
                            {showSep && <DropdownMenuSeparator />}
                            <DropdownMenuItem
                                onClick={action.onClick}
                                disabled={action.disabled}
                                className={cn("flex items-center gap-2", action.variant === "destructive" && "text-destructive focus:bg-destructive/10")}
                            >
                                {action.icon}
                                <span>{action.label}</span>
                            </DropdownMenuItem>
                        </div>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
