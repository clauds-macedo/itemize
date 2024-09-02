import { fakeProduct } from '@/__tests__/__mocks__/fakes/Product';
import type { Product } from '@/domain/entities/Product';
import type { IGetProductsContract } from '@/presentation/hooks/contracts/IGetProductsContract';
import { useProducts } from '@/presentation/hooks/useProducts';
import { renderHook } from '@testing-library/react-hooks';

describe('useProducts', () => {
  let mockGetProducts: IGetProductsContract;
  let mockProducts: Product[];

  beforeAll(() => {
    mockProducts = [fakeProduct, { ...fakeProduct, id: 2 }];

    mockGetProducts = {
      execute: jest.fn().mockResolvedValue(mockProducts),
    };
  });

  it('should fetch and update products', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useProducts(mockGetProducts),
    );

    expect(result.current.products).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.products).toEqual(mockProducts);
  });
});
