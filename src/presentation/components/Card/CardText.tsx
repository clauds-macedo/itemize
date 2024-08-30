import { AppText } from '../AppText';
import { styles } from './styles';
import type { CardTextProps } from './types';

export const CardText: React.FC<CardTextProps> = ({ style, ...props }) => {
  return <AppText numberOfLines={1} style={[styles.text, style]} {...props} />;
};
