import { provideState } from '@ngrx/store';

import { provideEffects } from '@ngrx/effects';

import { productFeature } from './store/product.selector';
import { productAllEffect, productEffects } from './store/product.effects';
export const productProvider = [
  provideState(productFeature),
  provideEffects({ productEffects, productAllEffect }),
];
