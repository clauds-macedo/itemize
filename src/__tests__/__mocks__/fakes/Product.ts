import { Product } from '@/domain/entities/Product';

export const fakeProduct: Product = new Product(
  1,
  'Title',
  100,
  'Test description hehe',
  'category',
  'mocked_image.png',
  { rate: 4.5, count: 10 },
);
