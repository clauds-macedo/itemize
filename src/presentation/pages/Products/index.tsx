import type { Product } from '@/domain/entities/Product';
import { Card } from '@/presentation/components/Card';
import { useCartActions } from '@/presentation/hooks/useCartActions';
import { useProducts } from '@/presentation/hooks/useProducts';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Products: React.FC = () => {
  const { products } = useProducts();
  const { addItem } = useCartActions();
  const navigate = useNavigate();

  const onAddItem = useCallback(
    (product: Product) => {
      addItem(product);
      toast.success(
        <>
          Item sucessfully added!
          <button
            onClick={() => {
              toast.dismiss();
              navigate('/cart');
            }}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            type="button"
          >
            Go to cart
          </button>
        </>,
      );
    },
    [addItem, navigate],
  );

  return (
    <div className="p-2 w-full">
      <button
        onClick={() => navigate('/cart')}
        className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center self-end"
        type="button"
      >
        Go to Cart
      </button>
      <div className="flex flex-row flex-wrap justify-center py-4 gap-8">
        {products.map((product: Product) => (
          <Card.Root key={product.id} className="w-64 cursor-pointer">
            <Card.Rating>{product.rating.rate} ★</Card.Rating>
            <Card.Image src={product.image} alt={product.title} />
            <Card.Title>{product.title.substring(0, 28)}...</Card.Title>
            <Card.Price>U$ {product.price}</Card.Price>
            <Card.Button className="my-2" onClick={() => onAddItem(product)}>
              Add to Cart
            </Card.Button>
          </Card.Root>
        ))}
      </div>
    </div>
  );
};
