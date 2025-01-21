import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { CartState } from '../models/cart.state';
import { cartReducer } from './cart.reducer';

export const cartSelector = createFeatureSelector<CartState>('Cart');

export const cartSelect = createSelector(
  cartSelector,
  (state: CartState) => state.cart
);

export const errorSelect = createSelector(
  cartSelector,
  (state: CartState) => state.error
);

export const cartFeature = createFeature({
  name: 'Cart',
  reducer: cartReducer,
});
