import { GetProductsUseCase } from '@/domain/usecases/GetProductsUseCase';
import { MockProductRepository } from '../../__mocks__/MockProductRepository';

describe('GetProductsUseCase', () => {
  it('should return all products', async () => {
    const mockProductRepository = new MockProductRepository();
    const getProductsUseCase = new GetProductsUseCase(mockProductRepository);

    const products = await getProductsUseCase.execute();

    expect(products).toHaveLength(2);
    expect(products[0].title).toBe('Title');
    expect(products[1].title).toBe('Title2');
  });
});
