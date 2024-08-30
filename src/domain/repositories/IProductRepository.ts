import type { Product } from '@domain/entities/Product';

export interface IProductRepository {
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
}
