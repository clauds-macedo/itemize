import { Product } from '@/domain/entities/Product';

describe('Cart', () => {
  it('should be defined', () => {
    const product = new Product(
      1,
      'Title',
      10,
      'Descirption',
      'Category',
      'image.png',
      { count: 10000, rate: 2.22 },
    );
    expect(product).toBeDefined();
  });
});
