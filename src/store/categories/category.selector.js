import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// get state if changed
export const selectorCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)
export const selectCategories = createSelector(
  [selectorCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
  }, {})}
)
