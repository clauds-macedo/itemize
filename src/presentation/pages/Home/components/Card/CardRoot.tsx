import { View } from 'react-native';
import { styles } from './styles';
import type { CardRootProps } from './types';

export const CardRoot: React.FC<CardRootProps> = ({ style, ...props }) => {
  return <View style={[styles.root, style]} {...props} />;
};
