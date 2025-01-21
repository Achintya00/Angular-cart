import { Cart } from './cart.models';

export interface CartState {
  cart: Cart[];
  error: string;
}
