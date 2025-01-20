import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import { productAction } from './product.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Product } from './models/product.model';

export const productEffects = createEffect(
  (actions$ = inject(Actions), productSevice = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productAction.loadProductByCategory),
      exhaustMap((action) =>
        productSevice.getProductByCategory(action.categories).pipe(
          map((product: Product[]) =>
            productAction.productSuccess({ product })
          ),
          catchError((err) => of(productAction.productFailure({ error: err })))
        )
      )
    );
  },
  { functional: true }
);
export const productAllEffect = createEffect(
  (actions$ = inject(Actions), productSevice = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productAction.loadProduct),
      exhaustMap(() =>
        productSevice.getAllPoducts().pipe(
          map((product: Product[]) =>
            productAction.productSuccess({ product })
          ),
          catchError((err) => of(productAction.productFailure({ error: err })))
        )
      )
    );
  },
  { functional: true }
);
