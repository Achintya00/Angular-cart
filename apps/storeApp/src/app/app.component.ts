import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { CategoryService } from '@store-workspace/Category';
import { Observable } from 'rxjs';
import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
import { Store } from '@ngrx/store';
import { getCategoryAction, selectCategories } from '@store-workspace/Category';

@Component({
  imports: [RouterModule, CommonModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'storeApp';
  // categories$ = inject(CategoryService).getCategories();
  // unsubscrie$ = new Subject<void>();
  categories$: Observable<string[]> | undefined;

  constructor(private readonly store: Store) {}
  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategories);

    this.store.dispatch(getCategoryAction());
  }
  // ngOnDestroy(): void {
  //   this.unsubscrie$.next();
  //   this.unsubscrie$.complete();
  // }
}
