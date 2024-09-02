import type { Product } from '@/domain/entities/Product';

export interface IGetProductsContract {
  execute(): Promise<Product[]>;
}
