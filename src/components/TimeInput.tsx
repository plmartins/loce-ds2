import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import { fieldClass } from "./Input";

export type TimeInputProps = Omit<ComponentProps<"input">, "type"> & {
    label?: string;
};

export function TimeInput({ className, label, ...props }: TimeInputProps) {
    const input = <input type="time" className={cn(fieldClass, "cursor-pointer", className)} {...props} />;
    if (!label) return input;
    return (
        <div className="flex w-full flex-col gap-1.5">
            <span className="text-[12px] font-semibold text-foreground/80">{label}</span>
            {input}
        </div>
    );
}
