import type { Product } from '@/domain/entities/Product';
import { useCallback, useEffect, useState } from 'react';
import type { IGetProductsContract } from './contracts/IGetProductsContract';

export const useProducts = (getProducts: IGetProductsContract) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getRemoteProducts = useCallback(async () => {
    const remoteProducts = await getProducts.execute();
    setProducts(remoteProducts);
  }, [getProducts]);

  useEffect(() => {
    getRemoteProducts();
  }, [getRemoteProducts]);

  return { products };
};
