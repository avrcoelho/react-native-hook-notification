import { useWindowDimensions } from 'react-native';

type Res = 'portrait' | 'landscape';

export const useOrientation = (): Res => {
  const { height, width } = useWindowDimensions();

  return height > width ? 'portrait' : 'landscape';
};
