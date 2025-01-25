import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
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
      totalProducts: action.product.length,
      error: '',
    };
  }),
  on(productAction.productFailure, (state, action) => {
    return {
      ...state,
      products: [],
      totalProducts: 0,
      error: action.error,
    };
  })
);
// we can now create extra selectors using createFeature
export const productFeature = createFeature({
  name: 'product',
  reducer: productReducer,
  extraSelectors: ({ selectProducts, selectError, selectTotalProducts }) => ({
    selectProducts,
    selectError,
    selectTotalProducts,
    filterProductByCategory: (category: string) =>
      createSelector(selectProducts, (products) => {
        products.filter((product) => product.category === category);
      }),
  }),
});
