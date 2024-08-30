import type { Product } from './Product';

export class Cart {
  constructor(
    public readonly product: Product,
    public quantity: number,
  ) {}

  getTotal(): number {
    return this.product.price * this.quantity;
  }
}
