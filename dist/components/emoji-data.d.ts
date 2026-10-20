type EmojiRow = readonly [emoji: string, group: number, label: string, keywords: string];
declare const EMOJI_GROUPS: Record<number, string>;
declare const EMOJI_DATA: readonly EmojiRow[];

export { EMOJI_DATA, EMOJI_GROUPS, type EmojiRow };
