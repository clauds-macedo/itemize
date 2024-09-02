import type { Product } from '@/domain/entities/Product';
import type { IGetProductsContract } from '@/presentation/hooks/contracts/IGetProductsContract';
import { useProducts } from '@/presentation/hooks/useProducts';
import { renderHook } from '@testing-library/react-hooks';

describe('useProducts', () => {
  let mockGetProducts: IGetProductsContract;
  let mockProducts: Product[];

  beforeAll(() => {
    mockProducts = [
      {
        id: 1,
        title: 'AAAA',
        price: 100,
        description: 'BBBB',
        category: 'CCCC',
        image: 'mock.png',
        rating: { rate: 1.5, count: 2988 },
      },
      {
        id: 2,
        title: 'DDDD',
        price: 150,
        description: 'EEEE',
        category: 'FFFF',
        image: 'overleaf.png',
        rating: { rate: 2.0, count: 120 },
      },
    ];

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
