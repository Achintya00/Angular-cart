// import { productEffect } from './../../../../libs/Product/src/lib/Product/store/product.effects';
import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  productAllEffect,
  productEffects,
  productFeature,
} from '@store-workspace/Product';

// import { productFeature } from '@store-workspace/Product';
// import { provideEffects } from '@ngrx/effects';
// import { productEffect, productFeature } from '@store-workspace/Product';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@store-workspace/home').then((m) => m.HomeComponent),
    providers: [
      provideState(productFeature),
      provideEffects({ productAllEffect }),
    ],
  },
  {
    path: 'products/:categoryName',
    loadComponent: () =>
      import('@store-workspace/Product').then((m) => m.ProductComponent),
    providers: [
      provideState(productFeature),
      provideEffects({ productEffects, productAllEffect }),
    ],
    data: { title: 'shopping cart' },
  },
];
