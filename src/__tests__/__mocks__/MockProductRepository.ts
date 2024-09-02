import { Product } from '@/domain/entities/Product';
import type { IProductRepository } from '@/domain/repositories/IProductRepository';

export class MockProductRepository implements IProductRepository {
  private products: Product[] = [
    new Product(1, 'Product1', 100, 'Description1', 'Category1', 'image1.png', {
      rate: 4.5,
      count: 10,
    }),
    new Product(2, 'Product2', 150, 'Description2', 'Category2', 'image2.png', {
      rate: 4.7,
      count: 5,
    }),
  ];

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }
}
