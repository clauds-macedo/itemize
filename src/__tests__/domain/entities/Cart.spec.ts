import { fakeProduct } from '@/__tests__/fakes/Product';
import { Cart } from '@/domain/entities/Cart';
import type { Product } from '@/domain/entities/Product';

describe('Cart', () => {
  let product: Product;

  beforeEach(() => {
    product = fakeProduct;
  });

  it('should calculate the total price correctly', () => {
    const cart = new Cart(product, 2);
    expect(cart.getTotal()).toBe(200);
  });

  it('should update the quantity correctly', () => {
    const cart = new Cart(product, 2);
    cart.updateQuantity(3);
    expect(cart.quantity).toBe(5);
  });

  it('should not allow quantity to go below zero', () => {
    const cart = new Cart(product, 2);
    cart.updateQuantity(-3);
    expect(cart.quantity).toBe(2);
  });
});
