import { Cart } from '@/domain/entities/Cart';
import { Product } from '@/domain/entities/Product';
import { useCartStore } from '@/main/stores/CartStore';
import { useCallback } from 'react';

export const useCartActions = () => {
  const { cart, setCart } = useCartStore();

  const addItem = useCallback(
    (product: Product) => {
      const existingItem = cart.find((item) => item.product.id === product.id);

      if (existingItem) {
        existingItem.updateQuantity(1);
        setCart([...cart]);
      } else {
        setCart([...cart, new Cart(product, 1)]);
      }
    },
    [cart, setCart],
  );

  const removeItem = useCallback(
    (productId: number) => {
      const newCart = cart.filter((item) => item.product.id !== productId);
      setCart(newCart);
    },
    [cart, setCart],
  );

  const updateQuantity = useCallback(
    (productId: number, amount: number) => {
      const updatedCart = cart.map((item) => {
        if (item.product.id === productId) {
          item.updateQuantity(amount);
        }
        return item;
      });

      setCart(updatedCart);
    },
    [cart, setCart],
  );

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, item) => total + item.getTotal(), 0);
  }, [cart]);

  return {
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
  };
};
