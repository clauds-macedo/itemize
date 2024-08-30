import type { RootStackParamList } from '@presentation/routes/types';
import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export const Details: React.FC = () => {
  const {
    params: { product },
  } = useRoute<DetailsScreenRouteProp>();

  return (
    <View>
      <Text>{product.description}</Text>
    </View>
  );
};
