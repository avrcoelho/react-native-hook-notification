import { Dimensions } from 'react-native';

export const defineAnimationSize = (): number => {
  const { width } = Dimensions.get('window');
  const windowIsLarger = width > 920;
  return windowIsLarger ? 380 : width;
};
