import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cart } from '../models/cart.models';

export const cartAction = createActionGroup({
  source: 'Cart',
  events: {
    'Load Cart': emptyProps(),
    'Cart Success': props<{ cart: Cart[] }>(),
    'Cart Failure': props<{ error: string }>(),
  },
});
