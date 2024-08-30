import type { Product } from '@domain/entities/Product';

export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product };
  Cart: undefined;
};
