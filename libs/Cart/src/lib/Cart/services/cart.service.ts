import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cart } from '../models/cart.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  getCart() {
    return this.http.get<Cart[]>('https://fakestoreapi.com/carts');
  }
  getCartById(id: number) {
    return this.http.get<Cart>(`https://fakestoreapi.com/carts/${id}`);
  }
}
