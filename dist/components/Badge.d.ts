import * as react from 'react';
import { HTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

declare const badgeVariants: (props?: ({
    variant?: "destructive" | "neutral" | "brand" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;
declare function Badge({ className, variant, ...props }: BadgeProps): react.JSX.Element;

export { Badge, type BadgeProps, badgeVariants };
