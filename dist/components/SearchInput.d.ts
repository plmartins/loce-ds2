import * as react from 'react';
import { InputHTMLAttributes } from 'react';
import { FilterStateProps } from '../lib/filter.js';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & FilterStateProps & {
    /** Limpa a busca. Com ele, o X aparece sempre que há texto no campo. */
    onClear?: () => void;
    /** Força (true) ou esconde (false) o X; por padrão segue o valor. */
    showClear?: boolean;
};
/**
 * Busca das listagens da suíte: lupa à esquerda, estado de filtro aplicado e
 * um X único pra limpar. Sem spinner: carregamento de lista é o esqueleto da
 * tabela (TableLoading), nunca um indicador dentro do campo.
 */
declare function SearchInput({ className, onClear, showClear, filterActive, ...props }: SearchInputProps): react.JSX.Element;

export { SearchInput, type SearchInputProps };
