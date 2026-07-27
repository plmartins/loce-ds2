import { cn } from "../lib/utils";

export type SwitchProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
};

export function Switch({ checked, onCheckedChange, disabled, className, ...props }: SwitchProps) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => onCheckedChange(!checked)}
            className={cn(
                "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/30",
                "disabled:cursor-not-allowed disabled:opacity-50",
                checked ? "bg-brand" : "bg-surface-3",
                className
            )}
            {...props}
        >
            <span
                className={cn(
                    "pointer-events-none block size-4 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out",
                    checked ? "translate-x-[18px]" : "translate-x-[2px]"
                )}
            />
        </button>
    );
}
