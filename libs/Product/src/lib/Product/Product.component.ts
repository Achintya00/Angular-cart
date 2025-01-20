import {
  Component,
  inject,
  input,
  Input,
  InputSignal,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { selectProduct } from './store/product.selector';
import { productAction } from './store/product.actions';
import { Observable } from 'rxjs';
import { Product } from './store/models/product.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'lib-product',
  imports: [CommonModule],

  templateUrl: './Product.component.html',
  styleUrl: './Product.component.css',
})
export class ProductComponent implements OnInit {
  @Input() title!: string;
  @Input() set categoryName(name: string) {
    if (name) {
      this.store.dispatch(
        productAction.loadProductByCategory({ categories: name })
      );
    } else {
      this.store.dispatch(productAction.loadProduct());
    }
  }
  // categoryName: InputSignal<string> = input.required();
  store = inject(Store);
  product$!: Observable<Product[]>;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    // this.router.paramMap.subscribe(
    //   (params) => (this.categoryName = params.get('categoryName')!)
    // );
    console.log(this.title);
    console.log('input binding', this.categoryName);
    // this.store.dispatch(
    //   productAction.loadProductByCategory({ categories: this.categoryName() })
    // );
    this.product$ = this.store.select(selectProduct);
    console.log(this.categoryName);
  }
}
