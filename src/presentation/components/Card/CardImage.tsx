import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import type { CardImageProps } from './types';

export const CardImage: React.FC<CardImageProps> = ({ style, ...props }) => {
  return <Image style={[styles.image, style]} {...props} />;
};
