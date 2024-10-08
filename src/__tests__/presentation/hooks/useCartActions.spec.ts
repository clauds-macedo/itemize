import { fakeProduct } from '@/__tests__/__mocks__/fakes/Product';
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
    product = fakeProduct;
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

  it('should not update quantity if the product is not in the cart', () => {
    const { result } = renderHook(() => useCartActions());

    act(() => {
      result.current.updateQuantity(-1, 5);
    });

    expect(setCartMock).not.toHaveBeenCalled();
  });

  it('should calculate the total price of items in the cart', () => {
    const secondaryProduct: Product = { ...product, id: 2, price: 200 };
    cartMock[product.id] = new Cart(product, 2); // 2 * 100 = 200
    cartMock[secondaryProduct.id] = new Cart(secondaryProduct, 3); // 3 * 200 = 600

    const { result } = renderHook(() => useCartActions());

    const totalPrice = result.current.getTotalPrice();

    expect(totalPrice).toBe(800); // 200 + 600 = 800
  });
});
