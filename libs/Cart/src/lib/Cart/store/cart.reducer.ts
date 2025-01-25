import { createFeature, createReducer, on } from '@ngrx/store';
import { CartState } from '../models/cart.state';

import { cartAction } from './cart.actions';

export const initialState: CartState = {
  cart: [],
  error: '',
  currentCart: undefined,
};

export const cartReducer = createReducer(
  initialState,
  on(cartAction.cartSuccess, (state, action) => {
    return {
      ...state,
      cart: action.cart, // Update the `cart` property
      error: '', // Reset the error in case of success
    };
  }),
  on(cartAction.cartFailure, (state, action) => {
    return {
      ...state,
      cart: [],
      error: action.error, // Set the error message
    };
  }),
  on(cartAction.cartByIdSuccess, (state, action) => {
    return {
      ...state,
      currentCart: action.cart,
      error: '',
    };
  }),
  on(cartAction.cartByIdError, (state, action) => {
    return {
      ...state,
      currentCart: undefined,
      error: action.error,
    };
  })
);

export const cartFeature = createFeature({
  name: 'Cart',
  reducer: cartReducer,
  extraSelectors: ({ selectCart, selectCurrentCart, selectError }) => ({
    selectCart,
    selectCurrentCart,
    selectError,
  }),
});
