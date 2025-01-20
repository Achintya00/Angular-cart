import { Product } from './product.model';

export interface ProductState {
  products: Product[];
  totalProducts: number;
  error: string;
}
