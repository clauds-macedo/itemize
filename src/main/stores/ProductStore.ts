import type { Product } from '@/domain/entities/Product';
import { create } from 'zustand';

type ProductState = {
  products: Product[] | null;
  setProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  products: null,
  setProducts: (products) => set({ products }),
}));
