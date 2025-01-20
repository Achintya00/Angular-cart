import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { productAction, selectProduct } from '@store-workspace/Product';

import { Product } from '@store-workspace/Product';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  product$!: Observable<Product[]>;
  store = inject(Store);
  constructor() {
    console.log();
    this.store.dispatch(productAction.loadProduct());
    this.product$ = this.store.select(selectProduct);
  }
}
