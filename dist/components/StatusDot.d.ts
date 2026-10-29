import * as react from 'react';

type StatusDotProps = {
    status: "online" | "offline" | "busy" | "away";
    size?: "sm" | "default" | "lg";
    className?: string;
    pulse?: boolean;
};
declare function StatusDot({ status, size, className, pulse }: StatusDotProps): react.JSX.Element;

export { StatusDot, type StatusDotProps };
