import { CategoryService } from './../category.service';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';
import { getCategoryAction, categoryActionSuccess } from './category.actions';

@Injectable()
export class categoryEffect {
  private action$ = inject(Actions);
  constructor(private readonly categoryService: CategoryService) {}

  loadCategories$ = createEffect(() =>
    this.action$.pipe(
      tap((test) => console.log(test)),
      ofType(getCategoryAction),
      exhaustMap(() =>
        this.categoryService.getCategories().pipe(
          map((categories) => categoryActionSuccess(categories)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
