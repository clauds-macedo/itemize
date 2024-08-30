/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import type { Product } from '@domain/entities/Product';
import type { IProductRepository } from '@domain/repositories/IProductRepository';
import { getHttpClient } from '@main/factories/GetHttpClient';

export class ProductRepository implements IProductRepository {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await getHttpClient.execute<Product[]>('/products');
      return response.data;
    } catch (err) {
      throw new Error('Failed to fetch products');
    }
  }

  async getProductById(id: number): Promise<Product | undefined> {
    try {
      const response = await getHttpClient.execute<Product>(`/products/${id}`);
      return response.data;
    } catch (err) {
      throw new Error(`Failed to fetch product with id ${id}`);
    }
  }
}
