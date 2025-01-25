import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cart } from '../models/cart.models';

export const cartAction = createActionGroup({
  source: 'Cart',
  events: {
    LoadCart: emptyProps(),
    LoadCartById: props<{ id: number }>(),
    CartSuccess: props<{ cart: Cart[] }>(),
    CartFailure: props<{ error: string }>(),
    CartByIdSuccess: props<{ cart: Cart }>(),
    CartByIdError: props<{ error: string }>(),
  },
});
