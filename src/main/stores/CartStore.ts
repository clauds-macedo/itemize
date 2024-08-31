import type { Cart } from '@domain/entities/Cart';
import { create } from 'zustand';

type CartState = {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  setCart: (cart: Cart[]) => set({ cart }),
}));
