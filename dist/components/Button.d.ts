import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "ghost" | "destructive" | "destructive-ghost" | null | undefined;
    size?: "icon" | "sm" | "md" | "lg" | "icon-sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    children?: ReactNode;
};
declare function Button({ className, variant, size, loading, disabled, children, type, ...props }: ButtonProps): react.JSX.Element;

export { Button, type ButtonProps, buttonVariants };
