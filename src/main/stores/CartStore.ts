import type { Cart } from '@/domain/entities/Cart';
import { create } from 'zustand';

export interface CartStore {
  cart: Record<number, Cart>;
  setCart: (cart: Record<number, Cart>) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: {},
  setCart: (cart) => set({ cart }),
}));
