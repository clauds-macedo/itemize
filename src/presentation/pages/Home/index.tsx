import { Text, View } from 'react-native';
import { Card } from './components/Card';
import { useProducts } from './hooks/useProducts';

export const Home: React.FC = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Card.Root>
        <Text>oi</Text>
      </Card.Root>
    </View>
  );
};
