/** Opt-in for controls that restrict a list; form values and sorting stay neutral. */
type FilterStateProps = {
    filterActive?: boolean;
};
/** false and zero can be valid restrictions; empty/all represent no filter. */
declare const isFilterActive: (value: unknown) => boolean;

export { type FilterStateProps, isFilterActive };
