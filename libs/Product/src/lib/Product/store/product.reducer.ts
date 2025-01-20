import { createReducer, on } from '@ngrx/store';
import { ProductState } from './models/product.state';
import { productAction } from './product.actions';
export const initialState: ProductState = {
  products: [],
  totalProducts: 0,
  error: '',
};

export const productReducer = createReducer(
  initialState,
  on(productAction.productSuccess, (state, action) => {
    return {
      ...state,
      products: action.product,
      error: '',
    };
  }),
  on(productAction.productFailure, (state, action) => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  })
);
