import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { ProductState } from './models/product.state';
import { productReducer } from './product.reducer';

export const productFeatureSelector =
  createFeatureSelector<ProductState>('product');

export const selectProduct = createSelector(
  productFeatureSelector,
  (state: ProductState) => state.products
);
export const selectProductError = createSelector(
  productFeatureSelector,
  (state: ProductState) => state.error
);

export const productFeature = createFeature({
  name: 'product',
  reducer: productReducer,
});
