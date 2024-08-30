import { colors } from '@presentation/global/colors';
import { HeaderRightButton } from '@presentation/routes/components/HeaderRightButton';
import type { RootStackParamList } from '@presentation/routes/types';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Card } from '../../components/Card';
import { useProducts } from './hooks/useProducts';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home: React.FC = () => {
  const { products } = useProducts();
  const { navigate, setOptions } = useNavigation<HomeScreenNavigationProp>();

  const HeaderRightComponent = useCallback(
    () => <HeaderRightButton onPress={() => navigate('Cart')} />,
    [navigate],
  );

  useEffect(() => {
    setOptions({
      headerRight: HeaderRightComponent,
    });
  }, [navigate, setOptions, HeaderRightComponent]);

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
          <Card.Root
            style={{ margin: 4 }}
            key={item.id}
            onPress={() => navigate('Details', { product: item })}
          >
            <Card.Image source={{ uri: item.image }} />
            <Card.Text>{item.title}</Card.Text>
          </Card.Root>
        )}
      />
    </View>
  );
};
