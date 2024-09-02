import { Cart } from '@/domain/entities/Cart';
import type { Product } from '@/domain/entities/Product';
import type { CartStore } from '@/main/stores/CartStore';
import { useCartStore } from '@/main/stores/CartStore';
import { useCartActions } from '@/presentation/hooks/useCartActions';
import { act, renderHook } from '@testing-library/react-hooks';

jest.mock('@/main/stores/CartStore', () => ({
  useCartStore: jest.fn(),
}));

describe('useCartActions', () => {
  let product: Product;
  let setCartMock: jest.Mock;
  let cartMock: CartStore['cart'];

  beforeAll(() => {
    product = {
      id: 1,
      title: 'Product 1',
      price: 100,
      description: 'Description 1',
      category: 'Category 1',
      image: 'image1.png',
      rating: { rate: 4.5, count: 10 },
    };

    cartMock = {};
    setCartMock = jest.fn();

    (useCartStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        cart: cartMock,
        setCart: setCartMock,
      }),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add an item to the cart', () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.addItem(product);
    });

    expect(setCartMock).toHaveBeenCalledTimes(1);
    const updatedCart = setCartMock.mock.calls[0][0];
    expect(updatedCart[product.id]).toBeTruthy();
    expect(updatedCart[product.id].quantity).toBe(1);
    expect(updatedCart[product.id].product).toEqual(product);
  });

  it('should remove an item from the cart', () => {
    cartMock[product.id] = new Cart(product, 1);

    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.removeItem(product.id);
    });

    expect(setCartMock).toHaveBeenCalledTimes(1);
    const updatedCart = setCartMock.mock.calls[0][0];
    expect(updatedCart[product.id]).toBeUndefined();
  });

  it('should update the quantity of an item in the cart', () => {
    cartMock[product.id] = new Cart(product, 1);

    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.updateQuantity(product.id, 5);
    });

    expect(setCartMock).toHaveBeenCalledTimes(1);
    const updatedCart = setCartMock.mock.calls[0][0];
    expect(updatedCart[product.id].quantity).toBe(6);
  });
});
