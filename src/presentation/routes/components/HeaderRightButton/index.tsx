import { MaterialIcons } from '@expo/vector-icons';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

export const HeaderRightButton: React.FC<TouchableOpacityProps> = ({
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <MaterialIcons name="shopping-cart" size={24} />
    </TouchableOpacity>
  );
};
