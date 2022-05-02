import { useWindowDimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { useOrientation } from './useOrientation';

export const useNotificationWidth = (): number => {
  const { width } = useWindowDimensions();
  const orientation = useOrientation();
  const iphoneXStatusBar =
    orientation === 'landscape' ? getStatusBarHeight() : 0;
  return width - iphoneXStatusBar - 32;
};
