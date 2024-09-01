import { Card } from '@/presentation/components/Card';

export const Products: React.FC = () => {
  return (
    <div>
      <Card.Root className="w-64">
        <Card.Image src="https://via.placeholder.com/150" alt="Vanilla Latte" />
        <Card.Rating className="absolute top-2 left-2">4.8</Card.Rating>
        <Card.Title>Vanilla Latte</Card.Title>
        <Card.Price>21 K</Card.Price>
        <Card.Actions>
          <button className="bg-red-500 text-white px-2 py-1 rounded-full">
            Hot
          </button>
          <button className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full">
            Cold
          </button>
          <button className="ml-auto bg-orange-500 text-white px-4 py-2 rounded-full">
            🛒
          </button>
        </Card.Actions>
      </Card.Root>
    </div>
  );
};
