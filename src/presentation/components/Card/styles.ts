import { colors } from '@presentation/global/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    padding: 16,
    borderRadius: 12,
    height: 210,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    flex: 1,
    borderColor: colors.primary.border,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
