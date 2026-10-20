import * as react from 'react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type AISplitButtonProps = {
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
declare function AISplitButton({ children, icon, onClick, loading, loadingLabel, disabled, size, className, menuTrigger, menuLabel, menuIcon, mainProps }: AISplitButtonProps): react.JSX.Element;

export { AISplitButton, type AISplitButtonProps };
