import { useProductStore } from '@/main/stores/ProductStore';
import { useCallback, useEffect } from 'react';
import type { IGetProductsContract } from './contracts/IGetProductsContract';

export const useProducts = (getProducts: IGetProductsContract) => {
  const [products, setProducts] = useProductStore((state) => [
    state.products,
    state.setProducts,
  ]);

  const getRemoteProducts = useCallback(async () => {
    if (products) {
      return;
    }
    const remoteProducts = await getProducts.execute();
    setProducts(remoteProducts);
  }, [getProducts, products, setProducts]);

  useEffect(() => {
    getRemoteProducts();
  }, [getRemoteProducts]);

  return { products };
};
