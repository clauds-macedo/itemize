import type { IProductRepository } from '@/domain/repositories/IProductRepository';

export class GetProductsByIdUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: number) {
    return this.productRepository.getProductById(id);
  }
}
