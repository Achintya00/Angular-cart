import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { Cart } from './models/cart.models';
import { Store } from '@ngrx/store';
import { cartAction } from './store/cart.actions';
import { cartSelect, cartSelector } from './store/cart.selector';

@Component({
  selector: 'lib-cart',
  imports: [CommonModule],
  templateUrl: './Cart.component.html',
  styleUrl: './Cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private store: Store) {}
  cart$!: Observable<Cart[]>;
  ngOnInit(): void {
    this.cart$ = this.store.select(cartSelect);
    this.store.dispatch(cartAction.loadCart());
  }
}
