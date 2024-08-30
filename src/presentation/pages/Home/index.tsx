import { colors } from '@presentation/global/colors';
import { FlatList, View } from 'react-native';
import { Card } from '../../components/Card';
import { useProducts } from './hooks/useProducts';

export const Home: React.FC = () => {
  const { products } = useProducts();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary.background,
      }}
    >
      <FlatList
        data={products}
        style={{ width: '100%' }}
        numColumns={2}
        contentContainerStyle={{
          gap: 8,
          padding: 16,
        }}
        renderItem={({ item }) => (
          <Card.Root style={{ margin: 4 }} key={item.id}>
            <Card.Image source={{ uri: item.image }} />
            <Card.Text>{item.title}</Card.Text>
          </Card.Root>
        )}
      />
    </View>
  );
};
