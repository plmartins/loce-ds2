import * as react from 'react';

type EmojiPickerProps = {
    /** Chamado com o emoji escolhido. Fechar o seletor é responsabilidade de quem o abriu. */
    onSelect: (emoji: string) => void;
    /** Escape dentro do seletor (pra quem o abriu fechar). */
    onEscape?: () => void;
    /** Foca a busca ao abrir (padrão: sim). */
    autoFocus?: boolean;
    /** Chave do localStorage dos recentes; uma por produto quando fizer sentido separar. */
    recentKey?: string;
    className?: string;
};
/**
 * Seletor de emoji da suíte: busca em português, categorias, recentes.
 * Glifos nativos do sistema (sem sprites), base enxuta carregada sob demanda,
 * 1.812 emojis até o Emoji 13.1 pra nunca mostrar quadrado vazio.
 */
declare function EmojiPicker({ onSelect, onEscape, autoFocus, recentKey, className }: EmojiPickerProps): react.JSX.Element;

export { EmojiPicker, type EmojiPickerProps };
