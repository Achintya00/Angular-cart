import { createReducer, on } from '@ngrx/store';
import { CartState } from '../models/cart.state';

import { cartAction } from './cart.actions';

export const initialState: CartState = {
  cart: [],
  error: '',
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
  })
);
