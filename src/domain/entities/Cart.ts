import type { Product } from './Product';

export class Cart {
  constructor(
    public readonly product: Product,
    public quantity: number,
  ) {}

  getTotal(): number {
    return this.product.price * this.quantity;
  }

  updateQuantity(amount: number): void {
    const newQuantity = this.quantity + amount;

    if (newQuantity < 0) {
      return;
    }

    this.quantity = newQuantity;
  }
}
