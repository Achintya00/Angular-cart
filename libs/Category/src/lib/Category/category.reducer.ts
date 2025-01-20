import { createReducer, on } from '@ngrx/store';
import { categoryActionError, categoryActionSuccess } from './category.actions';

export interface CategoryState {
  categories: string[];
  currentCategory: string;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  currentCategory: '',
  error: '',
};

export const categoryReducer = createReducer(
  initialState,
  on(categoryActionSuccess, (state, action) => {
    return {
      ...state,
      categories: action.categories,
      error: '',
    };
  }),
  on(categoryActionError, (state, action) => {
    return {
      ...state,
      categories: [],
      error: action.error,
    };
  })
);
