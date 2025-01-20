import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from './models/product.model';

export const productAction = createActionGroup({
  source: 'Product',
  events: {
    'Load Product': emptyProps(),
    'Load Product By Category': props<{ categories: string }>(),
    'Product Success': props<{ product: Product[] }>(),
    'Product Failure': props<{ error: string }>(),
  },
});
