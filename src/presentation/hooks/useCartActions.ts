import { Cart } from '@/domain/entities/Cart';
import { Product } from '@/domain/entities/Product';
import { useCartStore } from '@/main/stores/CartStore';
import { useCallback } from 'react';

export const useCartActions = () => {
  const [cart, setCart] = useCartStore((state) => [state.cart, state.setCart]);

  const addItem = useCallback(
    (product: Product) => {
      const newCart = { ...cart };

      const item = newCart[product.id] || new Cart(product, 0);
      item.updateQuantity(1);

      newCart[product.id] = item;
      setCart(newCart);
    },
    [cart, setCart],
  );

  const removeItem = useCallback(
    (productId: number) => {
      const newCart = { ...cart };
      delete newCart[productId];
      setCart(newCart);
    },
    [cart, setCart],
  );

  const updateQuantity = useCallback(
    (productId: number, amount: number) => {
      const newCart = { ...cart };

      if (newCart[productId]) {
        newCart[productId].updateQuantity(amount);
      }

      setCart(newCart);
    },
    [cart, setCart],
  );

  const getTotalPrice = useCallback(() => {
    return Object.values(cart).reduce(
      (total, item) => total + item.getTotal(),
      0,
    );
  }, [cart]);

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
  };
};
