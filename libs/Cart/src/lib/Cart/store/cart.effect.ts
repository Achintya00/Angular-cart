import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartService } from '../services/cart.service';
import { cartAction } from './cart.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Cart } from '../models/cart.models';

export const cartEffects = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartAction.loadCart),
      exhaustMap(() =>
        cartService.getCart().pipe(
          map((cart: Cart[]) => cartAction.cartSuccess({ cart })),
          catchError((err: string) =>
            of(cartAction.cartFailure({ error: err }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const cartById = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartAction.loadCartById),
      exhaustMap((action) =>
        cartService.getCartById(action.id).pipe(
          map((cart: Cart) => cartAction.cartByIdSuccess({ cart })),
          catchError((err: string) =>
            of(cartAction.cartByIdError({ error: err }))
          )
        )
      )
    );
  },
  { functional: true }
);
