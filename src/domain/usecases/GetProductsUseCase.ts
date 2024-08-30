import type { IProductRepository } from '@domain/repositories/IProductRepository';

export class GetProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute() {
    return this.productRepository.getProducts();
  }
}
