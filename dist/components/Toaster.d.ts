import * as react from 'react';
import { ToasterProps } from 'react-hot-toast';

/**
 * Toaster da suíte: react-hot-toast com a superfície do ds2.
 * Montar uma vez no root do app; disparar com `toast` (re-export do índice).
 */
declare function Toaster(props: ToasterProps): react.JSX.Element;

export { Toaster };
