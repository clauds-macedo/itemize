import { Text, type TextProps } from 'react-native';
import { styles } from './styles';

export const AppText: React.FC<TextProps> = ({ style, ...props }) => {
  return <Text style={[styles.text, style]} {...props} />;
};
