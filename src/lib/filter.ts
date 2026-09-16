/** Opt-in for controls that restrict a list; form values and sorting stay neutral. */
export type FilterStateProps = { filterActive?: boolean };

/** false and zero can be valid restrictions; empty/all represent no filter. */
export const isFilterActive = (value: unknown): boolean =>
    value !== undefined && value !== null && value !== "" && value !== "all";
