import * as react from 'react';
import { ComponentProps } from 'react';

declare function Card({ className, ...props }: ComponentProps<"div">): react.JSX.Element;
declare function CardHeader({ className, ...props }: ComponentProps<"div">): react.JSX.Element;
declare function CardTitle({ className, ...props }: ComponentProps<"h3">): react.JSX.Element;
declare function CardDescription({ className, ...props }: ComponentProps<"p">): react.JSX.Element;
declare function CardContent({ className, ...props }: ComponentProps<"div">): react.JSX.Element;
declare function CardFooter({ className, ...props }: ComponentProps<"div">): react.JSX.Element;

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
