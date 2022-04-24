import { Dimensions } from 'react-native';

export const defineAnimationSize = (): number => {
  const { width } = Dimensions.get('window');
  const windowIsLarger = width > 640;
  return windowIsLarger ? 380 : width;
};
