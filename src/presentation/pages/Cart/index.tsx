import { useCartStore } from '@/main/stores/CartStore';
import { Card } from '@/presentation/components/Card';
import { PageTitle } from '@/presentation/components/PageTitle';
import { useCartActions } from '@/presentation/hooks/useCartActions';
import { BackButton } from './components/BackButton';

export const Cart: React.FC = () => {
  const { cart } = useCartStore((state) => state);
  const { updateQuantity, removeItem, getTotalPrice } = useCartActions();

  const cartItems = Object.values(cart);

  if (!cartItems.length) {
    return (
      <div className="flex flex-col items-center w-full px-8 py-4">
        <PageTitle>Your Cart</PageTitle>
        <p className="text-lg">Your cart is empty.</p>
        <BackButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full px-8 py-4">
      <PageTitle>Your Cart</PageTitle>
      <div className="flex flex-wrap justify-center gap-8">
        {cartItems.map((item) => (
          <Card.Root key={item.product.id} className="w-64">
            <Card.Image src={item.product.image} alt={item.product.title} />
            <Card.Title>{item.product.title.substring(0, 18)}...</Card.Title>
            <Card.Price>U$ {item.product.price}</Card.Price>
            <div className="flex items-center">
              <Card.Button
                className="bg-gray-200 hover:bg-gray-400 rounded"
                onClick={() => updateQuantity(item.product.id, -1)}
              >
                -
              </Card.Button>
              <span className="mx-4 my-4">{item.quantity}</span>
              <Card.Button
                className="bg-gray-200 hover:bg-gray-400 rounded"
                onClick={() => updateQuantity(item.product.id, 1)}
              >
                +
              </Card.Button>
            </div>
            <Card.Button
              className="rounded"
              onClick={() => removeItem(item.product.id)}
            >
              Remove
            </Card.Button>
            <Card.Title className="text-lg font-bold">
              Total: U$ {item.getTotal().toFixed(2)}
            </Card.Title>
          </Card.Root>
        ))}
      </div>
      <span className="text-2xl font-bold mt-8">
        Total Price: U$ {getTotalPrice().toFixed(2)}
      </span>
      <BackButton />
    </div>
  );
};
