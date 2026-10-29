import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

/**
 * Raiz com `modal={false}` por padrão. No modo modal o Radix trava `pointer-events: none`
 * no body enquanto o menu está aberto; quando um item abre um Dialog no mesmo tick, a
 * trava do menu e a do diálogo se cruzam e o body pode ficar preso sem cliques depois
 * que os dois fecham. Sem modal o menu continua fechando ao clicar fora, sem a trava.
 */
declare const DropdownMenu: ({ modal, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>) => react.JSX.Element;
declare const DropdownMenuTrigger: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare function DropdownMenuContent({ className, sideOffset, collisionPadding, onPointerDownCapture, onKeyDownCapture, onCloseAutoFocus, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>): react.JSX.Element;
declare function DropdownMenuItem({ className, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>): react.JSX.Element;
declare function DropdownMenuLabel({ className, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>): react.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>): react.JSX.Element;

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger };
