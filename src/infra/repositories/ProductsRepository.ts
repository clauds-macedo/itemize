/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Product } from '@/domain/entities/Product';
import { EProductRepositoryErrors } from '@/domain/enums/EProductRepositoryErrors';
import type { IProductRepository } from '@/domain/repositories/IProductRepository';
import type { GetHttpClientUseCase } from '@/domain/usecases/GetHttpClientUseCase';

export class ProductRepository implements IProductRepository {
  constructor(private readonly getHttpClientUseCase: GetHttpClientUseCase) {}

  async getProducts(): Promise<Product[]> {
    try {
      const response =
        await this.getHttpClientUseCase.execute<Product[]>('/products');
      return response.data;
    } catch (err) {
      throw new Error(EProductRepositoryErrors.FETCH_PRODUCTS_FAILED);
    }
  }

  async getProductById(id: number): Promise<Product | undefined> {
    try {
      const response = await this.getHttpClientUseCase.execute<Product>(
        `/products/${id}`,
      );
      return response.data;
    } catch (err) {
      throw new Error(
        `${EProductRepositoryErrors.FETCH_PRODUCT_BY_ID_FAILED} ${id}`,
      );
    }
  }
}
