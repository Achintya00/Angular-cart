/* eslint-disable @nx/enforce-module-boundaries */

import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  productAllEffect,
  productEffects,
  productFeature,
} from '@store-workspace/Product';
import { cartFeature, cartEffects } from '@store-workspace/Cart';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@store-workspace/User').then((m) => m.LoginComponent),
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
  {
    path: 'cart',
    loadComponent: () =>
      import('@store-workspace/Cart').then((m) => m.CartComponent),
    providers: [provideState(cartFeature), provideEffects({ cartEffects })],
  },
];
