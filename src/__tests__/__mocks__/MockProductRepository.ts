import type { Product } from '@/domain/entities/Product';
import type { IProductRepository } from '@/domain/repositories/IProductRepository';
import { fakeProduct } from './fakes/Product';

export class MockProductRepository implements IProductRepository {
  private products: Product[] = [
    fakeProduct,
    { ...fakeProduct, id: 2, title: 'Title2' },
  ];

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }
}
