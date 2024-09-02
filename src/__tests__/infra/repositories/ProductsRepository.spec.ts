import { fakeProduct } from '@/__tests__/__mocks__/fakes/Product';
import type { Product } from '@/domain/entities/Product';
import { EProductRepositoryErrors } from '@/domain/enums/EProductRepositoryErrors';
import type { IHttpClientRepository } from '@/domain/repositories/IHttpClientRepository';
import { GetHttpClientUseCase } from '@/domain/usecases/GetHttpClientUseCase';
import { ProductRepository } from '@/infra/repositories/ProductsRepository';

const mockHttpClientRepository: jest.Mocked<IHttpClientRepository> = {
  get: jest.fn(),
};

const getHttpClientUseCase = new GetHttpClientUseCase(mockHttpClientRepository);
const productRepository = new ProductRepository(getHttpClientUseCase);

describe('ProductRepository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of products', async () => {
    const mockProducts: Product[] = [fakeProduct, { ...fakeProduct, id: 111 }];

    mockHttpClientRepository.get.mockResolvedValue({
      data: mockProducts,
      status: 200,
    });

    const products = await productRepository.getProducts();

    expect(products).toEqual(mockProducts);
    expect(mockHttpClientRepository.get).toHaveBeenCalledWith('/products');
  });

  it('should throw an error when the request fails', async () => {
    mockHttpClientRepository.get.mockRejectedValue(new Error('Request failed'));

    await expect(productRepository.getProducts()).rejects.toThrow(
      EProductRepositoryErrors.FETCH_PRODUCTS_FAILED,
    );
    expect(mockHttpClientRepository.get).toHaveBeenCalledWith('/products');
  });

  it('should return a single product by id', async () => {
    mockHttpClientRepository.get.mockResolvedValue({
      data: fakeProduct,
      status: 200,
    });

    const product = await productRepository.getProductById(1);

    expect(product).toEqual(fakeProduct);
    expect(mockHttpClientRepository.get).toHaveBeenCalledWith('/products/1');
  });

  it('should throw an error when the request fails', async () => {
    mockHttpClientRepository.get.mockRejectedValue(new Error('Request failed'));

    await expect(productRepository.getProductById(1)).rejects.toThrow(
      `${EProductRepositoryErrors.FETCH_PRODUCT_BY_ID_FAILED} 1`,
    );
    expect(mockHttpClientRepository.get).toHaveBeenCalledWith('/products/1');
  });
});
