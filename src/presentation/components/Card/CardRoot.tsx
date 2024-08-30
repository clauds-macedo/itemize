import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import type { CardRootProps } from './types';

export const CardRoot: React.FC<CardRootProps> = ({ style, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.root, style]}
      {...props}
    />
  );
};
