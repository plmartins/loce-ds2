import { useEffect, useRef, type ComponentProps } from "react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import { cn } from "../lib/utils";
import { IconChevronDown, IconChevronLeft, IconChevronRight } from "../icons";

/** Calendário base (react-day-picker) tematizado com os tokens do ds2. */
export function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    formatters,
    components,
    ...props
}: ComponentProps<typeof DayPicker>) {
    const defaultClassNames = getDefaultClassNames();

    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            locale={ptBR}
            className={cn("group/calendar p-3 [--cell-size:--spacing(8)]", className)}
            captionLayout={captionLayout}
            formatters={{
                formatMonthDropdown: (date) => date.toLocaleString("pt-BR", { month: "short" }),
                ...formatters,
            }}
            classNames={{
                root: cn("w-fit", defaultClassNames.root),
                months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
                month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
                nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
                button_previous: cn(
                    "flex size-(--cell-size) cursor-pointer select-none items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground aria-disabled:opacity-50",
                    defaultClassNames.button_previous
                ),
                button_next: cn(
                    "flex size-(--cell-size) cursor-pointer select-none items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground aria-disabled:opacity-50",
                    defaultClassNames.button_next
                ),
                month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
                dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
                dropdown_root: cn("relative rounded-md border border-border shadow-xs has-focus:ring-2 has-focus:ring-brand/25", defaultClassNames.dropdown_root),
                dropdown: cn("absolute inset-0 bg-popover opacity-0", defaultClassNames.dropdown),
                caption_label: cn(
                    "select-none font-semibold text-foreground",
                    captionLayout === "label"
                        ? "text-[13px]"
                        : "flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-[13px] [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
                    defaultClassNames.caption_label
                ),
                month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
                weekdays: cn("flex", defaultClassNames.weekdays),
                weekday: cn("flex-1 select-none rounded-md text-[0.8rem] font-medium text-muted-foreground", defaultClassNames.weekday),
                week: cn("mt-2 flex w-full", defaultClassNames.week),
                today: cn("rounded-lg bg-surface-2 text-foreground data-[selected=true]:rounded-lg", defaultClassNames.today),
                outside: cn("text-muted-foreground/50 aria-selected:text-muted-foreground", defaultClassNames.outside),
                disabled: cn("text-muted-foreground opacity-40", defaultClassNames.disabled),
                hidden: cn("invisible", defaultClassNames.hidden),
                day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center", defaultClassNames.day),
                ...classNames,
            }}
            components={{
                Root: ({ className: rootClassName, rootRef, ...rootProps }) => (
                    <div data-slot="calendar" ref={rootRef} className={cn(rootClassName)} {...rootProps} />
                ),
                Chevron: ({ className: chevronClassName, orientation, ...chevronProps }) => {
                    if (orientation === "left") return <IconChevronLeft className={cn("size-3.5", chevronClassName)} {...chevronProps} />;
                    if (orientation === "right") return <IconChevronRight className={cn("size-3.5", chevronClassName)} {...chevronProps} />;
                    return <IconChevronDown className={cn("size-3.5", chevronClassName)} {...chevronProps} />;
                },
                DayButton: CalendarDayButton,
                ...components,
            }}
            {...props}
        />
    );
}

function CalendarDayButton({ className, day, modifiers, ...props }: ComponentProps<typeof DayButton>) {
    const ref = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (modifiers.focused) ref.current?.focus();
    }, [modifiers.focused]);

    return (
        <button
            ref={ref}
            type="button"
            data-day={day.date.toLocaleDateString()}
            data-selected-single={modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle}
            className={cn(
                "flex aspect-square size-auto w-full min-w-(--cell-size) cursor-pointer select-none flex-col items-center justify-center gap-1 rounded-lg text-[13px] font-medium leading-none text-foreground transition-colors",
                "hover:bg-foreground/[0.06]",
                "data-[selected-single=true]:bg-brand data-[selected-single=true]:font-semibold data-[selected-single=true]:text-white",
                className
            )}
            {...props}
        />
    );
}
