import type { IProductRepository } from '@/domain/repositories/IProductRepository';
import { GetProductsByIdUseCase } from '@/domain/usecases/GetProductByIdUseCase';
import { GetProductsUseCase } from '@/domain/usecases/GetProductsUseCase';
import { ProductRepository } from '@/infra/repositories/ProductsRepository';
import { getHttpClient } from './GetHttpClient';

const productRepository: IProductRepository = new ProductRepository(
  getHttpClient,
);

export const getProductsById = new GetProductsByIdUseCase(productRepository);
export const getProducts = new GetProductsUseCase(productRepository);
