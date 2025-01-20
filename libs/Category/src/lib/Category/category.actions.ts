import { createAction, props } from '@ngrx/store';

export const getCategoryAction = createAction('[Category] Get Categories');

export const categoryActionSuccess = createAction(
  '[Category] Get Categories Success',
  (categories: string[]) => ({ categories })
);

export const categoryActionError = createAction(
  '[Category] Get Categories Failure',
  props<{ error: string }>()
);
