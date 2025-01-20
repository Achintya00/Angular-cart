import {
  createSelector,
  createFeatureSelector,
  createFeature,
} from '@ngrx/store';
import { categoryReducer, CategoryState } from './category.reducer';

const category = 'category';
export const selectCategoryState =
  createFeatureSelector<CategoryState>(category);

export const selectCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
);
export const selectCategoriesError = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.error
);
export const categoryFeature = createFeature({
  name: category,
  reducer: categoryReducer,
});
