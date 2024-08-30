import type { Product } from '@domain/entities/Product';
import { getProducts } from '@main/factories/GetProducts';
import { useCallback, useEffect, useState } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getRemoteProducts = useCallback(async () => {
    const remoteProducts = await getProducts.execute();
    setProducts(remoteProducts);
  }, []);

  useEffect(() => {
    getRemoteProducts();
  }, [getRemoteProducts]);

  return { products };
};
