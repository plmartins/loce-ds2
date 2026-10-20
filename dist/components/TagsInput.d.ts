import * as react from 'react';

type TagsInputProps = {
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};
/**
 * Lista de valores curtos como chips na horizontal (palavras-chave, apelidos).
 * Enter ou vírgula adiciona; Backspace com o campo vazio remove o último;
 * colar texto com vírgulas divide em várias tags.
 */
declare function TagsInput({ value, onChange, placeholder, disabled, className }: TagsInputProps): react.JSX.Element;

export { TagsInput, type TagsInputProps };
